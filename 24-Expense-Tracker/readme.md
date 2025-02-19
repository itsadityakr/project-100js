# **Expense Tracker**

## **Features**

- **Add Expenses**: Users can add an expense with a name, category, and amount.
- **Delete Expenses**: Users can remove any expense from the list.
- **Filter Expenses**: Users can filter expenses based on the category.
- **Total Expense Calculation**: Automatically calculates and displays the total amount spent.

---

## **How it Works**

1. **Adding an Expense**
   - User enters expense details (name, category, and amount).
   - The data is stored in the browser's `localStorage`.
   - The list of expenses updates dynamically.

2. **Deleting an Expense**
   - User clicks the delete button next to an expense.
   - The corresponding expense is removed from the list and `localStorage`.
   - The total amount updates accordingly.

3. **Filtering Expenses**
   - Users can select a category from the dropdown.
   - The displayed expenses update to show only those in the selected category.

---

## **1. Code Explanation**

### **Purpose**

This project is a simple **Expense Tracker** that allows users to manage their expenses using `localStorage` in a web browser. It provides functionalities to add, delete, and filter expenses dynamically.

```javascript
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];  
```
- Retrieves saved expenses from `localStorage`.  
- If no data is found, initializes an empty array.

```javascript
function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}
```
- Saves the `expenses` array into `localStorage` as a JSON string.

```javascript
function renderExpenses() {
    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = ""; 
    let totalAmount = 0; 
```
- Clears the existing expense list.
- Initializes `totalAmount` to calculate the total expenses.

```javascript
expenses.forEach((expense, index) => {
    if (document.getElementById("filter-category").value === "All" || document.getElementById("filter-category").value === expense.category) {
        totalAmount += expense.amount;
```
- Loops through the `expenses` array.
- Filters expenses based on the selected category.
- Adds the expense amount to `totalAmount`.

```javascript
const li = document.createElement("li");
li.classList.add("expense-item");
li.innerHTML = `
    <span>${expense.name} - ${expense.category} $${expense.amount} <button class="delete-btn" onclick="deleteExpense(${index})">X</button></span>
`;
expenseList.appendChild(li);
```
- Creates a new list item (`li`) for each expense.
- Adds a delete button (`X`) which calls `deleteExpense()` function when clicked.

```javascript
document.getElementById("total-expenses").innerText = `Total Expenses: $${totalAmount}`;
```
- Updates the total expense amount displayed.

---

## **Full Code Breakdown (`deleteExpense(index)`)**

### **Purpose**

Deletes an expense at a given index from the array and updates the list.

### **Code:**

```javascript
function deleteExpense(index) {
    expenses.splice(index, 1); 
    saveExpenses();
    renderExpenses();
}
```

### **Function Explanation:**
1. **Step 1**: The `splice()` method removes the selected expense from the array.  
2. **Step 2**: `saveExpenses()` updates `localStorage`.  
3. **Step 3**: `renderExpenses()` refreshes the displayed list and total.  

---

## **Dry Run**

### Example Scenario:
1. User adds three expenses:
   - **Coffee**, Category: **Food**, Amount: **$5**
   - **Gym**, Category: **Health**, Amount: **$30**
   - **Movie**, Category: **Entertainment**, Amount: **$15**
   
2. The total amount is **$50**.

3. User deletes the **Gym** expense.
   - `expenses.splice(1,1)` removes the second item.
   - `localStorage` updates.
   - `renderExpenses()` refreshes the list.
   - New total: **$20**.

---

## **Summary of Key Concepts**

- **localStorage**: Stores expenses even after the page reloads.
- **JSON.stringify() / JSON.parse()**: Converts data for storage and retrieval.
- **Event Listeners**: Handles form submission and dropdown changes.
- **DOM Manipulation**: Updates the UI dynamically.
- **Array Methods**: Uses `.push()`, `.splice()`, `.forEach()`.

---

## **License and Author**

### **License**

This project is licensed under the MIT License.

### **Author**

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)