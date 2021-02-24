function helloFirst(name) {
  console.log(`hello, ${name}!`);
}

const helloSecond = function(name) {
  console.log(`hello, ${name}!`);
};

const helloThird = (name) => {
  console.log(`hello, ${name}!`)
};

helloFirst('Kevin');
helloSecond('James');
helloThird('Kyrie');
