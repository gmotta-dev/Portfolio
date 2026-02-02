import Anchor from "@/shared/components/Clickables/Anchor";
import ArrowRight from "@/shared/components/Icons/carbon/ArrowRight";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ComponentProps } from "react";
import introductionMdx from "./IntroductionClient/introductionMdx";

export default function Preview() {
  return (
    <div className="h-full w-full">
      <MDXRemote source={introductionMdx} components={{ Anchor: PreviewAnchor }} />
    </div>
  );
}

const PreviewAnchor = (props: ComponentProps<"a">) => {
  return (
    <Anchor {...props} stylization={{ theme: "primary", icon: { el: ArrowRight } }} href="/files/CV.pdf" download>
      Download CV
    </Anchor>
  );
};
