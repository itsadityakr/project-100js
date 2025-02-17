# **Window Size Display**  

## **Features**  

- **Display Actual Screen Size**: Shows the total available workspace size of the screen.  
- **Display Browser Window Size**: Displays the current inner width and height of the browser window.  
- **User Interaction**: Updates the displayed size dynamically when the user clicks the buttons.  

---  

## **How it Works**  

1. **Display Actual Screen Size**  
   - Retrieves the available screen width and height.  
   - Displays the dimensions in a message container when the button is clicked.  

2. **Display Browser Window Size**  
   - Fetches the current inner width and height of the browser window.  
   - Updates the message container when the button is clicked.  

3. **Event Listeners for User Interaction**  
   - Listens for button clicks and triggers the respective function.  

---  

## **1. Code Overview**  

### **Purpose**  

This code allows users to see both the total screen size and the actual browser window size dynamically.  

### **Code:**  

```javascript
const availBtn = document.getElementById("availWH");
const actualBtn = document.getElementById("actualWH");
const message = document.querySelector(".sizeDiv");

const actualWH = () => {
    let w = window.screen.availWidth;
    let h = window.screen.availHeight;
    message.textContent = `Actual Workspace Size is (${w}, ${h})`;
};

const availWH = () => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    message.textContent = `Total Browser Window Size is (${w}, ${h})`;
};

availBtn.addEventListener("click", availWH);
actualBtn.addEventListener("click", actualWH);
```

### **Key Points:**  

- **`document.getElementById("availWH")`**  
  - Selects the button with the ID `"availWH"` for detecting clicks.  

- **`document.getElementById("actualWH")`**  
  - Selects the button with the ID `"actualWH"` to detect clicks.  

- **`document.querySelector(".sizeDiv")`**  
  - Selects the element with the class `"sizeDiv"` to update the displayed message.  

- **Function `actualWH()`**  
  - Retrieves `window.screen.availWidth` and `window.screen.availHeight`, representing the total available screen size.  
  - Updates the `message` element with these values.  

- **Function `availWH()`**  
  - Gets `window.innerWidth` and `window.innerHeight`, representing the current browser window size.  
  - Updates the `message` element accordingly.  

- **Event Listeners**  
  - **`availBtn.addEventListener("click", availWH);`**  
    - Calls `availWH()` when the "availWH" button is clicked.  
  - **`actualBtn.addEventListener("click", actualWH);`**  
    - Calls `actualWH()` when the "actualWH" button is clicked.  

---  

## **Full Code Breakdown (`actualWH()` and `availWH()`)**  

### **Purpose**  

These functions fetch and display screen dimensions based on user interactions.  

### **Function Explanation:**  

1. **`actualWH()`**  
   - Fetches the available screen width and height.  
   - Updates the UI with the message `"Actual Workspace Size is (width, height)"`.  

2. **`availWH()`**  
   - Retrieves the current inner width and height of the browser window.  
   - Updates the UI with `"Total Browser Window Size is (width, height)"`.  

3. **Event Listeners**  
   - Detects button clicks and triggers the respective functions.  

---  

## **Summary of Key Concepts**  

- **DOM Selection**: Used `getElementById` and `querySelector` to manipulate elements.  
- **Screen and Window Properties**: Used `window.screen.availWidth`, `window.screen.availHeight`, `window.innerWidth`, and `window.innerHeight` to fetch sizes.  
- **Event Handling**: Used `addEventListener` to detect user clicks and update the display.  

---  

## **License and Author**  

### **License**  

This project is licensed under the MIT License.  

### **Author**  

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)