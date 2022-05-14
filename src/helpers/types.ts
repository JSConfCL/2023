type DeepRequired<T> = { [K in keyof T]: DeepRequired<T[K]> } & Required<T>;
type DeepNonNullable<T> = {
  [K in keyof T]: DeepNonNullable<T[K]>;
} & NonNullable<T>;
export type ParseQuery<T> = DeepRequired<DeepNonNullable<T>>;
