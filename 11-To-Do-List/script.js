// Select the "Add Task" button by its ID
const addBtn = document.getElementById("add-btn");

// Select the input field where the user types a task
const taskInput = document.getElementById("input-task");

// Select the div container where the list of tasks will be displayed
const outputDiv = document.querySelector(".output-div");

// Initialize an empty array to store tasks
let tasksList = [];

/**
 * Function to add a task to the list.
 * It first checks if the input is empty and prevents adding empty tasks.
 * If valid, it adds the task to the tasksList array and refreshes the displayed list.
 */
const addTask = () => {
    // Get the value entered the input field and remove leading/trailing spaces
    const taskValue = taskInput.value.trim();

    // If the input is empty, show an alert and exit the function
    if (taskValue === "") {
        alert("Task cannot be empty!");
        return;
    }

    // Add the task to the tasksList array
    tasksList.push(taskValue);

    // Clear the input field after adding the task
    taskInput.value = "";

    // Call showTask() to refresh and display the updated task list
    showTask();
};

/**
 * Function to display the list of tasks.
 * It first clears the existing task list in the UI before rendering the updated list.
 */
const showTask = () => {
    // Clear the task display area to prevent duplicate entries
    outputDiv.innerHTML = "";

    // Loop through the tasksList array and create a task item for each task
    tasksList.forEach((task, index) => {
        // Create a new div element to hold the task item
        const taskItem = document.createElement("div");

        // Add a CSS class to style the task item
        taskItem.classList.add("task-item");

        // Set the inner HTML of the task item to include the task text and a delete button
        taskItem.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        // Append the task item to the outputDiv to display it on the webpage
        outputDiv.appendChild(taskItem);
    });
};

/**
 * Function to delete a task from the list.
 * It removes the task from the tasksList array and refreshes the displayed list.
 * @param {number} index - The position of the task in the tasksList array.
 */
const deleteTask = (index) => {
    // Remove the task at the specified index using splice()
    tasksList.splice(index, 1);

    // Call showTask() to refresh and display the updated task list
    showTask();
};

// Add an event listener to the "Add Task" button
// When clicked, it calls the addTask() function
addBtn.addEventListener("click", addTask);
