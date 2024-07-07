import { Close, React } from "@/shared/components/Icons";
import config, { TIDECurrView } from "./config";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

type TTabs = { view: TIDECurrView; setView: (view: TIDECurrView) => void };
export default function Tabs(props: TTabs) {
  const [loading, setLoading] = useState(0);
  const [clicked, setClicked] = useState(false);

  return (
    <ul className="flex border-y border-y-neutral-700 bg-neutral-800">
      {config.map((item, index) => (
        <Item
          key={index}
          item={item}
          view={props.view}
          setView={props.setView}
          index={index}
          isCurrent={item.tab.label === props.view.tab.label}
          loading={loading}
          setLoading={setLoading}
          clicked={clicked}
          setClicked={setClicked}
        />
      ))}
    </ul>
  );
}

type TLabel = TTabs & {
  item: TIDECurrView;
  isCurrent: boolean;
  index: number;
  loading: number;
  setLoading: (loading: number) => void;
  clicked: boolean;
  setClicked: (clicked: boolean) => void;
};

const Item = (props: TLabel) => {
  useEffect(() => {
    if (!props.isCurrent || props.clicked) return; // Stop useEffect if clicked is true

    const duration = 10000;
    let startTime: number;
    let frameId: number;

    const updateLoading = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed / duration) * 100;

      props.setLoading(progress > 100 ? 0 : progress);

      if (progress <= 100) frameId = requestAnimationFrame(updateLoading);
      else {
        const newIndex = config.length - 1 === props.index ? 0 : props.index + 1;
        props.setView(config[newIndex]);
        startTime = 0;
        frameId = requestAnimationFrame(updateLoading);
      }
    };

    frameId = requestAnimationFrame(updateLoading);

    return () => cancelAnimationFrame(frameId); // Ensure cleanup cancels the animation frame
  }, [props.isCurrent, props.clicked]); // Add clicked to dependency array

  const handleClick = () => {
    props.setView(props.item);
    props.setLoading(0);
    props.setClicked(true);
  };

  return (
    <li
      onClick={handleClick}
      className={twMerge(
        "relative flex cursor-pointer items-center gap-2 border-r border-r-neutral-700 p-2 text-neutral-300 transition-colors hover:bg-neutral-900",
        props.isCurrent && "bg-neutral-900/70",
      )}>
      <props.item.tab.icon className="z-10 h-4 w-4" />
      <span className="z-10 text-xs">{props.item.tab.label}</span>
      <Close className="z-10 h-4 w-4" />
      {props.isCurrent && <span className="pointer-events-none absolute left-0 top-0 h-full w-full bg-neutral-800" style={{ width: `${props.loading}%` }} />}
    </li>
  );
};
