// Select the element with the class "result" and add a click event listener
document.querySelector(".result").addEventListener("click", (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Retrieve the first number from the input field with ID "num1" and convert it to a float
    const num1 = parseFloat(document.getElementById("num1").value);

    // Retrieve the second number from the input field with ID "num2" and convert it to a float
    const num2 = parseFloat(document.getElementById("num2").value);

    // Retrieve the selected operator from the dropdown with ID "operator"
    const operator = document.getElementById("operator").value;

    // Select the element with the class "output" where the result will be displayed
    const output = document.querySelector(".output");

    let result; // Declare a variable to store the result

    // Use a switch statement to determine the operation based on the selected operator
    switch (operator) {
        case "+": // If the operator is addition
            result = num1 + num2;
            break;
        case "-": // If the operator is subtraction
            result = num1 - num2;
            break;
        case "*": // If the operator is multiplication
            result = num1 * num2;
            break;
        case "/": // If the operator is division
            result = num2 !== 0 ? num1 / num2 : "Error: Division by zero"; // Prevent division by zero
            break;
        case "%": // If the operator is modulus (remainder)
            result = num2 !== 0 ? num1 % num2 : "Error: Division by zero"; // Prevent modulus by zero
            break;
        default: // If the operator is invalid
            result = "Invalid operator";
    }

    // Log the result to the console (useful for debugging)
    console.log(result);

    // Display the result in the output element
    output.innerHTML = result;
});
