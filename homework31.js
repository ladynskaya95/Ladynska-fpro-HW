let number1 = +prompt("Введіть перше число:");
let number2 = +prompt("Введіть друге число:");

let sum = number1 + number2;
let difference = number1 - number2;
let product = number1 * number2;
let quotient = number1 / number2;

let message = `${number1} + ${number2} = ${sum}\n${number1} - ${number2} = ${difference}\n${number1} * ${number2} = ${product}\n${number1} / ${number2} = ${quotient}`;

alert(message);