# **Word Counter**

## **Features**

- **Real-time Word Count**: Automatically counts words as the user types.
- **User-friendly Interface**: Simple input field for easy interaction.
- **Dynamic Display**: Updates the word count instantly with visual feedback.

---

## **How it Works**

1. **User Input Handling**
   - Captures text entered by the user in an input field.
   - Removes unnecessary spaces before processing.

2. **Word Counting Logic**
   - Splits the input into words using whitespace as a delimiter.
   - Filters out empty elements to ensure accurate counting.
   
3. **Live Output Display**
   - Updates the word count dynamically as the user types.
   - Displays the count with styled text for better visibility.

---

## **1. `countWords()` Function**

### **Purpose**

This function processes the user input, counts the words, and updates the display dynamically.

### **Code:**

```javascript
// Select the input field where the user types text
const stringInput = document.getElementById('stringInput');

// Select the first element with class 'outputContainer' where the word count result will be displayed
const outputContainer = document.querySelector('.outputContainer');

// Function to count words in the input field
const countWords = () => {
    // Retrieve the value from the input field and remove any leading or trailing spaces
    let str = stringInput.value.trim();

    // Split the string into an array of words:
    // - Uses a regular expression (`\s+`) to split on one or more whitespace characters (spaces, tabs, new lines)
    // - The `filter` method removes any empty elements, ensuring only actual words are counted
    let wordsArray = str.split(/\s+/).filter(word => word.length > 0);

    // Count the number of words by getting the length of the filtered array
    let countWords = wordsArray.length;

    // Update the output container with the word count, using inline CSS to set text color to yellow (#ffd900)
    outputContainer.innerHTML = `<p style="color: #ffd900;">There are ${countWords} Words</p>`;
};

// Attach an event listener to the input field:
// - Listens for the 'input' event, which triggers whenever the user types or modifies the text
// - Calls the countWords function each time the input changes, updating the word count in real time
stringInput.addEventListener('input', countWords);
```

**Key Points:**

- Uses `document.getElementById` to select the input field.
- Uses `document.querySelector` to locate the display container.
- Implements `trim()` to clean unnecessary spaces.
- Uses `split()` with a regex to handle word separation accurately.
- `filter()` ensures only valid words are counted.
- Dynamically updates the count on user input.

---

## **Full Code Breakdown (`countWords()`)**

### **Purpose**

To provide a dynamic, real-time word count functionality.

### **Function Explanation:**

1. **Retrieving Input:**
   - Uses `stringInput.value.trim()` to fetch user input and remove extra spaces.

2. **Processing Words:**
   - Uses `.split(/\s+/)` to break text into words.
   - Filters out empty strings to ensure an accurate count.

3. **Updating the UI:**
   - Calculates the word count.
   - Updates `outputContainer.innerHTML` with styled output.
   
4. **Event Handling:**
   - Listens for the `input` event.
   - Calls `countWords()` function on each keystroke.

---

## **Summary of Key Concepts**

- **Event Listener (`addEventListener`)**: Triggers the function when input changes.
- **Regular Expressions (`\s+`)**: Ensures robust word separation.
- **Array Methods (`split()`, `filter()`, `length`)**: Helps accurately count words.
- **DOM Manipulation (`innerHTML`)**: Dynamically updates content.

---

## **License and Author**

### **License**

This project is licensed under the MIT License.

### **Author**

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)

