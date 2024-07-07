import Bottom from "./Bottom";
import { TIDECurrView } from "./config";
import Content from "./Content/Content";
import Tabs from "./Tabs";
import Upper from "./Upper";

export default function IDE(props: { view: TIDECurrView; setView: (view: TIDECurrView) => void }) {
  return (
    <div className="flex w-full flex-col border border-neutral-700 lg:max-w-[597px] max-h-[468px]">
      <Upper />
      <Tabs {...props} />
      <Content {...props.view} />
      <Bottom />
    </div>
  );
}
