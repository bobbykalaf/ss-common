// @flow
const pipe = (fn: Function, ...fns: Function[]) => (...args: any[]) => fns.reduce((acc, next) => next(acc), fn(...args));
const compose = (...fns: Function[]) => (...args: any[]) => _.initial(fns).reduceRight((acc, fn) => fn(acc), _.last(fns)(...args));
const compose2 = (...fns: Function[]) => (...args: any[]) => pipe(fns[fns.length - 1], ...fns.reverse().slice(1))(...args);
const rcompose = (fn: Function, ...rest: Function[]) =>
    rest.length === 0 // eslint-disable-line no-magic-numbers
        ? fn
        : (...args: any[]) => fn(compose(...rest)(...args));

module.exports = {
    pipe,
    compose,
    compose2,
    rcompose
}