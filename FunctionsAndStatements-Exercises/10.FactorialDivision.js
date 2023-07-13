function factorialDivision(num1, num2) {
  function factorialCalc(num) {
    if (num === 0) {
      return 1;
    }

    return num * factorialCalc(num - 1);
  }

  const fact1 = factorialCalc(num1);
  const fact2 = factorialCalc(num2);

  console.log((fact1 / fact2).toFixed(2));
}

factorialDivision(5, 2);
