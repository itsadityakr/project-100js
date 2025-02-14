// Wait until the entire HTML document is fully loaded before executing the script
// This prevents errors that could occur if the script tries to access elements before they exist
document.addEventListener("DOMContentLoaded", () => {

    // Retrieve references to input fields and buttons using their IDs
    // These references allow us to access and modify their values in JavaScript

    const simpleInterestInput = document.getElementById("simpleInterest"); // Input field for Simple Interest
    const principleInput = document.getElementById("principle"); // Input field for Principal amount
    const rateInput = document.getElementById("rate"); // Input field for Rate of interest (percentage)
    const timeInput = document.getElementById("time"); // Input field for Time duration (in years)
    const calculateBtn = document.getElementById("calculateBtn"); // Button that triggers the calculation
    const outputDiv = document.querySelector(".output"); // Div where the result messages will be displayed

    // Attach an event listener to the "Calculate" button
    // When the button is clicked, the provided function executes
    calculateBtn.addEventListener("click", () => {

        // Retrieve the values entered by the user in the input fields
        // Convert them to floating-point numbers using `parseFloat()`
        // If the user leaves an input field empty, `parseFloat()` will return `NaN`
        // Using `|| 0` ensures that empty fields default to 0
        let simpleInterest = parseFloat(simpleInterestInput.value) || 0;
        let principle = parseFloat(principleInput.value) || 0;
        let rate = parseFloat(rateInput.value) || 0;
        let time = parseFloat(timeInput.value) || 0;

        // Create an array with all four values (SI, P, R, T)
        // Then, use the `filter()` method to count how many of them are zero
        let zeroCount = [simpleInterest, principle, rate, time].filter(val => val === 0).length;

        // Ensure exactly ONE field is empty (i.e., its value is zero)
        // If the user leaves more than one OR none of the fields empty, display an error message
        if (zeroCount !== 1) {
            // Update the `outputDiv` to show an error message in red color
            outputDiv.innerHTML = "<p style='color: red;'>⚠ Please leave exactly one field empty.</p>";
            return; // Exit the function early to prevent further calculations
        }

        let result; // Variable to store the calculated result
        let message = ""; // Variable to store the output message for the user

        // Identify which value needs to be calculated based on the empty field
        if (simpleInterest === 0) {
            // The Simple Interest field is empty, so calculate it using the formula: SI = (P * R * T) / 100
            result = (principle * rate * time) / 100;

            // Update the Simple Interest input field with the calculated value
            simpleInterestInput.value = result.toFixed(2); // Display result rounded to 2 decimal places

            // Prepare a success message for display
            message = `💰 Simple Interest: $${result.toFixed(2)}`;

        } else if (principle === 0) {
            // The Principal field is empty, so calculate it using the formula: P = (SI * 100) / (R * T)
            result = (simpleInterest * 100) / (rate * time);

            // Update the Principal input field with the calculated value
            principleInput.value = result.toFixed(2);

            // Prepare a success message for display
            message = `🏦 Principal: $${result.toFixed(2)}`;

        } else if (rate === 0) {
            // The Rate of Interest field is empty, so calculate it using the formula: R = (SI * 100) / (P * T)
            result = (simpleInterest * 100) / (principle * time);

            // Update the Rate input field with the calculated value
            rateInput.value = result.toFixed(2);

            // Prepare a success message for display
            message = `📈 Rate: ${result.toFixed(2)}%`;

        } else if (time === 0) {
            // The Time field is empty, so calculate it using the formula: T = (SI * 100) / (P * R)
            result = (simpleInterest * 100) / (principle * rate);

            // Update the Time input field with the calculated value
            timeInput.value = result.toFixed(2);

            // Prepare a success message for display
            message = `⏳ Time: ${result.toFixed(2)} years`;
        }

        // Update the `outputDiv` to display the result in green text with a checkmark (✅)
        outputDiv.innerHTML = `<p style='color: green; font-weight: bold;'>✅ ${message}</p>`;
    });
});
