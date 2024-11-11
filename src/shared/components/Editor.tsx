"use client";

import "./editor.css";
import { useState, useRef, useCallback } from "react";
import { RichTextRenderer } from "./Renderer";
import ReactDOM from "react-dom";
import Anchor from "./Clickables/Anchor";
import { Github } from "./Icons";
import CustomImage from "./CustomImage";
import { twMerge } from "tailwind-merge";

const DEFAULT_CONTENT = "<p><br></p>";

type TEditorProps = {classNames?: Partial<Record<"container" | "content" | "contentEditable", string>>}
export default function Editor(props: TEditorProps) {
  const [content, setContent] = useState<string>(DEFAULT_CONTENT);
  const editorRef = useRef<HTMLDivElement>(null);

  console.log(content);

  const handleInput = useCallback(() => {
    if (editorRef.current) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = editorRef.current.innerHTML;

      // Process custom anchors
      tempDiv.querySelectorAll("a[data-component]").forEach((anchor) => {
        const newAnchor = document.createElement("a");
        newAnchor.setAttribute("data-component", "Anchor");
        newAnchor.href = anchor.getAttribute("href") || "";
        newAnchor.textContent = anchor.textContent;
        anchor.parentNode?.replaceChild(newAnchor, anchor);
      });

      setContent(tempDiv.innerHTML);
    }
  }, []);

  const formatText = useCallback((command: string, value?: string) => {
    document.execCommand(command, false, value);
  }, []);

  const insertElement = useCallback(
    (createElement: () => Node) => {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let container = range.commonAncestorContainer;

        // If the container is a text node, get its parent
        if (container.nodeType === Node.TEXT_NODE) {
          container = container.parentNode;
        }

        // If we're inside a paragraph, split it
        if (container.nodeName === "P") {
          const newElement = createElement();
          const newParagraph = document.createElement("p");

          // Move content after the cursor to the new paragraph
          while (range.endContainer.nextSibling) {
            newParagraph.appendChild(range.endContainer.nextSibling);
          }
          if (range.endOffset < range.endContainer.length) {
            newParagraph.insertBefore(range.endContainer.splitText(range.endOffset), newParagraph.firstChild);
          }

          // Insert the new element between the split paragraphs
          container.parentNode.insertBefore(newElement, container.nextSibling);
          container.parentNode.insertBefore(newParagraph, newElement.nextSibling);
        } else {
          // If we're not in a paragraph, just insert the element
          range.deleteContents();
          range.insertNode(createElement());
        }

        selection.collapseToEnd();
        handleInput();
      }
    },
    [handleInput],
  );

  const insertLink = useCallback(() => {
    const url = prompt("Enter the URL");
    const title = prompt("Enter the title");
    if (url) {
      insertElement(() => {
        const anchorElement = (
          <Anchor stylization={{ theme: "secondary", icon: { el: Github } }} href={url} title={title || ""} data-component="Anchor">
            {title || url}
          </Anchor>
        );
        const tempElement = document.createElement("span");
        ReactDOM.render(anchorElement, tempElement);
        return tempElement.firstChild as Node;
      });
    }
  }, [insertElement]);

  const insertUnorderedList = useCallback(() => {
    insertElement(() => {
      const ul = document.createElement("ul");
      const li = document.createElement("li");
      li.appendChild(document.createElement("br"));
      ul.appendChild(li);
      return ul;
    });
  }, [insertElement]);

  const insertImg = useCallback(() => {
    const url = prompt("Enter the URL");
    if (url) {
      const container = document.createElement("div");
      ReactDOM.render(<CustomImage src={url} />, container);
      insertElement(() => container.firstChild as Node);
    }
  }, [insertElement]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let node = range.startContainer;

        // Traverse up the DOM tree to find the closest li element
        while (node && node.nodeName !== "LI") {
          node = node.parentNode;
        }

        if (node && node.nodeName === "LI") {
          const li = node as HTMLLIElement;
          if (li.textContent.trim() === "") {
            e.preventDefault();
            const ul = li.parentNode as HTMLUListElement;
            const p = document.createElement("p");
            p.innerHTML = "<br>";
            ul.parentNode.insertBefore(p, ul.nextSibling);
            li.remove();
            if (ul.children.length === 0) {
              ul.remove();
            }
            const newRange = document.createRange();
            newRange.setStart(p, 0);
            newRange.collapse(true);
            selection.removeAllRanges();
            selection.addRange(newRange);
            handleInput();
          }
        }
      }
    }
  };

  return (
    <div className={twMerge("flex flex-col gap-2", props.classNames?.container)}>
      <div className="flex flex-wrap gap-2">
        <button onClick={() => formatText("bold")}>Bold</button>
        <button onClick={() => formatText("italic")}>Italic</button>
        <button onClick={() => formatText("underline")}>Underline</button>
        <button onClick={insertLink}>Insert Link</button>
        <button onClick={insertImg}>Insert Image</button>
        <button onClick={insertUnorderedList}>Insert Bullet List</button>
      </div>
      <RichTextRenderer
        componentRef={editorRef}
        contentEditable
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        className="min-h-[350px] rounded-md border border-neutral-700 bg-neutral-950 p-2 focus:!outline-neutral-800"
        content={DEFAULT_CONTENT || "<p><br/></p>"}
      />
      <RichTextRenderer content={content} />
    </div>
  );
}
