// Select the button element with the ID 'diceBtn' and store it in the variable 'btn'.
// - `document.getElementById('diceBtn')` searches the document for an element with the specified ID.
// - The selected element is then assigned to the constant variable `btn`, allowing us to manipulate it in JavaScript.
const btn = document.getElementById(`diceBtn`);

// Define a function named `generateRandomNumber` that will execute when the button is clicked.
const generateRandomNumber = () => {
    // Generate a random integer between 1 and 6 (inclusive), simulating a dice roll:
    // - `Math.random()` generates a random decimal between 0 (inclusive) and 1 (exclusive).
    // - Multiplying by 6 (`Math.random() * 6`) scales it to a range of 0 to just under 6.
    // - `Math.floor(...)` rounds down to the nearest whole number, giving values from 0 to 5.
    // - Adding `+1` shifts the range from [0,5] to [1,6], ensuring it simulates a standard 6-sided die.
    let num = Math.floor(Math.random() * 6) + 1;

    // Update the button's text content to display the randomly generated number:
    // - `btn.textContent = num;` replaces the existing text inside the button with the new number.
    // - Template literals (backticks) ensure that the number is converted to a string properly.
    btn.textContent = `${num}`;
}

// Attach an event listener to the button that listens for a 'click' event.
// - `btn.addEventListener('click', generateRandomNumber);` means:
//   - When the button is clicked, execute the `generateRandomNumber` function.
//   - The function will generate a new random number and update the button's text accordingly.
btn.addEventListener('click', generateRandomNumber);
