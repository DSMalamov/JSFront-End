function numModif(num) {
  let isSmaller = true;

  while (isSmaller) {
    const numToString = num.toString().split("");
    const intArr = Array.from(numToString, Number);
    let avgSum =
      intArr.reduce((total, curr) => total + curr, 0) / numToString.length;

    if (avgSum <= 5) {
      num += "9";
    } else {
      isSmaller = false;
    }
  }

  console.log(num);
}

numModif(101);
