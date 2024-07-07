import Main from "@/shared/components/Main";
import * as Sections from "./_pageResources/sections";
import buildMetadata from "@/server/utils/buildMetadata";

export default function Home() {
  return (
    <Main>
      <Sections.Introduction />
      <Sections.Skills />
      <Sections.Exp />
      <Sections.Projects />
      <Sections.Contact />
    </Main>
  );
}

export const metadata = buildMetadata({
  title: "Gabriel Motta",
  description:
    "I’m a Full Stack Developer. And I'm dedicated to creating exceptional web experiences with clean and minimalistic user interfaces that look great and function seamlessly.",
});
