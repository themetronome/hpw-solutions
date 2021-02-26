console.dir({ hoisted });
hoisted = 5;
console.dir({ hoisted });
var hoisted;

let scalarVariable = 3;
const scalarConstant = true;

const o = { scalarVariable, scalarConstant };
console.dir(o);

o.scalarVariable = 8;
scalarVariable = 9;

console.dir(o);
console.dir(scalarVariable)
