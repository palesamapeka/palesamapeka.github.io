const apiKey = "48a921e65e456f3fc7892e6c6ac4aa4f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=welkom";

async function getWeatherInfo() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data.main);

  let city = document.querySelector(".city-name");
  let temperature = document.querySelector(".temperature");
  let humidity = document.querySelector(".humidity");
  let wind = document.querySelector(".wind")

  city.innerHTML = data.name;
  temperature.innerHTML = (data.main.temp).toFixed(0) + "°C";
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + " km/h";

}

getWeatherInfo();