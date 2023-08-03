function createHeroes(input) {
  let heroes = [];
  input
    .map((x) => x.split(" / "))
    .map((x) => heroes.push({ name: x[0], level: x[1], items: x[2] }));

  heroes
    .sort((a, b) => Number(a.level) - Number(b.level))
    .forEach((h) =>
      console.log(`Hero: ${h.name}\nlevel => ${h.level}\nitems => ${h.items}`)
    );
}

createHeroes([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
