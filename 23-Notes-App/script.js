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
