// @flow
import * as Index from './index';
import 'jest';

var stub = (listToTest: (string | null | void)[], expected) => test(`List: ${JSON.stringify(listToTest)}`, () => expect(Index.filterNullEmpty(listToTest).length).toBe(expected));
stub(['a', '', 'b'], 2);
stub(['a','',null], 1);
stub([], 0);
stub([''],0);
stub(['one', 'two', 'three'], 3);