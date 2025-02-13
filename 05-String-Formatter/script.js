// Function to format and manipulate strings
function formatStrings() {

    // Retrieves the value entered in the input field with ID "string1"
    let str1 = document.getElementById("string1").value;

    // Retrieves the value entered in the input field with ID "string2"
    let str2 = document.getElementById("string2").value;

    // Concatenation: Joins both strings with a space in between using the `+` operator
    let concatenation = str1 + " " + str2;

    // Template Literal: Uses backticks (`) and ${} placeholders to combine strings more cleanly
    let templateString = `${str1} ${str2}`;

    // Type Coercion: JavaScript converts `str1` to a string (if it's not already) and then adds "10" to it
    // If `str1` is "5", the result will be "510" (string) instead of 15 (number)
    let typeCoercion = str1 + 10;

    // Converts `str1` and `str2` to numbers and adds them
    // If `str1` is "5" and `str2` is "10", the result will be 15 (number)
    let numSum = Number(str1) + Number(str2);

    // Updates the HTML element with ID "output" to display the results dynamically
    document.getElementById("output").innerHTML = `
        <p><strong>Concatenation (+):</strong> ${concatenation}</p>
        <p><strong>Template Literal:</strong> ${templateString}</p>
        <p><strong>Type Coercion (String + Number):</strong> ${typeCoercion}</p>
        <p><strong>Sum Addition (Number + Number):</strong> ${numSum}</p>
    `;
}
