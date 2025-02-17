# Key Press Event Logger

## **Features**

- **Logs Key Presses**: Displays the key pressed, its Unicode value, and ASCII value.
- **Real-Time Output**: The output area is updated immediately as keys are pressed.
- **Handles Special Keys**: The code identifies special keys such as spacebar and handles them appropriately.

---

## **How it Works**

1. **Key Down Event Listener**
   - Step 1: The code listens for the `keydown` event on the input field.
   - Step 2: When a key is pressed, it captures the event and extracts details like the key pressed, its Unicode, and ASCII values.
   - Step 3: The details are displayed in the output area, with each key press appearing on a new line.

2. **Handling Special Keys**
   - Step 1: The spacebar key is captured and displayed as the word "Space" instead of a space.
   - Step 2: If the key pressed doesn’t have a valid ASCII value, the code sets it to "N/A."

3. **Auto-Scrolling**
   - Step 1: After appending the details of the key press, the output area is auto-scrolled to the bottom.
   - Step 2: This ensures that the most recent key press is always visible in the output area without needing the user to scroll manually.

---

## **1. `code`**

### **Purpose**

This code listens for key press events on an input field, extracts information about the key (including Unicode and ASCII values), and displays it in an output area. It also handles special cases like spacebar and ensures the output area is auto-scrolled for better usability.

### **Code:**

```javascript
// Select the HTML element with the ID "input" (usually an input field or textarea)
const input = document.querySelector(`#input`);

// Select the HTML element with the ID "output" (a textarea or div where results will be displayed)
const output = document.querySelector(`#output`);

// Listen to the 'keydown' event on the input element. This event triggers when a key is pressed down.
input.addEventListener(`keydown`, function (event) {

    // Get the key that was pressed (e.g., 'a', 'Enter', 'Space', etc.)
    let keyPressed = event.key;

    // Get the Unicode value of the key pressed using event.keyCode (this is deprecated but still widely used)
    // If event.keyCode is not available, it falls back to event.which (for cross-browser compatibility).
    let unicodeValue = event.keyCode || event.which;

    // Get the ASCII value of the key pressed using the charCodeAt method.
    // This only works for characters that have an ASCII value.
    let asciiValue = keyPressed.charCodeAt(0);

    // If the spacebar was pressed, change the output text to display "Space" instead of a space
    if (keyPressed === ' ') {
        keyPressed = 'Space';
    }

    // If the ASCII value is NaN (Not-a-Number, which happens for non-ASCII characters), set it to "N/A"
    if (isNaN(asciiValue)) {
        asciiValue = 'N/A';
    }

    // Append the following information to the 'output' textarea:
    // - Key pressed
    // - Unicode value in hexadecimal (formatted with a "U+" prefix and in uppercase letters)
    // - ASCII value (or "N/A" if it doesn't exist for the key)
    output.value += `Key pressed: ${keyPressed}, Unicode: U+${unicodeValue.toString(16).toUpperCase()}, ASCII: ${asciiValue}\n`;

    // Auto-scroll to the bottom of the 'output' textarea after appending the new data.
    // This ensures the latest key press is visible in the textarea without manual scrolling.
    output.scrollTop = output.scrollHeight;
});
```

**Key Points:**

- **`document.querySelector()`**: This method selects the first element that matches the given CSS selector. It’s used here to select the input field (`#input`) and the output area (`#output`).
- **`addEventListener("keydown", function)`**: The `keydown` event is fired whenever a key is pressed down. This method is used to add a listener that runs the provided function every time the event occurs.
- **`event.key`**: This property gives the value of the key that was pressed (e.g., "a", "Enter", " ").
- **`event.keyCode` and `event.which`**: These properties provide the Unicode value of the key pressed. `keyCode` is deprecated, but still widely supported, so it falls back to `event.which` if `keyCode` is not available.
- **`charCodeAt(0)`**: This method returns the ASCII value of the first character of the string. It’s used to get the ASCII value for the key pressed, but only works for characters with ASCII values.
- **`isNaN()`**: This function checks if a value is "Not-a-Number." If the ASCII value is not a number (i.e., the key does not have an ASCII value), it’s set to "N/A."
- **`output.value +=`**: This line appends the details (key pressed, Unicode, and ASCII) to the output area. The `+=` operator is used to add the new text without overwriting the existing content.
- **`output.scrollTop = output.scrollHeight`**: This automatically scrolls the output area to the bottom so that the latest key press is always visible without the user having to manually scroll.

