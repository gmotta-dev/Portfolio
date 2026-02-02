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

export type TProjectCategory = {
  name: string;
  projects: TProjectConfig[];
};

export const projectCategories: TProjectCategory[] = [
  {
    name: "Current Job",
    projects: [
      {
        name: "Varos Platform",
        releaseDate: "07 / 05 / 2025",
        backgroundImg: "varos-platform.webp",
        description: "As the lead developer, the Varos Platform was the most ambitious project I've worked on. It's a complete Investments Educational Platform were Users can buy and watch courses. With Admin Dashboards built for managing our courses and users.",
        liveWebsite: "https://varos.com.br/plataforma",
        thumbImg: "varos-platform.webp",
        skills: [
          { name: "Next.js", point: 100 },
          { name: "PostgreSQL", point: 100 },
          { name: "Typescript", point: 100 },
          { name: "AWS", point: 80 },
          { name: "Tailwind", point: 100 },
        ],
      },

      {
        name: "Varos Checkout",
        releaseDate: "07 / 05 / 2025",
        backgroundImg: "varos-checkout.webp",
        description: "As the lead developer, alongside the Varos Platform, I built the Varos Checkout, a complete Checkout System for our Platform. Which also has an Admin Dashboard for managing the Checkout Offers, Products and Sales.",
        liveWebsite: "https://varos.com.br/checkout/carrinho/teste-robo-de-cripto",
        thumbImg: "varos-checkout.webp",
        skills: [
          { name: "Next.js", point: 100 },
          { name: "PostgreSQL", point: 100 },
          { name: "Typescript", point: 100 },
          { name: "AWS", point: 80 },
          { name: "Tailwind", point: 100 },
        ],
      },

      {
        name: "Varos Blog",
        releaseDate: " 01 / 02 / 2023",
        backgroundImg: "varos-blog.webp",
        description: "As the lead developer, I was responsible for creating the blog, handling everything from development to infrastructure, using AWS and PostgreSQL.",
        liveWebsite: "https://varos.com.br/blog",
        thumbImg: "varos-blog.webp",
        skills: [
          { name: "Next.js", point: 100 },
          { name: "PostgreSQL", point: 82 },
          { name: "Typescript", point: 100 },
          { name: "AWS", point: 80 },
          { name: "Tailwind", point: 100 },
        ],
      },

      {
        name: "Varos Website Migration",
        releaseDate: "06 / 20 / 2022",
        backgroundImg: "varos.webp",
        description: "Back in 2022, I was hired by Varos to migrate their website from a Wordpress site to a ground-up Next.js website. I was responsible for the entire migration, colaborating with the Lead Designer and managing the development and deployment by myself.",
        liveWebsite: "https://varos.com.br/checkout/carrinho/teste-robo-de-cripto",
        thumbImg: "varos.webp",
        skills: [
          { name: "Next.js", point: 100 },
          { name: "PostgreSQL", point: 100 },
          { name: "Typescript", point: 100 },
          { name: "AWS", point: 80 },
          { name: "Tailwind", point: 100 },
        ],
      },
    ],
  },
  {
    name: "Freelance Projects",
    projects: [
      {
        name: "Alice Ghelman Portfolio",
        releaseDate: "05 / 08 / 2025",
        backgroundImg: "alice-ghelman-portfolio.webp",
        description: "I was hired by Alice Ghelman to build her portfolio website, a website for showcasing her skills as Psychologist.",
        liveWebsite: "https://aliceghelman.com.br",
        thumbImg: "alice-ghelman-portfolio.webp",
        repo: "https://github.com/gmotta-dev/Alice-Ghelman",
        skills: [
          { name: "Next.js", point: 100 },
          { name: "Typescript", point: 100 },
          { name: "Tailwind", point: 100 },
        ],
      },

      {
        name: "Naim Codeseda Portfolio",
        releaseDate: "08 / 20 / 2025",
        backgroundImg: "naim-codeseda-portfolio.webp",
        description: "I was hired by Naim Codeseda to build his portfolio website, a website for showcasing his skills as a Dancer, Martial Artist and Artistic Director.",
        repo: "https://github.com/gmotta-dev/Naim-Codeseda-Portfolio",
        liveWebsite: "https://naimcodeseda.com/en-US",
        thumbImg: "naim-codeseda-portfolio.webp",
        skills: [
          { name: "Next.js", point: 100 },
          { name: "Payload CMS", point: 100 },
          { name: "Typescript", point: 100 },
          { name: "Tailwind", point: 100 },
        ],
      }
    ],
  },

  {
    name: "SaaS Projects",
    projects: [],
  },
  {
    name: "Side Projects",
    projects: [
      {
        name: "Portfolio V2",
        releaseDate: "01 / 08 / 2024",
        backgroundImg: "portfolio-v2.webp",
        description: "A new version of my portfolio built with Next.js 14 and Tailwind CSS. I used AWS services like S3 and CloudFront for asset storage and delivery, and RDS for database management.",
        thumbImg: "portfolio-v2.webp",
        repo: "https://github.com/gmotta-dev/Portfolio-V2",
        liveWebsite: "https://portfolio-kappa-azure-76.vercel.app/",
        skills: [
          { name: "Next.js", point: 100 },
          { name: "Typescript", point: 100 },
          { name: "Tailwind CSS", point: 100 },
          { name: "Figma", point: 90 },
          { name: "AWS", point: 80 },
        ],
      },
      {
        name: "Portfolio V1",
        releaseDate: "06 / 13 / 2022",
        backgroundImg: "portfolio-v1.webp",
        repo: "https://github.com/gmotta-dev/Portfolio-Old",
        liveWebsite: "https://gabrielp.netlify.app/",
        thumbImg: "portfolio-v1.webp",
        description: "My Portfolio using React, which helped me build the skills I have today. I used Netlify for hosting, Email js for sending emails and Styled Components.",
        skills: [
          { name: "React", point: 100 },
          { name: "Figma", point: 90 },
          { name: "Styled Components", point: 85 },
          { name: "Typescript", point: 100 },
        ],
      },
      {
        name: "Unote",
        releaseDate: "02 / 21 / 2022",
        repo: "https://github.com/gmotta-dev/Unote",
        liveWebsite: "https://unote.netlify.app/",
        thumbImg: "unote.webp",
        backgroundImg: "unote.webp",
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
        thumbImg: "limitless.webp",
        backgroundImg: "limitless.webp",
        skills: [
          { name: "HTML", point: 100 },
          { name: "JS", point: 100 },
          { name: "SASS", point: 100 },
          { name: "Figma", point: 90 },
          { name: "Typescript", point: 100 },
        ],
      },
      {
        name: "Spacejet",
        thumbImg: "spacejet.webp",
        releaseDate: "05 / 22 / 2022",
        backgroundImg: "spacejet.webp",
        repo: "https://github.com/gmotta-dev/Spacejet",
        liveWebsite: "https://spacejet.netlify.app/",
        description: "Spacejet is one of my first projects using REST APIs, using the NASA API to fetch space-related images and data.",
        skills: [
          { name: "JS", point: 100 },
          { name: "HTML", point: 100 },
          { name: "SASS", point: 100 },
          { name: "Rest APIs", point: 100 },
        ],
      },
    ],
  },
];

// Flat list of all projects for backward compatibility
export const projectsConfigs: TProjectConfig[] = projectCategories.flatMap((cat) => cat.projects);
