// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`

function showTemp(event) {
    event.preventDefault();
    alert("It is 18 degrees")
}

let tempButton = document.querySelector("#temp-button")
tempButton.addEventListener("dblclick", showTemp);

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’

function replaceButtonLabel(event) {
    event.preventDefault();
    tempButton.innerHTML = "18 degrees"
}
tempButton.addEventListener("click", replaceButtonLabel)

 