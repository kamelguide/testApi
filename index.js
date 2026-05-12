const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&units=metric&lang=fr&q=";

function getWeatherData(city, callback) {
  const url = BASE_URL + city;

  fetch(url)
    .then((res) => res.json())
    .then((weatherData) => callback(null, weatherData))
    .catch((error) => callback(error, null));
}

function displayWeatherData(city) {
  getWeatherData(city, (error, weatherData) => {
    if (error) {
      console.error("Error fetching weather data:", error);
      return;
    }

    console.log("Weather data for", weatherData.name + ":", weatherData.main["temp"] + "°C", weatherData.weather[0].description);
  });
}

displayWeatherData("sousse,tn");