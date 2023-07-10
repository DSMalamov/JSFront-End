function Calcexpenses(loses, hprice, swprice, shprice, aprice) {
  let expenses = 0;
  //   for (let index = 1; index < loses; index++) {
  //     if (index % 2 === 0 && index % 3 === 0 && shBreakscounter === 1) {
  //       expenses += hprice + swprice + shprice + aprice;
  //       shBreakscounter = 0;
  //       continue;
  //     }
  //     if (index % 2 === 0 && index % 3 === 0) {
  //       expenses += hprice + swprice + shprice;
  //       shBreakscounter++;
  //       continue;
  //     }
  //     if (index % 3 === 0) {
  //       expenses += swprice;
  //       continue;
  //     }
  //     if (index % 2 === 0) {
  //       expenses += hprice;
  //     }
  //   }
  const hexp = Math.floor(loses / 2) * hprice;
  const swexp = Math.floor(loses / 3) * swprice;
  const shexp = Math.floor(loses / 6) * shprice;
  const aexp = Math.floor(loses / 12) * aprice;

  expenses = hexp + swexp + shexp + aexp;

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

Calcexpenses(7, 2, 3, 4, 5);
