import ContentWrapper from "@/shared/components/ContentWrapper";
import { Figma, Nextjs, Tailwind, Typescript, Node, Sql, Aws, Git } from "@/shared/components/Icons";
import React from "@/shared/components/Icons/React";
import { ComponentProps, ElementType, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Skills() {
  return (
    <ContentWrapper id="skills" element="section" className="relative pt-24 md:pt-32">
      <h2 className="font-bebas-neue text-7xl md:text-8xl lg:text-9xl">Skills</h2>
      <p className="text-neutral-400 md:max-w-[453px]">
        From HTML, CSS, and JavaScript, to tools like React, Next.js, and Tailwind CSS, I utilize core web technologies to create outstanding digital experiences.
      </p>
      <ul className="mt-16 flex flex-wrap">
        {icons.map((icon, index) => (
          <SkillBox key={index} icon={icon} />
        ))}
        <SkillBox className="border-transparent ">
          <p className="text-2xl md:text-3xl max-w-[150px] font-bold text-neutral-100">More to come...</p>
        </SkillBox>
      </ul>
    </ContentWrapper>
  );
}

const icons = [Nextjs, React, Typescript, Tailwind, Figma, Node, Sql, Aws, Git];

const SkillBox = (props: { children?: ReactNode; icon?: ElementType<ComponentProps<"svg">>; className?: string }) => {
  return (
    <li className={twMerge("flex h-[120px] w-[170px] flex-grow items-center justify-center border border-mostard-300 text-mostard-100 md:h-[200px] md:w-[244px]", props.className)}>
      {props.icon && <props.icon className="max-w-[50px] md:max-w-none" />}
      {props.children}
    </li>
  );
};
