const welcome = person => {
  console.log(`ave, ${person.name}!`);
}

const persons = [
	{ name: 'marcus aurelius' },
	{ name: 'mao zedong' },
	{ name: 'rene decartes' },
];

for(const person of persons) {
	welcome(person);
}
