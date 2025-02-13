# **Tip Calculator**

## **Features**

- **User Input Handling**: Takes bill amount and tip percentage from user input.
- **Tip Calculation**: Computes the tip amount based on the entered percentage.
- **Total Bill Calculation**: Adds the tip to the bill amount.
- **Error Handling**: Displays an error if the user enters invalid input.

---  

## **How it Works**

1. **User Input Collection**
    - The user enters the bill amount and tip percentage.
    - The script retrieves these values when the button is clicked.

2. **Tip and Total Bill Calculation**
    - **Tip Calculation**: The bill amount is multiplied by the tip percentage and divided by 100.
    - **Total Bill Calculation**: The tip amount is added to the original bill.

3. **Displaying Results**
    - The calculated tip and total bill are displayed with two decimal places.
    - If invalid input is entered, an error message is displayed.

---  

## **1. `document.querySelector()` (Selecting Elements with CSS Selectors)**

### **Purpose**
Selects an element from the DOM using a CSS selector.

### **Syntax:**
```javascript
document.querySelector("selector");
```  

### **Example:**
```javascript
const button = document.querySelector("#calc-btn");
```  

**Key Points:**
- Allows selecting elements using CSS selectors like `#id`, `.class`, or `tagName`.
- Only selects the first matching element.

---  

## **2. `addEventListener('click', callback)` (Handling Click Events)**

### **Purpose**
Adds an event listener to an element to execute a function when clicked.

### **Syntax:**
```javascript
element.addEventListener("click", function);
```  

### **Example:**
```javascript
document.querySelector("#calc-btn").addEventListener("click", () => {
    console.log("Button Clicked!");
});
```  

**Key Points:**
- Listens for user interaction and triggers a function.
- The arrow function `()=>{}` is a shorthand for defining event handlers.

---  

## **3. `document.getElementById()` (Fetching Input Values)**

### **Purpose**
Retrieves an HTML element using its unique `id`.

### **Syntax:**
```javascript
document.getElementById("elementID");
```  

### **Example:**
```javascript
const bill = document.getElementById("bill-input").value;
```  

**Key Points:**
- Used to access form inputs and other elements.
- `.value` retrieves the user-entered value.

---  

## **4. `Number()` (Converting Strings to Numbers)**

### **Purpose**
Converts a string input into a number for mathematical operations.

### **Syntax:**
```javascript
Number(string);
```  

### **Example:**
```javascript
let num = Number("10"); // 10 (Number)
```  

**Key Points:**
- Converts `"10"` (string) into `10` (number).
- Ensures calculations work properly instead of concatenating as a string.

---  

## **5. Tip Calculation (`(bill * tip) / 100`)**

### **Purpose**
Calculates the tip amount from the entered percentage.

### **Syntax:**
```javascript
let tipValue = (bill * tip) / 100;
```  

### **Example:**
```javascript
let bill = 100;
let tip = 15;
let tipValue = (bill * tip) / 100; // Output: 15
```  

**Key Points:**
- Multiplies bill amount by tip percentage.
- Divides by 100 to get the actual tip amount.

---  

## **6. `.toFixed(2)` (Formatting to Two Decimal Places)**

### **Purpose**
Rounds numbers to two decimal places for currency formatting.

### **Syntax:**
```javascript
number.toFixed(2);
```  

### **Example:**
```javascript
let total = 25.6789;
console.log(total.toFixed(2)); // Output: "25.68"
```  

**Key Points:**
- Ensures monetary values are displayed correctly.
- Rounds to two decimal places.

---  

## **Full Code Breakdown (Tip Calculator Logic)**

### **Purpose**
Calculates the tip and total bill based on user input and displays the results.

### **Code:**
```javascript
document.querySelector('#calc-btn').addEventListener('click', () => {
    const tip = Number(document.getElementById('tip-input').value);
    const bill = Number(document.getElementById('bill-input').value);

    if (tip >= 0 && bill > 0) {
        let tipValue = (bill * tip) / 100;
        let totalBill = bill + tipValue;

        document.querySelector('#output').innerText =
            `Tip: $${tipValue.toFixed(2)}\nTotal Bill: $${totalBill.toFixed(2)}`;
    } else {
        document.querySelector('#output').innerText =
            `Tip: Wrong Input\nTotal Bill: Wrong Input`;
    }
});
```  

### **Function Explanation:**

1. **Step 1:** Retrieves user input for bill amount and tip percentage.
2. **Step 2:** Converts input values to numbers for calculations.
3. **Step 3:** Checks if the values are valid (bill must be greater than 0).
4. **Step 4:** Calculates the tip and total bill.
5. **Step 5:** Formats the values to two decimal places and displays them.
6. **Step 6:** Displays an error message if inputs are invalid.

---  

## **Summary Table of Key Concepts**

| Concept | Description | Syntax | Example |  
|---------|------------|--------|---------|  
| `document.querySelector()` | Selects an element using CSS selector | `document.querySelector("#id");` | `document.querySelector("#calc-btn");` |  
| `addEventListener("click")` | Attaches an event listener | `element.addEventListener("click", function);` | `button.addEventListener("click", () => { console.log("Clicked!"); });` |  
| `document.getElementById()` | Fetches an element by ID | `document.getElementById("id");` | `const input = document.getElementById("bill-input");` |  
| `Number()` | Converts a string to a number | `Number(string);` | `Number("15"); // 15` |  
| `toFixed(2)` | Rounds a number to two decimal places | `number.toFixed(2);` | `(15.678).toFixed(2); // "15.68"` |  

---  

## **License and Author**

### **License**
This project is licensed under the MIT License.

### **Author**
**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)  