function pointsValidation(arr) {
  let x1 = arr[0];
  let x2 = arr[2];
  let y1 = arr[1];
  let y2 = arr[3];

  function calcDistace(m1, m2, m3, m4) {
    return Math.sqrt((m3 - m1) ** 2 + (m4 - m2) ** 2);
  }

  function isValid(n1, n2, n3, n4) {
    const distance = calcDistace(n1, n2, n3, n4);
    const isValid = Number.isInteger(distance);
    const status = isValid ? "valid" : "invalid";
    console.log(`{${n1}, ${n2}} to {${n3}, ${n4}} is ${status}`);
  }

  isValid(x1, y1, 0, 0);
  isValid(x2, y2, 0, 0);
  isValid(x1, y1, x2, y2);
}

pointsValidation([2, 1, 1, 1]);
