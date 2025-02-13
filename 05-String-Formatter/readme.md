# **JavaScript String Formatter**

## **Features**

- **String Concatenation**: Joins two strings with a space in between.
- **Template Literals**: Uses modern ES6 syntax to combine strings cleanly.
- **Type Coercion**: Demonstrates how JavaScript handles string and number addition.
- **Numeric Addition**: Converts input values to numbers and adds them.

---  

## **How it Works**

1. **User Input Handling**
    - The user enters two values in input fields.
    - The script retrieves the values when a button is clicked.

2. **String Operations**
    - **Concatenation**: Joins two strings using the `+` operator.
    - **Template Literals**: Uses ES6 template literals to format strings.

3. **Type Coercion and Numeric Addition**
    - **Type Coercion**: Adds a number (`10`) to a string input.
    - **Numeric Addition**: Converts both inputs to numbers and adds them.

4. **Displaying Results**
    - The formatted output is displayed inside the HTML element with ID `"output"`.

---  

## **1. `document.getElementById()` (Selecting Elements by ID)**

### **Purpose**
Fetches an HTML element using its unique `id` attribute.

### **Syntax:**
```javascript
document.getElementById("elementID");
```  

### **Example:**
```javascript
const inputField = document.getElementById("string1");
console.log(inputField.value);
```  

**Key Points:**
- Used to get a reference to an element with a specific ID.
- Allows us to manipulate user input dynamically.

---  

## **2. String Concatenation (`+` Operator)**

### **Purpose**
Joins two strings together using the `+` operator.

### **Syntax:**
```javascript
let result = string1 + " " + string2;
```  

### **Example:**
```javascript
let str1 = "Hello";
let str2 = "World";
let concatenation = str1 + " " + str2;
console.log(concatenation); // Output: "Hello World"
```  

**Key Points:**
- The `+` operator adds strings together.
- A space `" "` is manually added to separate words.

---  

## **3. Template Literals (ES6 String Interpolation)**

### **Purpose**
Formats strings more efficiently using backticks (` `` `) and `${}` placeholders.

### **Syntax:**
```javascript
let result = `${string1} ${string2}`;
```  

### **Example:**
```javascript
let str1 = "Hello";
let str2 = "World";
let templateString = `${str1} ${str2}`;
console.log(templateString); // Output: "Hello World"
```  

**Key Points:**
- Uses backticks instead of quotes.
- Allows embedding variables directly using `${}`.

---  

## **4. Type Coercion (String + Number Behavior)**

### **Purpose**
Demonstrates how JavaScript converts types dynamically when adding a string and a number.

### **Syntax:**
```javascript
let result = string + number;
```  

### **Example:**
```javascript
let str1 = "5";
let typeCoercion = str1 + 10;
console.log(typeCoercion); // Output: "510" (String)
```  

**Key Points:**
- JavaScript automatically converts `10` into a string if `str1` is a string.
- `"5" + 10` results in `"510"` instead of `15`.

---  

## **5. Converting Strings to Numbers (`Number()`)**

### **Purpose**
Converts string inputs into numbers for proper mathematical operations.

### **Syntax:**
```javascript
let numericValue = Number(string);
```  

### **Example:**
```javascript
let str1 = "5";
let str2 = "10";
let numSum = Number(str1) + Number(str2);
console.log(numSum); // Output: 15
```  

**Key Points:**
- `Number()` converts strings into numbers.
- `"5"` and `"10"` become `5` and `10`, allowing proper addition.

---  

## **Full Code Breakdown (`formatStrings()`)**

### **Purpose**
Formats user input using different string operations and displays the results.

### **Code:**
```javascript
function formatStrings() {
    let str1 = document.getElementById("string1").value;
    let str2 = document.getElementById("string2").value;

    let concatenation = str1 + " " + str2;
    let templateString = `${str1} ${str2}`;
    let typeCoercion = str1 + 10;
    let numSum = Number(str1) + Number(str2);

    document.getElementById("output").innerHTML = `
        <p><strong>Concatenation (+):</strong> ${concatenation}</p>
        <p><strong>Template Literal:</strong> ${templateString}</p>
        <p><strong>Type Coercion (String + Number):</strong> ${typeCoercion}</p>
        <p><strong>Sum Addition (Number + Number):</strong> ${numSum}</p>
    `;
}
```  

### **Function Explanation:**

1. **Step 1:** Retrieves user input from two input fields (`string1` and `string2`).
2. **Step 2:** Performs various string operations: concatenation, template literals, and type coercion.
3. **Step 3:** Converts inputs to numbers and performs numeric addition.
4. **Step 4:** Updates the `output` element to display results dynamically.

---  

## **Summary Table of Key Concepts**

| Concept | Description | Syntax | Example |  
|---------|------------|--------|---------|  
| `document.getElementById()` | Selects an element by ID | `document.getElementById("id");` | `const input = document.getElementById("string1");` |  
| Concatenation (`+`) | Joins two strings | `string1 + " " + string2;` | `"Hello" + "World"; // "Hello World"` |  
| Template Literals | Formats strings using `${}` | `` `${string1} ${string2}` `` | `` `${"Hello"} ${"World"}` `` |  
| Type Coercion | Converts types dynamically | `string + number;` | `"5" + 10; // "510"` |  
| `Number()` | Converts a string to a number | `Number(string);` | `Number("5") + Number("10"); // 15` |  

---  

## **License and Author**

### **License**
This project is licensed under the MIT License.

### **Author**
**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)  

---