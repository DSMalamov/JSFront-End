function priceForFruits(fruit, weight, priceKg) {
  const weightInKg = weight / 1000;

  console.log(`I need $${(weightInKg*priceKg).toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

priceForFruits('orange', 2500, 1.80);
