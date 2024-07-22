import { React } from "@/shared/components/Icons";
import IDEWrapper from "@/shared/components/Icons/IDE/IDEWrapper";
import ContentClient from "./ContentClient";

export default async function ProjectsIDE() {
  return (
    <IDEWrapper classNames={{ container: "w-full" }}>
      <ContentClient />
    </IDEWrapper>
  );
}
