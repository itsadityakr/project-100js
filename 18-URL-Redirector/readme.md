# **URL Redirector**  

## **Features**  

- **User Input Handling**: Allows users to enter a URL.  
- **Conditional Redirection**: Opens the URL in a new tab if the checkbox is checked, otherwise redirects in the same tab.  
- **Prevents Default Form Submission**: Ensures smooth navigation without reloading the page.  

---  

## **How it Works**  

1. **User Enters URL**  
   - The user types a URL into the input field.  

2. **User Selects Checkbox (Optional)**  
   - If the checkbox is checked, the URL will open in a new tab.  
   - If unchecked, the URL will open in the same tab.  

3. **Clicking the Submit Button**  
   - Triggers a JavaScript function that fetches the input value and checks the checkbox status.  
   - Redirects accordingly without refreshing the page.  

---  

## **1. Code Overview**  

### **Purpose**  

This script handles user-provided URLs and conditionally redirects based on checkbox selection.  

### **Code:**  

```javascript
const btnSubmit = document.querySelector(`.submit`); 

btnSubmit.addEventListener(`click`, function (event) { 
    const url = document.getElementById(`url`).value; 
    const isChecked = document.getElementById(`check`).checked; 
    event.preventDefault(); 

    if (isChecked) { 
        window.open(`${url}`, "_blank"); 
    } else { 
        window.location.href = `${url}`; 
    }
});
```

### **Key Points:**  

- **`document.querySelector('.submit')`**  
  - Selects the button element with the class `"submit"`.  

- **Event Listener (`btnSubmit.addEventListener("click", function(event) {...}`)**  
  - Triggers when the button is clicked.  

- **`document.getElementById("url").value`**  
  - Fetches the URL entered in the input field.  

- **`document.getElementById("check").checked`**  
  - Checks whether the checkbox is selected (returns `true` or `false`).  

- **`event.preventDefault()`**  
  - Prevents default form submission to handle redirection manually.  

- **Conditional Redirection (`if-else`)**  
  - If the checkbox is checked, `window.open(url, "_blank")` opens the URL in a new tab.  
  - If unchecked, `window.location.href = url` redirects in the same tab.  

---  

## **Full Code Breakdown (`btnSubmit.addEventListener()`)**  

### **Purpose**  

Handles user interaction, fetches input, and redirects accordingly.  

### **Function Explanation:**  

1. **User Clicks Submit**  
   - The script detects the button click event.  

2. **Retrieves Input Values**  
   - Captures the URL entered in the input field.  
   - Checks if the checkbox is selected.  

3. **Prevents Default Behavior**  
   - Ensures the page does not refresh when submitting the form.  

4. **Conditional Navigation**  
   - Opens in a new tab if the checkbox is checked.  
   - Redirects in the same tab otherwise.  

---  

## **Summary of Key Concepts**  

- **DOM Selection**: `querySelector()` and `getElementById()` to interact with elements.  
- **Event Handling**: `addEventListener()` to detect button clicks.  
- **Form Control**: `preventDefault()` to override default form behavior.  
- **Window Navigation**: `window.open()` for new tabs, `window.location.href` for same-tab redirection.  

---  

## **License and Author**  

### **License**  

This project is licensed under the MIT License.  

### **Author**  

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)