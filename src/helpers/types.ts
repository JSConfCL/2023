import { DeepRequired, DeepNonNullable } from "ts-essentials";

export type ParseQuery<T> = DeepRequired<DeepNonNullable<T>>;
