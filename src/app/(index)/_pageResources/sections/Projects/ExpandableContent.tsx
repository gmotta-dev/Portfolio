"use client";

import Button from "@/shared/components/Clickables/Button";
import ContentWrapper from "@/shared/components/ContentWrapper";
import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function ExpandableContent(props: { children: ReactNode; className?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="projects" className="relative pb-20 mt-14 pt-10 lg:mt-48">
      <div className="absolute left-0 top-0 hidden h-full w-full max-w-[26%] items-start justify-start bg-neutral-900 py-16 min-[1620px]:flex">
        <h2 className="sticky left-[4%] top-12 -mt-10 pt-10 font-bebas-neue text-9xl tracking-widest text-mostard-50 [writing-mode:vertical-lr]">PROJECTS</h2>
      </div>
      <ContentWrapper
        element="div"
        className={twMerge("overflow-hidden transition-all duration-300", isExpanded ? "max-h-[3500px] lg:max-h-[1500px]" : "max-h-[700px]", props.className)}>
        <h2 className="mb-5 font-bebas-neue text-6xl tracking-widest md:text-9xl min-[1620px]:hidden">PROJECTS</h2>
        {props.children}
        <div
          className={twMerge(
            "pointer-events-none absolute bottom-0 left-0 z-10 h-[500px] w-full bg-[linear-gradient(0deg,_rgba(10,10,10,1)_20%,_rgba(0,0,0,0)_100%)] transition-opacity",
            isExpanded ? "opacity-0" : "opacity-100",
          )}
        />
      </ContentWrapper>
      <Button stylization={{ theme: "secondary" }} onClick={() => setIsExpanded(!isExpanded)} className="absolute bottom-0 left-1/2 z-20 w-full max-w-[380px] -translate-x-1/2">
        {!isExpanded ? "Show More" : "Show Less"}
      </Button>
    </section>
  );
}
