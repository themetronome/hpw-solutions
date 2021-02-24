function range(start, end) {
  const length = end - start;
  
  if(length < 0) return [];

  const array = new Array(length);

  let item = 0;

  for(let i = start; i <= end; i++) {
    array[item++] = i;
  }

  console.log(array);
}

range(15, 30)
