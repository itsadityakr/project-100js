const availBtn = document.getElementById("availWH"); // Selecting the button element with the ID "availWH" and storing it in availBtn
const actualBtn = document.getElementById("actualWH"); // Selecting the button element with the ID "actualWH" and storing it in actualBtn
const message = document.querySelector(".sizeDiv"); // Selecting the first element with the class "sizeDiv" and storing it in message

const actualWH = () => { // Defining a function called actualWH that calculates the available screen size
    let w = window.screen.availWidth; // Getting the available width of the screen and storing it in w
    let h = window.screen.availHeight; // Getting the available height of the screen and storing it in h
    message.textContent = `Actual Workspace Size is (${w}, ${h})`; // Updating the text content of the message element with the width and height values
};

const availWH = () => { // Defining a function called availWH that calculates the total browser window size
    let w = window.innerWidth; // Getting the inner width of the browser window and storing it in w
    let h = window.innerHeight; // Getting the inner height of the browser window and storing it in h
    message.textContent = `Total Browser Window Size is (${w}, ${h})`; // Updating the text content of the message element with the width and height values
};

availBtn.addEventListener("click", availWH); // Adding a click event listener to availBtn that calls the availWH function when clicked
actualBtn.addEventListener("click", actualWH); // Adding a click event listener to actualBtn that calls the actualWH function when clicked
