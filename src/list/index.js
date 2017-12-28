// @flow
import { isNotNullOrEmpty } from './../text/index';
import { type Nullable } from './../index';

export function filterNullEmpty(list: Nullable<string>[]): string[] {
    return list.filter((v: string | void) => isNotNullOrEmpty(v)).map((v) => v === undefined ? '' : v);
}