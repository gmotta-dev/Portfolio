import React from "react";

export type TClickableStylization = { theme: "primary" | "secondary"; icon?: { el: React.ElementType; loading?: boolean }; size?: "sm" | "md" | "lg" };

export default function clickableStylization(props: TClickableStylization = { theme: "primary", size: "md" }) {
  let className = "text-center border px-4 transition-all duration-300 ";
  let iconClassName = "";

  if (props?.size === "sm") {
    className += "h-8 text-sm";
    if (props?.icon) iconClassName += "h-5 w-5";
  } else if (props?.size === "lg") {
    className += "h-14";
    if (props?.icon) iconClassName += "h-7 w-7";
  } else {
    className += "h-12";
    if (props?.icon) iconClassName += "h-6 w-6";
  }

  if (props?.theme === "primary") className += " bg-[#221D0C] text-mostard-300 border border-mostard-300 hover:bg-mostard-300 hover:text-[#221D0C]";
  else if (props?.theme === "secondary") className += " border-neutral-700 bg-neutral-900 text-mostard-400 hover:bg-neutral-800";

  return { className, iconClassName };
}
