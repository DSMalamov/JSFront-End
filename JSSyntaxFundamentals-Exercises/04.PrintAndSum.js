function result(num1, num2) {
  const arr = [];
  let sum = 0;

  for (let index = num1; index <= num2; index++) {
    sum += index;
    arr.push(index);
  }

  console.log(arr.join(` `));
  console.log(`Sum: ${sum}`);
}

result(5, 10);
