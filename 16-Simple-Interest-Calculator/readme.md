# Simple Interest Calculator

## Features

- **Dynamic Calculation**: Computes any missing value among Simple Interest, Principal, Rate, and Time.
- **User-Friendly Input Validation**: Ensures that exactly one field is left empty for calculation.
- **Real-Time Error Handling**: Provides clear error messages for incorrect inputs.
- **Formatted Output**: Displays results with proper formatting and rounded values.

---

## How it Works

1. **User Input**
   - The user enters values in three out of the four fields: Simple Interest, Principal, Rate, or Time.
   - One field must be left empty for calculation.

2. **Validation and Calculation**
   - The script checks the number of empty fields.
   - If more than one or none are empty, an error message is displayed.
   - Otherwise, the missing value is calculated using the respective formula:
     - Simple Interest: `(P * R * T) / 100`
     - Principal: `(SI * 100) / (R * T)`
     - Rate: `(SI * 100) / (P * T)`
     - Time: `(SI * 100) / (P * R)`

3. **Result Display**
   - The calculated value is displayed in the respective input field.
   - A formatted message is shown in the output section.

---

## Code Explanation

### 1. `DOMContentLoaded` Event

#### Purpose
Ensures that the script runs only after the HTML document is fully loaded to prevent errors from accessing non-existent elements.

#### Code:
```javascript
document.addEventListener("DOMContentLoaded", () => {
```

**Key Points:**
- This prevents JavaScript from running before the elements exist.
- It ensures the script executes only when the page is ready.

---

### 2. Retrieving Elements

#### Purpose
Fetches references to input fields and the calculate button to interact with user inputs.

#### Code:
```javascript
const simpleInterestInput = document.getElementById("simpleInterest");
const principleInput = document.getElementById("principle");
const rateInput = document.getElementById("rate");
const timeInput = document.getElementById("time");
const calculateBtn = document.getElementById("calculateBtn");
const outputDiv = document.querySelector(".output");
```

**Key Points:**
- These elements allow real-time interaction and modification.
- Using `document.getElementById` ensures efficient element selection.

---

### 3. Event Listener for Button Click

#### Purpose
Triggers the calculation when the "Calculate" button is clicked.

#### Code:
```javascript
calculateBtn.addEventListener("click", () => {
```

**Key Points:**
- Listens for a button click and executes the provided function.
- Ensures user interaction triggers the calculation.

---

## Full Code Breakdown (`calculate()` Function)

### Purpose
Determines the missing value and calculates it based on user input.

### Code:
```javascript
let simpleInterest = parseFloat(simpleInterestInput.value) || 0;
let principle = parseFloat(principleInput.value) || 0;
let rate = parseFloat(rateInput.value) || 0;
let time = parseFloat(timeInput.value) || 0;
```

### Function Explanation:

1. **Retrieving User Input**
   - Converts values from input fields into floating-point numbers.
   - If an input field is empty, assigns `0` as the default value.

2. **Validation Check**
   ```javascript
   let zeroCount = [simpleInterest, principle, rate, time].filter(val => val === 0).length;
   if (zeroCount !== 1) {
       outputDiv.innerHTML = "<p style='color: red;'>⚠ Please leave exactly one field empty.</p>";
       return;
   }
   ```
   - Ensures only one field is empty.
   - Displays an error if multiple or no fields are empty.

3. **Calculation Logic**
   - Determines which field is empty and applies the correct formula.
   - Updates the respective field with the calculated value.
   ```javascript
   if (simpleInterest === 0) {
       result = (principle * rate * time) / 100;
       simpleInterestInput.value = result.toFixed(2);
       message = `Simple Interest: $${result.toFixed(2)}`;
   }
   ```
   - Similar calculations are performed for Principal, Rate, and Time.

4. **Displaying the Output**
   ```javascript
   outputDiv.innerHTML = `<p style='color: green; font-weight: bold;'>✅ ${message}</p>`;
   ```
   - Displays the result in a styled message.

---

## Summary of Key Concepts

- **Event Handling**: Uses `DOMContentLoaded` and `click` event listeners.
- **DOM Manipulation**: Accesses and modifies input fields dynamically.
- **Validation and Error Handling**: Ensures proper user input.
- **Mathematical Calculations**: Uses formulas for financial computations.

---

## License and Author

### License
This project is licensed under the MIT License.

### Author
**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)

