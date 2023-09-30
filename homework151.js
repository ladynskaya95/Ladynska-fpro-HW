//1
// for (let i = 20; i <= 30; i += 0.5) {
//   console.log(i);
// }

//2
// const dolExchangeRate = 27;
// for (let dollars = 10; dollars <= 100; dollars += 10) {
//   const uah = dollars * dolExchangeRate;
//   console.log(`${dollars} доларів = ${uah} гривень`);
// }

//3
// const N = 100; 
// for (let i = 1; i <= 100; i++) {
//   const square = i * i;
//   if (square <= N) {
//     console.log(i);
//   } else {
//     break; 
//   }
// }

//4
// function isSimple(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// const numToCheck = 13; 
// console.log(`${numToCheck} є простим числом: ${isSimple(numToCheck)}`);

//5
function canBeExpressed(num) {
  if (num <= 0) {
    return false;
  }
  while (num % 3 === 0) {
    num /= 3;
  }
  return num === 1;
}

const num3 = 81; 
console.log(
  `${num3} можна представити як 3^n: ${canBeExpressed(num3)}`
);
