"use client";

import { ArrowDown, Branch, File, Github, LinkAlt, React, Search } from "@/shared/components/Icons";
import Tabs, { TTab } from "../../Introduction/IntroductionClient/IDE/Tabs";
import { useState } from "react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Anchor from "@/shared/components/Clickables/Anchor";
import { projectsConfigs, TProjectConfig } from "../config";

export default function ContentClient() {
  const [tabs, setTabs] = useState<TTab[]>([{ icon: React, label: projectsConfigs[0].name }]);
  const [content, setContent] = useState<TProjectConfig>(projectsConfigs[0]);

  const onCloseTab = (currTab: TTab) => {
    if (tabs.length === 1) return;

    const filteredTabs = tabs.filter((t) => t.label !== currTab.label);
    setTabs(filteredTabs);

    const lastTab = filteredTabs[filteredTabs.length - 1];
    const foundContent = projectsConfigs.find((t) => t.name === lastTab.label);
    if (foundContent) setContent(foundContent);
  };

  const onTabClick = (tab: TTab) => {
    const foundContent = projectsConfigs.find((t) => t.name === tab.label);
    if (foundContent) setContent(foundContent);
  };

  const isActive = (tab: TTab) => tab.label === content.name;

  return (
    <div className="flex">
      <Explorer tabs={tabs} setTabs={setTabs} content={content} setContent={setContent} />
      <div className="flex w-full flex-col overflow-hidden">
        <Tabs onTabClick={onTabClick} onClose={onCloseTab} tabs={tabs} isActive={isActive} />
        <AnimatePresence>
          <Content {...content} />
        </AnimatePresence>
      </div>
    </div>
  );
}

const Explorer = (props: { tabs: TTab[]; setTabs: (tabs: TTab[]) => void; content: TProjectConfig; setContent: (content: TProjectConfig) => void }) => {
  const handleAddTab = (tab: TProjectConfig) => {
    props.setContent(tab);

    if (props.tabs.some((t) => t.label === tab.name)) return;
    props.setTabs([...props.tabs, { icon: React, label: tab.name }]);
  };

  return (
    <div className="w-full max-w-[250px] border-r border-r-neutral-700 bg-neutral-900">
      <ul className="flex justify-center gap-2 border-y border-neutral-700 bg-neutral-800 py-[6px]">
        {[File, Branch, Search, ArrowDown].map((Icon, index) => (
          <li key={index} className="flex items-center gap-2 px-4 text-sm text-neutral-400 transition-colors">
            <Icon className="h-5 w-5" />
          </li>
        ))}
      </ul>
      <p className="flex w-full items-center gap-2 bg-neutral-700 px-3 py-2 text-sm text-neutral-400">
        <ArrowDown className="w-2" />
        Portfolio Projects
      </p>
      <ul className="flex flex-col">
        {projectsConfigs.map((file) => (
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

const Content = (props: TProjectConfig) => {
  return (
    <motion.div key={props.name} animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} className="w-full tracking-wider">
      <div className="relative flex h-[300px] items-end px-8 py-4">
        <div className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 grayscale filter" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${props.backgroundImg})` }} />
        <div className="z-10 flex w-full items-center justify-between">
          <h3 className="relative font-bebas-neue text-[80px] leading-[64px] font-bold tracking-widest text-mostard-300">{props.name}</h3>
          <div className="mt-8 flex max-w-[320px] flex-1 gap-4">
            <Anchor href={props.repo} target="_blank" className={twMerge("flex-1", props.repo ? "opacity-100" : "opacity-50 cursor-not-allowed")} stylization={{ theme: "primary", size: "sm", icon: { el: Github } }}>
              Repo
            </Anchor>
            <Anchor href={props.liveWebsite} target="_blank" className="flex-1" stylization={{ theme: "primary", size: "sm", icon: { el: LinkAlt } }}>
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
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={props.skills.map((skill) => ({ subject: skill.name, A: skill.point }))}>
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
