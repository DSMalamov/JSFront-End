function printPrice(group, type, day) {
  const prices = {
    Students: {
      Friday: 8.45,
      Saturday: 9.8,
      Sunday: 10.46,
    },
    Business: {
      Friday: 10.9,
      Saturday: 15.6,
      Sunday: 16,
    },
    Regular: {
      Friday: 15,
      Saturday: 20,
      Sunday: 22.5,
    },
  };

  const cost = prices[type][day];
  let sum = group * cost;

  if (type === `Students` && group >= 30) {
    sum *= 0.85;
  } else if (type === `Business` && group >= 100) {
    sum -= cost * 10;
  } else if (type === `Regular` && group >= 10 && group <= 20) {
    sum *= 0.95;
  }

  console.log(`Total price: ${sum.toFixed(2)}`);
}

printPrice(40, "Regular", "Saturday");
