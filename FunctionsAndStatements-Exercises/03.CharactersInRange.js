function charPrint(str1, str2) {
  const min = Math.min(str1.charCodeAt(0), str2.charCodeAt(0));
  const max = Math.max(str1.charCodeAt(0), str2.charCodeAt(0));
  const result = [];
  for (let index = min + 1; index < max; index++) {
    result.push(String.fromCharCode(index));
  }

  console.log(result.join(" "));
}

charPrint("C", "#");
