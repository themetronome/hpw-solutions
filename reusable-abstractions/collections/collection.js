const phoneBook = [
  { name: 'marcus aurelius', phone: '+79235857594' },
  { name: 'kevin durant', phone: '+79652456782' },
];

function findPhoneByName(name) {
  for (const obj of phoneBook) {
    if (obj.name === name) return obj.phone;
  }
}

console.log(phoneBook)
console.log(findPhoneByName('marcus aurelius'))
console.log(findPhoneByName('kevin durant'))
