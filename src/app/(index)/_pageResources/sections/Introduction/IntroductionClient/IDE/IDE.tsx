import Bottom from "./Bottom";
import { TIDECurrView } from "./config";
import Tabs from "./Tabs";
import Upper from "./Upper";
import dynamic from "next/dynamic";

const Content = dynamic(() => import("./Code/Code"));

export default function IDE(props: { view: TIDECurrView; setView: (view: TIDECurrView) => void }) {
  return (
    <div className="flex max-h-[468px] w-full flex-col border border-neutral-700 lg:max-w-[597px]">
      <Upper />
      <Tabs {...props} />
      <Content {...props.view} />
      <Bottom />
    </div>
  );
}
