  let apiKey = `7f33a0b1953o99044f4c30fb0c2t7542`

function displayCity(response) {

  let currentTempValue = document.querySelector(".current-temperature-value")
    console.log(response.data)
    currentTempValue.innerHTML =  Math.round(response.data.temperature.current)

    let currentCity = document.querySelector("#current-city")
    currentCity.innerHTML = response.data.city


}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;

  let apiKey = `7f33a0b1953o99044f4c30fb0c2t7542`
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCity)
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
