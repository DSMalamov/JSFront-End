function signCheck(...arr) {
  const resultArr = arr.filter((arr) => arr < 0);

  if (resultArr.length % 2 === 0) {
    console.log(`Positive`);
  } else {
    console.log(`Negative`);
  }
}

signCheck(-6, -12, 14);
