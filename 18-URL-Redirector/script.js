const btnSubmit = document.querySelector(`.submit`); // Selecting the button element with the class "submit" and storing it in btnSubmit

btnSubmit.addEventListener(`click`, function (event) { // Adding a click event listener to btnSubmit that triggers a function when clicked
    const url = document.getElementById(`url`).value; // Getting the value entered in the input field with the ID "url" and storing it in the variable url
    const isChecked = document.getElementById(`check`).checked; // Checking if the checkbox with the ID "check" is checked and storing the boolean result in isChecked
    event.preventDefault(); // Preventing the default form submission behavior to handle redirection manually

    if (isChecked) { // Checking if the checkbox is checked
        window.open(`${url}`, "_blank"); // If checked, open the URL in a new tab or window
    } else { 
        window.location.href = `${url}`; // If not checked, redirect the current window to the specified URL
    }
});
