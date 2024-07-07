import { ComponentProps } from "react";
import InputWrapper from "./InputWrapper";
import { twMerge } from "tailwind-merge";
import stylization from "./stylization";

type TTextInput = ComponentProps<"input"> & { label?: string; error?: string };

export default function TextInput({ label, error, ...props }: TTextInput) {
  return (
    <InputWrapper label={label} error={error} classNames={{ container: props.className }}>
      <input {...props} className={twMerge(stylization, 'resize-none')}/>
    </InputWrapper>
  );
}
