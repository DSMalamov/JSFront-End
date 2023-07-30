function attachEvents() {
  document
    .querySelector("#submit")
    .addEventListener("click", getWeatherDataForLocation);

  const wSymbol = {
    Sunny: "☀",
    "Partly sunny": "⛅",
    Overcast: "☁",
    Rain: "☂",
  };

  async function getWeatherDataForLocation() {
    const locationName = document.querySelector("#location").value;
    const locationResponse = await (
      await fetch("http://localhost:3030/jsonstore/forecaster/locations")
    ).json();

    const location = locationResponse.find((l) => l.name === locationName);

    const currLocationCondition = await (
      await fetch(
        `http://localhost:3030/jsonstore/forecaster/today/${location.code}`
      )
    ).json();

    const currLocationUpcoming = await (
      await fetch(
        `http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`
      )
    ).json();

    document.querySelector("#forecast").style.display = "block";

    const currWeatherContainer = document.createElement("div");
    currWeatherContainer.classList.add("forecast");

    const conditionSymbol = document.createElement("span");
    conditionSymbol.classList.add("condition", "symbol");
    conditionSymbol.textContent =
      wSymbol[currLocationCondition.forecast.condition];
    currWeatherContainer.appendChild(conditionSymbol);

    const condition = document.createElement("span");
    condition.classList.add("condition");

    condition.appendChild(
      createForecastElement(currLocationCondition.name, "forecast-data")
    );

    condition.appendChild(
      createForecastElement(
        `${currLocationCondition.forecast.low}°/${currLocationCondition.forecast.high}°`,
        "forecast-data"
      )
    );

    condition.appendChild(
      createForecastElement(
        currLocationCondition.forecast.condition,
        "forecast-data"
      )
    );

    function createForecastElement(content, elClass) {
      const element = document.createElement("span");
      element.classList.add(elClass);
      element.textContent = content;

      return element;
    }
    currWeatherContainer.appendChild(condition);

    document.querySelector("#current").appendChild(currWeatherContainer);

    const threeDayFCcontainer = document.createElement("div");
    threeDayFCcontainer.classList.add("forecast-info");

    currLocationUpcoming.forecast.forEach((element) => {
      threeDayFCcontainer.appendChild(createTDForecastElement(element));
    });

    document.querySelector("#upcoming").appendChild(threeDayFCcontainer);

    function createTDForecastElement(date) {
      const element = document.createElement("span");
      element.classList.add("upcoming");

      const symbol = document.createElement("span");
      symbol.classList.add("symbol");
      symbol.textContent = wSymbol[date.condition];
      element.appendChild(symbol);

      const temp = document.createElement("span");
      temp.classList.add("forecast-data");
      temp.textContent = `${date.low}°/${date.high}°`;
      element.appendChild(temp);

      const cond = document.createElement("span");
      cond.classList.add("forecast-data");
      cond.textContent = date.condition;
      element.appendChild(cond);

      return element;
    }

    console.log(currLocationUpcoming);
  }
}

attachEvents();
