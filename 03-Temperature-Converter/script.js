// Attach an event listener to the temperature input field
// This triggers the updateBackground function whenever the user types or changes the value.
document.getElementById('input-temp').addEventListener('input', updateBackground);

// Attach an event listener to the output button
// This triggers the updateTemperature function when the button is clicked.
document.getElementById('output-btn').addEventListener('click', updateTemperature);

/**
 * Function to dynamically update the background color of the page
 * based on the user's input temperature.
 *
 * The color changes according to predefined temperature ranges:
 * - Below 15°C: Blue gradient (cold)
 * - 15°C to 29°C: Yellow gradient (warm)
 * - 30°C to 39°C: Orange to red gradient (hot)
 * - 40°C and above: Solid red (very hot)
 */
function updateBackground() {
    // Retrieve the input value and convert it to a floating-point number
    const temp = parseFloat(document.getElementById("input-temp").value);

    // Determine the background color based on the temperature range
    if (temp < 15) {
        // Cold temperatures: White to blue gradient
        document.body.style.background = "radial-gradient(circle at 20% 20%, #ffffff, #1ca0ff)";
    } else if (temp >= 15 && temp < 30) {
        // Mild temperatures: White to yellow gradient
        document.body.style.background = "radial-gradient(circle at 20% 20%, #ffffff, #fff042)";
    } else if (temp >= 30 && temp < 40) {
        // Warm temperatures: Yellow to red gradient
        document.body.style.background = "radial-gradient(circle at 20% 20%, #ffdf42, #ff2212)";
    } else {
        // Very hot temperatures: Solid red
        document.body.style.background = "radial-gradient(circle at 20% 20%, #ff0000, #ff0000)";
    }
}

/**
 * Function to convert the input temperature into the selected unit
 * and update the displayed result accordingly.
 *
 * Supported conversions:
 * - Celsius (default)
 * - Fahrenheit: (C × 9/5) + 32
 * - Kelvin: C + 273.15
 */
function updateTemperature() {
    // Retrieve the temperature input and convert it to a number
    const temp = parseFloat(document.getElementById("input-temp").value);

    // Retrieve the selected temperature unit from the dropdown menu
    const selection = document.getElementById("select-temp").value;

    // Select the span element where the output will be displayed
    const outputSpan = document.querySelector(".output span");

    // Validate input: If the entered value is not a valid number, display an error message
    if (isNaN(temp)) {
        outputSpan.textContent = "Invalid input"; // Show error message
        return; // Exit the function early
    }

    let result; // Declare a variable to store the converted temperature

    // Perform temperature conversion based on the selected unit
    switch (selection) {
        case "Celsius":
            result = temp; // No conversion needed
            break;
        case "Fahrenheit":
            result = (temp * 1.8) + 32; // Convert Celsius to Fahrenheit
            break;
        case "Kelvin":
            result = temp + 273.15; // Convert Celsius to Kelvin
            break;
        default:
            result = temp; // Fallback in case of unexpected input
    }

    // Update the span element with the converted temperature, formatted to 2 decimal places
    outputSpan.textContent = result.toFixed(2);
}
