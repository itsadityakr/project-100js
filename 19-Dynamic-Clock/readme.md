# **Live Digital Clock**  

## **Features**  

- **Real-time Clock Update**: Displays the current time and updates every second.  
- **12-hour & 24-hour Format Toggle**: Users can switch between 12-hour and 24-hour formats using a checkbox.  
- **Leading Zero Formatting**: Ensures consistent two-digit formatting for hours, minutes, and seconds.  

---  

## **How it Works**  

1. **Real-time Clock Update**  
   - Fetches the current system time using the `Date` object.  
   - Updates the displayed time every second using `setInterval()`.  

2. **12-hour & 24-hour Format Toggle**  
   - If the checkbox is checked, the clock displays time in 12-hour format with AM/PM.  
   - If unchecked, it displays the time in 24-hour format.  

3. **Leading Zero Formatting**  
   - Ensures that all time units (hours, minutes, seconds) always have two digits.  
   - Example: `09:05:03` instead of `9:5:3`.  

---  

## **1. Code Overview**  

### **Purpose**  

This script dynamically updates the displayed time every second and allows users to toggle between 12-hour and 24-hour formats.  

### **Code:**  

```javascript
function updateClock() { 
    const now = new Date(); 
    let hours = now.getHours(); 
    let minutes = now.getMinutes(); 
    let seconds = now.getSeconds(); 
    let ampm = ""; 

    if (document.getElementById("toggleFormat").checked) { 
        ampm = hours >= 12 ? " PM" : " AM"; 
        hours = hours % 12 || 12;  
    }

    hours = hours < 10 ? '0' + hours : hours; 
    minutes = minutes < 10 ? '0' + minutes : minutes; 
    seconds = seconds < 10 ? '0' + seconds : seconds; 

    document.querySelector(".clock").textContent = `${hours}:${minutes}:${seconds}${ampm}`; 
}

setInterval(updateClock, 1000); 

document.getElementById("toggleFormat").addEventListener("change", updateClock); 

updateClock();
```

### **Key Points:**  

- **`new Date()`**  
  - Retrieves the current date and time.  

- **`getHours()`, `getMinutes()`, `getSeconds()`**  
  - Extracts the hours, minutes, and seconds from the `Date` object.  

- **12-hour Format Conversion**  
  - If the checkbox is checked, the script converts 24-hour format to 12-hour format.  
  - `hours % 12 || 12` ensures that `0` (midnight) is converted to `12`.  

- **Adding Leading Zeros**  
  - Ensures all time components have two digits using ternary operators.  

- **`document.querySelector(".clock").textContent = ...`**  
  - Updates the clock display dynamically with the formatted time.  

- **`setInterval(updateClock, 1000)`**  
  - Calls `updateClock` every second to keep the time updated.  

- **`document.getElementById("toggleFormat").addEventListener("change", updateClock)`**  
  - Updates the time format immediately when the checkbox state changes.  

- **`updateClock()`**  
  - Runs once when the script loads to avoid delay before the first update.  

---  

## **Full Code Breakdown (`updateClock()`)**  

### **Purpose**  

Handles real-time clock updates and format toggling.  

### **Function Explanation:**  

1. **Retrieve Current Time**  
   - Uses `new Date()` to fetch the system time.  

2. **Extract Time Components**  
   - Stores hours, minutes, and seconds in separate variables.  

3. **Check for 12-hour Format Toggle**  
   - Determines if AM/PM formatting is needed based on the checkbox state.  

4. **Apply Two-digit Formatting**  
   - Ensures that single-digit values appear as two-digit numbers.  

5. **Update UI with Formatted Time**  
   - Modifies the `.clock` element’s text to show the updated time.  

6. **Run Every Second**  
   - Uses `setInterval()` to call `updateClock` every 1000 milliseconds.  

7. **Immediate Execution**  
   - Calls `updateClock()` once initially to avoid waiting for the first update.  

---  

## **Summary of Key Concepts**  

- **JavaScript Date API**: Fetches and manipulates the current time dynamically.  
- **Conditional Formatting**: Converts between 12-hour and 24-hour formats.  
- **Event Handling**: Uses `addEventListener()` to detect checkbox changes.  
- **Dynamic UI Updates**: Modifies the DOM to reflect real-time changes.  
- **Interval Timing**: Uses `setInterval()` to refresh the clock every second.  

---  

## **License and Author**  

### **License**  

This project is licensed under the MIT License.  

### **Author**  

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)