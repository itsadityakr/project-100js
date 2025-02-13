# **JavaScript Data Type Identifier**

## **Features**

- **Detects Data Type**: Identifies whether the user input is a string, number, boolean, or an empty string.
- **Real-time Processing**: Runs the detection when the button is clicked.
- **Simple UI Interaction**: Uses an input field and a button for user-friendly interaction.

---  

## **How it Works**

1. **User Input Handling**
    - The user enters a value in the input field.
    - The script fetches this value when the button is clicked.

2. **Data Type Detection**
    - Checks if the input is an empty string.
    - Determines if the input is a boolean (`true` or `false`).
    - Verifies if the input is a number.
    - If none of the above conditions match, it considers the input as a string.

3. **Displaying Results**
    - The detected data type is displayed inside a `<div>` with the class `output`.

---  

## **1. `document.addEventListener("DOMContentLoaded", function () {})`**

### **Purpose**
Ensures the script runs only after the HTML document is fully loaded.

### **Syntax:**
```javascript
document.addEventListener("DOMContentLoaded", function () {
    // Code to execute after page load
});
```  

### **Example:**
```javascript
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page is fully loaded!");
});
```  

**Key Points:**
- Prevents errors caused by trying to access elements before they exist.
- Ensures all elements are available for manipulation.

---  

## **2. `document.getElementById()` (Selecting Elements by ID)**

### **Purpose**
Fetches an HTML element using its unique `id` attribute.

### **Syntax:**
```javascript
document.getElementById("elementID");
```  

### **Example:**
```javascript
const inputField = document.getElementById("input-str");
console.log(inputField);
```  

**Key Points:**
- Used to get a reference to an element with a specific ID.
- Allows us to manipulate the element dynamically.

---  

## **3. `document.querySelector()` (Selecting Elements by Class or ID)**

### **Purpose**
Retrieves an HTML element using CSS selectors (like class or ID).

### **Syntax:**
```javascript
document.querySelector(".className");
```  

### **Example:**
```javascript
const outputDiv = document.querySelector(".output");
console.log(outputDiv.textContent);
```  

**Key Points:**
- Can select elements using class (`.className`) or ID (`#idName`).
- Returns the first matching element.

---  

## **4. `addEventListener()` (Handling Click Events)**

### **Purpose**
Executes a function when an event (like a click) occurs.

### **Syntax:**
```javascript
element.addEventListener("event", function () {
    // Code to execute on event
});
```  

### **Example:**
```javascript
submitButton.addEventListener("click", function () {
    console.log("Button clicked!");
});
```  

**Key Points:**
- Used to attach an event listener to an element.
- Listens for user interactions like clicks, key presses, etc.

---  

## **5. `.value` (Retrieving Input Values)**

### **Purpose**
Gets the value entered by the user in an input field.

### **Syntax:**
```javascript
element.value;
```  

### **Example:**
```javascript
let inputValue = inputField.value;
console.log(inputValue);
```  

**Key Points:**
- Returns the current value of an input field.
- Can be used to fetch user input dynamically.

---  

## **6. `isNaN()` (Checking If a Value is Not a Number)**

### **Purpose**
Determines whether a given value is **not** a number.

### **Syntax:**
```javascript
isNaN(value);
```  

### **Example:**
```javascript
console.log(isNaN("123")); // false (because it's a number)
console.log(isNaN("hello")); // true (because it's not a number)
```  

**Key Points:**
- Returns `true` if the value is **not** a number.
- Returns `false` if the value **is** a number.

---  

## **7. `toLowerCase()` (Converting Text to Lowercase)**

### **Purpose**
Converts a string to lowercase to ensure case-insensitive comparisons.

### **Syntax:**
```javascript
string.toLowerCase();
```  

### **Example:**
```javascript
console.log("TRUE".toLowerCase()); // "true"
console.log("False".toLowerCase()); // "false"
```  

**Key Points:**
- Used to normalize text for comparison.
- Helps in case-insensitive logic (e.g., checking if input is `"true"` or `"false"`).

---  

## **Full Code Breakdown (`Detect Data Type`)**

### **Purpose**
Detects the data type of user input and displays the result.

### **Code:**
```javascript
document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("input-str");
    const submitButton = document.getElementById("submit-btn");
    const outputDiv = document.querySelector(".output");

    submitButton.addEventListener("click", function () {
        let inputValue = inputField.value;
        let dataType;

        if (inputValue === "") {
            dataType = "Empty String";
        } else if (inputValue.toLowerCase() === "true" || inputValue.toLowerCase() === "false") {
            dataType = "Boolean";
        } else if (!isNaN(inputValue) && inputValue !== "") {
            dataType = "Number";
        } else {
            dataType = "String";
        }

        outputDiv.textContent = `Data Type: ${dataType}`;
    });
});
```  

### **Function Explanation:**

1. **Step 1:** Waits for the page to fully load before executing the script.
2. **Step 2:** Retrieves references to the input field, button, and output display.
3. **Step 3:** Listens for button clicks and captures the user's input.
4. **Step 4:** Checks the input and determines its data type.
5. **Step 5:** Displays the detected data type in the `outputDiv`.

---  

## **Summary Table of Key Concepts**

| Concept | Description | Syntax | Example |  
|---------|------------|--------|---------|  
| `document.addEventListener()` | Ensures script runs after page load | `document.addEventListener("DOMContentLoaded", function () {});` | `console.log("Page Loaded");` |  
| `document.getElementById()` | Selects an element by ID | `document.getElementById("id");` | `const input = document.getElementById("input-str");` |  
| `document.querySelector()` | Selects an element using CSS selectors | `document.querySelector(".class");` | `const output = document.querySelector(".output");` |  
| `addEventListener()` | Handles user events | `element.addEventListener("click", function () {});` | `button.addEventListener("click", () => console.log("Clicked!"));` |  
| `.value` | Retrieves user input | `element.value;` | `let inputText = inputField.value;` |  
| `isNaN()` | Checks if a value is not a number | `isNaN(value);` | `isNaN("123"); // false` |  
| `toLowerCase()` | Converts text to lowercase | `string.toLowerCase();` | `"HELLO".toLowerCase(); // "hello"` |  

---  

## **License and Author**

### **License**
This project is licensed under the MIT License.

### **Author**
**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)  