function pow(x, n) {
  return n === 0 ? 1 : x * pow(x, n - 1);
}

const num = 3;
const degree = 5;
const result = pow(num, degree);
console.log(`${num} в ступені ${degree} дорівнює ${result}`);
