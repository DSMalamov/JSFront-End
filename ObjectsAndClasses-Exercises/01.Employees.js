function printEmpl(arr) {
  const employee = arr.reduce((acc, curr) => {
    acc[curr] = curr.length;
    return acc;
  }, {});

  Object.entries(employee).forEach(function ([name, number]) {
    console.log(`Name: ${name} -- Personal Number: ${number}`);
  });
}

printEmpl([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
