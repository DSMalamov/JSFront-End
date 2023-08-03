function bitcoinMining(input) {
  let bitcoins = 0;
  let daysOfFirstBC = 0;
  let income = 0;

  for (let index = 1; index <= input.length; index++) {
    const grams = input[index - 1];
    let cIncome = grams * 67.51;

    if (index % 3 === 0) {
      cIncome *= 0.7;
    }

    income += cIncome;

    while (income >= 11949.16) {
      bitcoins++;
      income -= 11949.16;
      if (daysOfFirstBC === 0) {
        daysOfFirstBC = index;
      }
    }
  }

  console.log(`Bought bitcoins: ${bitcoins}`);
  if (bitcoins > 0) {
    console.log(`Day of the first purchased bitcoin: ${daysOfFirstBC}`);
  }

  console.log(`Left money: ${income.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);
