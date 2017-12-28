// @flow
import * as I from './index';
import 'jest';

var truthy = (func: (x?: string) => boolean, obj) => test(`truthy: ${func.name}`, () => expect(func(obj)).toBeTruthy());
var falsey = (func: (x?: string) => boolean, obj) => test(`falsey: ${func.name}`, () => expect(func(obj)).toBeFalsy());

var pair = (obj) => {
    truthy(I.isEmpty, obj);
    falsey(I.isNotEmpty, obj);
}
var pair2 = (obj) => {
    truthy(I.isNotEmpty, obj);
    falsey(I.isEmpty, obj);
}
pair('');
pair(undefined);
pair(null);
pair2('test');
pair2('one');
pair2(' ');

var capitalizeTest = (obj, expected) => test(`Capitalize: ${obj}`, () => expect(I.capitalize(obj)).toBe(expected));
capitalizeTest('', '');
capitalizeTest('And', 'And');
capitalizeTest('or', 'Or');
capitalizeTest('onetwothree', 'Onetwothree');