import { ComponentProps } from "react";
import InputWrapper from "./InputWrapper";
import { twMerge } from "tailwind-merge";
import stylization from "./stylization";

type TTextInput = ComponentProps<"textarea"> & { label?: string; error?: string };

export default function TextArea({ label, error, ...props }: TTextInput) {
  return (
    <InputWrapper label={label} error={error} classNames={{ container: props.className }}>
      <textarea {...props} className={twMerge(stylization, 'resize-none h-[116px]')} />
    </InputWrapper>
  );
}
