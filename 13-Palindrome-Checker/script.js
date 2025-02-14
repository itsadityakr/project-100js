// Get the input field where the user will type a string
const stringInput = document.getElementById('stringInput');

// Get the output container where the result will be displayed
const outputContainer = document.querySelector('.outputContainer'); // Fix: Select single element

// Function to check if the input string is a palindrome
const checkPalindrome = () => {
    // Get the trimmed value of the input field (remove extra spaces)
    let str = stringInput.value.trim(); // Trim spaces & lowercase for accuracy

    // Reverse the string by splitting into an array, reversing, and joining back
    let strRev = str.split('').reverse().join(''); // Reverse string

    // If the input field is empty, clear the output container and return
    if (str.length === 0) {
        outputContainer.innerHTML = ''; // Clear output if empty input
        return;
    }

    // Compare the original string with the reversed string and display the result
    outputContainer.innerHTML = (str === strRev)
        ? `<p style="color: green;">Yes, it's a palindrome!</p>` // If palindrome, show success message
        : `<p style="color: red;">No, it's not a palindrome.</p>`; // If not, show failure message
};

// Add an event listener to the input field to check for palindrome in real-time
stringInput.addEventListener('input', checkPalindrome); // Fix: Use input event for real-time checking
