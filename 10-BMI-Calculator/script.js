// Select the input field where the user enters their weight in kilograms
const kg = document.getElementById("input-kg");

// Select the input field where the user enters their height in centimeters
const cm = document.getElementById("input-cm");

// Select the button that triggers the BMI calculation
const btn = document.getElementById("submit-btn");

// Select the div where the output message (BMI result) will be displayed
const message = document.querySelector(".output-div");

/**
 * Function to calculate BMI (Body Mass Index).
 * It retrieves the user's weight and height, validates the input,
 * calculates BMI, categorizes it, and displays the result with appropriate styling.
 */
const bmi = () => {
    // Convert the input values to floating-point numbers
    const mass = parseFloat(kg.value);  // Convert weight input to a number
    const height = parseFloat(cm.value) / 100;  // Convert height from cm to meters

    // Validate input: Check if the user entered valid numbers greater than zero
    if (!mass || !height || mass <= 0 || height <= 0) {
        message.innerHTML = `<p style="color: red;">Please enter valid numbers!</p>`;
        return; // Stop execution if input is invalid
    }

    // Calculate BMI using the formula: BMI = mass (kg) / height² (m²)
    let res = (mass / (height ** 2)).toFixed(2); // Round to 2 decimal places

    // Initialize variables for output text and color
    let outputText = "";
    let outputColor = "";

    // Determine BMI category and corresponding message & color
    if (res < 18.5) {
        outputText = `You are Underweight (BMI: ${res})`;
        outputColor = "#f4c542"; // Yellowish color
    } else if (res >= 18.5 && res < 25) {
        outputText = `You are Healthy (BMI: ${res})`;
        outputColor = "#28a745"; // Green color (healthy)
    } else if (res >= 25 && res < 30) {
        outputText = `You are Overweight (BMI: ${res})`;
        outputColor = "#ff9f43"; // Orange color (warning)
    } else {
        outputText = `You have Obesity (BMI: ${res})`;
        outputColor = "#dc3545"; // Red color (danger)
    }

    // Display the result message with appropriate color
    message.innerHTML = `<p style="color: ${outputColor};">${outputText}</p>`;
};

// Add an event listener to the button
// When clicked, it triggers the bmi() function
btn.addEventListener("click", bmi);
