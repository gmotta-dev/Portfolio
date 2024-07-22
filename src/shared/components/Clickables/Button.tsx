import { ComponentProps } from "react";
import clickableStylization, { TClickableStylization } from "./clickableStylization";
import { twMerge } from "tailwind-merge";
import ProgressBarRound from "../Icons/carbon/ProgressBarRound";

export default function Button({ stylization: stylizationProp, ...props }: ComponentProps<"button"> & { stylization?: TClickableStylization }) {
  const st = clickableStylization(stylizationProp);
  const icon = stylizationProp?.icon && { el: stylizationProp.icon.loading ? ProgressBarRound : stylizationProp.icon.el };

  return (
    <button {...props} className={twMerge(st.className, "flex items-center justify-center gap-4", props.className)}>
      {props.children}
      {icon && <icon.el className={st.iconClassName} />}
    </button>
  );
}
