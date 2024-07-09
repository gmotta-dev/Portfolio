import Bottom from "./Bottom";
import Code from "./Code/Code";
import { TIDECurrView } from "./config";
import Tabs from "./Tabs";
import Upper from "./Upper";


export default function IDE(props: { view: TIDECurrView; setView: (view: TIDECurrView) => void }) {
  return (
    <div className="flex max-h-[468px] w-full flex-col border border-neutral-700 lg:max-w-[597px]">
      <Upper />
      <Tabs {...props} />
      <Code {...props.view} />
      <Bottom />
    </div>
  );
}
