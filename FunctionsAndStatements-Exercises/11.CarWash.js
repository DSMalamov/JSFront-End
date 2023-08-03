function washing(cmds) {
  const cmdArg = {
    soap: (cleanPerc) => cleanPerc + 10,
    water: (cleanPerc) => (cleanPerc *= 1.2),
    "vacuum cleaner": (cleanPerc) => (cleanPerc *= 1.25),
    mud: (cleanPerc) => (cleanPerc *= 0.9),
  };

  let cleanPerc = cmds.reduce(function (total, current) {
    return cmdArg[current](total);
  }, 0);

  return `The car is ${cleanPerc.toFixed(2)}% clean.`;
}

console.log(
  washing(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"])
);
