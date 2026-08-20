//challenge 2
function logComments(response) {
    console.log(response.data); 
    console.log(response.data)
}
let apiUrl = "https://jsonplaceholder.typicode.com/comments";
axios.get(apiUrl).then(logComments);

let apiUrl2 = "https://jsonplaceholder.typicode.com/comments/1";
axios.get(apiUrl2).then(logComments);