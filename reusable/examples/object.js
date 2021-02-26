const welcome = person => {
	console.log(`ave, ${person.name}!`);
}

const marcus = { name: 'marcus aurelius' };
const mao = { name: 'mao zedong' };
const rene = { name: 'rene decartes' };

welcome(marcus);
welcome(mao);
welcome(rene);
