function calculate(num1, operation, num2) {
  const calculator = {
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
  };
  console.log(calculator[operation](num1, num2).toFixed(2));
}

calculate(5, "+", 10);
