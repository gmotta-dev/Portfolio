import Markdown from "markdown-to-jsx";
import React, { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "./pojoaque.css";
import { twMerge } from "tailwind-merge";
import { TIDECurrView } from "../config";
import { AnimatePresence, motion } from "framer-motion";

export default function Code(props: TIDECurrView) {
  const [show, setShow] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const codeBlocks = contentRef.current.querySelectorAll("pre code");
      codeBlocks.forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
      });
    }

    setShow(true);
  }, [props.tab.label, props.previewContent]);

  return (
    <div ref={contentRef} key={`${props.tab.label}-${props.previewContent}-div`} className="h-[392px] w-full overflow-scroll bg-neutral-950 p-4">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, type: "spring", damping: 10, stiffness: 100 }}
          className={twMerge("transition-opacity duration-[800ms] relative pl-8", show ? "opacity-100" : "opacity-0")}>
          <ul className="flex flex-col absolute left-0 top-[1px] text-neutral-700">
            {[...new Array(22)].map((_, index) => (
              <li key={index}>{index + 1}</li>
            ))}
          </ul>
          <Markdown options={{ forceBlock: true, forceWrapper: true }}>{newStr(props)}</Markdown>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const newStr = (
  props: TIDECurrView,
) => `\`\`\`jsx\n${props.ideContent.imports ? props.ideContent.imports.join("\n") + "\n\n" : ""}export default function ${props.ideContent.functionName}() {
  return (
    ${props.previewContent}
  );
}
\`\`\``;
