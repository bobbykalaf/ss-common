var Fx = require('./index');

const f1 = (x) => parseInt(x);
const f2 = (x) => "this long sentence"[x];
const f3 = (x) => x.repeat(5);

var result = Fx.compose(f1, f2, f3)('5');
var result2 = Fx.pipe(f1, f2, f3)(10);

console.log(`result #1: ${result}`);
console.log(`result #2: ${result2}`)