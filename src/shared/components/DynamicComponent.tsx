"use client";

import React, { useState, useEffect, useMemo } from "react";

interface DynamicComponentProps {
  code: string;
  customComponents?: Record<string, React.ComponentType>;
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({ code, customComponents = {} }) => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Memoize the customComponents to prevent unnecessary re-renders
  const memoizedCustomComponents = useMemo(() => customComponents, []);

  useEffect(() => {
    let isMounted = true;

    const loadComponent = async () => {
      try {
        // Dynamically import @babel/standalone
        const Babel = await import("@babel/standalone");

        // Transform the code
        let transformedCode = Babel.transform(code, { presets: ["react"] }).code;

        // Replace import statements with object destructuring
        transformedCode = transformedCode.replace(/import\s+(\{[^}]+\})\s+from\s+['"](.+?)['"];?/g, (_, imports, module) => {
          if (module === "react") return ""; // Skip React imports as we're providing them
          return `const ${imports} = customComponents['${module}'];`;
        });

        // Create the component function
        const ComponentFunction = new Function(
          "React",
          "customComponents",
          `
          const { useState, useEffect } = React;
          ${transformedCode}
          if (typeof Component === 'undefined') {
            throw new Error('Component is not defined in the provided code');
          }
          return Component;
        `,
        );

        // Execute the component function with React and customComponents
        const ComponentClass = ComponentFunction(React, memoizedCustomComponents);

        // Set the component only if the component is still mounted
        if (isMounted) {
          setComponent(() => ComponentClass);
        }
      } catch (error) {
        console.error("Error in loadComponent:", error);
        if (isMounted) {
          setError(error instanceof Error ? error.message : String(error));
        }
      }
    };

    loadComponent();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [code]); // Remove customComponents from the dependency array

  if (error) {
    return <div>Error: {error}</div>;
  }

  return Component ? <Component /> : <div>Loading component...</div>;
};

export default DynamicComponent;
