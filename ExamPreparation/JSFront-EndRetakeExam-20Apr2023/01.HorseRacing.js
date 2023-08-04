function solve(input) {
  const horses = input.shift().split("|");

  let line = input.shift();

  while (line !== "Finish") {
    const cmdArg = line.split(" ");
    const cmd = cmdArg[0];
    const horse1 = cmdArg[1];
    const horse2 = cmdArg[2];

    if (cmd === "Retake") {
      const firstIdx = horses.indexOf(horse1);
      const secondIdx = horses.indexOf(horse2);

      if (firstIdx < secondIdx) {
        horses[firstIdx] = horse2;
        horses[secondIdx] = horse1;
        console.log(`${horse1} retakes ${horse2}.`);
      }
    } else if (cmd === "Rage") {
      const idx = horses.indexOf(horse1);

      if (idx === horses.length - 2) {
        horses[horses.length - 2] = horses[horses.length - 1];
        horses[horse1.length - 1] = horse1;
      } else if (idx !== horses.length - 1) {
        horses[idx] = horses[idx + 1];
        horses[idx + 1] = horses[idx + 2];
        horses[idx + 2] = horse1;
      }

      console.log(`${horse1} rages 2 positions ahead.`);
    } else if (cmd === "Trouble") {
      const firstIdx = horses.indexOf(horse1);
      if (firstIdx !== 0) {
        horses[firstIdx] = horses[firstIdx - 1];
        horses[firstIdx - 1] = horse1;
        console.log(`Trouble for ${horse1} - drops one position.`);
      }
    } else if (cmd === "Miracle") {
      const horse = horses.shift();
      horses.push(horse);
      console.log(`What a miracle - ${horse} becomes first.`);
    }

    line = input.shift();
  }

  console.log(horses.join("->"));
  console.log(`The winner is: ${horses.pop()}`);
}

solve([
  "Onyx|Domino|Sugar|Fiona",
  "Trouble Onyx",
  "Retake Onyx Sugar",
  "Rage Domino",
  "Miracle",
  "Finish",
]);
