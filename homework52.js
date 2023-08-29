let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47, ];

let positiveArr = arr.filter(el => el > 0)
let sumOsPositive = positiveArr.reduce((a, b) => a+b, 0)
console.log(`Сума позитивних елементів: ${sumOsPositive}`);
console.log(`Кількість позитивних елементів: ${positiveArr.length}`);

let min = arr.slice().sort((a,b) => a-b);
minElement = min[0]
console.log(`Мінімальний елемент масиву: ${minElement}`);
console.log(`Його порядковий номер: ${arr.indexOf(minElement)}`);

let max = arr.slice().sort((a,b) => b-a)
maxElement = max[0]
console.log(`Максимальний елемент масиву: ${maxElement}`)
console.log(`Його порядковий номер: ${arr.indexOf(maxElement)}`);

let negativeArr = arr.filter(el =>el < 0);
console.log(`Кількість негативних елементів: ${negativeArr.length}`)

let oddPositive = positiveArr.filter(el => el%2 != 0)
console.log(`Кількість непарних позитивних елементів: ${oddPositive.length}`);

let evenPositive = positiveArr.filter(el => el % 2 === 0)
console.log(`Кількість парних позитивних елементів: ${evenPositive.length}`);

let sumOfEvenPositive = evenPositive.reduce((a, b) => a + b, 0);
console.log(`Сума парних позитивних елементів: ${sumOfEvenPositive}`);

let sumOfOddPositive = oddPositive.reduce((a, b) => a + b, 0);
console.log(`Сума непарних позитивних елементів: ${sumOfOddPositive}`);

let productOfPositive = positiveArr.reduce((a, b) => a * b, 1);
console.log(`Добуток позитивних елементів: ${productOfPositive}`)

const newArray = arr.map((num) => (num === maxElement ? num : 0));

console.log(`Масив після обнулення: {newArray}`);


