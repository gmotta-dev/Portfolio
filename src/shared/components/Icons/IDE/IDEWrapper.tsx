import Bottom from "@/app/(index)/_pageResources/sections/Introduction/IntroductionClient/IDE/Bottom";
import Upper from "@/app/(index)/_pageResources/sections/Introduction/IntroductionClient/IDE/Upper";
import { twMerge } from "tailwind-merge";

export default function IDEWrapper(props: { children: React.ReactNode; classNames?: Partial<Record<"container", string>> }) {
  return (
    <div className={twMerge("flex w-full flex-col border border-neutral-700", props.classNames?.container)}>
      <Upper />
      {props.children}
      <Bottom />
    </div>
  );
}
