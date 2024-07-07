import ContentWrapper from "@/shared/components/ContentWrapper";
import UserProfile from "@/shared/components/Icons/carbon/UserProfile";
import Discord from "@/shared/components/Icons/Discord";
import Email from "@/shared/components/Icons/Email";
import Github from "@/shared/components/Icons/Github";
import Linkedin from "@/shared/components/Icons/Linkedin";
import Location from "@/shared/components/Icons/Location";
import MyLogo from "@/shared/components/Icons/MyLogo";
import Phone from "@/shared/components/Icons/Phone";

export default function Footer() {
  return (
    <ContentWrapper element="footer" className="py-32">
      <div className="flex flex-col gap-16">
        <div className="flex flex-wrap justify-between gap-4">
          <MyLogo className="h-[128px] w-[112px]" />
          <ul className="flex flex-wrap gap-x-20 gap-y-10">
            {groups.map((group, index) => (
              <Group key={index} {...group} />
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap justify-between gap-6">
          <ul className="flex flex-wrap gap-x-20 gap-y-10">
            {anchors.map((anchor, index) => (
              <li key={index} className="text-sm text-neutral-300">
                <a href={anchor.href}>{anchor.label}</a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-neutral-300">© 2024 - {new Date().getFullYear()} Gabriel Motta</p>
        </div>
      </div>
    </ContentWrapper>
  );
}

const anchors = [
  { label: "ABOUT ME", href: "#about-me" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

type TGroup = { name: string; anchors: { label: string; href: string; icon: React.ElementType; type: "a" | "span" }[] };
const Group = (props: TGroup) => {
  return (
    <li className="flex flex-col gap-4">
      <p className="text-sm text-neutral-300">{props.name}</p>
      <ul className="flex flex-col gap-3">
        {props.anchors.map((el, index) => (
          <li key={index}>
            <el.type href={el.href} className="group flex items-center gap-4" target="_blank" rel="noreferrer">
              <el.icon className="h-[24px] w-[24px] text-neutral-50" />
              <span className="text-neutral-400 transition-colors duration-300 group-hover:text-neutral-100">{el.label}</span>
            </el.type>
          </li>
        ))}
      </ul>
    </li>
  );
};

const groups: TGroup[] = [
  {
    name: "Info",
    anchors: [
      { label: "Rio de Janeiro, Brazil", href: "about-me", icon: Location, type: "span" },
      { label: "gmotta.dev@outlook.com", href: "mailto:gmotta.dev@outlook.com", icon: Email, type: "a" },
      { label: "+55 21 97426-4416", href: "tel:+5521974264416", icon: Phone, type: "a" },
    ],
  },
  {
    name: "Links",
    anchors: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/gpmotta21/", icon: Linkedin, type: "a" },
      { label: "Github", href: "https://github.com/gmotta-dev", icon: Github, type: "a" },
      { label: "CV", href: process.env.NEXT_PUBLIC_CLOUDFRONT_URL + "/files/gabriel-motta-cv.pdf", icon: UserProfile, type: "a" },
    ],
  },
];
