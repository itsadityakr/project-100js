// Retrieve the stored expenses from localStorage and parse them into a JavaScript array. 
// If no expenses are found, initialize an empty array.
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Function to save the expenses array to localStorage
function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Function to render (display) the expenses in the UI
function renderExpenses() {
    // Get the expense list element from the DOM
    const expenseList = document.getElementById("expense-list");
    // Clear the existing list before rendering updated data
    expenseList.innerHTML = "";

    // Initialize total amount to zero
    let totalAmount = 0;

    // Loop through the expenses array
    expenses.forEach((expense, index) => {
        // Get the selected category filter value
        const selectedCategory = document.getElementById("filter-category").value;

        // Check if the expense should be displayed (matches filter or "All" is selected)
        if (selectedCategory === "All" || selectedCategory === expense.category) {
            // Add expense amount to total amount
            totalAmount += expense.amount;

            // Create a new list item element for the expense
            const li = document.createElement("li");
            li.classList.add("expense-item"); // Add CSS class for styling

            // Set the inner HTML of the list item to display expense details and delete button
            li.innerHTML = `
                <span>${expense.name} - ${expense.category} $${expense.amount} 
                <button class="delete-btn" onclick="deleteExpense(${index})">X</button></span>
            `;

            // Append the list item to the expense list
            expenseList.appendChild(li);
        }
    });

    // Update the total expenses display
    document.getElementById("total-expenses").innerText = `Total Expenses: $${totalAmount}`;
}

// Function to delete an expense by index
function deleteExpense(index) {
    expenses.splice(index, 1); // Remove the expense from the array
    saveExpenses(); // Save the updated expenses array to localStorage
    renderExpenses(); // Re-render the expense list
}

// Add an event listener to the expense form for form submission
document.getElementById("expense-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get values from the input fields
    const name = document.getElementById("expense-name").value;
    const category = document.getElementById("category").value;
    const amount = parseFloat(document.getElementById("amount").value);

    // Check if name is provided and amount is a valid number
    if (name && !isNaN(amount)) {
        // Add the new expense to the expenses array
        expenses.push({name, category, amount});

        // Save the updated expenses array to localStorage
        saveExpenses();

        // Re-render the expense list to include the new expense
        renderExpenses();

        // Reset the form fields
        event.target.reset();
    }
});

// Add an event listener to the category filter dropdown to re-render expenses when changed
document.getElementById("filter-category").addEventListener("change", renderExpenses);

// Initial rendering of expenses when the page loads
renderExpenses();
