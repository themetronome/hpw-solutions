const cities = ["Athens", "Roma", "London", "Beijing", "Kiev", "Riga"];
const f = (s) => s.length;

function funcScope() {
  const cities = ["Athens", "Roma"];
  const f = (s) => s.toUpperCase();

  console.dir({ cities });
  console.dir(cities.map(f));

  {
    const f = (s) => s.toLowerCase();
    console.dir({ cities });
    console.dir(cities.map(f));
  }

  {
    const cities = ["London", "Beijing", "Kiyv"];
    console.dir({ cities });
    console.dir(cities.map(f));
  }
}

funcScope();

console.dir({ cities });
console.dir(cities.map(f));
