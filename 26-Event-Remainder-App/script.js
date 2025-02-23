// Get references to input fields and buttons from the HTML document using their IDs
const eventNameInput = document.getElementById("eventName"); // Input field for event name
const eventDateInput = document.getElementById("eventDate"); // Input field for event date
const eventTimeInput = document.getElementById("eventTime"); // Input field for event time
const eventList = document.getElementById("eventList"); // The list where events will be displayed
const addEventButton = document.getElementById("addEvent"); // Button to add new events
const sortButton = document.getElementById("sort"); // Button to sort events

// Retrieve stored events from local storage or initialize an empty array
// JSON.parse() converts the stored string back into a JavaScript array
let eventsArray = JSON.parse(localStorage.getItem("events")) || [];

// Create a separate copy of eventsArray to store the original order
// The spread operator (`...`) is used to copy the contents of `eventsArray` into `originalEvents`
let originalEvents = [...eventsArray]; // This prevents changes in `eventsArray` from affecting the original order

let isSorted = false; // Boolean flag to track whether the list is sorted

// Event listener for the "Add Event" button
addEventButton.addEventListener("click", function () {
    // Check if all input fields are filled; if not, show an alert
    if (!eventNameInput.value || !eventDateInput.value || !eventTimeInput.value) {
        alert("Please fill out all fields.");
        return;
    }

    // Create an event object containing name, date, and time
    const event = {
        name: eventNameInput.value,  // Event name from input field
        date: eventDateInput.value,  // Event date from input field (YYYY-MM-DD format)
        time: eventTimeInput.value,  // Event time from input field (HH:MM format)
    };

    // Push the new event into the `eventsArray`
    eventsArray.push(event);

    // Update the originalEvents array with the new event, maintaining the original order
    originalEvents = [...eventsArray]; // The spread operator (`...`) ensures a new array is created

    // Store the updated `eventsArray` in local storage as a JSON string
    localStorage.setItem("events", JSON.stringify(eventsArray));

    // Refresh the displayed events
    displayEvents();

    // Clear the input fields
    clearInputs();
});

// Function to display events in the list
function displayEvents() {
    eventList.innerHTML = ""; // Clear the existing list

    // Loop through each event and create a list item (`<li>`) for it
    eventsArray.forEach((event, index) => {
        let li = document.createElement("li"); // Create a list item
        li.innerHTML = `
            <div class="eventsDiv">
                <div class="div1"><strong>${event.name}</strong></div> 
                <div class="div2">${event.date} ${event.time}</div>
                <div class="div3"><span id="countdown-${index}" class="countdown"></span></div>
                <div class="div4">
                    <button onclick="editEvent(${index})">Edit</button>
                    <button onclick="deleteEvent(${index})">Delete</button>
                </div>
            </div>
        `;

        // Append the event to the list
        eventList.appendChild(li);

        // Start the countdown timer for this event
        updateCountdown(index);
    });
}

// Function to delete an event from the list
function deleteEvent(index) {
    eventsArray.splice(index, 1); // Remove the event at the given index from the array
    originalEvents = [...eventsArray]; // Update original order
    localStorage.setItem("events", JSON.stringify(eventsArray)); // Save the updated list to local storage
    displayEvents(); // Refresh the event list
}

// Function to edit an event
function editEvent(index) {
    // Prompt the user to edit event details, pre-filling current values
    let updatedName = prompt("Edit Event Name:", eventsArray[index].name);
    let updatedDate = prompt("Edit Event Date (YYYY-MM-DD):", eventsArray[index].date);
    let updatedTime = prompt("Edit Event Time (HH:MM):", eventsArray[index].time);

    // Ensure none of the inputs are empty
    if (updatedName && updatedDate && updatedTime) {
        eventsArray[index] = { name: updatedName, date: updatedDate, time: updatedTime };
        originalEvents = [...eventsArray]; // Update original order
        localStorage.setItem("events", JSON.stringify(eventsArray)); // Save changes to local storage
        displayEvents(); // Refresh event list
    } else {
        alert("Event details cannot be empty!");
    }
}

// Function to clear input fields
function clearInputs() {
    eventNameInput.value = "";
    eventDateInput.value = "";
    eventTimeInput.value = "";
}

// Function to sort events by date and time
function toggleSort() {
    if (!isSorted) {
        // Sort events in ascending order based on date and time
        eventsArray.sort((a, b) => new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`));
    } else {
        // Restore the original order
        eventsArray = [...originalEvents];
    }
    isSorted = !isSorted; // Toggle sorting state
    displayEvents(); // Refresh event list
}

// Add event listener for sorting button
sortButton.addEventListener("click", toggleSort);

// Function to update countdown timer for each event
function updateCountdown(index) {
    setInterval(() => {
        let now = new Date(); // Get the current time
        let eventDateTime = new Date(`${eventsArray[index].date}T${eventsArray[index].time}`); // Convert event date and time to Date object
        let timeDifference = eventDateTime - now; // Calculate the difference

        let countdownElement = document.getElementById(`countdown-${index}`);
        if (!countdownElement) return;

        if (timeDifference <= 0) {
            countdownElement.innerText = "Event Ended !!";
        } else {
            // Convert time difference into hours, minutes, and seconds
            let hours = Math.floor(timeDifference / (1000 * 60 * 60));
            let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            countdownElement.innerText = `${hours}h ${minutes}m ${seconds}s remaining`;
        }
    }, 1000); // Update countdown every second
}

// Function to check for upcoming events and show reminders
setInterval(function () {
    let now = new Date(); // Get current time
    eventsArray.forEach((event) => {
        let eventDateTime = new Date(`${event.date}T${event.time}`); // Convert event date and time
        let timeDifference = eventDateTime - now; // Calculate time difference

        // If the event is happening within 1 minute, show a reminder alert
        if (timeDifference > 0 && timeDifference <= 60000) {
            alert(`Reminder: ${event.name} is happening soon!`);
        }
    });
}, 60000); // Check every minute

// Display stored events on page load
displayEvents();