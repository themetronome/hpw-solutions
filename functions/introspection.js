const introspectObject = (obj) => {
  const names = [];
  for (const key in obj) {
    const fn = obj[key];

    if (typeof fn === "function") {
      names.push([key, fn.length]);
    }
  }
  return names;
};

const obj = {
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
};

console.log(introspectObject(obj));
