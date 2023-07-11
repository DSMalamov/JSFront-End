function parser(str) {
  const person = JSON.parse(str);

  Object.entries(person).forEach(function ([key, value]) {
    console.log(`${key}: ${value}`);
  });
}

parser('{"name": "George", "age": 40, "town": "Sofia"}');
