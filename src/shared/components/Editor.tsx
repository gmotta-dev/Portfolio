"use client";

import { useState, useRef } from "react";
import { RichTextRenderer } from "./Renderer";
import ReactDOM from "react-dom";
import Anchor from "./Clickables/Anchor";
import { Github } from "./Icons";
import Button from "./Clickables/Button";
import CustomImage from "./CustomImage";

// Define the custom Anchor component

export default function Editor() {
  const [content, setContent] = useState<string>("");
  const editorRef = useRef<HTMLDivElement>(null);

  const formatText = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  const insertLink = () => {
    const url = prompt("Enter the URL");
    const title = prompt("Enter the title");
    if (url) {
      const container = document.createElement("div");
      ReactDOM.render(
        <Anchor stylization={{ theme: "secondary", icon: { el: Github } }} href={url} title={title || ""}>
          {title || url}
        </Anchor>,
        container,
      );

      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(container.firstChild as Node);

        handleInput();
      }
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
  };

  const insertImg = () => {
    const url = prompt("Enter the URL");
    
    if (url) {
      const container = document.createElement("div");
      ReactDOM.render(<CustomImage src={url} />, container);

      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(container.firstChild as Node);

        handleInput();
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.execCommand("insertHTML", false, "<br><br>");
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => formatText("bold")}>Bold</button>
        <button onClick={() => formatText("italic")}>Italic</button>
        <button onClick={() => formatText("underline")}>Underline</button>
        <button onClick={insertLink}>Insert Link</button>
        <button onClick={insertImg}>Insert Image</button>
      </div>
      <div ref={editorRef} contentEditable onInput={handleInput} onKeyDown={handleKeyDown} style={{ border: "1px solid black", minHeight: "200px", padding: "10px" }} content={content} />
      <RichTextRenderer content={content} />
    </div>
  );
}
