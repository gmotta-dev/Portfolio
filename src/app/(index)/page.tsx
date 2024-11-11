import Main from "@/shared/components/Main";
import * as Sections from "./_pageResources/sections";
import buildMetadata from "@/server/utils/buildMetadata";
import { Fragment } from "react";
import Nav from "../_layoutResources/Nav/Nav";
import AnchorsDesktop from "./_pageResources/NavAnchors/AnchorsDesktop";
import AnchorsMobile from "./_pageResources/NavAnchors/AnchorsMobile";

export default function Home() {
  return (
    <Fragment>
      <Nav>
        <AnchorsDesktop />
        <AnchorsMobile />
      </Nav>
      <Main>
        <Sections.Introduction />
        <Sections.Skills />
        <Sections.Exp />
        <Sections.Projects />
        <Sections.Contact />
      </Main>
    </Fragment>
  );
}

export const metadata = buildMetadata({
  title: "Gabriel Motta",
  description: "I’m a Full Stack Developer. And I'm dedicated to creating exceptional web experiences with clean and minimalistic user interfaces that look great and function seamlessly.",
});
