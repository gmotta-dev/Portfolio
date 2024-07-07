import { CSSProperties } from "react";

export default function ProgressBarRound(props: { className?: string; style?: CSSProperties }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" viewBox="0 0 32 32" className={`animate-spin ${props.className}`} style={props.style}>
      <path fill="currentColor" d="M16 22a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6Zm0-10a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
      <path fill="currentColor" d="M16 26a10.016 10.016 0 0 1-7.453-3.332l1.49-1.334A7.999 7.999 0 1 0 16 8V6a10 10 0 0 1 0 20Z" />
      <path fill="currentColor" d="M16 30a14 14 0 1 1 14-14 14.016 14.016 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Z" />
    </svg>
  );
}
