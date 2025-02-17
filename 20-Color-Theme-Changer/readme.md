# Color Theme Changer

## **Features**

- **Dark Mode Toggle**: Allows users to switch between dark and light themes.
- **Persistent Theme**: The chosen theme is saved in local storage, so it remains even after the page is refreshed or reopened.
- **Simple Implementation**: The code is easy to understand and can be implemented with minimal dependencies.

---

## **How it Works**

1. **DOMContentLoaded Event**
   - Step 1: The event listener waits for the page's HTML content to be fully loaded.
   - Step 2: It ensures that the script will only run once the page elements are accessible.

2. **Check Saved Theme**
   - Step 1: The script looks into `localStorage` to check if the user has a saved theme preference.
   - Step 2: If the theme is saved as "dark," the body is given the class "dark-mode."

3. **Toggle Theme**
   - Step 1: When the user clicks the theme toggle button, the class "dark-mode" is either added or removed from the body.
   - Step 2: Based on the class, the theme preference is saved in `localStorage`.

---

## **1. `code`**

### **Purpose**

The purpose of this code is to allow users to toggle between dark and light themes on a webpage. It also remembers the user's theme preference by saving it to `localStorage`.

### **Code:**

```javascript
// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if the theme is saved in localStorage and apply it
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode"); // Dark mode is applied if preference is saved as 'dark'
    }

    // Toggle theme when the button is clicked
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode"); // Add or remove the dark-mode class

        // Save the updated theme to localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark"); // Save 'dark' theme if dark mode is applied
        } else {
            localStorage.setItem("theme", "light"); // Save 'light' theme if dark mode is not applied
        }
    });
});
```

**Key Points:**

- **`document.addEventListener("DOMContentLoaded", ...)`**: Ensures the script runs only after the HTML content is fully loaded, preventing errors due to missing elements.
- **`localStorage.getItem("theme")`**: Retrieves the saved theme preference from the browser's local storage.
- **`body.classList.add("dark-mode")`**: Adds the `dark-mode` class to the body element, enabling dark mode.
- **`themeToggle.addEventListener("click", ...)`**: Sets up an event listener that waits for the user to click the theme toggle button.
- **`body.classList.toggle("dark-mode")`**: Toggles the `dark-mode` class on or off based on whether it’s already applied.
- **`localStorage.setItem("theme", "dark")`**: Saves the user’s theme preference in local storage so it persists across page reloads.

---

**Key Points:**

- **Cross-browser Compatibility**: The use of `localStorage` ensures that the theme preference persists even after closing and reopening the browser.
- **Security Concerns**: Local storage is a simple way to save data but doesn't provide encryption. Avoid storing sensitive information like passwords.

---

## **Full Code Breakdown (`DOMContentLoaded`)**

### **Purpose**

This core function waits for the DOM to be ready, checks the saved theme in local storage, and provides functionality to toggle between dark and light modes.

### **Code:**

```javascript
// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if the theme is saved in localStorage and apply it
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode"); // Dark mode is applied if preference is saved as 'dark'
    }

    // Toggle theme when the button is clicked
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode"); // Add or remove the dark-mode class

        // Save the updated theme to localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark"); // Save 'dark' theme if dark mode is applied
        } else {
            localStorage.setItem("theme", "light"); // Save 'light' theme if dark mode is not applied
        }
    });
});
```

### **Function Explanation:**

1. **Step 1: Wait for DOM content**
   - The script will not run until the entire HTML document is loaded, which ensures that all elements are accessible and prevents errors.
   
2. **Step 2: Check for saved theme**
   - The code checks the saved theme in `localStorage`. If it's set to "dark," it applies the dark mode by adding the `dark-mode` class to the body.
   
3. **Step 3: Theme toggle on button click**
   - When the user clicks the button, the `dark-mode` class is toggled. If it's added, the theme is set to dark and saved in `localStorage`; if removed, the theme is set to light.

---

## **Summary of Key Concepts**

- **`localStorage`**: A simple API for saving key-value pairs in the browser. It allows the persistence of data even when the browser is closed and reopened.
- **Event Listeners**: Methods like `addEventListener()` allow us to wait for user actions (like clicking a button) and trigger specific functions.
- **Class Toggling**: Adding or removing classes from elements can alter their appearance and behavior, making this a powerful way to implement theme changes dynamically.

---

## **License and Author**

### **License**

This project is licensed under the MIT License.

### **Author**

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)