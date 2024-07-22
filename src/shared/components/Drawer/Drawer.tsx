"use client";

import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

import useDrawerStates from "./useDrawer";

export const Drawer = ({ classNames, ...props }: TDrawerProps) => {
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
                className={twMerge("fixed inset-0 z-[100] bg-black/50")}
              />
              <motion.div
                initial={{ bottom: "-100%" }}
                animate={{ bottom: 0 }}
                exit={{ bottom: "-100%" }}
                transition={{ type: "spring", damping: 15, stiffness: 70, duration: 0.5 }}
                className={twMerge(
                  "to-c-base-black fixed bottom-0 z-[150] w-full border-t border-neutral-700 bg-neutral-950 px-4 py-8 lg:mt-auto lg:px-12 lg:py-10",
                  classNames?.drawer,
                )}>
                {props.drawerContent}
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.getElementsByTagName("main")[0] || document.body,
      )
    : null;
};

export type TDrawerProps = { classNames?: Partial<Record<"drawer", string>> } & ReturnType<typeof useDrawerStates>;
