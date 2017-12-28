// @flow

function isNotNull<T>(str: T | void | null): boolean {
	return str != null;
}
function isZeroLength<T>(str: string | T[]): boolean {
	return str.length === 0;
}
export function isEmpty(str?: string): boolean {
	if (str == null) {
		str = '';
	}
	return isZeroLength(str);
}

export function isNotEmpty(str?: string): boolean {
	return !isEmpty(str);
}
export function isNotNullOrEmpty(str?: string): boolean {
	return str != null && isNotEmpty(str);
}
function safeStringOp<T>(fallback: T, func: (x: string) => T): (x: string) => T {
	return (str) => {
		if (isNotNullOrEmpty(str)) {
			return func(str);
		}
		return fallback;
	};
}
// export const keyValueIfValue = (key: string, value?: string) => (isNotNullOrEmpty(value) ? `${key}:${value}` : '');

// export const appendText = (toAppend: string) => (str: string) => [ str, toAppend ].join();

export const capitalize = safeStringOp('', (str: string) => `${str[0].toUpperCase()}${str.substring(1)}`);
