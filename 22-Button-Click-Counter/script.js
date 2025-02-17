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
