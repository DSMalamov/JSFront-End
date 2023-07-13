function cnvToJSON(name, lastName, hairColor) {
  let person = {
    name,
    lastName,
    hairColor,
  };

  return JSON.stringify(person);
}

console.log(cnvToJSON("George", "Jones", "Brown"));
