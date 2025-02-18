let countdownInterval;

        function startCountdown() {
            clearInterval(countdownInterval); // Reset any existing countdown

            const targetDate = document.getElementById("datetime").value;
            const targetTime = new Date(targetDate).getTime();

            if (isNaN(targetTime)) {
                alert("Please enter a valid date and time.");
                return;
            }

            countdownInterval = setInterval(() => {
                const now = new Date().getTime();
                const difference = targetTime - now;

                if (difference <= 0) {
                    clearInterval(countdownInterval);
                    document.getElementById("countdown").innerHTML = "🎉 Time's up!";
                    return;
                }

                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                document.getElementById("countdown").innerHTML =
                    `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }, 1000);
        }