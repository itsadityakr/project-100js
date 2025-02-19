# **Countdown Timer**

## **Features**

- **User Input for Date and Time**: Users can enter a future date and time to start a countdown.
- **Real-Time Countdown Display**: The timer updates every second to show the remaining time.
- **Automatic Reset on Completion**: When the countdown reaches zero, it stops and displays a completion message.

---

## **How it Works**

1. **User Inputs Target Date and Time**
   - The user selects a future date and time using an input field.
   - The selected value is stored and converted into a timestamp.

2. **Countdown Mechanism**
   - A function runs at one-second intervals.
   - It calculates the remaining time until the target date.

3. **Displaying Time Remaining**
   - The time is broken down into days, hours, minutes, and seconds.
   - These values are dynamically displayed on the webpage.

4. **Completion Handling**
   - When the countdown reaches zero, it stops.
   - A message is displayed to indicate the time is up.

---

## **1. `startCountdown()` Function**

### **Purpose**

This function starts a countdown timer based on the user-selected date and time. It continuously updates the remaining time until the countdown reaches zero.

### **Code Explanation**

```javascript
let countdownInterval;  // Variable to store the interval ID for countdown updates.

function startCountdown() {
    clearInterval(countdownInterval); // Reset any existing countdown.

    const targetDate = document.getElementById("datetime").value; 
    // Get user-selected date and time.

    const targetTime = new Date(targetDate).getTime(); 
    // Convert the input date and time to a timestamp.

    if (isNaN(targetTime)) { // Check if the input is a valid date.
        alert("Please enter a valid date and time.");
        return; // Stop execution if invalid.
    }

    countdownInterval = setInterval(() => { 
        // Start an interval that updates every second.
        const now = new Date().getTime(); // Get the current time.
        const difference = targetTime - now; // Calculate the time left.

        if (difference <= 0) { 
            // If countdown is complete:
            clearInterval(countdownInterval); // Stop updating.
            document.getElementById("countdown").innerHTML = "🎉 Time's up!";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24)); 
        // Convert remaining milliseconds to days.

        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
        // Extract remaining hours.

        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); 
        // Extract remaining minutes.

        const seconds = Math.floor((difference % (1000 * 60)) / 1000); 
        // Extract remaining seconds.

        document.getElementById("countdown").innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`; 
        // Display the countdown timer on the webpage.
    }, 1000); // Update every second.
}
```

---

## **Full Code Breakdown (`startCountdown()`)**

### **Purpose**

The `startCountdown()` function initializes a countdown timer based on user input and updates the displayed time every second.

### **Function Explanation:**

1. **Clearing Existing Timer**
   - If a previous countdown is running, it is stopped to prevent duplicate timers.

2. **Getting User Input**
   - The function reads the date-time input field.
   - The input is converted to a timestamp.

3. **Validating Input**
   - If the input is invalid, an alert is shown, and execution stops.

4. **Starting the Countdown**
   - A timer updates the countdown every second.
   - It calculates the time difference between the target and current time.

5. **Displaying Countdown**
   - The remaining time is broken down into days, hours, minutes, and seconds.
   - It is displayed dynamically on the webpage.

6. **Handling Countdown Completion**
   - If the countdown reaches zero, the timer stops.
   - A message is displayed indicating the end of the countdown.

---

## **Summary of Key Concepts**

- **Intervals (`setInterval`)**: Used to update the countdown every second.
- **Date Manipulation (`new Date()`)**: Converts user input into a timestamp for calculations.
- **Time Calculation**: Uses milliseconds to compute days, hours, minutes, and seconds.
- **DOM Manipulation (`document.getElementById()`)**: Updates the countdown display dynamically.

---

## **License and Author**

### **License**

This project is licensed under the MIT License.

### **Author**

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)