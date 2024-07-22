"use client";

import { Branch, React } from "@/shared/components/Icons";
import ArrowDown from "@/shared/components/Icons/carbon/ArrowDown";
import Tabs, { TTab } from "../../../Introduction/IntroductionClient/IDE/Tabs";
import { useState } from "react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Anchor from "@/shared/components/Clickables/Anchor";
import File from "@/shared/components/Icons/carbon/File";
import Search from "@/shared/components/Icons/carbon/Search";
import Github from "@/shared/components/Icons/Github";
import LinkAlt from "@/shared/components/Icons/LinkAlt";

export default function ContentClient() {
  const [tabs, setTabs] = useState<TTab[]>([{ icon: React, label: explorerOptions[0].name }]);
  const [content, setContent] = useState<TFiles>(explorerOptions[0]);

  const onCloseTab = (currTab: TTab) => {
    if (tabs.length === 1) return;

    const filteredTabs = tabs.filter((t) => t.label !== currTab.label);
    setTabs(filteredTabs);

    const lastTab = filteredTabs[filteredTabs.length - 1];
    const foundContent = explorerOptions.find((t) => t.name === lastTab.label);
    if (foundContent) setContent(foundContent);
  };

  const onTabClick = (tab: TTab) => {
    const foundContent = explorerOptions.find((t) => t.name === tab.label);
    if (foundContent) setContent(foundContent);
  };

  const isActive = (tab: TTab) => tab.label === content.name;

  return (
    <div className="flex">
      <Explorer tabs={tabs} setTabs={setTabs} content={content} setContent={setContent} />
      <div className="flex w-full flex-col">
        <Tabs onTabClick={onTabClick} onClose={onCloseTab} tabs={tabs} isActive={isActive} />
        <AnimatePresence>
          <Content {...content} />
        </AnimatePresence>
      </div>
    </div>
  );
}

