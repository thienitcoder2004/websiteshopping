// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


        const countdownDate = new Date(); // YYYY-MM-DDTHH:MM:SS

        // Lấy các phần tử hiển thị
        const dayDisplay = document.getElementById("days");
        const hourDisplay = document.getElementById("hours");
        const minuteDisplay = document.getElementById("minutes");
        const secondDisplay = document.getElementById("seconds");

        const updateCountdown = () => {
            const now = new Date().getTime();
        const distance = countdownDate.getTime() - now;

        if (distance < 0) {
            // Nếu đã hết thời gian
            dayDisplay.innerText = "00";
        hourDisplay.innerText = "00";
        minuteDisplay.innerText = "00";
        secondDisplay.innerText = "00";
        return;
            }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        dayDisplay.innerText = String(days).padStart(2, '0');
        hourDisplay.innerText = String(hours).padStart(2, '0');
        minuteDisplay.innerText = String(minutes).padStart(2, '0');
        secondDisplay.innerText = String(seconds).padStart(2, '0');
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();
