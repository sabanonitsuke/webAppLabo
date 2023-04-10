document.addEventListener("DOMContentLoaded", function () {
  function ring(audio) {
    audio.currentTime = 0;
    audio.play();
  }

  function updateTimer() {
    timeLeft -= 1;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      const audio = document.getElementById('audio3');
      ring(audio);
    }
  };

  const playBtn = document.getElementById('play-btn');
  const rotateBtn = document.getElementById('rotate-btn');
  let timerElement = document.getElementById("timer");
  let timeLeft = parseInt(timerElement.dataset.time);
  let timerInterval;

  playBtn.addEventListener('click', function () {
    const audio = document.getElementById(playBtn.classList.contains('active') ? 'audio2' : 'audio1');
    ring(audio);
    playBtn.classList.toggle('active');

    if (playBtn.classList.contains('active')) {
      timerInterval = setInterval(updateTimer, 1000);
    } else {
      clearInterval(timerInterval);
    }
  });

  rotateBtn.addEventListener('mouseover', function () {
    rotateBtn.classList.add('active');
  });
  rotateBtn.addEventListener('mouseout', function () {
    rotateBtn.classList.remove('active');
  });
  rotateBtn.addEventListener('click', function () {
    location.reload();
  });
});