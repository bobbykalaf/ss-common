// @flow
import * as Text from './index';

test('capitalize #1', () => expect(Text.capitalize('')).toBe(''));
test('capitalize #2', () => expect(Text.capitalize('And')).toBe('And'));
test('capitalize #3', () => expect(Text.capitalize('or')).toBe('Or'));
test('capitalize #4', () => expect(Text.capitalize('one two')).toBe('One two'));
test('isNotNullOrEmpty #1', () => expect(Text.isNotNullOrEmpty(null)).toBeFalsy());
test('isNotNullOrEmpty #2', () => expect(Text.isNotNullOrEmpty(undefined)).toBeFalsy());
test('isNotNullOrEmpty #3', () => expect(Text.isNotNullOrEmpty('')).toBeFalsy());
test('isNotNullOrEmpty #4', () => expect(Text.isNotNullOrEmpty('test')).toBeTruthy());
