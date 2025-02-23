# Stopwatch

A simple stopwatch application built using JavaScript, allowing users to start, stop, reset, and record lap times.

## **Features**

- **Start Stopwatch**: Begins timing from zero or resumes from a stopped time.
- **Stop Stopwatch**: Pauses the stopwatch without resetting the recorded time.
- **Reset Stopwatch**: Clears the timer and resets the display.
- **Lap Functionality**: Records lap times and stores them.
- **Persistent Storage**: Saves lap times in local storage.

---

## **How it Works**

1. **Start Functionality**
   - Clicking the "Start" button starts the stopwatch if it is not already running.
   - The timer begins from the last elapsed time to maintain accuracy.
   - The display updates every millisecond.

2. **Stop Functionality**
   - Clicking the "Stop" button halts the timer.
   - The elapsed time is stored for later continuation.

3. **Reset Functionality**
   - Clicking the "Reset" button stops the timer and clears the elapsed time.
   - The recorded lap times are also cleared from local storage.

4. **Lap Functionality**
   - Clicking "Lap" saves the current time as a lap record.
   - Laps are displayed as a list and stored in local storage for persistence.

---

## **1. `code`**

### **Purpose**

The JavaScript code implements the core stopwatch functionalities, including start, stop, reset, and lap tracking.

```javascript
const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsList = document.getElementById("laps");

let startTime = 0;
let elapsedTime = 0;
let timerInterval = 0;
let laps = [];
```

**Key Points:**

- Selects HTML elements using `getElementById()`.
- Initializes essential variables for tracking time and laps.

---

## **Full Code Breakdown (`functionName()`)**

### **Purpose**

This section provides a breakdown of each function in the stopwatch application.

### **Code:**

```javascript
startBtn.addEventListener(`click`, () => {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 1);
    }
});
```

### **Function Explanation:**

1. **Checks if the timer is already running**.
2. **Calculates the accurate start time by subtracting the elapsed time from the current time**.
3. **Uses `setInterval()` to update the display every millisecond**.

---

## **Dry Run**

1. **Initial State**: Timer is at `00:00:00:000`.
2. **Start Button Clicked**: Timer begins counting from zero.
3. **Lap Button Clicked**: Current time recorded as a lap.
4. **Stop Button Clicked**: Timer stops.
5. **Reset Button Clicked**: Timer resets to `00:00:00:000`.

---

## **Summary of Key Concepts**

- **Event Listeners**: Used to handle button clicks.
- **`Date.now()`**: Retrieves the current timestamp.
- **`setInterval()` and `clearInterval()`**: Starts and stops the timer updates.
- **Local Storage**: Stores lap times for persistence.

---

## **License and Author**

### **License**

This project is licensed under the MIT License.

### **Author**

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)

