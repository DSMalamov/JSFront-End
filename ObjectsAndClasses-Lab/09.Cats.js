function catSound(arr) {
  const cat = arr.reduce((acc, curr) => {
    const [name, age] = curr.split(" ");
    acc[name] = age;
    return acc;
  }, {});

  Object.entries(cat).forEach(function ([name, age]) {
    console.log(`${name}, age ${age} says Meow`);
  });
}

catSound(["Candy 1", "Poppy 3", "Nyx 2"]);
