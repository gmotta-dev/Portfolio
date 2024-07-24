import Anchor from "@/shared/components/Clickables/Anchor";
import { React } from "@/shared/components/Icons";
import ArrowRight from "@/shared/components/Icons/carbon/ArrowRight";
import { MarkdownToJSX } from "markdown-to-jsx";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

export const aboutMeChartData = [
  { subject: "Full Stack", A: 92, },
  { subject: "Front End", A: 100, },
  { subject: "Design", A: 85, },
  { subject: "Play Elden Ring", A: 85, },
  { subject: "Playing with AI", A: 78, },
  { subject: "Back End", A: 86, },
];

export type TIDECurrView = {
  tab: { label: string; icon: React.ElementType };
  previewContent: string;
  markdownComponents: MarkdownToJSX.Overrides;
  ideContent: { functionName: string; imports?: string[] };
};
export const config: TIDECurrView[] = [
  {
    tab: { label: "Introduction", icon: React },
    markdownComponents: { Anchor: { component: Anchor, props: { href: process.env.NEXT_PUBLIC_CLOUDFRONT_URL + '/files/gabriel-motta-cv.pdf', stylization: { theme: "primary", icon: { el: ArrowRight } } } } },
    ideContent: {
      functionName: "Introduction",
      imports: ["import Anchor from '@/shared/components/Clickables/Anchor';", "import { ArrowRight } from '@/shared/components/Icons';"],
    },
    previewContent: `<header className="w-full lg:max-w-[499px]">
      <h4 className="font-bebas-neue text-sm tracking-widest text-neutral-400">hi, i'm</h4>
      <h1 className="mt-3 font-bebas-neue text-7xl leading-[95%] tracking-wider lg:text-[156px] ">Gabriel Motta</h1>
      <p className="text-neutral-300">
        I'm a Full Stack Developer. And I'm dedicated to creating exceptional web experiences with clean and minimalistic user interfaces that look great and function seamlessly.
      </p>
      <Anchor href='/gabriel-motta-cv.pdf' stylization={{ theme: "primary", icon: { el: ArrowRight} }} className="mt-6 max-w-[290px]">
        Download CV
      </Anchor>
    </header>`,
  },
  {
    tab: { label: "AboutMe", icon: React },
    markdownComponents: {
      ResponsiveContainer: { component: ResponsiveContainer },
      RadarChart: { component: RadarChart, props: { data: aboutMeChartData } },
      PolarGrid: { component: PolarGrid },
      PolarAngleAxis: { component: PolarAngleAxis },
      PolarRadiusAxis: { component: PolarRadiusAxis },
      Radar: { component: Radar as any, props: { fillOpacity: 0.6 } },
    },
    ideContent: {
      functionName: "AboutMe",
      imports: ["import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';", "import { aboutMeChartData } from './config';"],
    },
    previewContent: `<header className="w-full lg:max-w-[520px] [&_*]:overflow-visible ">
      <h4 className="font-bebas-neue text-sm tracking-widest text-neutral-400">
        A bit about me
      </h4>
      
    </header>`,
  },
];

export default config;
