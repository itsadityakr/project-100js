// Selects the input field where the user enters their date of birth
const dobInput = document.getElementById('dob-input');

// Selects the button that the user clicks to calculate their age
const dobBtn = document.getElementById('calc-btn');

// Selects the div where the result will be displayed
const outputDiv = document.querySelector('.output');

// Adds an event listener to the button, so when it's clicked, the function runs
dobBtn.addEventListener('click', () => {
    // Gets the value entered by the user in the input field
    const input = dobInput.value;

    // If the input is empty, show an error message and stop execution
    if (!input) {
        outputDiv.innerHTML = "<p style='color: red;'>Please enter your date of birth!</p>";
        return; // Stops further execution
    }

    // Converts the user input (string) into a Date object
    const dob = new Date(input);

    // Gets the current date and time
    const now = new Date();

    // Calls function to calculate the age in years
    const age = calculateAge(dob, now);

    // Calls function to calculate the survival time (years, months, days)
    const survivalTime = calculateSurvivalTime(dob, now);

    // Updates the output div to display the results
    outputDiv.innerHTML = `
    <p>You are <strong>${age.years}</strong> years old.</p>
    <p style='font-size: 0.8em; margin-top: 0.8em'>You have survived for: 
    <strong>${survivalTime.years} years, ${survivalTime.months} months, and ${survivalTime.days}</strong> days.</p>
    `;
});

// Function to calculate age in full years
function calculateAge(dob, now) {
    let years = now.getFullYear() - dob.getFullYear(); // Calculate year difference
    let months = now.getMonth() - dob.getMonth(); // Calculate month difference
    let days = now.getDate() - dob.getDate(); // Calculate day difference

    // If the birthday hasn't happened yet in the current year, subtract one year
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
    }

    return { years }; // Return an object containing the age in years
}

// Function to calculate total survival time (years, months, and days)
function calculateSurvivalTime(dob, now) {
    let years = now.getFullYear() - dob.getFullYear(); // Calculate year difference
    let months = now.getMonth() - dob.getMonth(); // Calculate month difference
    let days = now.getDate() - dob.getDate(); // Calculate day difference

    // If days are negative, adjust by borrowing days from the previous month
    if (days < 0) {
        months--; // Reduce one month
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0); // Get last day of the previous month
        days += previousMonth.getDate(); // Add days from previous month
    }

    // If months are negative, adjust by borrowing a year
    if (months < 0) {
        years--; // Reduce one year
        months += 12; // Add 12 months to compensate
    }

    return { years, months, days }; // Return an object containing the survival time
}
