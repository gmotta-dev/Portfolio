export type TProjectConfig = {
  name: string;
  description: string;
  backgroundImg: string;
  thumbImg: string;
  releaseDate: string;
  repo?: string;
  liveWebsite: string;
  skills: { name: string; point: number }[];
};
export const projectsConfigs: TProjectConfig[] = [
  {
    name: "This Portfolio",
    releaseDate: " 07 / 25 / 2023",
    backgroundImg: "portfolio-v3-bg.webp",
    description:
      "My goal for this Portfolio was to learn Docker, and also self host a Next js Website using Coolify, which is basically a self-hosted alternative to Vercel.",
    liveWebsite: "https://gmotta.com",
    repo: "https://github.com/gmotta-dev/Portfolio",
    thumbImg: "portfolio-v3-thumb.webp",
    skills: [
      { name: "Next.js", point: 100 },
      { name: "Figma", point: 87 },
      { name: "Typescript", point: 100 },
      { name: "AWS", point: 80 },
      { name: "Tailwind", point: 100 },
      { name: "Docker", point: 70 },
    ],
  },
  {
    name: "Varos Blog",
    releaseDate: " 01 / 02 / 2023",
    backgroundImg: "varos-blog-bgg.webp",
    description: "As the lead developer, I was responsible for the entire development of the blog, from the development to the infrastructure which uses AWS and MySQL.",
    liveWebsite: "https://varos.com.br/blog",
    thumbImg: "varos-blog-thumb.webp",
    skills: [
      { name: "Next.js", point: 100 },
      { name: "MySQL", point: 82 },
      { name: "Typescript", point: 100 },
      { name: "AWS", point: 75 },
      { name: "Tailwind", point: 100 },
    ],
  },
  {
    name: "Portfolio V2",
    releaseDate: "01 / 08 / 2024",
    backgroundImg: "portfolio-v2-bg.webp",
    description: "A new version of my portfolio built with Next.js 14 and Tailwind CSS. I used AWS services like S3 and CloudFront for asset storage and delivery, and RDS for database management.",
    thumbImg: "portfolio-2-thumb.webp",
    repo: "https://github.com/gmotta-dev/Portfolio-V2",
    liveWebsite: "https://portfolio-kappa-azure-76.vercel.app/",
    skills: [
      { name: "Next.js", point: 100 },
      { name: "Typescript", point: 100 },
      { name: "Tailwind CSS", point: 100 },
      { name: "Figma", point: 90 },
      { name: "AWS", point: 75 },
    ],
  },
  {
    name: "Portfolio V1",
    releaseDate: "06 / 13 / 2022",
    backgroundImg: "portfolio-v1-bg.webp",
    repo: "https://github.com/gmotta-dev/Portfolio-Old",
    liveWebsite: "https://gabrielp.netlify.app/",
    thumbImg: "projects-portfolio-v1.webp",
    description: "My first project using React, which helped me build the skills I have today. I used Netlify for hosting, Email js for sending emails and Styled Components.",
    skills: [
      { name: "React", point: 100 },
      { name: "Figma", point: 80 },
      { name: "Styled Components", point: 85 },
      { name: "Typescript", point: 100 },
    ],
  },
  {
    name: "Unote",
    releaseDate: "02 / 21 / 2022",
    repo: "https://github.com/gmotta-dev/Unote",
    liveWebsite: "https://unote.netlify.app/",
    thumbImg: "projects-unote.webp",
    backgroundImg: "unote-bg.webp",
    description: "Unote was my first full-stack app using the MERN stack. Although no longer supported, it was a valuable project for learning database management and full-stack development.",
    skills: [
      { name: "MongoDB", point: 80 },
      { name: "Express", point: 92 },
      { name: "React", point: 100 },
      { name: "Node.js", point: 100 },
    ],
  },
  {
    name: "Limitless",
    description:
      "Limitless is a fitness-focused landing page, my first project using SASS, TypeScript, and Figma. It was a great learning experience in creating visually appealing pages based on Figma prototypes.",
    releaseDate: "05/03/2022",
    repo: "https://github.com/gmotta-dev/Limitless",
    liveWebsite: "https://gmotta-dev.github.io/Limitless/",
    thumbImg: "limitless-thumb.webp",
    backgroundImg: "limitless-bg.webp",
    skills: [
      { name: "HTML", point: 100 },
      { name: "JS", point: 100 },
      { name: "SASS", point: 100 },
      { name: "Figma", point: 80 },
      { name: "Typescript", point: 100 },
    ],
  },
  {
    name: "Bella Italia",
    thumbImg: "projects-bella-italia.webp",
    description: "Bella Italia is a landing page for an Italian restaurant. This project helped me improve my design skills and knowledge of Italian cuisine.",
    releaseDate: "02 / 17 / 2022",
    repo: "https://github.com/gmotta-dev/Bella-Italia",
    liveWebsite: "https://gmotta-dev.github.io/Bella-Italia",
    backgroundImg: "bella-italia-bg.webp",
    skills: [
      { name: "HTML", point: 100 },
      { name: "JS", point: 100 },
      { name: "SASS", point: 100 },
    ],
  },
  {
    name: "Spacejet",
    thumbImg: "projects-spacejet.webp",
    releaseDate: "05 / 22 / 2022",
    backgroundImg: "spacejet-bg.webp",
    repo: "https://github.com/gmotta-dev/Spacejet",
    liveWebsite: "https://spacejet.netlify.app/",
    description: "Spacejet is one of my first projects using REST APIs, utilizing the NASA API to fetch space-related images and data.",
    skills: [
      { name: "JS", point: 100 },
      { name: "HTML", point: 100 },
      { name: "SASS", point: 90 },
      { name: "Rest APIs", point: 100 },
    ],
  },
];
