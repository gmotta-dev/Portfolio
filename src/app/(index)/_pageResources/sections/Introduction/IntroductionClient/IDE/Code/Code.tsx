import Prism from "prismjs";

import Markdown from "markdown-to-jsx";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { TIDECurrView } from "../config";
import { AnimatePresence, motion } from "framer-motion";
import "./pojoaque.css";


export default function Code(props: TIDECurrView) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={contentRef} key={`${props.tab.label}-${props.previewContent}-div`} className="h-[392px] w-full overflow-scroll bg-neutral-950 p-4">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, type: "spring", damping: 10, stiffness: 100 }}
          className={twMerge("relative pl-8 transition-opacity duration-[800ms]")}>
          <ul className="absolute left-0 top-[1px] flex flex-col text-neutral-700">
            {[...new Array(22)].map((_, index) => (
              <li key={index}>{index + 1}</li>
            ))}
          </ul>
          <Markdown options={{ forceBlock: true, forceWrapper: true, overrides: { code: { component: CodeBlock } } }}>{newStr(props)}</Markdown>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const newStr = (
  props: TIDECurrView,
) => `\`\`\`\n${props.ideContent.imports ? props.ideContent.imports.join("\n") + "\n\n" : ""}export default function ${props.ideContent.functionName}() {
  return (
    ${props.previewContent}
  );
}
\`\`\``;

const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => Prism.highlightAll(), [children]);

  return (
      <code className={`language-javascript`}>{children}</code>
  );
};
