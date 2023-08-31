function generateKey(length, characters) {
  const charLength = characters.length;
  const randomIndices = Array.from({ length }, () =>
    Math.floor(Math.random() * charLength)
  );

  const key = randomIndices.map((index) => characters[index]).join("");
  return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key); 
