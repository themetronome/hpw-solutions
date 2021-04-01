const welcome = (person) => {
  console.log(`ave, ${person.name}!`);
};

const persons = {
  marcus: { name: "marcus aurelius" },
  mao: { name: "mao zedong" },
  rene: { name: "rene decartes" },
};

for (const name in persons) {
  const person = persons[name];
  welcome(person);
}
