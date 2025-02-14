# Random Dice Roller

## Features

- **Random Number Generation**: Simulates a dice roll by generating a number between 1 and 6.
- **Interactive Button**: Updates the button text with the rolled number when clicked.
- **Event Listener**: Listens for user interaction and triggers number generation.

---

## How it Works

1. **User Interaction**
   - The user clicks the button labeled "Roll Dice".
   - The button triggers a function to generate a random number.

2. **Random Number Generation**
   - The script uses `Math.random()` to generate a decimal between 0 and 1.
   - Multiplies by 6 and rounds down using `Math.floor()` to get a whole number.
   - The range is adjusted by adding 1, ensuring a number between 1 and 6.

3. **Updating the UI**
   - The generated number replaces the button text.
   - Each click triggers a new random number.

---

## Code Explanation

### 1. Selecting the Button

#### Purpose
Retrieves the button element from the DOM to allow interaction.

#### Code:
```javascript
const btn = document.getElementById("diceBtn");
```

**Key Points:**
- Uses `document.getElementById` to find the button by its ID.
- Stores the button element in a variable for later use.

---

### 2. Generating a Random Number

#### Purpose
Simulates rolling a six-sided die and updates the button text.

#### Code:
```javascript
const generateRandomNumber = () => {
    let num = Math.floor(Math.random() * 6) + 1;
    btn.textContent = `${num}`;
};
```

**Key Points:**
- `Math.random()` generates a decimal between 0 and 1.
- Multiplying by 6 scales it to a range of 0 to just under 6.
- `Math.floor()` rounds it down to a whole number (0-5).
- Adding 1 shifts the range to 1-6, simulating a dice roll.
- `btn.textContent = num;` updates the button label.

---

### 3. Handling Click Events

#### Purpose
Detects when the user clicks the button and triggers the number generation.

#### Code:
```javascript
btn.addEventListener("click", generateRandomNumber);
```

**Key Points:**
- Uses `addEventListener` to listen for clicks on the button.
- Calls `generateRandomNumber` function when the button is clicked.
- Dynamically updates the button text with a new random number.

---

## Summary of Key Concepts

- **DOM Manipulation**: Accessing and modifying elements dynamically.
- **Event Handling**: Responding to user clicks.
- **Math Operations**: Generating and formatting random numbers.
- **JavaScript Functions**: Defining and executing functions on events.

---

## License and Author

### License
This project is licensed under the MIT License.

### Author
**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)

