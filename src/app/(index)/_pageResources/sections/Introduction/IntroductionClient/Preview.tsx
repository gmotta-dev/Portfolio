import { AnimatePresence, motion } from "framer-motion";
import Markdown from "markdown-to-jsx";
import { TIDECurrView } from "./IDE/config";

export default function Preview(props: { view: TIDECurrView }) {
  return (
    <AnimatePresence>
      <motion.div className="h-full w-full" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }}>
        <Markdown options={{ overrides: props.view.markdownComponents }}>{props.view.previewContent}</Markdown>
      </motion.div>
    </AnimatePresence>
  );
}
