// @flow
import { isNotNullOrEmpty } from './../text/index';

export type Nullable<T> = T | void | null;

export function filterNullEmpty(list: Nullable<string>[]): string[] {
    return list.filter((v) => isNotNullOrEmpty(v));
}