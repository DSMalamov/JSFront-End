function sortTheNames(array) {
  let sortedArray = array.sort((a, b) => a.localeCompare(b));
  for (let index = 0; index < sortedArray.length; index++) {
    console.log(`${index + 1}.${sortedArray[index]}`);
  }
}

printsortedNames(["John", "Bob", "Christina", "Ema"]);
