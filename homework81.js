//1
// function averageOfNumbers(arr) {
//     let numbers = []

//     for (const el of arr) {
//         if (typeof el === "number") {
//             numbers.push(el)
//         }
//     }

//     if (numbers.length > 0) {
//         const sum = numbers.reduce((sum, num) => sum+num, 0);
//         const average = sum / numbers.length;
//         return average;
//     } else {
//         return null;
//     }
// }


// const myArr = [ 0, 8, 6, "apple", 5.4];
// const averageOfMyNumbers = averageOfNumbers(myArr);
// if (averageOfMyNumbers !== null) {
//     console.log(`Середнє арифметичне числових елементів: ${averageOfMyNumbers}`);
// } else {
//     console.log("В масиві немає числових елементів")
// }


//2
// function doMath(x, znak, y){
//       switch (znak) {
//         case "+":
//             return x + y;
//         case "-":
//             return x - y;
//         case "*":
//             return x * y;
//         case "/":
//             if (y === 0) {
//                 return "Ділення на нуль неможливе.";
//             }
//             return x / y;
//         case "%":
//             if (y === 0) {
//                 return "Ділення на нуль неможливе.";
//             }
//             return x % y;
//         case "^":
//             return Math.pow(x, y);
//         default:
//             return "Невідомий оператор";
//     }
// }
// const x = +prompt("Введіть перше число (x):");
// const y = +prompt("Введіть друге число (y):");
// const znak = prompt("Введіть математичний оператор (+, -, *, /, % або ^):");


// const result = doMath(x, znak, y);
// console.log(`Результат: ${result}`);


//3
// function createArray() {
//     const basicArrayLength = +prompt("Введіть довжину основного массиву")
//     const childArrayLength = +prompt("Введіть довжину внутрішніх массивів");

//     const nestedArray = [];

//     for (let i = 0; i< basicArrayLength; i++) {
//         const childArray = [];
//         for (let j = 0; j < childArrayLength; j++) {
//             const element = +prompt(
//               `Введіть значення для елементу [${i}][${j}]:`
//             );
//             childArray.push(element)
//         }
//         nestedArray.push(childArray)
//     }

//     return nestedArray

// }

// const myNestedArray = createArray();

// console.log(`Отриманий двовимірний масив:`)

// console.log(myNestedArray)


//4
function deleteSymbols(string, symToDelete) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    const symbol = string[i];
    if (!symToDelete.includes(symbol)) {
      newString += symbol;
    }
  }

  return newString;
}


const string = prompt("Введіть рядок:");
const symToDelete = prompt(
  "Введіть символи для видалення (без пробілів):"
).split("");


const res = deleteSymbols(string, symToDelete);
console.log(`Результат: ${res}`);
