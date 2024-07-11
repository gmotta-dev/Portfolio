import { Branch, MinusOutline, WarningAlt } from "@/shared/components/Icons";
import Checkmark from "@/shared/components/Icons/carbon/Checkmark";
import Warning from "@/shared/components/Icons/carbon/Warning";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function Bottom() {
  return (
    <div className="flex items-center justify-between border-t border-t-neutral-700 bg-neutral-900 p-2 text-xs">
      <ul className="flex gap-4">
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
      <ul className="flex gap-4  items-center">
        <Item label="Typescript JSX" className="hidden md:flex" />
        <Item label="Copilot" className="hidden md:flex" />
        <Item label="Prettier" icon={Checkmark} className="hidden md:flex" />
      </ul>
    </div>
  );
}

type TItem = { label: string; icon?: React.ElementType; className?: string };
const items: TItem[] = [
  { label: "main", icon: Branch },
  { label: "0", icon: MinusOutline },
  { label: "0", icon: WarningAlt },
  { label: "2", icon: Warning },
];
const Item = (props: TItem) => {
  return (
    <li className={twMerge("flex cursor-pointer items-center gap-1 text-neutral-300 hover:text-neutral-400", props.className)}>
      {props.icon && <props.icon className="h-4 w-4" />}
      <span>{props.label}</span>
    </li>
  );
};
