const apiKey = "48a921e65e456f3fc7892e6c6ac4aa4f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search-bar input");
let searchButton = document.querySelector(".search-bar button");
let suggestionUrl = "https://api.openweathermap.org/data/2.5/find?";

async function getWeatherInfo(cityName) {
  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);

  let city = document.querySelector(".city-name");
  let temperature = document.querySelector(".temperature");
  let humidity = document.querySelector(".humidity");
  let wind = document.querySelector(".wind");
  let weatherIcon = document.querySelector(".weather-icon");
  let weatherInfo = document.querySelector(".weather");

  city.innerHTML = data.name;
  temperature.innerHTML = Math.round(data.main.temp) + "°C";
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main === "Clear") {
    weatherIcon.src = "/assets/clear.png";
  } else if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "/assets/clouds.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "/assets/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "/assets/mist.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "/assets/rain.png";
  } else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "/assets/snow.png";
  }

  weatherInfo.style.display = "block";
}

searchButton.addEventListener("click", () => {
  getWeatherInfo(searchBox.value);
});

/**
 * YouTube Link:
 * https://www.youtube.com/watch?v=MIYQR-Ybrn4&list=TLPQMTQwNjIwMjR_i5en5WxHPQ&index=14
 */
