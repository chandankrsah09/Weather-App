
const apiKey = "af6b3055ad1fe71761f1568dd8bde985";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").computedStyleMap.display = "block";
    document.querySelector(".weather").computedStyleMap.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "clouds") {
      weatherIcon.src = "image/clouds.png";
    } else if (data.weather[0].main == "clear") {
      weatherIcon.src = "image/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "image/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "image/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "image/mist.png";
    }

    document.querySelector(".error").computedStyleMap.display = "none";
    document.querySelector(".weather").computedStyleMap.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
