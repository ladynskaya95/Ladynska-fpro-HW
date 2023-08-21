//task1
let i = 10;
let res = "";

while (i <= 20) {
  if (i < 20) {
    res += i + ", ";
  } else {
    res += i;
  }
  i++;
}

console.log(res);


//task2
// let i = 10;

// do {
//   console.log(`Квадрат числа ${i} дорівнює ${i * i}`);
//   i++;
// } while (i <= 20);


//task3
// for (let i = 1; i <= 10; i++) {
//   console.log(`7 * ${i} = ${7 * i}`);
// }


//task4

// let sum = 0;

// for (let i=1; i<=15; i++) {
//         sum +=i;
// }
// console.log(sum)


//task5
// let product = 1;

// for (let i = 15; i <= 35; i++) {
//   product *= i;
// }

// console.log(product);


//task6
// let sum = 0;
// let count = 0;

// for (let i = 1; i <= 500; i++) {
//   sum += i;
//   count++;
// }

// let average = sum/count;

// console.log(average);


//task7
// let sum = 0;

// for (let i = 30; i <= 80; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }

// console.log(sum);


//task8
// for (let i = 100; i <= 200; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }


//task9
// let N = +prompt("Введіть натуральне число:");
// console.log(`Дільники числа ${N}:`);

// for (let i = 1; i <= N; i++) {
//   if (N % i === 0) {
//     console.log(i);
//   }
// }


//task10
// let N = +prompt("Введіть натуральне число:");
// let even = 0;

// for (let i = 1; i <= N; i++) {
//   if (N % i === 0 && i % 2 === 0) {
//     even++;
//   }
// }

// console.log(`Кількість парних дільників числа ${N}: ${even}`);



//task11
// let N =+prompt("Введіть натуральне число:");
// let sumOfEven = 0;

// for (let i = 1; i <= N; i++) {
//   if (N % i === 0 && i % 2 === 0) {
//     sumOfEven += i;
//   }
// }

// console.log(`Сума парних дільників числа ${N}: ${sumOfEven}`);


//task12
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }
