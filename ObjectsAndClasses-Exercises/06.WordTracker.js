function solve(input) {
  const [serchedWords, ...words] = input;
  const wordOcc = serchedWords.split(" ").reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});

  words.forEach((word) => {
    if (wordOcc.hasOwnProperty(word)) {
      wordOcc[word] += 1;
    }
  });

  const result = Object.keys(wordOcc)
    .map((key) => [key, wordOcc[key]])
    .sort((a, b) => b[1] - a[1])
    .forEach(function ([key, value]) {
      console.log(`${key} - ${value}`);
    });
}

solve([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
