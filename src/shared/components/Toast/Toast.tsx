"use client";

import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

import { getStylization } from "./stylization";
import { TToastComponentAndHookCommonTypes } from "./types";
import useToast from "./useToast";
import CheckmarkFilled from "../Icons/carbon/CheckMarkFilled";
import ErrorFilled from "../Icons/carbon/ErrorFilled";

export default function Toast({ toasts, removeToast }: ReturnType<typeof useToast> & TToastComponentAndHookCommonTypes): JSX.Element | null {
  const [hovering, setHovering] = useState(false);
  const [height, setHeight] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!toasts.length) setHovering(false);

    if (ref.current) setHeight(ref.current.offsetHeight);

    setIsClient(typeof window === "object");
  }, [toasts]);

  if (!isClient) return null;

  const dialogElement = document.getElementsByTagName("dialog")[0];

  return createPortal(
    <ul onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <AnimatePresence>
        {toasts.map((toast, key) => {
          const st = getStylization(toast?.stylization);

          return (
            <motion.li
              key={toast?.id}
              ref={ref}
              initial={{ opacity: 0, right: "3%", zIndex: toasts.length * 10, bottom: "-30px" }}
              animate={{
                opacity: 1,
                right: "3%",
                bottom: hovering ? `${(toasts.length - 1 - key) * (height + 12) + 35}px` : `${(toasts.length - 1 - key) * 5 + 35}px`,
              }}
              exit={{ opacity: 0, bottom: "-100px" }}
              transition={{ stiffness: 0, duration: 0.5 }}
              className={twMerge("border-neutral-stroke-rest fixed flex max-w-[500px] items-start   justify-start gap-2 border border-neutral-500 bg-neutral-50 py-6 pl-10 pr-[56px]")}>
              <div className={twMerge("flex flex-col")}>
                <div className={`flex gap-2 ${toast?.classNames?.["texts-wrapper"] || ""}`}>
                  {toast?.stylization?.variant === "success" ? (
                    <CheckmarkFilled className={twMerge("flex h-6 w-6 items-start justify-start", st?.icon)} />
                  ) : (
                    <ErrorFilled className={twMerge("flex h-6 w-6 items-start justify-start", st?.icon)} />
                  )}
                  <p className={`text-lg font-semibold text-neutral-950`}>{toast?.title}</p>
                </div>
                {toast?.description && <p className="mt-2 text-sm text-neutral-800">{toast?.description}</p>}
              </div>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>,
    dialogElement || document.getElementsByTagName("main")[0] || document.body,
  );
}
