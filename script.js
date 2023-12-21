async function getreport(city) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f690c5adddb6dee344738bb0c4193b8b&units=metric`
  );
  let weatherData = await response.json();
  console.log(weatherData);
  document.querySelector("#temp").innerHTML =
    Math.round(weatherData.main.temp) + "°C";
  document.querySelector("#city").innerHTML = weatherData.name;
  document.querySelector("#humidity").innerHTML =
    weatherData.main.humidity + "%";
  document.querySelector("#wind").innerHTML = weatherData.wind.speed + " km/h";
  let weatherCondition = weatherData.weather[0].main;
  let weatherImg = document.querySelector("#weather-icon");
  console.log(weatherCondition);
  weatherImg.src = `./images/${weatherCondition}.png`;
}

document.querySelector("#btn").addEventListener("click", () => {
  let inpt = document.querySelector("#inpt");
  let cityName = inpt.value;
  getreport(cityName);
});
