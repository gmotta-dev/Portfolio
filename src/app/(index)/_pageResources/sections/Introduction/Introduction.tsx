import Bg from "@/app/(index)/_pageResources/sections/Introduction/Bg";
import ContentWrapper from "@/shared/components/ContentWrapper";
import Preview from "./Preview";
import IntroductionIDE from "./IntroductionIDE";

export default function Introduction() {
  return (
    <section className="relative w-full pt-16 lg:pb-16 lg:pt-32">
      <Bg className="translate-y-14" />
      <ContentWrapper element="div" className="flex flex-col justify-between gap-6 lg:flex-row">
        <Preview />
        <IntroductionIDE />
      </ContentWrapper>
    </section>
  );
}
