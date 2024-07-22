import ContentWrapper from "@/shared/components/ContentWrapper";
import ProjectsIDE from "./ProjectsIDE/ProjectsIDE";

export default function ProjectsDesktop() {
  return (
    <ContentWrapper element="div" className="border relative border-neutral-700 !px-16 py-16 max-w-[1354px] hidden md:block">
      <h2 className="text-9xl font-bebas-neue text-neutral-50 absolute -top-16 bg-neutral-950 px-10 left-5">
        Projects
      </h2>
      <ProjectsIDE />
    </ContentWrapper>
  );
}
