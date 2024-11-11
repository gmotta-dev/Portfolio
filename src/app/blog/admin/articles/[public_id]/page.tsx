import ContentWrapper from "@/shared/components/ContentWrapper";
import Main from "@/shared/components/Main";
import FormServer from "./_pageResources/Form/FormServer";
import { Fragment } from "react";
import Nav from "@/app/_layoutResources/Nav/Nav";
import NavBtns from "./_pageResources/NavBtnx";

export default function Page() {
  return (
    <Fragment>
      <Nav>
        <NavBtns />
      </Nav>
      <Main>
        <ContentWrapper element="section" className="max-w-[664px] py-24">
          <FormServer />
        </ContentWrapper>
      </Main>
    </Fragment>
  );
}

const content = `'use client'\n\nimport {useState} from 'react'\n\n import Test from '@/shared/components/Test'\n function Component(){\n const [count, setCount] = useState(0)\n return <div> oi <button onClick={() => setCount(count + 1)}>Increment</button> {count} <Test /> </div> }`;
