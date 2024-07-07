export type DeepPartialAndNull<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartialAndNull<T[P]> : T[P] | null;
};

export type BrowserNativeObject = Date | FileList | File;
declare const $NestedValue: unique symbol;
export type NestedValue<TValue extends object = object> = { [$NestedValue]: never } & TValue;

export type DeepPartial<T> = T extends BrowserNativeObject | NestedValue ? T : { [K in keyof T]?: DeepPartial<T[K]> };