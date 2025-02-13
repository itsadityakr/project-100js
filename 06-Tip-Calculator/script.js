// Selects the button with ID "calc-btn" and adds a click event listener to it
document.querySelector('#calc-btn').addEventListener('click', () => {

    // Retrieves the value entered in the input field with ID "tip-input" and converts it to a number
    const tip = Number(document.getElementById('tip-input').value);

    // Retrieves the value entered in the input field with ID "bill-input" and converts it to a number
    const bill = Number(document.getElementById('bill-input').value);

    // Checks if the tip is 0 or greater AND the bill is greater than 0 (valid inputs)
    if (tip >= 0 && bill > 0) {

        // Calculates the tip amount by multiplying the bill by the tip percentage and dividing by 100
        let tipValue = (bill * tip) / 100;

        // Calculates the total bill by adding the tip amount to the original bill
        let totalBill = bill + tipValue;

        // Updates the text inside the element with ID "output" to show the tip and total bill
        // .toFixed(2) ensures the values are rounded to 2 decimal places for proper currency formatting
        document.querySelector('#output').innerText =
            `Tip: $${tipValue.toFixed(2)}\nTotal Bill: $${totalBill.toFixed(2)}`;

    } else {
        // If invalid input is provided (negative tip or non-positive bill), show an error message
        document.querySelector('#output').innerText =
            `Tip: Wrong Input\nTotal Bill: Wrong Input`;
    }
});
