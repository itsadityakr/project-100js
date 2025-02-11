const dobInput = document.getElementById('dob-input');
const dobBtn = document.getElementById('calc-btn');
const outputDiv = document.querySelector('.output');

dobBtn.addEventListener('click', () => {
    const input = dobInput.value;
    if (!input) {
        outputDiv.innerHTML = "<p style='color: red;'>Please enter your date of birth!</p>";
        return;
    }

    const dob = new Date(input);
    const now = new Date();

    const age = calculateAge(dob, now);
    const survivalTime = calculateSurvivalTime(dob, now);

    outputDiv.innerHTML = `
    <p>You are <strong>${age.years}</strong> years old.</p>
    <p style='font-size: 0.8em; margin-top: 0.8em'>You have survived for: <strong>${survivalTime.years} years, ${survivalTime.months} months, and ${survivalTime.days}</strong> days.</p>
`;

});

// Function to calculate age
function calculateAge(dob, now) {
    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
    }

    return {years};
}

// Function to calculate survival time
function calculateSurvivalTime(dob, now) {
    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return {years, months, days};
}
