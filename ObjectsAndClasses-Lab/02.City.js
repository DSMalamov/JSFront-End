// function cityData(obj) {
//   let entries = Object.entries(obj);
//   for (const [key, value] of entries) {
//     console.log(`${key} -> ${value}`);
//   }
// }

function cityData(obj) {
  Object.entries(obj).forEach(function ([key, value]) {
    console.log(`${key} -> ${value}`);
  });
}

cityData({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});
