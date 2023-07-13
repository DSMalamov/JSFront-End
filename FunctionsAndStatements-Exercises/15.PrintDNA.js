function printDNA(rows) {
  const pattern = [
    [`A`, `T`],
    [`C`, `G`],
    [`T`, `T`],
    [`A`, `G`],
    [`G`, `G`],
  ];

  for (let index = 0; index < rows; index++) {
    const curDNA = pattern[index % pattern.length];
    if (index % 4 === 0) {
      console.log(`**${curDNA[0]}${curDNA[1]}**`);
    } else if (index % 2 != 0) {
      console.log(`*${curDNA[0]}--${curDNA[1]}*`);
    } else {
      console.log(`${curDNA[0]}----${curDNA[1]}`);
    }
  }
}

printDNA(10);
