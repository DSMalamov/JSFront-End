function adressBook(arr) {
  const book = arr.reduce((acc, curr) => {
    const [name, adr] = curr.split(":");

    acc[name] = adr;
    return acc;
  }, {});

  Object.entries(book)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(function ([name, adr]) {
      console.log(`${name} -> ${adr}`);
    });
}

adressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
