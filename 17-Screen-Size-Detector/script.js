const availBtn = document.getElementById("availWH");
const actualBtn = document.getElementById("actualWH");
const message = document.querySelector(".sizeDiv");

const actualWH = () => {
    let w = window.screen.availWidth;
    let h = window.screen.availHeight;
    message.textContent = `Actual Workspace Size is (${w}, ${h})`;
};

const availWH = () => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    message.textContent = `Total Browser Window Size is (${w}, ${h})`;
};

availBtn.addEventListener("click", availWH);
actualBtn.addEventListener("click", actualWH);
