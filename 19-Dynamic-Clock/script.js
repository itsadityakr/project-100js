function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "";

    if (document.getElementById("toggleFormat").checked) {
        ampm = hours >= 12 ? " PM" : " AM";
        hours = hours % 12 || 12;  // Convert 0 to 12
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.querySelector(".clock").textContent = `${hours}:${minutes}:${seconds}${ampm}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Update clock when checkbox is toggled
document.getElementById("toggleFormat").addEventListener("change", updateClock);

// Initialize clock immediately
updateClock();
