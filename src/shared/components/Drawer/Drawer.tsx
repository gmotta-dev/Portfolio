"use client";

import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

import useDrawerStates from "./useDrawer";

export const Drawer = ({ classNames, stylization, ...props }: TDrawerProps) => {
  const [heightOfDrawer, setHeightOfDrawer] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) setHeightOfDrawer(ref.current.offsetHeight);
  }, [props.drawerContent]);

  return typeof window === "object"
    ? createPortal(
        <AnimatePresence>
          {props.drawerContent && (
            <>
              <motion.span
                onClick={() => props.setDrawerContent(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/50"
              />
              <motion.div
                ref={ref}
                className={twMerge(
                  "to-c-base-black fixed bottom-0 z-50 min-h-[150px] w-full rounded-t-lg border-t border-neutral-700 bg-neutral-950 px-4 py-8 lg:mt-auto lg:px-12 lg:py-10",
                  classNames?.drawer,
                )}
                initial={{ translateY: 280 }}
                animate={{ translateY: 0 }}
                exit={{ translateY: heightOfDrawer + 16 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}>
                {props.drawerContent}
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.getElementsByTagName("main")[0] || document.body,
      )
    : null;
};

export type TDrawerProps = {
  stylization: { theme: "dark" | "light" };
  classNames?: Partial<Record<"drawer", string>>;
} & ReturnType<typeof useDrawerStates>;
