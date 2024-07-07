import { twMerge } from "tailwind-merge";

export default function Hamburger(props: THamburger) {
  const spans = [`${props.expanded ? "translate-y-[10px] rotate-[135deg]" : ""}`, `${props.expanded ? "opacity-0" : ""}`, `${props.expanded ? "-translate-y-2 -rotate-[135deg]" : ""}`];

  return (
    <button
      name="Hamburger"
      aria-label="Hamburguer"
      className={twMerge("ml-auto flex h-6 w-8 flex-col items-center justify-center gap-[6px] lg:hidden xl:hidden", props.className || "")}
      onClick={props.onClick}>
      {spans.map((i, key) => (
        <span key={key} className={twMerge("bg-neutral-300 h-[3px] w-full transition-all duration-300", i)} />
      ))}
    </button>
  );
}

type THamburger = { onClick: () => void; expanded: boolean; className?: string };
