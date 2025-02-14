# **Palindrome Checker**  

## **Features**  

- **Real-time Input Processing**: The script checks the input as the user types.  
- **Case and Space Handling**: Ignores spaces and processes input in a case-sensitive manner.  
- **User-friendly Output**: Displays a message indicating whether the input is a palindrome.  

---

## **How it Works**  

1. **User Input Processing**  
   - The script listens for changes in the input field.  
   - When a user types a word, it reads the value from the input box.  

2. **Palindrome Check Logic**  
   - The input string is trimmed to remove extra spaces.  
   - The string is reversed and compared with the original.  

3. **Displaying Output**  
   - If the input is a palindrome, a green message appears.  
   - If not, a red message is displayed.  

---

## **1. `checkPalindrome()` Function**  

### **Purpose**  

This function determines if the entered string is a palindrome and updates the output accordingly.  

### **Code:**  

```javascript
const stringInput = document.getElementById('stringInput'); 
const outputContainer = document.querySelector('.outputContainer'); // Select output container

const checkPalindrome = () => {
    let str = stringInput.value.trim(); // Remove extra spaces
    let strRev = str.split('').reverse().join(''); // Reverse the string

    if (str.length === 0) {
        outputContainer.innerHTML = ''; // Clear output if input is empty
        return;
    }

    outputContainer.innerHTML = (str === strRev)
        ? `<p style="color: green;">Yes, it's a palindrome!</p>`
        : `<p style="color: red;">No, it's not a palindrome.</p>`;
};

stringInput.addEventListener('input', checkPalindrome); // Runs check on every input change
```

**Key Points:**  

- `document.getElementById('stringInput')`: Retrieves the input field element by its ID.  
- `document.querySelector('.outputContainer')`: Selects the first element with the class `outputContainer`.  
- `stringInput.value.trim()`: Removes unnecessary spaces from the user input.  
- `.split('').reverse().join('')`: Splits the string into characters, reverses it, and rejoins it.  
- The output is updated dynamically based on whether the input matches its reverse.  
- `input` event listener ensures real-time checking as the user types.  

---

## **Full Code Breakdown (`checkPalindrome()`)**  

### **Purpose**  

This function performs the palindrome check in real time and updates the UI accordingly.  

### **Function Explanation:**  

1. **Retrieve User Input:** The function gets the value from the input field.  
2. **Trim and Reverse String:** The input is trimmed and reversed.  
3. **Check If Palindrome:** The original and reversed strings are compared.  
4. **Display Result:**  
   - If they match, a green message appears.  
   - If not, a red message appears.  
5. **Handle Empty Input:** If input is empty, the output container is cleared.  

---

## **Summary of Key Concepts**  

- **DOM Manipulation**: The script selects and updates HTML elements dynamically.  
- **Event Handling**: Listens for user input in real time.  
- **String Operations**: Uses `trim()`, `split()`, `reverse()`, and `join()` to manipulate strings.  
- **Conditional Rendering**: Displays messages based on the comparison result.  

---

## **License and Author**  

### **License**  

This project is licensed under the MIT License.  

### **Author**  

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)