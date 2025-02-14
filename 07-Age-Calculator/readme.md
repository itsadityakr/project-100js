# **Age Calculator**

## **Features**

- **Age Calculation**: Calculates a user's age in full years based on their date of birth.
- **Survival Time Calculation**: Displays the exact time the user has lived in years, months, and days.
- **Error Handling**: Shows a message if the input field is empty.

---

## **How it Works**

1. **User Input Handling**
    - The user enters their date of birth in an input field.
    - If no date is entered, an error message is displayed.

2. **Age Calculation**
    - The input date is converted into a `Date` object.
    - The current date is fetched.
    - A function calculates the full years since birth.

3. **Survival Time Calculation**
    - Another function calculates the precise survival duration in years, months, and days.
    - Adjustments are made for negative month and day values.

4. **Displaying the Result**
    - The calculated age and survival time are displayed dynamically in the browser.

---

## **1. `Code Overview`**

### **Purpose**

This JavaScript program calculates the age and survival time based on a user's date of birth. It handles input validation, date conversion, and dynamic output rendering.

---

## **Full Code Breakdown (`Age Calculation & Survival Time`)**

### **Code Breakdown with Output for Each Line**

```javascript
// Selects the input field where the user enters their date of birth
const dobInput = document.getElementById('dob-input'); 
// Output: This selects the input field from the HTML. No visible output in UI.

// Selects the button that the user clicks to calculate their age
const dobBtn = document.getElementById('calc-btn');  
// Output: This selects the button from the HTML. No visible output in UI.

// Selects the div where the result will be displayed
const outputDiv = document.querySelector('.output');  
// Output: This selects the output div where results will appear. No visible output in UI.

// Adds an event listener to the button, so when it's clicked, the function runs
dobBtn.addEventListener('click', () => {  
    // Output: No output yet, but the function runs when the button is clicked.

    // Gets the value entered by the user in the input field
    const input = dobInput.value;  
    // Output: Stores the user’s entered date. No visible output yet.

    // If the input is empty, show an error message and stop execution
    if (!input) {  
        outputDiv.innerHTML = "<p style='color: red;'>Please enter your date of birth!</p>";  
        // Output: If input is empty, it shows a red error message.
        return; // Stops further execution
    }

    // Converts the user input (string) into a Date object
    const dob = new Date(input);  
    // Output: Converts the entered date into a JavaScript Date object. No visible output.

    // Gets the current date and time
    const now = new Date();  
    // Output: Stores the current date. No visible output.

    // Calls function to calculate the age in years
    const age = calculateAge(dob, now);  
    // Output: Calls the function and calculates the user's age.

    // Calls function to calculate the survival time (years, months, days)
    const survivalTime = calculateSurvivalTime(dob, now);  
    // Output: Calls the function to calculate how long the user has survived.

    // Updates the output div to display the results
    outputDiv.innerHTML = `  
    <p>You are <strong>${age.years}</strong> years old.</p>  
    <p style='font-size: 0.8em; margin-top: 0.8em'>You have survived for:   
    <strong>${survivalTime.years} years, ${survivalTime.months} months, and ${survivalTime.days}</strong> days.</p>  
    `;
    // Output: Displays the calculated age and survival time in the HTML output div.
});

// Function to calculate age in full years
function calculateAge(dob, now) {  
    let years = now.getFullYear() - dob.getFullYear(); // Calculate year difference  
    // Output: Subtracts birth year from the current year to get age.

    let months = now.getMonth() - dob.getMonth(); // Calculate month difference  
    // Output: Checks the difference in months.

    let days = now.getDate() - dob.getDate(); // Calculate day difference  
    // Output: Checks the difference in days.

    // If the birthday hasn't happened yet in the current year, subtract one year
    if (months < 0 || (months === 0 && days < 0)) {  
        years--;  
        // Output: If the birthday hasn't passed, subtract one year.
    }

    return { years }; // Return an object containing the age in years  
    // Output: Returns the calculated age as an object.
}

// Function to calculate total survival time (years, months, and days)
function calculateSurvivalTime(dob, now) {  
    let years = now.getFullYear() - dob.getFullYear(); // Calculate year difference  
    // Output: Subtracts birth year from the current year.

    let months = now.getMonth() - dob.getMonth(); // Calculate month difference  
    // Output: Gets the difference in months.

    let days = now.getDate() - dob.getDate(); // Calculate day difference  
    // Output: Gets the difference in days.

    // If days are negative, adjust by borrowing days from the previous month
    if (days < 0) {  
        months--; // Reduce one month  
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0); // Get last day of the previous month  
        days += previousMonth.getDate(); // Add days from previous month  
        // Output: Adjusts for negative day differences by borrowing days.
    }

    // If months are negative, adjust by borrowing a year
    if (months < 0) {  
        years--; // Reduce one year  
        months += 12; // Add 12 months to compensate  
        // Output: Adjusts for negative month differences by borrowing from the year.
    }

    return { years, months, days }; // Return an object containing the survival time  
    // Output: Returns survival time as an object.
}
```  

---

## **Example Output in UI**

### **Scenario 1: User Inputs "2000-05-10" and Clicks the Button**
**Displayed Output:**
```
You are 23 years old.
You have survived for: 23 years, 9 months, and 5 days.
```

---

### **Scenario 2: User Clicks the Button Without Entering a Date**
**Displayed Output:**
```
Please enter your date of birth!
```
(Red error message appears.)

---

## **Summary of Key Concepts**

- **`Date` Object**: Used to handle dates in JavaScript.
- **DOM Manipulation**: Selecting elements and updating the UI dynamically.
- **Event Listeners**: Detecting button clicks to trigger calculations.
- **Error Handling**: Preventing execution when input is empty.
- **Date Adjustments**: Fixing negative values in months and days for accuracy.

---

## **License and Author**

### **License**

This project is licensed under the MIT License.

### **Author**

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)

---