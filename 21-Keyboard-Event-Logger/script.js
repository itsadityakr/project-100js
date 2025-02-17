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