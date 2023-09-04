function createAccumulator() {
  let total = 0;

  return function accumulator(value) {
    total += value;
    return total;
  };
}

const sum = createAccumulator();

const result1 = sum(3);
console.log(result1); 

const result2 = sum(5);
console.log(result2); 

const result3 = sum(20);
console.log(result3); 