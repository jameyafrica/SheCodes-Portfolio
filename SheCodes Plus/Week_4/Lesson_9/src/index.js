//Challenge 1
function hooray(event) {
    event.preventDefault();
    alert("Hooray!")
}

let pushButton = document.querySelector("#special-button");
pushButton.addEventListener("click", hooray);


//Challenge 2
function passwordValue(event) {
    event.preventDefault();
    let password = document.querySelector("#password-input");
    alert(`Your password is: ${password.value}`);
    // password.addEventListener("submit", )

}

let submitForm = document.querySelector("#password-form");
submitForm.addEventListener("submit", passwordValue);


//Challenge 3
function alertUser(event) {
    event.preventDefault();
    let userEmail = document.querySelector("#email-input") ;
    let userUsername = document.querySelector("#username-input");
    alert(`Your username is: ${userUsername.value} and your email address is ${userEmail.value}`)
}

let form = document.querySelector("#signup-form");
form.addEventListener("submit", alertUser);