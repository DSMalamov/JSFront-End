function pyramidMaterials(base, increment) {
  let steps = 0;
  let stone = 0;
  let marble = 0;
  let lazuli = 0;
  let gold = 0;

  while (base > 2) {
    const inner = (base - 2) * (base - 2) * increment;
    const outer = (base * base - (base - 2) * (base - 2)) * increment;
    steps++;
    stone += inner;
    if (steps % 5 === 0) {
      lazuli += outer;
    } else {
      marble += outer;
    }

    base = base - 2;
  }

  gold += base * base * increment;
  steps++;

  console.log(`Stone required: ${Math.round(stone)}`);
  console.log(`Marble required: ${Math.round(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.round(lazuli)}`);
  console.log(`Gold required: ${Math.round(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}

pyramidMaterials(23, 0.5);
