"use client";

import Editor from "@/shared/components/Editor";
import { TextInput } from "@/shared/components/Inputs";

export default function FormClient() {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <TextInput label="Title" />
        <TextInput label="Slug" />
        <TextInput label="Description" />
        <Editor classNames={{ container: "mt-8" }} />
      </form>
    </div>
  );
}
