function loadingBar(num) {
  const percentages = num / 10;
  const bar = "%".repeat(percentages) + ".".repeat(10 - percentages);

  if (percentages === 10) {
    console.log("100% Complete!");
  } else {
    console.log(`${num}% [${bar}]`);
    console.log(`Still loading...`);
  }
}

loadingBar(30);
