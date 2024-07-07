"use client";

import { useEffect, useState } from "react";
import { TToast } from "./types";

/**
 * This hook is used together with the Toast component.
 * It allows you to add and remove toasts by passing a TToast to the addToast function.
 */
export default function useToast() {
  const [toasts, setToasts] = useState<TToast[]>([]);

  const addToast = (newToast: TToast) => {
    const lastToastId = toasts[toasts.length - 1]?.id;

    setToasts((prevToasts) => [...prevToasts, { ...newToast, id: lastToastId ? lastToastId + 1 : 1 }]);
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast?.id !== id));
  };

  useEffect(() => {
    const timers = toasts.map((toast) => {
      if (toast) {
        return setTimeout(() => removeToast(toast.id!), toast.time || 7000);
      }
    });

    return () => timers.forEach((timer) => timer && clearTimeout(timer));
  }, [toasts]);

  return { toasts, addToast, removeToast };
}
