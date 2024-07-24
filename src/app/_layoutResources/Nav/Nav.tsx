import ContentWrapper from "@/shared/components/ContentWrapper";
import MyLogo from "@/shared/components/Icons/MyLogo";
import AnchorsDesktop from "./AnchorsDesktop";
import AnchorsMobile from "./AnchorsMobile";

export default function Nav() {
  return (
    <nav className="relative flex h-[60px] z-[100]">
      <div className="fixed left-1/2 bg-neutral-950  top-0 flex w-full justify-between py-3 -translate-x-1/2">
       <ContentWrapper element="div" className="flex justify-between items-center">
        <MyLogo className="h-11 w-10" />
        <AnchorsDesktop />
        <AnchorsMobile />
      </ContentWrapper>
      </div>
    </nav>
  );
}
