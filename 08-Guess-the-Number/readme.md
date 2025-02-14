# **Guess the Number Game**

## **Features**

- **Random Number Generation**: The game generates a random number between 0 and 99.
- **User Guess Evaluation**: Users input a number and receive feedback if it's too high, too low, or correct.
- **Game Reset Option**: Users can restart the game at any time with a new random number.
- **Hint System**: The game provides hints based on the user's guess.
- **Input Validation**: Ensures only numbers between 0 and 99 are accepted.

---

## **How it Works**

1. **Game Initialization**
    - A random number between 0 and 99 is generated.
    - The guess counter is set to zero.
    - The input field and submit button are enabled.

2. **User Guessing**
    - The user enters a number and submits their guess.
    - The program checks if the guess is valid.
    - If invalid, an error message is displayed.
    - If valid, the program compares the guess to the random number.
    - The program provides hints (too high or too low) until the correct number is guessed.

3. **Game Completion**
    - When the correct number is guessed, a success message is displayed.
    - The input field and submit button are disabled.

4. **Game Reset**
    - Clicking the "Regenerate" button resets the game.
    - A new random number is generated, and the guess counter resets.

---

## **1. `Code Overview`**

### **Purpose**

This JavaScript program implements a number guessing game where users try to guess a randomly generated number between 0 and 99. The game provides hints, validates input, and allows resetting.

---

## **Full Code Breakdown (`Number Guessing Game`)**

### **Code Breakdown with Output for Each Line**

```javascript
// Selects the input field where the user enters their guess
const inputTag = document.querySelector('#num-input'); 
// Output: This selects the input field from the HTML. No visible output in UI.

// Selects the submit button that checks the guessed number
const submitBtn = document.querySelector('#submit-button');  
// Output: This selects the submit button. No visible output in UI.

// Selects the regenerate button that resets the game
const regenBtn = document.querySelector('#regen-button');  
// Output: This selects the regenerate button. No visible output in UI.

// Selects the result message display area
const message = document.querySelector('#result');  
// Output: This selects the message area where hints and results will be displayed.

// Initializes the guess count to zero
let count = 0;  
// Output: Stores the number of attempts made by the user. Initially set to 0.

// Generates a random number between 0 and 99 and stores it
let randomNum = generateRandomNumber();  
// Output: Generates a number between 0 and 99. No visible output.


// Function to generate a random number between 0 and 99
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Math.random() generates a decimal between 0 and 1, multiplying by 100 scales it up
}
// Output: Returns a whole number between 0 and 99.

// Function to reset the game
function resetGame() {
    randomNum = generateRandomNumber(); // Generates a new random number  
    count = 0; // Resets the guess count  
    message.textContent = 'Guess a New Number!'; // Displays a reset message  
    message.style.color = 'black'; // Resets message color to default  
    inputTag.value = ''; // Clears the input field  
    inputTag.disabled = false; // Enables input field in case it was disabled  
    submitBtn.disabled = false; // Enables submit button in case it was disabled  
    inputTag.focus(); // Automatically focuses on the input field for user convenience  
}
// Output: Resets the game with a new random number and clears previous messages.


// Event listener for the "Regenerate" button
// When clicked, the resetGame function is called to start a new round
regenBtn.addEventListener('click', resetGame);
// Output: Clicking the regenerate button resets the game.


// Event listener for the "Submit" button
// When clicked, the checkNum function is called to evaluate the user's guess
submitBtn.addEventListener('click', checkNum);
// Output: Clicking the submit button triggers the number check.


// Function to check the guessed number
function checkNum() {
    const guessedNum = parseInt(inputTag.value, 10); // Converts input value to an integer
    // Output: Stores the guessed number as an integer.

    // Checks if the input is a valid number between 0 and 99
    if (isNaN(guessedNum) || guessedNum < 0 || guessedNum > 99) {
        message.textContent = 'Please enter a valid number between 0 and 99!'; // Error message  
        message.style.color = '#ff4d4d'; // Red color for error messages  
        return; // Stops further execution  
    }
    // Output: If input is invalid, an error message appears in red.

    count++; // Increments the guess count
    // Output: The guess count increases by 1.

    // Checks if the guessed number is higher than the random number
    if (guessedNum > randomNum) {
        message.textContent = `📈 Too high! Try again. (Step ${count})`; // Hint message  
        message.style.color = '#ff6f61'; // Orange color for hints  
    }
    // Output: If guess is too high, an orange hint message appears.

    // Checks if the guessed number is lower than the random number
    else if (guessedNum < randomNum) {
        message.textContent = `📉 Too low! Try again. (Step ${count})`; // Hint message  
        message.style.color = '#ff6f61'; // Orange color for hints  
    }
    // Output: If guess is too low, an orange hint message appears.

    // If the guessed number is correct
    else {
        message.textContent = `🎉 Yay! You guessed the number ${randomNum} in ${count} tries!`; // Success message  
        message.style.color = '#4caf50'; // Green color for success  
        inputTag.disabled = true; // Disables input field after correct guess  
        submitBtn.disabled = true; // Disables submit button after correct guess  
    }
    // Output: If the correct number is guessed, a green success message appears.

    inputTag.focus(); // Focuses back on the input field for convenience  
    // Output: The input field is focused for the next attempt.
}

// Initializes the game by calling resetGame when the script first runs
resetGame();
// Output: Starts the game immediately after the page loads.
```  

---

## **Example Output in UI**

### **Scenario 1: User Inputs "50" and Clicks Submit (Random Number = 72)**
**Displayed Output:**
```
📉 Too low! Try again. (Step 1)
```
(Orange hint message appears.)

---

### **Scenario 2: User Inputs "80" and Clicks Submit (Random Number = 72)**
**Displayed Output:**
```
📈 Too high! Try again. (Step 2)
```
(Orange hint message appears.)

---

### **Scenario 3: User Inputs "72" and Clicks Submit (Random Number = 72)**
**Displayed Output:**
```
🎉 Yay! You guessed the number 72 in 3 tries!
```
(Green success message appears, input field and submit button are disabled.)

---

### **Scenario 4: User Clicks "Regenerate" Button**
**Displayed Output:**
```
Guess a New Number!
```
(Game resets with a new random number.)

---

## **Summary of Key Concepts**

- **Random Number Generation**: Using `Math.random()` and `Math.floor()` to generate random integers.
- **Event Listeners**: Using `.addEventListener()` to trigger functions when buttons are clicked.
- **DOM Manipulation**: Updating text, colors, and enabling/disabling elements dynamically.
- **Input Validation**: Ensuring only valid numbers between 0 and 99 are accepted.
- **Game Reset Logic**: Restarting the game with a fresh number and cleared inputs.

---

## **License and Author**

### **License**

This project is licensed under the MIT License.

### **Author**

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)  