import { ComponentProps, FC } from "react";

import { twMerge } from "tailwind-merge";

export default function Main(props: ComponentProps<"main">) {
  return (
    <main {...props} className={twMerge("relative min-h-screen ", props.className || "")}>
      {props.children}
    </main>
  );
}