---

**Key Points:**

- **Cross-browser Compatibility**: The use of `event.keyCode` and `event.which` ensures that the code works across older and modern browsers.
- **Event Handling**: The script listens for the `keydown` event to trigger actions and updates the output instantly with relevant information.
- **Usability**: Auto-scrolling ensures a smooth user experience by keeping the most recent key press visible.

---

## **Full Code Breakdown (`keydown` Event Listener)**

### **Purpose**

This function listens for a `keydown` event, extracts key details like the key pressed, its Unicode, and ASCII values, then displays this information in the output area. It handles special cases such as the spacebar and non-ASCII characters.

### **Code:**

```javascript
// Select the HTML element with the ID "input" (usually an input field or textarea)
const input = document.querySelector(`#input`);

// Select the HTML element with the ID "output" (a textarea or div where results will be displayed)
const output = document.querySelector(`#output`);

// Listen to the 'keydown' event on the input element. This event triggers when a key is pressed down.
input.addEventListener(`keydown`, function (event) {

    // Get the key that was pressed (e.g., 'a', 'Enter', 'Space', etc.)
    let keyPressed = event.key;

    // Get the Unicode value of the key pressed using event.keyCode (this is deprecated but still widely used)
    // If event.keyCode is not available, it falls back to event.which (for cross-browser compatibility).
    let unicodeValue = event.keyCode || event.which;

    // Get the ASCII value of the key pressed using the charCodeAt method.
    // This only works for characters that have an ASCII value.
    let asciiValue = keyPressed.charCodeAt(0);

    // If the spacebar was pressed, change the output text to display "Space" instead of a space
    if (keyPressed === ' ') {
        keyPressed = 'Space';
    }

    // If the ASCII value is NaN (Not-a-Number, which happens for non-ASCII characters), set it to "N/A"
    if (isNaN(asciiValue)) {
        asciiValue = 'N/A';
    }

    // Append the following information to the 'output' textarea:
    // - Key pressed
    // - Unicode value in hexadecimal (formatted with a "U+" prefix and in uppercase letters)
    // - ASCII value (or "N/A" if it doesn't exist for the key)
    output.value += `Key pressed: ${keyPressed}, Unicode: U+${unicodeValue.toString(16).toUpperCase()}, ASCII: ${asciiValue}\n`;

    // Auto-scroll to the bottom of the 'output' textarea after appending the new data.
    // This ensures the latest key press is visible in the textarea without manual scrolling.
    output.scrollTop = output.scrollHeight;
});
```

### **Function Explanation:**

1. **Step 1: Listen for `keydown` Event**
   - The code listens for the `keydown` event on the input element. It runs the function whenever a key is pressed down.
   
2. **Step 2: Extract Key Details**
   - It retrieves the key that was pressed, along with its Unicode and ASCII values. If the key is the spacebar, it displays "Space" instead of a space.
   
3. **Step 3: Update Output and Scroll**
   - The key details are appended to the output area, and the output is auto-scrolled to show the most recent key press.

---

## **Summary of Key Concepts**

- **Event Listeners**: Used to detect and respond to user actions like key presses.
- **Unicode & ASCII**: These are encoding standards for representing characters in computing. This project demonstrates how to work with these values.
- **Cross-Browser Compatibility**: The code ensures that it works across different browsers, using fallback methods like `event.which` for better compatibility.

---

## **License and Author**

### **License**

This project is licensed under the MIT License.

### **Author**

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)