function printEvenAndOddSum(num) {
  let evenSum = 0;
  let oddSum = 0;
  let numToString = num.toString();

  for (let index = 0; index < numToString.length; index++) {
    let num = Number(numToString[index]);
    if (num % 2 == 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

printEvenAndOddSum(1000435);
