'use client';

import DynamicComponent from "@/shared/components/DynamicComponent";

export default function Test() {
  return (
    <DynamicComponent
      code={`
    import { TestComponent } from 'test-components';
    
    const Component = () => {
      return <TestComponent />;
    };
  `}
      customComponents={{
        "test-components": { TestComponent: Test },
      }}
    />
  );
}
