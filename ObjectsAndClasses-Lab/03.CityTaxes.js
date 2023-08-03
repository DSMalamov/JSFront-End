function cityTaxes(name, population, treasury) {
  return {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: 10,

    collectTaxes: function () {
      this.treasury += this.population * this.taxRate;
      return treasury;
    },
    applyGrowth: function (percentage) {
      this.population += Math.floor(this.population * percentage) / 100;
      return population;
    },
    applyRecession: function (percentage) {
      this.treasury -= Math.floor(this.treasury * percentage) / 100;
      return treasury;
    },
  };
}

const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
