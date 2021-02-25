const square = x => x * x;

const cube = x => x ** 3

const average = (a, b) => console.log((a + b) / 2);

const calculate = () => {
  const array = [];
  
  for(let i = 0; i <= 9; i++) {
    const x = average(square(i), cube(i));
    console.log(array.push(x));
  }
}

calculate();
