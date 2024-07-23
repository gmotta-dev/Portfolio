import { Close, React } from "@/shared/components/Icons";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export type TTab = { label: string; isActive?: boolean; icon: React.ElementType };
export default function Tabs(props: { tabs: TTab[]; onClose?: (tab: TTab) => void; onTabClick?: (tab: TTab) => void; isActive?: (tab: TTab) => boolean }) {
  const handleOnTabClick = (tab: TTab) => props.onTabClick && props.onTabClick(tab);
  const handleOnClose = (tab: TTab, e: React.MouseEvent<SVGSVGElement>) => {
    if (props.onClose) {
      e.stopPropagation();
      props.onClose(tab);
    }
  };

  return (
    <ul className="flex overflow-x-auto border-y border-y-neutral-700 bg-neutral-800">
      {props.tabs.map((tab, index) => (
        <Fragment>
          <li
            key={index}
            {...(props.onTabClick ? { onClick: () => handleOnTabClick(tab) } : {})}
            className={twMerge(
              "relative flex cursor-pointer items-center gap-2 border-r border-r-neutral-700 p-2 text-neutral-300 transition-colors hover:bg-neutral-900",
              props.isActive ? (props.isActive(tab) ? "bg-neutral-900" : "hover:bg-neutral-900") : "bg-neutral-900 hover:bg-neutral-900",
            )}>
            <tab.icon className="z-10 h-4 w-4" />
            <span className="z-10 text-xs whitespace-nowrap">{tab.label}</span>
            <Close {...(props.onClose ? { onClick: (e) => handleOnClose(tab, e) } : {})} className="z-10 h-4 w-4 transition-colors hover:bg-neutral-800" />
          </li>

        </Fragment>
      ))}
    </ul>
  );
}
