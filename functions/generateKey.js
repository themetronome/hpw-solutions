function generateKey(length, chars) {
  const base = chars.length;
  let key = '';

  for(let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * base);
    key += chars[index]
  }
  return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(27, characters));
