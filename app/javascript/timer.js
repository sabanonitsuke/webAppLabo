document.addEventListener("DOMContentLoaded", function () {
  const timerBtn = document.getElementById('timer-btn');
  let timerElement = document.getElementById("timer");
  let timeLeft = parseInt(timerElement.dataset.time);
  let timerInterval;

  timerBtn.addEventListener('click', function () {
    const audio = document.getElementById(timerBtn.classList.contains('active') ? 'audio2' : 'audio1');
    audio.currentTime = 0;
    audio.play();
    timerBtn.classList.toggle('active');

    if (timerBtn.classList.contains('active')) {
      timerInterval = setInterval(updateTimer, 1000);
    } else {
      clearInterval(timerInterval);
    }
  });


  function updateTimer() {

    timeLeft -= 1;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      const audio = document.getElementById('audio3');
      audio.currentTime = 0;
      audio.play();
    }
  };

});