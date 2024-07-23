import ContentWrapper from "@/shared/components/ContentWrapper";
import IDEWrapper from "@/shared/components/Icons/IDE/IDEWrapper";
import ContentClient from "./ContentClient";

export default function ProjectsDesktop() {
  return (
    <ContentWrapper element="div" className="relative hidden max-w-[1354px] border border-neutral-700 !px-16 py-16 lg:block">
      <h2 className="absolute -top-16 left-5 bg-neutral-950 px-10 font-bebas-neue text-9xl text-neutral-50">Projects</h2>
      <IDEWrapper classNames={{ container: "w-full" }}>
        <ContentClient />
      </IDEWrapper>
    </ContentWrapper>
  );
}
