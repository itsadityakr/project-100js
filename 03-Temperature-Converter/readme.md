# Temperature Converter

## Features

- **Dynamic Background Change**: Updates the background color based on the temperature input.
- **Real-time Input Handling**: Listens for changes in user input and updates accordingly.
- **Temperature Conversion**: Converts temperature between Celsius, Fahrenheit, and Kelvin.
- **Error Handling**: Displays an error message for invalid inputs.

---

## How it Works

1. **Dynamic Background Update**
    - The background color changes dynamically as the user types a temperature.
    - Different colors represent different temperature ranges (cold, warm, hot, very hot).

2. **Temperature Conversion**
    - User inputs a temperature in Celsius.
    - The program converts the value to the selected unit (Celsius, Fahrenheit, or Kelvin).
    - The converted value is displayed in the output section.

3. **User Input Validation**
    - If the input is invalid (e.g., not a number), an error message appears.

---

## 1. `document.getElementById()` (Accessing HTML Elements)

### Purpose

Retrieves an HTML element by its ID to interact with it dynamically.

### Syntax:

```javascript
document.getElementById("elementID");
```

### Example:

```javascript
const tempInput = document.getElementById("input-temp");
```

**Key Points:**

- Used to get elements like input fields, buttons, and spans.

---

## 2. `addEventListener()` (Event Handling)

### Purpose

Attaches an event listener to an element that triggers a function when a specified event occurs.

### Syntax:

```javascript
element.addEventListener("event", functionName);
```

### Example:

```javascript
document.getElementById('input-temp').addEventListener('input', updateBackground);
```

**Key Points:**

- Listens for user actions (e.g., typing, clicking) and executes a function in response.

---

## 3. `parseFloat()` (Converting Strings to Numbers)

### Purpose

Converts a string into a floating-point number.

### Syntax:

```javascript
parseFloat(string);
```

### Example:

```javascript
const temp = parseFloat(document.getElementById("input-temp").value);
```

**Key Points:**

- Ensures that user input is treated as a numerical value.

---

## 4. `switch` Statement (Conditional Logic)

### Purpose

Executes different blocks of code depending on a variable's value.

### Syntax:

```javascript
switch (variable) {
    case "option1":
        // Code to execute
        break;
    case "option2":
        // Code to execute
        break;
    default:
        // Default case
}
```

### Example:

```javascript
switch (selection) {
    case "Celsius":
        result = temp;
        break;
    case "Fahrenheit":
        result = (temp * 1.8) + 32;
        break;
    case "Kelvin":
        result = temp + 273.15;
        break;
    default:
        result = temp;
}
```

**Key Points:**

- Efficiently handles multiple conditions.
- Avoids long chains of `if-else` statements.

---

## Full Code Breakdown (`updateBackground()` and `updateTemperature()`)

### Purpose

- `updateBackground()`: Changes the background color based on temperature input.
- `updateTemperature()`: Converts temperature to the selected unit and displays the result.

### Code:

```javascript
function updateBackground() {
    const temp = parseFloat(document.getElementById("input-temp").value);
    if (temp < 15) {
        document.body.style.background = "radial-gradient(circle at 20% 20%, #ffffff, #1ca0ff)";
    } else if (temp >= 15 && temp < 30) {
        document.body.style.background = "radial-gradient(circle at 20% 20%, #ffffff, #fff042)";
    } else if (temp >= 30 && temp < 40) {
        document.body.style.background = "radial-gradient(circle at 20% 20%, #ffdf42, #ff2212)";
    } else {
        document.body.style.background = "radial-gradient(circle at 20% 20%, #ff0000, #ff0000)";
    }
}

function updateTemperature() {
    const temp = parseFloat(document.getElementById("input-temp").value);
    const selection = document.getElementById("select-temp").value;
    const outputSpan = document.querySelector(".output span");
    if (isNaN(temp)) {
        outputSpan.textContent = "Invalid input";
        return;
    }
    let result;
    switch (selection) {
        case "Celsius":
            result = temp;
            break;
        case "Fahrenheit":
            result = (temp * 1.8) + 32;
            break;
        case "Kelvin":
            result = temp + 273.15;
            break;
        default:
            result = temp;
    }
    outputSpan.textContent = result.toFixed(2);
}
```

### Function Explanation:

1. **Retrieve User Input:**
    - Extracts the temperature value and converts it to a number.
    - Extracts the selected unit for conversion.

2. **Background Color Update:**
    - Changes color dynamically based on the temperature range.

3. **Temperature Conversion:**
    - Converts Celsius to the selected unit using a `switch` statement.
    - Displays the result formatted to two decimal places.

4. **Error Handling:**
    - If the input is not a valid number, an error message is displayed.

---

## Summary Table of Key Concepts

| Concept | Description | Syntax | Example |
|---------|------------|--------|---------|
| `document.getElementById()` | Accesses an HTML element | `document.getElementById("myId")` | `const input = document.getElementById("temp")` |
| `addEventListener()` | Adds event listeners to elements | `element.addEventListener("event", function)` | `button.addEventListener("click", updateTemperature)` |
| `parseFloat()` | Converts strings to numbers | `parseFloat(string)` | `const temp = parseFloat(input.value)` |
| `switch` | Handles multiple conditions efficiently | `switch(variable) { case value: break; }` | `switch (unit) { case "F": break; }` |
| `isNaN()` | Checks if a value is not a number | `isNaN(value)` | `if (isNaN(temp))` |

---

## License and Author

### License

This project is licensed under the MIT License.

### Author

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)

---