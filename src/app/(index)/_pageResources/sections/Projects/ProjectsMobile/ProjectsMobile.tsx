import Link from "next/link";
import { FC } from "react";
import Badge from "@/shared/components/Badge";
import CustomImage from "@/shared/components/CustomImage";
import { twMerge } from "tailwind-merge";
import { projectsConfigs, TProjectConfig } from "../config";
import ExpandableContent from "./ExpandableContent";
import { Github, LinkAlt } from "@/shared/components/Icons";

// All the content in this File in rendered on the Server due to how Next js and React handle the hydration process
// Only the Files inside the ExpandableContent component are hydrated on the Client
export default function ProjectsMobile() {
  return (
    <ExpandableContent>
      <ul className="flex flex-col gap-10">
        {projectsConfigs.map((i, key) => (
          <ProjectItem {...i} key={key} />
        ))}
      </ul>
    </ExpandableContent>
  );
}

const ProjectItem: FC<TProjectConfig> = (props) => {
  return (
    <li className="relative flex flex-col items-start justify-between gap-4 rounded-lg md:flex-row md:justify-between md:gap-6 md:transition-all md:duration-300">
      <CustomImage width={682} height={317} src={props.thumbImg} alt={props.name} className="grayscale md:min-w-[320px]" />
      <div className="flex w-full flex-col">
        <div className="flex items-start gap-4">
          <h2 className="font-bebas-neue text-3xl tracking-wide">{props.name}</h2>
          <ProjectItemLinkIcon href={props.repo || ""} icon={Github} name="Repo" className={twMerge("ml-auto", !props.repo ? "cursor-not-allowed opacity-50" : "")} />
          <ProjectItemLinkIcon href={props.liveWebsite} icon={LinkAlt} name="Live Website" className="mt-[1px]" />
        </div>
        <p className="mt-1 text-sm text-neutral-400">{props.description}</p>
        <div className="mt-4 flex justify-between gap-3">
          <ul className="flex flex-wrap gap-2">
            {props.skills.map((i, key) => (
              <Badge el="li" text={i.name} key={key} />
            ))}
          </ul>
          <small className="whitespace-nowrap text-sm text-neutral-400">{props.releaseDate}</small>
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
