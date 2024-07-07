import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TInputWrapper = { children: ReactNode; label?: string; error?: string; classNames?: Partial<Record<"container", string>> };

export default function InputWrapper(props: TInputWrapper) {
  return (
    <div className={twMerge("flex flex-col gap-2", props.classNames?.container)}>
      {props.label && <label htmlFor={props.label}>{props.label}</label>}
      {props.children}
      {props.error && <p className="text-red-500">{props.error}</p>}
    </div>
  );
}
