const array = ['hello', 23, true, { a: 'b' }, 17.7, [], null, undefined, 35, false]

const typesCounter = arr => {
  const counter = {};
  for (const item of arr) {
    const type = typeof item;
    const count = counter[type] || 0;
    
    counter[type] = count + 1;
  }

  return counter;
}

console.log(typesCounter(array))
