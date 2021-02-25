function rangeOdd(start, end) {
  const length = Math.ceil((end - start) / 2);

  if(length < 0) return [];

  const array = new Array(length)

  let item = 0;

  for(let i = start; i <= end; i++) {
    if(i % 2 !== 0) array[item++] = i;
  }
  
  return array;
}

console.log(rangeOdd(15, 30))
