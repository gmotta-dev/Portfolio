import { ComponentProps } from "react";

export default function ArrowDown(props: ComponentProps<"svg">) {
  return (
    <svg width="16" height="13" viewBox="0 0 16 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 11L0 3.5L1.6 2L8 8L14.4 2L16 3.5L8 11Z" fill="currentColor" />
    </svg>
  );
}
