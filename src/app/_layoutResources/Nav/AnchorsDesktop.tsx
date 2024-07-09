import Github from "@/shared/components/Icons/Github";
import anchorsConfig from "./anchorsConfig";

export default function AnchorsDesktop() {
  return (
    <ul className="hidden items-center gap-14 md:flex">
      {anchorsConfig.map((anchor) => (
        <li key={anchor.href} className="text-sm text-neutral-300 transition-colors hover:text-neutral-100">
          <a href={anchor.href}>{anchor.label}</a>
        </li>
      ))}
      <li className="border-l border-l-neutral-800 pl-12 text-neutral-400 transition-colors hover:text-neutral-200">
        <a href="https://github.com/gmotta-dev" rel="noreferrer" target="_blank" aria-label="Github">
          <Github />
        </a>
      </li>
    </ul>
  );
}
