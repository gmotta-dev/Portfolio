import { ReactNode, useState } from "react";

/** This hook is used together with the Drawer component.
 It allows you to open and close the drawer by passing a ReactNode to the setDrawerContent function.  */
export default function useDrawer() {
  const [drawerContent, setDrawerContent] = useState<ReactNode | null>(null);

  return { drawerContent, setDrawerContent };
}

export type TUseDrawer = ReturnType<typeof useDrawer>;
