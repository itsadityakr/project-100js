const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsList = document.getElementById("laps");

let startTime = 0;
let elapsedTime = 0;
let timerInterval = 0;
let laps = [];

startBtn.addEventListener(`click`, () => {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 1);
    }
});

function updateDisplay() {
    let currentTime = Date.now();
    let timePassed = currentTime - startTime;
    display.textContent = formatTime(timePassed);
}

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    let seconds = String(totalSeconds % 60).padStart(2, "0");
    let milliseconds = String(ms % 1000).padStart(3, "0"); // Extract last three digits

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}


stopBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    elapsedTime = Date.now() - startTime;
    timerInterval = null;  // Mark that timer is stopped
});

resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerInterval = null;
    display.textContent = "00:00:00";
    laps = [];
    localStorage.removeItem("laps");  // Remove saved laps
    renderLaps();
});

lapBtn.addEventListener("click", () => {
    if (startTime) {  // Ensure timer has started at least once
        let lapTime;

        if (timerInterval) {  // If timer is running
            lapTime = formatTime(Date.now() - startTime);
        } else {  // If timer is stopped
            lapTime = formatTime(elapsedTime);
        }

        laps.push(lapTime);
        localStorage.setItem("laps", JSON.stringify(laps));  // Save to Local Storage
        renderLaps();
    }
});


function renderLaps() {
    lapsList.innerHTML = "";  // Clear existing list
    laps.forEach((lap, index) => {
        let li = document.createElement("li");
        li.textContent = `Lap ${index + 1}: ${lap}`;
        lapsList.appendChild(li);
    });
}

laps = JSON.parse(localStorage.getItem("laps")) || [];  // Load stored laps
renderLaps();  // Display them
