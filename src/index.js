// @flow
import 'babel-polyfill';
import * as Decorators from './decorators/decorators';
import * as List from './list/index';
import * as Text from './text/index';

function composeForward<T, U, V>(f1: (vT: T) => U): (f2: (vU: U) => V) => (t: T) => V {
    return (f2: (vU: U) => V) => (t: T) => {
        return f2(f1(t));
    };
}

function composeReverse<T, U, V>(f2: (vU: U) => V): (f1: (vT: T) => U) => (t: T) => V {
    return (f1: (vT: T) => U) => (t: T) => composeForward(f1)(f2)(t);
}

function pipeForward<T, U>(x: T): (f1: (vT: T) => U) => U {
    return (f1: (vT: T) => U) => f1(x);
}

function pipeReverse<T, U>(f1: (vT: T) => U): (x: T) => U {
    return (x: T) => pipeForward(x)(f1);
}

const Globals = {
    mergeLeft: composeForward,
    mergeRight: composeReverse,
    pipeLeft: pipeForward,
    pipeRight: pipeReverse
}
export default Globals;