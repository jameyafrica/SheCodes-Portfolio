


let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here




let city = prompt("Enter a city").toLowerCase();

if (city in weather) {

let temp = Math.round(weather[city].temp);      // 1 decimal place
let humidity = Math.round(weather[city].humidity); // whole number

alert(`It is currently ${temp}°C in ${city} with a humidity of ${humidity}%.`);
}

else{ alert(`Sorry, we don't know the weather for ${city}, try going to https://www.google.com/search?q=weather+${city}.`)}



//whenever hte user inputs the city,
// need to check if the city that was entered matches one of the cities in the weather object
//if it does match -> alert the weather results
// It is currently 19°C (66°F) in Paris with a humidity of 80%


// const data = {
//   status: "success",
//   payload: {
//     item: "Laptop",
//     price: 1200
//   }
// };

// for (let key in data) {
//   if (typeof data[key] === "object" && data[key] !== null) {
//     // Look inside the nested object
//     for (let nestedKey in data[key]) {
//       console.log(`${nestedKey}: ${data[key][nestedKey]}`);
//     }
//   } else {
//     console.log(`${key}: ${data[key]}`);
//   }
// }
