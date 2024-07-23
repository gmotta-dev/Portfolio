import ProjectsDesktop from "./ProjectsDesktop/ProjectsDesktop";
import ProjectsMobile from "./ProjectsMobile/ProjectsMobile";

export default function Projects() {
  return (
    <section id="projects" className="relative mt-14 pb-20 pt-10 lg:mt-48">
      <ProjectsMobile />
      <ProjectsDesktop />
    </section>
  );
}
