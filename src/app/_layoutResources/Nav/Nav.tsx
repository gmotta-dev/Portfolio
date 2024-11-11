import ContentWrapper from "@/shared/components/ContentWrapper";
import MyLogo from "@/shared/components/Icons/MyLogo";
import AnchorsDesktop from "../../(index)/_pageResources/NavAnchors/AnchorsDesktop";
import AnchorsMobile from "../../(index)/_pageResources/NavAnchors/AnchorsMobile";
import { ReactNode } from "react";

export default function Nav(props: { children: ReactNode }) {
  return (
    <nav className="relative z-[100] flex h-[60px]">
      <div className="fixed left-1/2 top-0 flex w-full -translate-x-1/2 justify-between bg-neutral-950 py-3">
        <ContentWrapper element="div" className="flex items-center justify-between">
          <MyLogo className="h-11 w-10" />
          {props.children}
        </ContentWrapper>
      </div>
    </nav>
  );
}
