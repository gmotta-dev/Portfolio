import { MDXRemote } from "next-mdx-remote/rsc";
import { ComponentProps } from "react";
import introductionMdx from "./IntroductionClient/introductionMdx";
import Prism from "prismjs";
import { React } from "@/shared/components/Icons";
import "./pojoaque.css";
import IDEWrapper from "@/shared/components/Icons/IDE/IDEWrapper";
import Tabs from "./IntroductionClient/IDE/Tabs";
import { twMerge } from "tailwind-merge";

export default function IntroductionIDE() {
  return (
    <IDEWrapper classNames={{ container: "lg:max-w-[597px] min-w-0 w-full h-[480px]" }}>
      <Tabs tabs={[{ label: "Introduction", icon: React }]} />
      <div className={twMerge("relative overflow-hidden bg-neutral-950 pl-8 transition-opacity")}>
        <MDXRemote source={newStr(introductionMdx)} components={{ code: CodeBlock }} />
        <LineNumbers />
      </div>
    </IDEWrapper>
  );
}

const imports = ["import Anchor from '@/shared/components/Clickables/Anchor';", "import { ArrowRight } from '@/shared/components/Icons';"];

const newStr = (props: string) => `\`\`\`\n${imports.join("\n") + "\n\n"}export default function Introduction() {
  return (
    ${props}
  );
}
\`\`\``;

const CodeBlock = (props: ComponentProps<"code">) => {
  const html = Prism.highlight(props.children as string, Prism.languages.javascript, "javascript");
  return (
    <pre className="language-tsx">
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
};

const LineNumbers = () => {
  return (
    <ul className="absolute left-2 top-[9px] flex flex-col text-neutral-700">
      {[...new Array(22)].map((_, index) => (
        <li key={index} aria-hidden>
          {index + 1}
        </li>
      ))}
    </ul>
  );
};
