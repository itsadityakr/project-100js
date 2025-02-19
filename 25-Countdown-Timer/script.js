// Declare a variable to store the countdown interval
let countdownInterval;

function startCountdown() {
    // Clear any existing countdown interval to prevent multiple intervals from running at the same time
    clearInterval(countdownInterval);

    // Get the user-inputted date and time from the input field
    const targetDate = document.getElementById("datetime").value;

    // Convert the entered date and time into a timestamp (milliseconds since January 1, 1970)
    const targetTime = new Date(targetDate).getTime();

    // Validate if the user entered a valid date and time
    if (isNaN(targetTime)) { // If the date is invalid, targetTime will be NaN
        alert("Please enter a valid date and time."); // Show an error message
        return; // Stop execution to prevent further errors
    }

    // Start a countdown interval that updates every second
    countdownInterval = setInterval(() => {
        // Get the current time in milliseconds
        const now = new Date().getTime();

        // Calculate the time difference between the target time and the current time
        const difference = targetTime - now;

        // Check if the countdown has reached zero or passed the target time
        if (difference <= 0) {
            clearInterval(countdownInterval); // Stop the countdown
            document.getElementById("countdown").innerHTML = "🎉 Time's up!"; // Display the message
            return; // Exit the function to prevent further calculations
        }

        // Convert milliseconds into days, hours, minutes, and seconds
        const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Calculate full days remaining
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Remaining hours
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); // Remaining minutes
        const seconds = Math.floor((difference % (1000 * 60)) / 1000); // Remaining seconds

        // Update the countdown display with the formatted time
        document.getElementById("countdown").innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000); // Update every second
}
