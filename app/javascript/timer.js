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

  function updateTimer2() {
    timeLeft2 -= 1;
    timerElement2.textContent = timeLeft2;

    if (timeLeft2 <= 0) {
      const audio = document.getElementById('audio3');
      ring(audio);
      timeLeft2 = timeLeftDef
    }
  };

  const playBtn = document.getElementById('play-btn');
  const rotateBtn = document.getElementById('rotate-btn');
  let timerElement = document.getElementById("timer");
  const timeLeftDef = parseInt(timerElement.dataset.time);
  let timeLeft = parseInt(timerElement.dataset.time);
  let timerInterval;

  const playBtn2 = document.getElementById('play-btn2');
  let timerElement2 = document.getElementById("timer2");
  let timeLeft2 = parseInt(timerElement2.dataset.time);
  let timerInterval2;


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

  playBtn2.addEventListener('click', function () {
    const audio = document.getElementById(playBtn2.classList.contains('active') ? 'audio2' : 'audio1');
    ring(audio);
    playBtn2.classList.toggle('active');

    if (playBtn2.classList.contains('active')) {
      timerInterval2 = setInterval(updateTimer2, 1000);
    } else {
      clearInterval(timerInterval2);
    }
  });
});