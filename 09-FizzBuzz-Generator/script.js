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