"use client";

import { Drawer } from "@/shared/components/Drawer/Drawer";
import useDrawer from "@/shared/components/Drawer/useDrawer";
import Hamburger from "@/shared/components/Hamburguer";
import { Fragment } from "react";
import anchorsConfig from "./anchorsConfig";
import Github from "@/shared/components/Icons/carbon/Github";

export default function AnchorsMobile() {
  const drawerStates = useDrawer();

  const handleClick = () => {
    if (drawerStates.drawerContent) drawerStates.setDrawerContent(null);
    else drawerStates.setDrawerContent(<A />);
  };

  return (
    <Fragment>
      <Hamburger onClick={handleClick} expanded={drawerStates.drawerContent !== null} className="ml-auto md:hidden" />
      <Drawer {...drawerStates} />
    </Fragment>
  );
}

const A = () => {
  return (
    <ul className="flex flex-col items-center gap-14">
      {anchorsConfig.map((anchor) => (
        <li key={anchor.href} className="text-neutral-3000">
          <a href={anchor.href}>{anchor.label}</a>
        </li>
      ))}
      <li className="flex w-1/2 items-center justify-center border-t border-t-neutral-800 pt-12 text-neutral-400">
        <a href="https://github.com/gmotta-dev" rel="noreferrer" target="_blank" aria-label="Github">
          <Github />
        </a>
      </li>
    </ul>
  );
};
