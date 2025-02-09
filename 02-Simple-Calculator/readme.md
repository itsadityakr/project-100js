# **Project: Simple Calculator**

## **Introduction**
This project is a **Simple Calculator** that takes two numbers and an arithmetic operator (`+`, `-`, `*`, `/`, `%`) as input and calculates the result when the user clicks the **Calculate** button.

This project demonstrates several key **JavaScript** concepts, including:  
✔️ Event listeners to handle user interactions.  
✔️ Retrieving and processing user input from HTML elements.  
✔️ Using conditional logic (`switch-case`) to determine operations.  
✔️ Validating user input (handling empty values and division by zero).  
✔️ Displaying the calculated result dynamically.

---

## **How JavaScript Works in This Project**

### **1. Capturing User Input and Triggering the Calculation**

#### **Snippet: Adding an Event Listener to the Button**
```js
document.querySelector(".result").addEventListener("click", (e) => {
    e.preventDefault();
});
```
### **Explanation:**
- **`document.querySelector(".result")`** selects the **Calculate** button using its class name.
- **`addEventListener("click", (e) => { ... })`** sets up an event listener that runs a function when the button is clicked.
- **`e.preventDefault();`** prevents the form from submitting and refreshing the page, ensuring the result stays visible.

---

### **2. Retrieving and Converting User Input**
The input values from the text fields are retrieved and converted to numbers before performing calculations.

#### **Snippet: Fetching User Inputs**
```js
const num1 = parseFloat(document.getElementById("num1").value);
const num2 = parseFloat(document.getElementById("num2").value);
const operator = document.getElementById("operator").value;
```
### **Explanation:**
- **`document.getElementById("num1").value`** fetches the value from the first number input field.
- **`document.getElementById("num2").value`** fetches the value from the second number input field.
- **`document.getElementById("operator").value`** fetches the user-entered arithmetic operator.
- **`parseFloat()`** converts the string input into a floating-point number for mathematical operations.

---

### **3. Input Validation: Handling Empty Inputs and Invalid Numbers**
Before performing calculations, JavaScript ensures that the inputs are valid numbers.

#### **Snippet: Validating Input Values**
```js
if (isNaN(num1) || isNaN(num2)) {
    document.querySelector(".output").innerHTML = "Error: Please enter valid numbers";
    return; // Exit function if input is invalid
}
```
### **Explanation:**
- **`isNaN(num1)`** checks if `num1` is **not a number**.
- **`isNaN(num2)`** checks if `num2` is **not a number**.
- If either `num1` or `num2` is invalid, an error message is displayed, and the function **stops execution** (`return` statement).

---

### **4. Performing the Arithmetic Operation**
A `switch` statement determines which operation to perform based on the user’s selected operator.

#### **Snippet: Calculating the Result**
```js
let result;
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
        result = "Error: Invalid operator";
}
```
### **Explanation:**
- **Case `+`**: Adds `num1` and `num2`.
- **Case `-`**: Subtracts `num2` from `num1`.
- **Case `*`**: Multiplies `num1` and `num2`.
- **Case `/`**: Performs division **only if `num2` is not zero** to avoid errors.
- **Case `%`**: Finds the remainder of division **only if `num2` is not zero**.
- **Default case**: If the user enters an invalid operator, it displays an error message.

---

### **5. Handling Division by Zero Errors**
JavaScript prevents division by zero, which would result in an error.

#### **Snippet: Preventing Division Errors**
```js
case "/": 
    result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    break;
case "%": 
    result = num2 !== 0 ? num1 % num2 : "Error: Division by zero";
    break;
```
### **Explanation:**
- The **ternary operator** (`condition ? trueValue : falseValue`) checks if `num2` is zero before performing division/modulus.
- If `num2 === 0`, it displays `"Error: Division by zero"`.

---

### **6. Displaying the Result Dynamically**
Once the calculation is complete, the result is displayed in the output section.

#### **Snippet: Updating the Output Field**
```js
document.querySelector(".output").innerHTML = result;
```
### **Explanation:**
- **`document.querySelector(".output")`** selects the output container where the result will be displayed.
- **`innerHTML = result;`** updates the content of the output container with the calculated result.

---
