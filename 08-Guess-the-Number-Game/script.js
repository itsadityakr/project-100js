// Selects the input field where the user enters their guess
const inputTag = document.querySelector('#num-input');

// Selects the submit button that checks the guessed number
const submitBtn = document.querySelector('#submit-button');

// Selects the regenerate button that resets the game
const regenBtn = document.querySelector('#regen-button');

// Selects the result message display area
const message = document.querySelector('#result');

// Initializes the guess count to zero
let count = 0;

// Generates a random number between 0 and 99 and stores it
let randomNum = generateRandomNumber();

// Function to generate a random number between 0 and 99
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Math.random() generates a decimal between 0 and 1, multiplying by 100 scales it up
}

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

// Event listener for the "Regenerate" button
// When clicked, the resetGame function is called to start a new round
regenBtn.addEventListener('click', resetGame);

// Event listener for the "Submit" button
// When clicked, the checkNum function is called to evaluate the user's guess
submitBtn.addEventListener('click', checkNum);

// Function to check the guessed number
function checkNum() {
    const guessedNum = parseInt(inputTag.value, 10); // Converts input value to an integer

    // Checks if the input is a valid number between 0 and 99
    if (isNaN(guessedNum) || guessedNum < 0 || guessedNum > 99) {
        message.textContent = 'Please enter a valid number between 0 and 99!'; // Error message
        message.style.color = '#ff4d4d'; // Red color for error messages
        return; // Stops further execution
    }

    count++; // Increments the guess count

    // Checks if the guessed number is higher than the random number
    if (guessedNum > randomNum) {
        message.textContent = `📈 Too high! Try again. (Step ${count})`; // Hint message
        message.style.color = '#ff6f61'; // Orange color for hints
    }
    // Checks if the guessed number is lower than the random number
    else if (guessedNum < randomNum) {
        message.textContent = `📉 Too low! Try again. (Step ${count})`; // Hint message
        message.style.color = '#ff6f61'; // Orange color for hints
    }
    // If the guessed number is correct
    else {
        message.textContent = `🎉 Yay! You guessed the number ${randomNum} in ${count} tries!`; // Success message
        message.style.color = '#4caf50'; // Green color for success
        inputTag.disabled = true; // Disables input field after correct guess
        submitBtn.disabled = true; // Disables submit button after correct guess
    }
    inputTag.focus(); // Focuses back on the input field for convenience
}

// Initializes the game by calling resetGame when the script first runs
resetGame();
