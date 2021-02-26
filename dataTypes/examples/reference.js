const obj1 = { field: 5 };
const obj2 = obj1;

obj1.field = 6;

console.dir({ obj1, obj2 });
