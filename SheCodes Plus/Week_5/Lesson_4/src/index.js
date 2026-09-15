let apiKey = "7f33a0b1953o99044f4c30fb0c2t7542";
let city = "Sydney";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;


function displayTemperature(response) {
    console.log(response.data)
    let h1 = document.querySelector("h1");
    let sydneyTemp = Math.round(response.data.temperature.current);
    h1.innerHTML = `It is ${sydneyTemp} in ${city}`
}



axios.get(apiUrl).then(displayTemperature);
// let city = prompt("Enter a city:");
// let apiKey = "7f33a0b1953o99044f4c30fb0c2t7542"

// let apiUrl = 
// `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;


// function displayTemp(response) {
//     //   console.log(response.data.temperature.current);
//       let tempElememnt = document.querySelector("#temp");
//       let temp = Math.round(response.data.temperature.current);
//       let city = response.data.city;
//       let country = response.data.country;
//       let description = response.data.condition.description;
//       tempElememnt.innerHTML = `The temp  in ${city}, ${country}, is ${temp} 0°C (${description})`
// }
// axios.get(apiUrl).then(displayTemp);
// fetch(`${apiUrl}`)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));



// Now, let's think about that new displayCity function. 
// When Axios successfully gets the data, it will pass a response object 
// into your function containing all the weather details.

// How would you set up your displayCity function to receive that response,
//  and how will you find the temperature inside it to update the 
// current-temperature-value in your HTML?

// (Hint: If you aren't sure exactly how the API response is structured,
//  what is a helpful JavaScript command you can use inside your new 
// function to look at the data in your browser's developer tools?)