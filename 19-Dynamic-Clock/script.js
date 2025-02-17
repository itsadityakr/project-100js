function updateClock() { // Defining a function named updateClock to update and display the current time
    const now = new Date(); // Creating a new Date object to get the current date and time
    let hours = now.getHours(); // Getting the current hour (0-23) and storing it in the variable hours
    let minutes = now.getMinutes(); // Getting the current minute (0-59) and storing it in the variable minutes
    let seconds = now.getSeconds(); // Getting the current second (0-59) and storing it in the variable seconds
    let ampm = ""; // Initializing an empty string for AM/PM formatting

    if (document.getElementById("toggleFormat").checked) { // Checking if the checkbox with the ID "toggleFormat" is checked
        ampm = hours >= 12 ? " PM" : " AM"; // Assigning "PM" if the hour is 12 or greater, otherwise assigning "AM"
        hours = hours % 12 || 12;  // Converting 24-hour format to 12-hour format (0 should be converted to 12)
    }

    hours = hours < 10 ? '0' + hours : hours; // Ensuring hours are always two digits by adding a leading zero if needed
    minutes = minutes < 10 ? '0' + minutes : minutes; // Ensuring minutes are always two digits by adding a leading zero if needed
    seconds = seconds < 10 ? '0' + seconds : seconds; // Ensuring seconds are always two digits by adding a leading zero if needed

    document.querySelector(".clock").textContent = `${hours}:${minutes}:${seconds}${ampm}`; // Updating the clock display with the formatted time
}

// Update the clock every second
setInterval(updateClock, 1000); // Calling updateClock every 1000 milliseconds (1 second) to keep the time updated

// Update clock when checkbox is toggled
document.getElementById("toggleFormat").addEventListener("change", updateClock); // Adding an event listener to updateClock when the checkbox state changes

// Initialize clock immediately
updateClock(); // Calling updateClock immediately to display the time as soon as the script runs
