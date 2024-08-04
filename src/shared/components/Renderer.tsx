import React from "react";
import { Parser, DomHandler } from "htmlparser2";
import { Element } from "domhandler";
import Anchor from "./Clickables/Anchor";
import CustomImage from "./CustomImage";

const voidElements = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);

const parseHtmlToReact = (html: string) => {
  const handler = new DomHandler((error, dom) => {
    if (error) {
      console.error("Error parsing HTML:", error);
    }
  });
  const parser = new Parser(handler);
  parser.write(html);
  parser.end();

  const convertDomToReact = (dom: Element[]): React.ReactNode[] => {
    return dom.map((node, index) => {
      if (node.type === "tag") {
        const Tag = node.name;
        const props = node.attribs;

        if (voidElements.has(Tag)) {
          return <Tag key={index} {...props} />;
        }

        if (Tag === "a") {
          return (
            <Anchor key={index} {...props}>
              {convertDomToReact(node.children as Element[])}
            </Anchor>
          );
        } else if (Tag === "svg") {
          return (
            <svg key={index} {...props}>
              {convertDomToReact(node.children as Element[])}
            </svg>
          );
        } else if (Tag === "img") {
          return <CustomImage key={index} {...props} />;
        } else {
          return React.createElement(Tag, { key: index, ...props }, convertDomToReact(node.children as Element[]));
        }
      }
      //@ts-ignore
      if (node.type === "text") {
        //@ts-ignore
        return node.data;
      }
      return null;
    });
  };

  return convertDomToReact(handler.dom as Element[]);
};

type TRichTextRendererProps = { content: string; componentRef?: React.RefObject<HTMLDivElement> } & React.HTMLAttributes<HTMLDivElement>;
export const RichTextRenderer: React.FC<TRichTextRendererProps> = ({ content, componentRef, ...props }) => {
  return (
    <div ref={componentRef} {...props}>
      {parseHtmlToReact(content)}
    </div>
  );
};
