import { ComponentProps } from "react";
import clickableStylization, { TClickableStylization } from "./clickableStylization";
import { twMerge } from "tailwind-merge";

export default function Anchor({ stylization: stylizationProp, ...props }: ComponentProps<"a"> & { stylization?: TClickableStylization }) {
  const st = clickableStylization(stylizationProp);

  return (
    <a {...props} className={twMerge(st.className, "flex items-center justify-center gap-4", props.className)}>
      {props.children}
      {stylizationProp?.icon && <stylizationProp.icon.el className={st.iconClassName} />}
    </a>
  );
}
