import { SVGProps } from "react";

export default function Location(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="26" height="24" viewBox="0 0 26 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={props.className}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 9C5 5.13 8.35989 2 12.5141 2C16.6684 2 20.0282 5.13 20.0282 9C20.0282 13.17 15.2836 18.92 13.3407 21.11C12.9113 21.59 12.1277 21.59 11.6983 21.11C9.74463 18.92 5 13.17 5 9ZM9.83051 9C9.83051 10.38 11.0328 11.5 12.5141 11.5C13.9955 11.5 15.1977 10.38 15.1977 9C15.1977 7.62 13.9955 6.5 12.5141 6.5C11.0328 6.5 9.83051 7.62 9.83051 9Z"
        fill="currentColor"
      />
    </svg>
  );
}
