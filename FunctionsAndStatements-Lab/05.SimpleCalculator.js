function calculate(num1, num2, operation) {
  const calculator = {
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
  };
  return calculator[operation](num1, num2);
}

console.log(calculate(5, 5, "multiply"));
