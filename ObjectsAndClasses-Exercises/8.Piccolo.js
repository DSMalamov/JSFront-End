function solve(input) {
  const parking = new Set();
  input.forEach((element) => {
    const [cmd, number] = element.split(", ");

    if (cmd === "IN") {
      parking.add(number);
    } else if (cmd === "OUT") {
      parking.delete(number);
    }
  });
  Array.from(parking)
    .sort()
    .forEach((el) => console.log(el));
}

solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
