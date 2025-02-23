# **Event Remainder App**

## **Features**

- **Add Events**: Users can add events by entering event name, date, and time.
- **Edit & Delete Events**: Users can modify or remove events from the list.
- **Sort Events**: Events can be sorted by date and time.
- **Countdown Timer**: Displays a countdown to each event.
- **Local Storage Support**: Events are saved in the browser's local storage.
- **Reminder Alerts**: Alerts users if an event is happening within the next minute.

---

## **How it Works**

1. **Adding an Event**
   - User inputs event name, date, and time.
   - Clicks "Add Event" button.
   - Event is stored in local storage and displayed in the list.

2. **Editing an Event**
   - Click "Edit" button next to an event.
   - User is prompted to update event details.
   - Changes are saved and displayed.

3. **Deleting an Event**
   - Click "Delete" button next to an event.
   - Event is removed from the list and local storage.

4. **Sorting Events**
   - Click "Sort" button to arrange events in chronological order.
   - Click again to restore the original order.

5. **Countdown Timer**
   - Displays remaining time for each event.
   - Updates every second.

6. **Event Reminders**
   - If an event is within 1 minute, an alert is shown.

---

## **Code Explanation**

### **1. Getting References to HTML Elements**
```javascript
const eventNameInput = document.getElementById("eventName");
const eventDateInput = document.getElementById("eventDate");
const eventTimeInput = document.getElementById("eventTime");
const eventList = document.getElementById("eventList");
const addEventButton = document.getElementById("addEvent");
const sortButton = document.getElementById("sort");
```

- The code selects various elements from the HTML using `document.getElementById()`. These elements allow user interaction with the application.

### **2. Storing Events in Local Storage**
```javascript
let eventsArray = JSON.parse(localStorage.getItem("events")) || [];
let originalEvents = [...eventsArray];
```
- Retrieves stored events from `localStorage`.
- If no events exist, initializes an empty array.
- A copy of the original order is maintained.

### **3. Adding an Event**
```javascript
addEventButton.addEventListener("click", function () {
    if (!eventNameInput.value || !eventDateInput.value || !eventTimeInput.value) {
        alert("Please fill out all fields.");
        return;
    }
    const event = {
        name: eventNameInput.value,
        date: eventDateInput.value,
        time: eventTimeInput.value,
    };
    eventsArray.push(event);
    originalEvents = [...eventsArray];
    localStorage.setItem("events", JSON.stringify(eventsArray));
    displayEvents();
    clearInputs();
});
```
- Checks if input fields are filled.
- Creates an event object and adds it to `eventsArray`.
- Saves updated events to local storage.
- Calls `displayEvents()` to refresh the list.

### **4. Displaying Events**
```javascript
function displayEvents() {
    eventList.innerHTML = "";
    eventsArray.forEach((event, index) => {
        let li = document.createElement("li");
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
        eventList.appendChild(li);
        updateCountdown(index);
    });
}
```
- Clears the existing list.
- Loops through `eventsArray` to display each event.
- Adds countdown timers to each event.

### **5. Sorting Events**
```javascript
function toggleSort() {
    if (!isSorted) {
        eventsArray.sort((a, b) => new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`));
    } else {
        eventsArray = [...originalEvents];
    }
    isSorted = !isSorted;
    displayEvents();
}
```
- Sorts events by date and time when the sort button is clicked.
- Clicking again restores the original order.

### **6. Countdown Timer**
```javascript
function updateCountdown(index) {
    setInterval(() => {
        let now = new Date();
        let eventDateTime = new Date(`${eventsArray[index].date}T${eventsArray[index].time}`);
        let timeDifference = eventDateTime - now;
        let countdownElement = document.getElementById(`countdown-${index}`);
        if (!countdownElement) return;
        if (timeDifference <= 0) {
            countdownElement.innerText = "Event Ended !!";
        } else {
            let hours = Math.floor(timeDifference / (1000 * 60 * 60));
            let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            countdownElement.innerText = `${hours}h ${minutes}m ${seconds}s remaining`;
        }
    }, 1000);
}
```
- Updates the countdown every second.
- Converts time difference into hours, minutes, and seconds.

---

## **Summary of Key Concepts**

- **Event Handling**: `addEventListener()` is used to handle user interactions.
- **Local Storage**: `localStorage.setItem()` and `localStorage.getItem()` store and retrieve data.
- **DOM Manipulation**: `document.createElement()`, `innerHTML`, and `appendChild()` dynamically modify the HTML.
- **Sorting Mechanism**: Events are sorted by date and time using JavaScript’s `sort()` method.
- **Countdown Timer**: Uses `setInterval()` to update the remaining time for each event.

---

## **License and Author**

### **License**
This project is licensed under the MIT License.

### **Author**

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)

