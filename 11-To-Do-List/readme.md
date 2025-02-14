# **To-Do List Application**  

## **Features**  

- **Add Tasks**: Allows users to input and add tasks to a list.  
- **Display Tasks**: Shows the current list of tasks dynamically.  
- **Delete Tasks**: Enables users to remove tasks from the list.  

---  

## **How it Works**  

1. **Adding a Task**  
   - The user types a task into an input field.  
   - When the "Add" button is clicked, the task is saved into an array.  
   - The input field is cleared after adding the task.  

2. **Displaying Tasks**  
   - The task list is dynamically generated.  
   - Each task appears as a separate item.  
   - Tasks are displayed inside a `div` container.  

3. **Deleting a Task**  
   - Each task has a "Delete" button.  
   - Clicking the button removes the task from the list.  
   - The task list is refreshed after deletion.  

---  

## **1. `addTask()` Function**  

### **Purpose**  

The `addTask()` function allows users to add a new task to the to-do list.  

### **Code:**  

```javascript
const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("input-task");
const outputDiv = document.querySelector(".output-div");
let tasksList = [];

const addTask = () => {
    const taskValue = taskInput.value.trim();
    if (taskValue === "") {
        alert("Task cannot be empty!");
        return;
    }

    tasksList.push(taskValue);
    taskInput.value = ""; // Clear input field
    showTask(); // Refresh task list display
};
```  

**Key Points:**  

- Retrieves the input value using `getElementById()`.  
- Removes extra spaces from the input using `.trim()`.  
- Prevents empty tasks by checking if the input is blank.  
- Stores the task in an array (`tasksList`).  
- Clears the input field after adding a task.  
- Calls `showTask()` to update the task list.  

---  

## **2. `showTask()` Function**  

### **Purpose**  

The `showTask()` function displays all tasks dynamically on the webpage.  

### **Code:**  

```javascript
const showTask = () => {
    outputDiv.innerHTML = ""; // Clear previous tasks before rendering

    tasksList.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
                <span>${task}</span>
                <button onclick="deleteTask(${index})">Delete</button>
            `;
        outputDiv.appendChild(taskItem);
    });
};
```  

### **Function Explanation:**  

1. Clears the existing task list by setting `innerHTML` to an empty string.  
2. Loops through `tasksList` using `forEach()`.  
3. Creates a new `div` element for each task.  
4. Assigns a CSS class `"task-item"` for styling.  
5. Adds a delete button next to each task.  
6. Displays the task list by appending elements to `outputDiv`.  

---  

## **3. `deleteTask()` Function**  

### **Purpose**  

The `deleteTask()` function removes a task from the list when the delete button is clicked.  

### **Code:**  

```javascript
const deleteTask = (index) => {
    tasksList.splice(index, 1);
    showTask(); // Refresh task list display
};
```  

### **Function Explanation:**  

1. Removes the task at the given index using `.splice()`.  
2. Calls `showTask()` to update the list after deletion.  

---  

## **4. Event Listener (`addEventListener()`)**  

### **Purpose**  

Attaches a click event to the "Add" button, triggering the `addTask()` function.  

### **Code:**  

```javascript
addBtn.addEventListener("click", addTask);
```  

### **Function Explanation:**  

- Listens for a button click.  
- Calls `addTask()` when clicked.  

---  

## **Summary of Key Concepts**  

- **`document.getElementById()`**: Selects HTML elements by ID.  
- **`trim()`**: Removes extra spaces from user input.  
- **Arrays (`tasksList`)**: Stores tasks dynamically.  
- **`forEach()`**: Loops through the array to display tasks.  
- **`createElement()`**: Dynamically creates HTML elements.  
- **`innerHTML`**: Updates the UI by inserting HTML content.  
- **`splice()`**: Removes tasks from the array.  
- **Event Listener (`addEventListener()`)**: Detects button clicks.  

---  

## **License and Author**  

### **License**  

This project is licensed under the MIT License.  

### **Author**  

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)  