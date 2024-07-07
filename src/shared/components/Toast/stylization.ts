import { TStylizationToastV2 } from "./types";

export const getStylization = (props: TStylizationToastV2) => {
  switch (props?.variant) {
    case "success":
      return { icon: "text-green-400" };

    case "error":
      return { icon: "text-red-500" };
  }
};
