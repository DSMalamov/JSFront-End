function SpiceMining(initial) {
  let days = 0;
  let spices = 0;

  while (initial >= 100) {
    spices += initial;
    days++;
    initial -= 10;

    if (spices >= 26) {
      spices -= 26;
    }
  }

  if (spices >= 26) {
    spices -= 26;
  }

  console.log(days);
  console.log(spices);
}

SpiceMining(450);
