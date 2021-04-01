function inc(a) {
  return a + 1;
}

const sum = function (a, b) {
  return a + b;
};

const max = (a, b) => (a > b ? a : b);

const average = (a, b) => {
  const s = sum(a, b);
  return s / 2;
};
