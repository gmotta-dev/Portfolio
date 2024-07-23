"use client";

import Button from "@/shared/components/Clickables/Button";
import ContentWrapper from "@/shared/components/ContentWrapper";
import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function ExpandableContent(props: { children: ReactNode; className?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="projects" className="relative mt-14 pb-20 pt-10 lg:hidden">
      <ContentWrapper element="div" className={twMerge("overflow-hidden transition-all duration-300", isExpanded ? "max-h-[5500px]" : "max-h-[700px]", props.className)}>
        <h2 className="mb-5 font-bebas-neue text-6xl tracking-widest md:text-8xl">PROJECTS</h2>
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
