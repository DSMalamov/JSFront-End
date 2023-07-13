// function findOdd(input) {
//   const inpArr = input.split(" ");

//   const words = input.split(" ").reduce((acc, curr) => {
//     let value = curr.toLowerCase();
//     acc[value] = 0;
//     return acc;
//   }, {});

//   inpArr.forEach((word) => {
//     const currWord = word.toLowerCase();
//     if (words.hasOwnProperty(currWord)) {
//       words[currWord] += 1;
//     }
//   });

//   const result = Object.keys(words)
//     .filter((word) => {
//       if (words[word] % 2 != 0) {
//         return word;
//       }
//     })
//     .map((key) => [key, words[key]])
//     .sort((a, b) => b[1] - a[1]);

//   let print = "";

//   for (let index = 0; index < result.length; index++) {
//     let currArr = result[index];
//     print += `${currArr[0]} `;
//   }

//   console.log(print);
// }

function findOdd(input) {
  const result = {};
  for (let word of input.split(" ")) {
    let lowered = word.toLowerCase();

    if (result.hasOwnProperty(lowered)) {
      result[lowered] += 1;
    } else {
      result[lowered] = 1;
    }
  }

  let stringResult = Object.keys(result)
    .filter((word) => result[word] % 2 !== 0)
    .sort((a, b) => result[b] - result[a])
    .join(" ");

  console.log(stringResult);
}

findOdd("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
