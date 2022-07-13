let now = new Date();

let p = document.querySelector("p");

let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hour < 10) {
  hour = `0${hour}`;
}

p.innerHTML = `${day}, ${month} ${date} ${hour}:${minutes}`;

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
  let apiKey = "adac1684890b9dbfbc263d3fc6feb1a2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}`;
  let description = document.querySelector("#temperature-description");
  description.innerHTML = response.data.weather[0].description;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}
