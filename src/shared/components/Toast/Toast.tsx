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
import { Close } from "../Icons";

export default function Toast({ toasts, removeToast }: ReturnType<typeof useToast> & TToastComponentAndHookCommonTypes) {
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

          if (!toast || !toast.id) return null;

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
              className={twMerge(
                "border-neutral-stroke-rest fixed flex min-w-[350px] max-w-[500px] items-start justify-start gap-2 border border-neutral-600 bg-neutral-900 py-6 pl-10 pr-[56px]",
              )}>
              <div className="flex w-full items-center justify-between">
                <div className={twMerge("flex flex-col")}>
                  <p className={`text-neutral-neutral-100 flex items-center gap-2 text-lg font-semibold`}>
                    {toast?.stylization?.variant === "success" ? (
                      <CheckmarkFilled className={twMerge("flex h-6 w-6 items-start justify-start", st?.icon)} />
                    ) : (
                      <ErrorFilled className={twMerge("flex h-6 w-6 items-start justify-start", st?.icon)} />
                    )}
                    {toast?.title}
                  </p>
                  {toast?.description && <p className="mt-2 text-sm text-neutral-300">{toast?.description}</p>}
                </div>
                <button onClick={() => removeToast(toast.id!)}>
                  <Close className="h-8 w-8 cursor-pointer text-neutral-500 transition-colors hover:text-neutral-200" />
                </button>
              </div>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>,
    dialogElement || document.getElementsByTagName("main")[0] || document.body,
  );
}
