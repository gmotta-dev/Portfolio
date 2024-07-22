import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import { FC, Fragment } from "react";
import Badge from "@/shared/components/Badge";
import Github from "@/shared/components/Icons/Github";
import LinkAlt from "@/shared/components/Icons/LinkAlt";
import CustomImage from "@/shared/components/CustomImage";
import { twMerge } from "tailwind-merge";
import ProjectsDesktop from "./ProjectsDesktop/ProjectsDesktop";

// All the content in this File in rendered on the Server due to how Next js and React handle the hydration process
// Only the Files inside the ExpandableContent component are hydrated on the Client
export default function Projects() {
  return (
    <section id="projects" className="relative mt-14 pb-20 pt-10 lg:mt-48">
      <ExpandableContent>
        <ul className="flex flex-col gap-10">
          {projectItemsOpts.map((i, key) => (
            <ProjectItem {...i} key={key} />
          ))}
        </ul>
      </ExpandableContent>
      <ProjectsDesktop />
    </section>
  );
}

type TCard = { name: string; description: string; image: string; liveWebsite: string; repo: string; date: string; tags: string[] };
const ProjectItem: FC<TCard> = (props) => {
  return (
    <li className="relative flex flex-col items-start justify-between gap-4 rounded-lg md:flex-row md:justify-between md:gap-6 md:transition-all md:duration-300 lg:gap-16">
      <CustomImage width={682} height={317} src={props.image} alt={props.name} className="grayscale md:min-w-[320px] lg:max-w-[486px]" />
      <div className="flex w-full flex-col">
        <div className="flex items-start gap-4">
          <h2 className="font-bebas-neue text-3xl tracking-wide lg:text-5xl">{props.name}</h2>
          <ProjectItemLinkIcon href={props.repo} icon={Github} name="Repo" className="ml-auto" />
          <ProjectItemLinkIcon href={props.liveWebsite} icon={LinkAlt} name="Live Website" className="mt-[1px]" />
        </div>
        <p className="mt-1 text-sm text-neutral-400 lg:text-base">{props.description}</p>
        <div className="mt-4 flex justify-between gap-3">
          <ul className="flex flex-wrap gap-2">
            {props.tags.map((i, key) => (
              <Badge el="li" text={i} key={key} />
            ))}
          </ul>
          <small className="whitespace-nowrap text-sm text-neutral-400">{props.date}</small>
        </div>
      </div>
    </li>
  );
};

type TProjectItemLinkIcon = { icon: React.ElementType; href: string; name: string; className?: string };
const ProjectItemLinkIcon: FC<TProjectItemLinkIcon> = (props) => {
  return (
    <Link href={props.href} className={twMerge("text-mostard-400 transition-colors hover:text-mostard-500", props.className)} aria-label={props.name}>
      <props.icon className="text-purple-heart-700 h-8 w-8" />
    </Link>
  );
};

const projectItemsOpts: TCard[] = [
  {
    name: "Portfolio V2",
    description:
      "A new version of my portfolio built with Next.js 14 and Tailwind CSS. I utilized AWS services like S3 and CloudFront for asset storage and delivery, and RDS for database management.",
    tags: ["React", "Typescript", "Tailwind", "AWS", "Figma"],
    date: "01 / 08 / 2024",
    repo: "https://github.com/gmotta-dev/Portfolio-V2",
    liveWebsite: "https://portfolio-kappa-azure-76.vercel.app/",
    image: "portfolio-2-thumb.webp",
  },
  {
    name: "Portfolio V1",
    description: "My first project using React, which helped me build the skills I have today. I used Netlify for hosting, Email js for sending emails and Styled Components.",
    tags: ["React", "Typescript", "Styled Components", "Figma"],
    date: "06 / 13 / 2022",
    repo: "https://github.com/gmotta-dev/Portfolio-Old",
    liveWebsite: "https://gabrielp.netlify.app/",
    image: "projects-portfolio-v1.webp",
  },
  {
    name: "Limitless",
    description:
      "Limitless is a fitness-focused landing page, my first project using SASS, TypeScript, and Figma. It was a great learning experience in creating visually appealing pages based on Figma prototypes.",
    tags: ["HTML", "CSS", "SASS", "TypeScript", "Figma"],
    date: "05/03/2022",
    repo: "https://github.com/gmotta-dev/Limitless",
    liveWebsite: "https://gmotta-dev.github.io/Limitless/",
    image: "limitless-thumb.webp",
  },
  {
    name: "Unote",
    description:
      "Unote was my first full-stack app using the MERN stack. Although no longer supported, it was a valuable project for learning database management and full-stack development.",
    tags: ["React", "MongoDB", "Nodejs", "Express"],
    date: "02/21/2022",
    repo: "https://github.com/gmotta-dev/Unote",
    liveWebsite: "https://unote.netlify.app/",
    image: "projects-unote.webp",
  },
  {
    name: "Spacejet",
    description: "Spacejet is one of my first projects using REST APIs, utilizing the NASA API to fetch space-related images and data.",
    tags: ["HTML", "CSS", "Typescript", "SASS"],
    date: "05/22/2022",
    repo: "https://github.com/gmotta-dev/Spacejet",
    liveWebsite: "https://spacejet.netlify.app/",
    image: "projects-spacejet.webp",
  },
  {
    name: "Bella Italia",
    description: "Bella Italia is a landing page for an Italian restaurant. This project helped me improve my design skills and knowledge of Italian cuisine.",
    tags: ["HTML", "CSS", "Javascript"],
    date: "02/17/2022",
    repo: "https://github.com/gmotta-dev/Bella-Italia",
    liveWebsite: "https://gmotta-dev.github.io/Bella-Italia",
    image: "projects-bella-italia.webp",
  },
];
