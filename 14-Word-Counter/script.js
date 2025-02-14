// Select the input field where the user types text
const stringInput = document.getElementById('stringInput');

// Select the first element with class 'outputContainer' where the word count result will be displayed
const outputContainer = document.querySelector('.outputContainer');

// Function to count words in the input field
const countWords = () => {
    // Retrieve the value from the input field and remove any leading or trailing spaces
    let str = stringInput.value.trim();

    // Split the string into an array of words:
    // - Uses a regular expression (`\s+`) to split on one or more whitespace characters (spaces, tabs, new lines)
    // - The `filter` method removes any empty elements, ensuring only actual words are counted
    let wordsArray = str.split(/\s+/).filter(word => word.length > 0);

    // Count the number of words by getting the length of the filtered array
    let countWords = wordsArray.length;

    // Update the output container with the word count, using inline CSS to set text color to yellow (#ffd900)
    outputContainer.innerHTML = `<p style="color: #ffd900;">There are ${countWords} Words</p>`;
};

// Attach an event listener to the input field:
// - Listens for the 'input' event, which triggers whenever the user types or modifies the text
// - Calls the countWords function each time the input changes, updating the word count in real time
stringInput.addEventListener('input', countWords);
