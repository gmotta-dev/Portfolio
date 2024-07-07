import { ComponentProps } from "react";

export default function Minimize(props: ComponentProps<"svg">) {
  return (
    <svg width="24" height="3" viewBox="0 0 24 3" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <line x1="1.5" y1="-1.5" x2="22.5" y2="-1.4999" transform="matrix(1 0 0 -1 0 0)" stroke="currentColor" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" />
    </svg>
  );
}
