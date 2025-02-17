# Button Click Counter

## **Features**

- **Button Click Tracker**: Tracks the number of times a button is clicked.
- **Dynamic Text Update**: Changes the button text dynamically based on the click count.
- **Handles Pluralization**: Adjusts the text to reflect whether the count is singular or plural.

---

## **How it Works**

1. **Track Button Clicks**
   - Step 1: When the user clicks the button, the code listens for the `click` event on the button element.
   - Step 2: Every time the button is clicked, it increments the `count` variable.
   - Step 3: The button's text is updated to display how many times it has been clicked.

2. **Dynamic Text Update**
   - Step 1: If the button is clicked once, the text displays “You clicked me 1 time.”
   - Step 2: If the button is clicked more than once, the text updates to “You clicked me x times” (where x is the count).

3. **Event Handling**
   - Step 1: The code uses an event listener to respond to the button’s `click` event.
   - Step 2: The event listener executes a callback function that modifies the button's text and increments the count.

---

## **1. `code`**

### **Purpose**

This code listens for click events on a button, counts how many times the button is clicked, and updates the text on the button accordingly. It handles both singular and plural versions of the text based on the count.

### **Code:**

```javascript
// Get the button element with the id 'btn' and store it in a variable called 'btn'
const btn = document.getElementById(`btn`);

// Initialize a variable 'count' to track how many times the button is clicked, starting at 0
let count = 0;

// Add an event listener to the button so that when it is clicked, the callback function is executed
btn.addEventListener(`click`, () => {
    // Increment the count by 1 each time the button is clicked
    count++;

    // If the count is 1 (first click), update the button text to "You clicked me 1 time"
    // Otherwise, update the text to reflect the plural form "You clicked me x times" where x is the count
    count === 1 ? btn.textContent = `You clicked me ${count} time` : btn.textContent = `You clicked me ${count} times`;
});
```

**Key Points:**

- **`document.getElementById()`**: This method is used to select an HTML element by its ID. Here, it selects the button with the ID `btn` and stores it in a variable.
- **`let count = 0`**: This initializes a variable `count` to keep track of the number of button clicks, starting at zero.
- **`addEventListener("click", ...)`**: This method listens for the `click` event on the button and runs the provided callback function whenever the event occurs.
- **`count++`**: This line increments the `count` by 1 each time the button is clicked.
- **`btn.textContent = ...`**: This changes the button's text. The `textContent` property sets or returns the text of an HTML element.
- **`count === 1 ? ... : ...`**: This is a ternary conditional operator. It checks if `count` is equal to 1 and sets the text to "You clicked me 1 time." Otherwise, it uses the plural version "You clicked me x times."

---

**Key Points:**

- **Event Listener**: The `click` event listener is crucial for detecting user interaction with the button. It triggers the callback function every time the user clicks the button.
- **Ternary Operator**: The ternary operator is a shorthand for `if-else` logic. It is used here to handle the singular and plural forms of the text in a concise way.
- **Dynamic Content Update**: The content on the button is dynamically updated, which is essential for providing feedback to the user.

---

## **Full Code Breakdown (`click` Event Handler)**

### **Purpose**

This function handles the `click` event on the button element. It updates the button's text based on how many times it has been clicked and tracks the click count.

### **Code:**

```javascript
// Get the button element with the id 'btn' and store it in a variable called 'btn'
const btn = document.getElementById(`btn`);

// Initialize a variable 'count' to track how many times the button is clicked, starting at 0
let count = 0;

// Add an event listener to the button so that when it is clicked, the callback function is executed
btn.addEventListener(`click`, () => {
    // Increment the count by 1 each time the button is clicked
    count++;

    // If the count is 1 (first click), update the button text to "You clicked me 1 time"
    // Otherwise, update the text to reflect the plural form "You clicked me x times" where x is the count
    count === 1 ? btn.textContent = `You clicked me ${count} time` : btn.textContent = `You clicked me ${count} times`;
});
```

### **Function Explanation:**

1. **Step 1: Select the Button**
   - The button element is selected using `getElementById()` and stored in the variable `btn`.

2. **Step 2: Initialize Click Count**
   - The `count` variable is initialized to 0 to start tracking the number of clicks.

3. **Step 3: Handle Click Event**
   - The code listens for the `click` event on the button and increments the `count` variable each time the button is clicked.
   - The button text is updated based on the count. If the count is 1, it displays "You clicked me 1 time," and for any count greater than 1, it switches to "You clicked me x times."

---

## **Summary of Key Concepts**

- **Event Listeners**: Used to detect and respond to user actions like button clicks.
- **Ternary Operator**: A shorthand way of handling conditional statements to decide which value to assign based on a condition.
- **Dynamic Text Updates**: The button text changes dynamically based on the number of times the button is clicked.
- **JavaScript DOM Manipulation**: This project involves modifying the content of the DOM based on user interaction, showcasing how to interact with HTML elements programmatically.

---

## **License and Author**

### **License**

This project is licensed under the MIT License.

### **Author**

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)