# **BMI Calculator**  

## **Features**  

- **User Input Handling**: Accepts weight (kg) and height (cm) as input.  
- **BMI Calculation**: Computes the BMI using the standard formula.  
- **Categorized Results**: Displays different messages based on BMI classification.  

---  

## **How it Works**  

1. **User Input Handling**  
   - The user enters weight in kilograms and height in centimeters.  
   - The input is taken from HTML elements using `document.getElementById()`.  

2. **BMI Calculation**  
   - The weight is converted to a number using `parseFloat()`.  
   - The height is converted from centimeters to meters.  
   - The BMI is calculated using the formula:  
     \[
     BMI = \frac{\text{weight (kg)}}{\text{height (m)}^2}
     \]  

3. **Displaying Results**  
   - If inputs are invalid (empty or negative values), an error message appears.  
   - Based on the BMI value, a corresponding health status is shown in different colors.  

---  

## **1. `bmi()` Function**  

### **Purpose**  

The `bmi()` function calculates the Body Mass Index (BMI) based on user input and displays a result message.  

### **Code:**  

```javascript
const kg = document.getElementById("input-kg");
const cm = document.getElementById("input-cm");
const btn = document.getElementById("submit-btn");
const message = document.querySelector(".output-div");

const bmi = () => {
    const mass = parseFloat(kg.value);
    const height = parseFloat(cm.value) / 100;

    if (!mass || !height || mass <= 0 || height <= 0) {
        message.innerHTML = `<p style="color: red;">Please enter valid numbers!</p>`;
        return;
    }

    let res = (mass / (height ** 2)).toFixed(2);

    let outputText = "";
    let outputColor = "";

    if (res < 18.5) {
        outputText = `You are Underweight (BMI: ${res})`;
        outputColor = "#f4c542";
    } else if (res >= 18.5 && res < 25) {
        outputText = `You are Healthy (BMI: ${res})`;
        outputColor = "#28a745";
    } else if (res >= 25 && res < 30) {
        outputText = `You are Overweight (BMI: ${res})`;
        outputColor = "#ff9f43";
    } else {
        outputText = `You have Obesity (BMI: ${res})`;
        outputColor = "#dc3545";
    }

    message.innerHTML = `<p style="color: ${outputColor};">${outputText}</p>`;
};

btn.addEventListener("click", bmi);
```  

**Key Points:**  

- Retrieves user input values using `getElementById()`.  
- Converts weight and height into numerical values using `parseFloat()`.  
- Validates inputs to ensure they are positive numbers.  
- Computes BMI using the standard formula.  
- Uses conditional statements (`if-else`) to categorize BMI results.  
- Dynamically updates the webpage by modifying the `innerHTML` of an element.  

---  

## **Full Code Breakdown (`bmi()`)**  

### **Purpose**  

The function `bmi()` calculates and displays the BMI along with an appropriate message based on predefined categories.  

### **Function Explanation:**  

1. **Reading User Input**  
   - Retrieves the values of weight and height from the input fields.  
   - Converts them into floating-point numbers using `parseFloat()`.  
   - Converts height from cm to meters by dividing by 100.  

2. **Validation Check**  
   - Ensures inputs are valid (not empty or negative).  
   - If invalid, it displays an error message in red and stops execution.  

3. **BMI Calculation**  
   - Uses the formula:  
     \[
     BMI = \frac{\text{mass}}{\text{height}^2}
     \]  
   - The result is rounded to two decimal places using `.toFixed(2)`.  

4. **Categorization of Results**  
   - If BMI < 18.5 → Underweight (Yellow).  
   - If 18.5 ≤ BMI < 25 → Healthy (Green).  
   - If 25 ≤ BMI < 30 → Overweight (Orange).  
   - If BMI ≥ 30 → Obesity (Red).  

5. **Displaying the Result**  
   - Sets the text and color dynamically based on the BMI category.  
   - Updates the webpage using `innerHTML`.  

---  

## **Summary of Key Concepts**  

- **`document.getElementById()`**: Selects an element by its ID.  
- **`parseFloat()`**: Converts string input into a floating-point number.  
- **BMI Formula**: Used to calculate BMI.  
- **`innerHTML`**: Updates webpage content dynamically.  
- **Conditional Statements**: Used to categorize BMI results.  
- **Event Listener (`addEventListener()`)**: Triggers BMI calculation when the button is clicked.  

---  

## **License and Author**  

### **License**  

This project is licensed under the MIT License.  

### **Author**  

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)  