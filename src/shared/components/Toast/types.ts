export type ToastClassNames = Partial<Record<"container" | "texts-wrapper", string>>;

export type TStylizationToastV2 = { variant?: "success" | "error" } | undefined;

export type TToastComponentAndHookCommonTypes = { classNames?: ToastClassNames; stylization?: TStylizationToastV2 };

export type TToast =
  | ({
      id?: number;
      time?: number;
      title?: string;
      description?: string;
    } & TToastComponentAndHookCommonTypes)
  | null;
