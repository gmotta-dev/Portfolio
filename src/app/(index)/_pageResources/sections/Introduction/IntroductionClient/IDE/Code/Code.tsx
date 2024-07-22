import Prism from "prismjs";

import Markdown from "markdown-to-jsx";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { TIDECurrView } from "../config";

export default function Code(props: TIDECurrView) {
  const contentRef = useRef<HTMLDivElement>(null);

  return <div ref={contentRef} key={`${props.tab.label}-${props.previewContent}-div`} className="h-[392px] w-full overflow-scroll bg-neutral-950 p-4"></div>;
}
