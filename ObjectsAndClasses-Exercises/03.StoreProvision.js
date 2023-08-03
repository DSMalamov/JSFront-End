function store(availible, ordered) {
  const products = [...availible, ...ordered];
  const result = products.reduce((acc, curr, i) => {
    if (i % 2 === 0) {
      if (!acc.hasOwnProperty(curr)) {
        acc[curr] = Number(products[i + 1]);
      } else {
        acc[curr] += Number(products[i + 1]);
      }
    }

    return acc;
  }, {});

  Object.entries(result).forEach(function ([prod, quan]) {
    console.log(`${prod} -> ${quan}`);
  });
}

store(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
