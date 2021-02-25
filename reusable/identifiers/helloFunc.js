function helloFirst(name) {
  return `hello, ${name}!`;
}

const helloSecond = function(name) {
  return `hello, ${name}!`;
};

const helloThird = (name) => {
  return `hello, ${name}!`
};

console.log(helloFirst('Kevin'))
console.log(helloSecond('James'))
console.log(helloThird('Kyrie'))