const Explorer = (props: { tabs: TTab[]; setTabs: (tabs: TTab[]) => void; content: TFiles; setContent: (content: TFiles) => void }) => {
  const handleAddTab = (tab: TFiles) => {
    props.setContent(tab);

    if (props.tabs.some((t) => t.label === tab.name)) return;
    props.setTabs([...props.tabs, { icon: React, label: tab.name }]);
  };

  return (
    <div className="w-full max-w-[250px] bg-neutral-900 border-r border-r-neutral-700">
      <ul className="flex justify-center gap-2 border-y border-neutral-700 bg-neutral-800 py-[6px] ">
        <li className="flex items-center gap-2 px-4 text-sm text-neutral-400 transition-colors">
          <File className="h-5 w-5" />
        </li>
        <li className="flex items-center gap-2 px-4 text-sm text-neutral-400 transition-colors">
          <Branch className="h-5 w-5" />
        </li>
        <li className="flex items-center gap-2 px-4 text-sm text-neutral-400 transition-colors">
          <Search className="h-5 w-5" />
        </li>
        <li className="flex items-center gap-2 px-4 text-sm text-neutral-400 transition-colors">
          <ArrowDown className="h-5 w-5" />
        </li>
      </ul>
      <p className="flex w-full items-center gap-2 bg-neutral-700 px-3 py-2 text-sm text-neutral-400">
        <ArrowDown className="w-2" />
        Portfolio Projects
      </p>
      <ul className="flex flex-col">
        {explorerOptions.map((file) => (
          <li
            className={twMerge(
              "flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-neutral-400 transition-colors",
              props.content.name === file.name ? "bg-neutral-950" : "hover:bg-neutral-950/50",
            )}
            onClick={() => handleAddTab(file)}>
            <React className="h-4 w-4" />
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

type TFiles = {
  name: string;
  description: string;
  backgroundImg: string;
  releaseDate: string;
  chartData: { subject: string; A: number }[];
};
const explorerOptions: TFiles[] = [
  {
    name: "Varos Blog",
    releaseDate: " 01 / 02 / 2023",
    backgroundImg: "varos-blog-bg.webp",
    description: "A blog built with Next.js and Tailwind CSS. I used MySQL as a database, S3 for image storage, and CloudFront for image delivery.",
    chartData: [
      { subject: "Next.js", A: 100 },
      { subject: "MySQL", A: 82 },
      { subject: "Typescript", A: 100 },
      { subject: "AWS", A: 75 },
      { subject: "Tailwind", A: 100 },
    ],
  },
  {
    name: "Portfolio V2",
    releaseDate: "01 / 08 / 2024",
    backgroundImg: "portfolio-v2-bg.webp",
    description: "A new version of my portfolio built with Next.js 14 and Tailwind CSS. I used AWS services like S3 and CloudFront for asset storage and delivery, and RDS for database management.",
    chartData: [
      { subject: "Next.js", A: 100 },
      { subject: "Typescript", A: 100 },
      { subject: "Tailwind CSS", A: 100 },
      { subject: "Figma", A: 90 },
      { subject: "AWS", A: 75 },
    ],
  },
  {
    name: "Portfolio V1",
    releaseDate: "06 / 13 / 2022",
    backgroundImg: "portfolio-v1-bg.webp",
    description: "My first project using React, which helped me build the skills I have today. I used Netlify for hosting, Email js for sending emails and Styled Components.",
    chartData: [
      { subject: "React", A: 100 },
      { subject: "Figma", A: 80 },
      { subject: "Styled Components", A: 85 },
      { subject: "Typescript", A: 100 },
    ],
  },
  {
    name: "Limitless",
    description:
      "Limitless is a fitness-focused landing page, my first project using SASS, TypeScript, and Figma. It was a great learning experience in creating visually appealing pages based on Figma prototypes.",
    releaseDate: "05/03/2022",
    backgroundImg: "limitless-bg.webp",
    chartData: [
      { subject: "HTML", A: 100 },
      { subject: "JS", A: 100 },
      { subject: "SASS", A: 100 },
      { subject: "Figma", A: 80 },
      { subject: "Typescript", A: 100 },
    ],
  },
  {
    name: "Bella Italia",
    description: "Bella Italia is a landing page for an Italian restaurant. This project helped me improve my design skills and knowledge of Italian cuisine.",
    releaseDate: "02 / 17 / 2022",
    backgroundImg: "bella-italia-bg.webp",
    chartData: [
      { subject: "HTML", A: 100 },
      { subject: "JS", A: 100 },
      { subject: "SASS", A: 100 },
    ],
  },
  {
    name: "Unote",
    releaseDate: "02 / 21 / 2022",
    backgroundImg: "unote-bg.webp",
    description: "Unote was my first full-stack app using the MERN stack. Although no longer supported, it was a valuable project for learning database management and full-stack development.",
    chartData: [
      { subject: "MongoDB", A: 80 },
      { subject: "Express", A: 92 },
      { subject: "React", A: 100 },
      { subject: "Node.js", A: 100 },
    ],
  },
  {
    name: "Spacejet",
    releaseDate: "05 / 22 / 2022",
    backgroundImg: "spacejet-bg.webp",
    description: "Spacejet is one of my first projects using REST APIs, utilizing the NASA API to fetch space-related images and data.",
    chartData: [
      { subject: "JS", A: 100 },
      { subject: "HTML", A: 100 },
      { subject: "SASS", A: 90 },
      { subject: "Rest APIs", A: 100 },
    ],
  },
];

const Content = (props: TFiles) => {
  return (
    <motion.div key={props.name} animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} className="w-full tracking-wider">
      <div className="relative flex h-[300px] items-end px-12">
        <div className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 grayscale filter" style={{ backgroundImage: `url(${props.backgroundImg})` }} />
        <div className="z-10 flex w-full items-center justify-between">
          <h3 className="relative font-bebas-neue text-[80px] font-bold tracking-widest text-mostard-300">{props.name}</h3>
          <div className="mt-8 flex max-w-[360px] flex-1 gap-4">
            <Anchor href={""} target="_blank" className="flex-1" stylization={{ theme: "primary", size: "sm", icon: { el: Github } }}>
              Repo
            </Anchor>
            <Anchor href={""} target="_blank" className="flex-1" stylization={{ theme: "primary", size: "sm", icon: { el: LinkAlt } }}>
              Website
            </Anchor>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-12 py-4">
        <div className="w-full max-w-[467px] border-r border-neutral-800 py-8 pr-12">
          <p className="text-neutral-50">
            <span className="font-medium">Project Name:</span> <span className="text-neutral-400">{props.name}</span>
          </p>
          <p className="mt-4 text-neutral-400">
            <span className="font-medium text-neutral-50">Project Description:</span> <span className="text-neutral-400">{props.description}</span>
          </p>
          <p className="mt-4 text-neutral-400">
            <span className="font-medium text-neutral-50">Release Date:</span> <span className="text-neutral-400">{props.releaseDate}</span>
          </p>
        </div>
        <div className="h-[280px] w-full px-5">
          <ResponsiveContainer width="100%" height="100%" className="[&_.recharts-polar-angle-axis-tick:nth-of-type(3)]:translate-y-2 [&_tspan]:text-sm">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={props.chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Mike" dataKey="A" stroke="#FFDB58" fill="rgba(255, 219, 88, 0.3)" />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};
