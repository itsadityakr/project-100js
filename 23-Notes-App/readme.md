# Notes App

## **Features**

- **Add Notes**: Allows users to add notes which are saved in local storage.
- **Delete Notes**: Users can delete individual notes from the list.
- **Persistent Storage**: Notes are saved in local storage, meaning they persist even after the page is reloaded.
- **Dynamic Rendering**: The notes list is updated dynamically as notes are added or removed.

---

## **How it Works**

1. **Add Notes**
   - Step 1: When the user clicks the "Add Note" button, the text entered in the input field is saved as a new note.
   - Step 2: The note is stored in the local storage and the input field is cleared.
   - Step 3: The updated list of notes is displayed on the page.

2. **Delete Notes**
   - Step 1: Each note displayed has a delete button.
   - Step 2: When the delete button is clicked, the corresponding note is removed from the list and the updated list is saved back to local storage.

3. **Persistent Notes Storage**
   - Step 1: The notes are stored in local storage as a JSON string.
   - Step 2: On page load, the notes are retrieved from local storage, parsed from JSON, and displayed on the page.

---

## **1. `code`**

### **Purpose**

This code manages the functionality of adding, displaying, and deleting notes. It makes use of local storage to persist the data between page reloads.

### **Code:**

```javascript
// Function to retrieve stored notes from localStorage
function getNotesFromLocalStorage() {
    // Retrieve the value associated with the 'notes' key from localStorage
    const notes = localStorage.getItem('notes');

    // If 'notes' exists in localStorage, parse it from JSON to a JavaScript array and return it.
    // If no notes are found (i.e., the value is null), return an empty array.
    return notes ? JSON.parse(notes) : [];
}

// Function to display notes
function displayNotes() {
    // Get the notes from localStorage by calling the above function
    const notes = getNotesFromLocalStorage();

    // Get the DOM element where the notes will be displayed
    const notesDisplay = document.getElementById('notesDisplay');

    // Clear any existing content in the 'notesDisplay' element
    notesDisplay.innerHTML = '';

    // Loop through each note and create a new element to display it
    notes.forEach((note, index) => {
        // Create a new div element for each note
        const noteElement = document.createElement('div');
        noteElement.classList.add('note'); // Add a 'note' class to the div for styling

        // Set the HTML content of the noteElement, displaying the note text and a delete button
        noteElement.innerHTML = `
            <span>${note}</span>
            <button onclick="deleteNote(${index})">Delete</button>
        `;

        // Append the created noteElement to the 'notesDisplay' element
        notesDisplay.appendChild(noteElement);
    });
}

// Function to add a new note
document.getElementById('addNoteBtn').addEventListener('click', function () {
    // Get the value from the input field where users type their note
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim(); // Trim any extra spaces

    // Check if the user entered something in the input field
    if (noteText) {
        // Get the current notes from localStorage
        const notes = getNotesFromLocalStorage();

        // Add the new note to the array of notes
        notes.push(noteText);

        // Save the updated notes array back to localStorage, converting it into a string format
        localStorage.setItem('notes', JSON.stringify(notes));

        // Clear the input field after adding the note
        noteInput.value = '';

        // Re-display the updated list of notes
        displayNotes();
    } else {
        // If no note text was entered, show an alert
        alert("Please enter a note.");
    }
});

// Function to delete a note
function deleteNote(index) {
    // Get the current notes from localStorage
    const notes = getNotesFromLocalStorage();

    // Remove the note at the specified index
    notes.splice(index, 1); // This removes 1 element starting at the given index

    // Save the updated notes back to localStorage
    localStorage.setItem('notes', JSON.stringify(notes));

    // Re-render the notes after deletion
    displayNotes();
}

// Load notes on page load
window.onload = function () {
    // Call the function to display the stored notes when the page loads
    displayNotes();
};
```

**Key Points:**

- **`localStorage.getItem()`**: This method retrieves the value stored in the local storage under the specified key (in this case, `'notes'`).
- **`JSON.parse()`**: This converts a JSON string into a JavaScript object (or array). It is used to retrieve the notes as an array.
- **`localStorage.setItem()`**: This method stores a key-value pair in the local storage. The `notes` array is stringified before being saved.
- **`document.createElement()`**: This creates a new HTML element, in this case, a `div` for each note.
- **`innerHTML`**: This property sets the HTML content of an element. It is used here to display the note and the associated delete button.
- **`addEventListener()`**: This method listens for the `click` event on the "Add Note" button and executes the associated function.
- **`splice()`**: This method removes a specific item from an array at a given index.

---

**Key Points:**

- **Event Listeners**: The code uses event listeners to listen for clicks on the "Add Note" button and the delete buttons for each note.
- **Local Storage**: Local storage is used to save and retrieve the notes, making the app persistent even after refreshing the page.
- **Dynamic Content**: The notes are dynamically rendered based on the data from local storage, and the DOM is updated whenever a note is added or deleted.

---

## **Full Code Breakdown (`displayNotes()`)**

### **Purpose**

The `displayNotes()` function is responsible for rendering all the stored notes on the page by creating HTML elements dynamically and adding them to the DOM.

### **Code:**

```javascript
function displayNotes() {
    // Get the notes from localStorage by calling the above function
    const notes = getNotesFromLocalStorage();

    // Get the DOM element where the notes will be displayed
    const notesDisplay = document.getElementById('notesDisplay');

    // Clear any existing content in the 'notesDisplay' element
    notesDisplay.innerHTML = '';

    // Loop through each note and create a new element to display it
    notes.forEach((note, index) => {
        // Create a new div element for each note
        const noteElement = document.createElement('div');
        noteElement.classList.add('note'); // Add a 'note' class to the div for styling

        // Set the HTML content of the noteElement, displaying the note text and a delete button
        noteElement.innerHTML = `
            <span>${note}</span>
            <button onclick="deleteNote(${index})">Delete</button>
        `;

        // Append the created noteElement to the 'notesDisplay' element
        notesDisplay.appendChild(noteElement);
    });
}
```

### **Function Explanation:**

1. **Step 1: Retrieve Notes from Local Storage**
   - Calls `getNotesFromLocalStorage()` to get the stored notes from local storage.

2. **Step 2: Create and Display Notes**
   - Clears the current content in the `notesDisplay` element.
   - Iterates over each note, creating a new `div` element for each one, with the note text and a delete button.

3. **Step 3: Update DOM**
   - Appends the created note elements to the `notesDisplay` container on the page.

---

## **Summary of Key Concepts**

- **Local Storage**: Used to store and retrieve notes, allowing the app to persist data between page reloads.
- **Dynamic DOM Manipulation**: Elements are created dynamically using JavaScript, allowing for interactive and real-time changes to the webpage.
- **Event-Driven Programming**: The app relies on user events (clicks) to trigger actions like adding or deleting notes.

---

## **License and Author**

### **License**

This project is licensed under the MIT License.

### **Author**

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)