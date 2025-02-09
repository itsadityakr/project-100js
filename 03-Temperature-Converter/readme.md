# **Project: Temperature Converter**

## Introduction
This project is a **Temperature Converter** that allows users to input a temperature in **Celsius** and convert it to either **Celsius, Fahrenheit, or Kelvin**. Additionally, the background color changes dynamically based on the temperature range.

The project primarily consists of three parts:
1. **HTML** – Creates the basic structure, including input fields, a dropdown menu, and a button.
2. **CSS** – Styles the page for a clean and modern look.
3. **JavaScript** – Handles user interactions, conversions, and dynamic background color changes.

---

## **How JavaScript Works in This Project**

### **1. Event Listeners for User Interaction**
JavaScript listens for user actions like typing or clicking a button using event listeners.

#### **Snippet: Listening for Input Changes**
```js
document.getElementById('input-temp').addEventListener('input', updateBackground);
```
- This listens for any change in the temperature input field.
- When the user types a number, it triggers the `updateBackground()` function, which updates the page's background color.

#### **Snippet: Listening for Button Click**
```js
document.getElementById('output-btn').addEventListener('click', updateTemperature);
```
- This listens for when the "Convert" button is clicked.
- When clicked, it triggers the `updateTemperature()` function, which calculates and displays the converted temperature.

---

### **2. Dynamic Background Change Based on Temperature**
The background color of the webpage changes depending on the temperature range.

#### **Snippet: Temperature-Based Color Change**
```js
if (temp < 15) {
    document.body.style.background = "radial-gradient(circle at 20% 20%, #ffffff, #1ca0ff)"; // Cold
} else if (temp >= 15 && temp < 30) {
    document.body.style.background = "radial-gradient(circle at 20% 20%, #ffffff, #fff042)"; // Warm
} else if (temp >= 30 && temp < 40) {
    document.body.style.background = "radial-gradient(circle at 20% 20%, #ffdf42, #ff2212)"; // Hot
} else {
    document.body.style.background = "radial-gradient(circle at 20% 20%, #ff0000, #ff0000)"; // Very Hot
}
```
- **Cold temperatures (<15°C)** → Blue
- **Mild temperatures (15-29°C)** → Yellow
- **Hot temperatures (30-39°C)** → Orange to Red
- **Very hot temperatures (40°C and above)** → Red

---

### **3. Temperature Conversion Logic**
The selected unit determines how the temperature is converted.

#### **Snippet: Handling Different Conversions**
```js
switch (selection) {
    case "Celsius":
        result = temp;
        break;
    case "Fahrenheit":
        result = (temp * 1.8) + 32;
        break;
    case "Kelvin":
        result = temp + 273.15;
        break;
}
```
- **Celsius** (default) → No change.
- **Fahrenheit** → Formula: `(C × 9/5) + 32`
- **Kelvin** → Formula: `C + 273.15`

The result is then displayed in the output area.

---

### **4. Handling Invalid Input**
To prevent errors, JavaScript checks if the input is a valid number.

#### **Snippet: Input Validation**
```js
if (isNaN(temp)) {
    outputSpan.textContent = "Invalid input";
    return;
}
```
- If the user enters an invalid value (e.g., letters or empty input), an error message **"Invalid input"** appears instead of calculating.

---

## **Conclusion**
This project covers key JavaScript concepts:
✅ **Event Handling** (`addEventListener`)  
✅ **DOM Manipulation** (`document.getElementById()`, `document.querySelector()`)  
✅ **Conditional Statements** (`if-else`, `switch-case`)  
✅ **User Input Validation** (`isNaN()`)

---