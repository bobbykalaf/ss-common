'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isEmpty = isEmpty;
exports.isNotEmpty = isNotEmpty;
exports.isNotNullOrEmpty = isNotNullOrEmpty;
function isNotNull(str) {
	return str != null;
}
function isZeroLength(str) {
	return str.length === 0;
}
function isEmpty(str) {
	return isNotNull(str) ? isZeroLength(str) : true;
}

function isNotEmpty(str) {
	return !isEmpty(str);
}
function isNotNullOrEmpty(str) {
	return str != null && isNotEmpty(str);
}
function safeStringOp(fallback, func) {
	return function (str) {
		if (isNotNullOrEmpty(str)) {
			return func(str);
		}
		return fallback;
	};
}
// export const keyValueIfValue = (key: string, value?: string) => (isNotNullOrEmpty(value) ? `${key}:${value}` : '');

// export const appendText = (toAppend: string) => (str: string) => [ str, toAppend ].join();

var capitalize = exports.capitalize = safeStringOp('', function (str) {
	return '' + str[0].toUpperCase() + str.substring(1);
});