# **FizzBuzz Generator**

## **Features**

- **User Input Validation**: Ensures the entered number is between 1 and 100.
- **Dynamic FizzBuzz Generation**: Generates the sequence dynamically based on the input.
- **Formatted Output**: Displays results with color-coded words for better readability.

---

## **How it Works**

1. **User Inputs a Number**
    - The user enters a number between 1 and 100.
    - The script validates whether the input is a valid number.

2. **Generating the FizzBuzz Sequence**
    - The script loops through numbers from 1 to the entered number.
    - It applies the FizzBuzz logic:
        - If divisible by 3 and 5, display "FizzBuzz".
        - If divisible by 3, display "Fizz".
        - If divisible by 5, display "Buzz".
        - Otherwise, display the number itself.

3. **Displaying Results**
    - The generated sequence is displayed in a formatted output with color-coded words.

---

## **1. Code**

### **Purpose**

This JavaScript code dynamically generates a FizzBuzz sequence for a user-entered number.

### **Code:**

```javascript
// Selects the input field where the user enters a number
const inputNum = document.querySelector('#input-num');

// Selects the button that generates the sequence
const btn = document.querySelector('#gen-btn');

// Selects the output div where the result will be displayed
const message = document.querySelector('.output');

// Adds an event listener to the button that runs the function when clicked
btn.addEventListener('click', () => {
    // Gets the number entered by the user and converts it to an integer
    let num = parseInt(inputNum.value);

    // Validates if the input is a valid number between 1 and 100
    if (isNaN(num) || num < 1 || num > 100) {
        // Displays an error message if input is invalid
        message.innerHTML = "<p class='error'>Please enter a valid number between 1 and 100.</p>";
        return; // Stops further execution
    }

    // Creates an empty array to store the sequence results
    let array = [];

    // Loops from 1 to the user's entered number
    for (let i = 1; i <= num; i++) {
        // If the number is divisible by both 3 and 5, add "FizzBuzz"
        if (i % 3 === 0 && i % 5 === 0) {
            array.push("<span class='fizzbuzz'>FizzBuzz</span>");
        }
        // If the number is divisible by 3 only, add "Fizz"
        else if (i % 3 === 0) {
            array.push("<span class='fizz'>Fizz</span>");
        }
        // If the number is divisible by 5 only, add "Buzz"
        else if (i % 5 === 0) {
            array.push("<span class='buzz'>Buzz</span>");
        }
        // Otherwise, add the number itself
        else {
            array.push(`<span class="number">${i}</span>`);
        }
    }

    // Displays the generated sequence in the output div, separated by commas
    message.innerHTML = array.join(', ');
});
```

**Key Points:**

- Selects input elements using `document.querySelector()`.
- Listens for a click event using `addEventListener()`.
- Validates the user input using `isNaN()` and range checks.
- Uses `for` loop to iterate over numbers and apply FizzBuzz logic.
- Displays formatted output using `innerHTML` and CSS classes.

---

## **Full Code Breakdown (`FizzBuzz Generator`)**

### **Purpose**

To generate a FizzBuzz sequence dynamically based on user input.

### **Function Explanation:**

1. **Input Validation:**
    - Ensures the user enters a number between 1 and 100.
    - Displays an error message if input is invalid.

2. **Loop through Numbers:**
    - Iterates from 1 to the input number.
    - Applies the FizzBuzz logic based on divisibility.

3. **Output Formatting:**
    - Stores results in an array.
    - Uses `innerHTML` to display the formatted output in the webpage.

---

## **Summary of Key Concepts**

- **DOM Manipulation**: Selecting and updating HTML elements using JavaScript.
- **Event Handling**: Using `addEventListener()` to detect button clicks.
- **Conditional Logic**: Applying `if-else` conditions to determine FizzBuzz output.
- **Loops**: Iterating over numbers using a `for` loop.
- **Template Literals**: Using backticks (` `` `) to format dynamic HTML content.

---

## **License and Author**

### **License**

This project is licensed under the MIT License.

### **Author**

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)

