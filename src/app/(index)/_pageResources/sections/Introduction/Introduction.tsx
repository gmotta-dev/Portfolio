"use client";

import Bg from "@/app/(index)/Bg";
import ContentWrapper from "@/shared/components/ContentWrapper";
import IDE from "./IDE/IDE";
import { useState } from "react";
import Markdown from "markdown-to-jsx";
import config, { TIDECurrView } from "./IDE/config";
import { AnimatePresence, motion } from "framer-motion";

export default function Introduction() {
  const [view, setView] = useState<TIDECurrView>(config[0]);

  return (
    <section className="relative w-full lg:pb-16 pt-16 lg:pt-32">
      <Bg className="translate-y-14" />
      <ContentWrapper element="div" className="flex flex-col justify-between gap-6 lg:flex-row">
        <div className="w-full min-w-0" key={view.tab.label}>
          <AnimatePresence>
            <motion.div className="h-full w-full" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }}>
              <Markdown options={{ overrides: view.markdownComponents }}>{view.previewContent}</Markdown>
            </motion.div>
          </AnimatePresence>
        </div>
        <IDE view={view} setView={setView} />
      </ContentWrapper>
    </section>
  );
}
