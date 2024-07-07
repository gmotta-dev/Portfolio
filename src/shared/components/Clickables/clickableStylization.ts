import React from "react";

export type TClickableStylization = { theme: "primary" | "secondary"; icon?: { el: React.ElementType, loading?: boolean } };

export default function clickableStylization(props?: TClickableStylization) {
  let className = "h-11 text-center border px-4  transition-all duration-300 ";

  if (props?.theme === "primary") {
    className += " bg-[#221D0C] text-mostard-300 border border-mostard-300 hover:bg-mostard-300 hover:text-[#221D0C]";
  } else if (props?.theme === "secondary") {
    className += "border-neutral-800 bg-neutral-9000 text-mostard-400 hover:bg-neutral-800";
  }

  return className;
}
