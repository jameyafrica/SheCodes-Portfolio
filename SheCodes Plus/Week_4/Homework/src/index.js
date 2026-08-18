let now = new Date();
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = days[now.getDay()];

let currentTime = now.toLocaleTimeString();


let day = document.querySelector("#current-time");
day.innerHTML = `${currentDay} ${currentTime}`;


function displayCity(event) {
    event.preventDefault();
    let city = document.querySelector(".current-weather")
    
    city.innerHTML = userCity.value;
}
let userCity = document.querySelector("#user-city")
let form = document.querySelector("#search-form");
form.addEventListener("submit", displayCity);



