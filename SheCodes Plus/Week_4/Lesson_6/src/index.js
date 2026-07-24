//challenge 1
let now = new Date();
console.log(now);

//challenge 2
let milliSecs = now.getMilliseconds();
console.log(milliSecs);

//challenge 3
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = days[now.getDay()];
console.log(currentDay);

//challenge 4
let year = now.getFullYear();
console.log(year);

//challenge 5
let months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let currentMonth = months[now.getMonth()];
console.log(currentMonth);
let dayOfMonth = now.getDate();

//challenge 6
let h2 = document.querySelector("h2");
h2.innerHTML = `Today is ${currentDay}, ${currentMonth} ${dayOfMonth}, ${year}`;
console.log(h2.innerHTML);

//challenge 7
function formatDate(date) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let day = days[date.getDay()];
  let month = months[date.getMonth()];
  let dayNumber = date.getDate();
  let currentYear = date.getFullYear();

  return `${day}, ${month} ${dayNumber}, ${currentYear}`;
}

console.log(formatDate(new Date()));