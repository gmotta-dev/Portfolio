import { Close, Minimize, PopUp } from "@/shared/components/Icons";
import { twMerge } from "tailwind-merge";

export default function Upper() {
  return (
    <div className="flex items-center justify-between bg-neutral-900 p-2 text-neutral-300">
      <ul className="flex gap-4 text-xs md:text-sm [&_li:nth-child(even)]:!hidden">
        {anchors.map((anchor, index) => (
          <li key={index} className={twMerge("cursor-pointer transition-colors hover:text-neutral-500", index > 3 && "hidden md:inline")}>
            {anchor}
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-4">
        {actions.map((Action, index) => (
          <li key={index}>
            <Action className="cursor-pointer transition-colors hover:text-neutral-500" />
          </li>
        ))}
      </ul>
    </div>
  );
}

const anchors = ["</>", "File", "Edit", "View", "Go", "Run", "Help"];
const actions = [Minimize, PopUp, Close];
