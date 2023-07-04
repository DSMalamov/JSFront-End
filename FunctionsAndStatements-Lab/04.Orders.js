function bill(product, quantity) {
  let result = 0;

  switch (product) {
    case "coffee":
      result = 1.5 * quantity;
      break;
    case "water":
      result = 1 * quantity;
      break;
    case "coke":
      result = 1.4 * quantity;
      break;
    case "snacks":
      result = 2 * quantity;
      break;
  }

  console.log(result.toFixed(2));
}

bill("water", 5);
