document.addEventListener("DOMContentLoaded", function () {
  let timerElement = document.getElementById("timer");
  let timeLeft = parseInt(timerElement.dataset.time);

  function updateTimer() {
    timeLeft -= 1;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
    }
  }

  let timerInterval = setInterval(updateTimer, 1000);
});