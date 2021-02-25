const inc = obj => {
  if (typeof obj === 'object') {
    obj.n++;
  }
}

const a = { name: 'john' };
const b = a;

console.log(a, b)
