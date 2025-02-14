// Waits for the entire HTML document to be loaded before running the script.
document.addEventListener("DOMContentLoaded", function () {

    // Selects the input field (where the user enters text) by its ID "input-str"
    const inputField = document.getElementById("input-str");

    // Selects the button (which the user clicks) by its ID "submit-btn"
    const submitButton = document.getElementById("submit-btn");

    // Selects the div (where the result will be displayed) using its class "output"
    const outputDiv = document.querySelector(".output");

    // Adds an event listener to the button, so when it's clicked, the function runs
    submitButton.addEventListener("click", function () {

        // Gets the value that the user entered in the input field
        let inputValue = inputField.value;

        // Variable to store the detected data type
        let dataType;

        // Checks if the input field is empty
        if (inputValue === "") {
            dataType = "Empty String"; // If empty, set dataType to "Empty String"

            // Checks if the input is either "true" or "false" (case insensitive) to determine if it's a boolean
        } else if (inputValue.toLowerCase() === "true" || inputValue.toLowerCase() === "false") {
            dataType = "Boolean";

            // Checks if the input is a number (but not an empty string)
        } else if (!isNaN(inputValue) && inputValue !== "") {
            dataType = "Number";

            // If none of the above conditions match, it's considered a string
        } else {
            dataType = "String";
        }

        // Displays the detected data type inside the outputDiv
        outputDiv.textContent = `Data Type: ${dataType}`;
    });
});
