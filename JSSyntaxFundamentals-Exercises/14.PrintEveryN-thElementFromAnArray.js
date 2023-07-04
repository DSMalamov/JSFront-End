function printNel(arr, num) {
  const result = [];
  for (let index = 0; index < arr.length; index++) {
    if (index % num == 0) {
      result.push(arr[index]);
    }
  }

    return result;
}

printNel(["5", "20", "31", "4", "20"], 2);
