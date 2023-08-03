function solve() {
  const infoBox = document.querySelector("#info .info");
  const departButton = document.querySelector("#depart");
  const arriveButton = document.querySelector("#arrive");

  let nextStop = {
    name: "",
    next: "depot",
  };

  function depart() {
    fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStop.next}`)
      .then((res) => res.json())
      .then((busStop) => {
        nextStop = busStop;
        departButton.disabled = true;
        arriveButton.disabled = false;
        infoBox.textContent = `Next stop ${nextStop.name}`;
      })
      .catch(() => {
        departButton.disabled = true;
        arriveButton.disabled = true;
        infoBox.textContent = `Error`;
      });
  }

  async function arrive() {
    departButton.disabled = false;
    arriveButton.disabled = true;
    infoBox.textContent = `Arriving at ${nextStop.name}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
