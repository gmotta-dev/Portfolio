"use client";

import { Fragment, useState } from "react";
import config, { TIDECurrView } from "./IDE/config";
import IDE from "./IDE/IDE";
import dynamic from "next/dynamic";

const Preview = dynamic(() => import("./Preview"));

export default function IntroductionClient() {
  const [view, setView] = useState<TIDECurrView>(config[0]);

  return (
    <Fragment>
      <div className="w-full min-w-0" key={view.tab.label}>
        <Preview view={view} />
      </div>
      <IDE view={view} setView={setView} />
    </Fragment>
  );
}
