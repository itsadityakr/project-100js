document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("input-str");
    const submitButton = document.getElementById("submit-btn");
    const outputDiv = document.querySelector(".output");

    submitButton.addEventListener("click", function () {
        let inputValue = inputField.value;
        let dataType;
        
        if (inputValue === "") {
            dataType = "Empty String";
        } else if (inputValue.toLowerCase() === "true" || inputValue.toLowerCase() === "false") {
            dataType = "Boolean";
        } else if (!isNaN(inputValue) && inputValue !== "") {
            dataType = "Number";
        } else {
            dataType = "String";
        }

        outputDiv.textContent = `Data Type: ${dataType}`;
    });
});
