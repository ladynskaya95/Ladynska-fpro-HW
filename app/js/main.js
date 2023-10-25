function getWeather(city) {
  const apiKey = "5d066958a60d315387d9492393935c19";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const temperatureElement = document.getElementById("temperature");
      const pressureElement = document.getElementById("pressure");
      const descriptionElement = document.getElementById("description");
      const humidityElement = document.getElementById("humidity");
      const windSpeedElement = document.getElementById("wind-speed");
      const windDirectionElement = document.getElementById("wind-direction");
      const weatherIconElement = document.getElementById("weather-icon");

      temperatureElement.textContent = data.main.temp;
      pressureElement.textContent = data.main.pressure;
      descriptionElement.textContent = data.weather[0].description;
      humidityElement.textContent = data.main.humidity;
      windSpeedElement.textContent = data.wind.speed;
      windDirectionElement.textContent = data.wind.deg;
      weatherIconElement.src = `https://openweathermap.org/img/w/10d.png`;
    })
    .catch((error) => {
      console.log("Помилка при отриманні даних про погоду", error);
    });
}

getWeather("LVIV");
