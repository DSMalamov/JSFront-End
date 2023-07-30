function attachEvents() {
  document
    .querySelector("#submit")
    .addEventListener("click", getWeatherDataForLocation);

  async function getWeatherDataForLocation() {
    const locationName = document.querySelector("#location").value;
    const locationResponse = await (
      await fetch("http://localhost:3030/jsonstore/forecaster/locations")
    ).json();
  }
}

attachEvents();
