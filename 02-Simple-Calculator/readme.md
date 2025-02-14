# **Simple Calculator**

A simple JavaScript-based calculator that performs basic arithmetic operations (addition, subtraction, multiplication, division, and modulus). The calculator retrieves user input, processes calculations based on the selected operator, and displays the result dynamically.

---

## **Features**

- Supports basic arithmetic operations: `+`, `-`, `*`, `/`, `%`.
- Retrieves user input from form fields and handles input conversions.
- Uses event listeners to trigger calculations on button click.
- Prevents division and modulus operations by zero.
- Displays the result dynamically in the UI.

---

## **How it works**

1. The user enters two numbers into input fields.
2. The user selects an operator from a dropdown menu.
3. Upon clicking the result button, the script:
    - Retrieves input values and converts them to numbers.
    - Evaluates the operation using a `switch` statement.
    - Displays the computed result in an output field.
4. If an invalid operator is selected, an error message is displayed.

---

## **1. `document.querySelector()` (Selecting Elements by Class or Tag)**

The `document.querySelector()` method allows selecting elements using CSS selectors.

### **Syntax:**
```javascript
document.querySelector("selector");
```  

### **Example:**
```javascript
const button = document.querySelector(".result"); // Selects an element with the class "result"
```  

**Key Points:**
- Can select elements using class (`.className`), ID (`#idName`), or tag (`tagName`).
- Returns the first matching element.

---

## **2. `.addEventListener()` (Handling Events)**

The `.addEventListener()` method attaches an event handler to an element. In this project, it listens for a click on the result button.

### **Syntax:**
```javascript
element.addEventListener("event", function);
```  

### **Example:**
```javascript
document.querySelector(".result").addEventListener("click", () => {
    console.log("Button clicked!");
});
```  

**Key Points:**
- Listens for various events like `click`, `keydown`, `mouseover`.
- Helps trigger functions when an event occurs.

---

## **3. `e.preventDefault()` (Preventing Default Behavior)**

`e.preventDefault()` stops the default behavior of an event, such as form submission.

### **Syntax:**
```javascript
event.preventDefault();
```  

### **Example:**
```javascript
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents the page from reloading on form submission
});
```  

**Key Points:**
- Used in forms to prevent reloading.
- Ensures JavaScript handles form submission without interfering with default browser behavior.

---

## **4. `parseFloat()` (Converting Strings to Numbers)**

The `parseFloat()` function converts a string to a floating-point number.

### **Syntax:**
```javascript
parseFloat(value);
```  

### **Example:**
```javascript
const num = parseFloat("42.5"); // Converts string "42.5" to a number
```  

**Key Points:**
- Converts user input from text fields into numerical values.
- Helps avoid string concatenation when performing arithmetic.

---

## **5. `document.getElementById()` (Accessing Input Values)**

`document.getElementById()` retrieves an element using its ID.

### **Syntax:**
```javascript
document.getElementById("elementID");
```  

### **Example:**
```javascript
const inputValue = document.getElementById("num1").value;
```  

**Key Points:**
- Used to retrieve user input from input fields.
- Returns a string, which often needs to be converted to a number.

---

## **6. `switch` (Conditional Statements for Operations)**

The `switch` statement is used to execute different blocks of code based on conditions.

### **Syntax:**
```javascript
switch (expression) {
    case value1:
        // Code to execute
        break;
    case value2:
        // Code to execute
        break;
    default:
        // Code to execute if no case matches
}
```  

### **Example:**
```javascript
switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    default:
        result = "Invalid operator";
}
```  

**Key Points:**
- Replaces multiple `if-else` statements for better readability.
- Requires `break` statements to avoid executing all cases sequentially.

---

## **7. `console.log()` (Debugging and Logging Output)**

The `console.log()` function outputs messages to the browser console.

### **Syntax:**
```javascript
console.log(message);
```  

### **Example:**
```javascript
console.log("Calculation result:", result);
```  

**Key Points:**
- Useful for debugging values during development.
- Helps track program flow.

---

## **8. `innerHTML` (Updating HTML Content Dynamically)**

The `.innerHTML` property sets or gets the HTML content of an element.

### **Syntax:**
```javascript
element.innerHTML = newContent;
```  

### **Example:**
```javascript
document.querySelector(".output").innerHTML = "Result: 10";
```  

**Key Points:**
- Used to update the UI dynamically.
- Can insert text or even HTML elements inside an element.

---

## **Full Code Breakdown (Calculator Functionality)**

Below is a complete breakdown of how the calculator works:

```javascript
document.querySelector(".result").addEventListener("click", (e) => {
    e.preventDefault(); // Prevents default form behavior

    const num1 = parseFloat(document.getElementById("num1").value); // Get first number
    const num2 = parseFloat(document.getElementById("num2").value); // Get second number
    const operator = document.getElementById("operator").value; // Get selected operator
    const output = document.querySelector(".output"); // Select output display

    let result; // Declare result variable

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
            break;
        case "%":
            result = num2 !== 0 ? num1 % num2 : "Error: Division by zero";
            break;
        default:
            result = "Invalid operator";
    }

    console.log(result); // Debugging output
    output.innerHTML = result; // Display result in output section
});
```  

### **What This Function Does:**
1. **Step 1:** Listens for a button click event.
2. **Step 2:** Prevents default form behavior.
3. **Step 3:** Retrieves numbers and operator from user input.
4. **Step 4:** Uses a `switch` statement to determine the calculation.
5. **Step 5:** Logs the result to the console for debugging.
6. **Step 6:** Displays the result dynamically in the output field.

---

## **Summary Table of Key Concepts**

| Concept | Description | Syntax | Example |
|---------|------------|--------|---------|
| `querySelector()` | Selects elements using CSS selectors | `document.querySelector(".class");` | `document.querySelector(".output");` |
| `addEventListener()` | Adds an event listener | `element.addEventListener("click", function);` | `button.addEventListener("click", () => {});` |
| `parseFloat()` | Converts string to number | `parseFloat("42.5");` | `parseFloat(input.value);` |
| `switch` | Controls conditional execution | `switch (expr) { case val: break; }` | `switch (operator) { case "+": break; }` |
| `innerHTML` | Updates content dynamically | `element.innerHTML = "Hello";` | `output.innerHTML = result;` |

---

## **License and Author**

**Author:** Aditya Kumar  
**GitHub:** [https://github.com/itsadityakr](https://github.com/itsadityakr)

**License:** MIT License

---