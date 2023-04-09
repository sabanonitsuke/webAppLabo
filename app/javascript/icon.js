function sound_play() {
  console.log("サウンド機能が読み込まれています")
  const whistle = document.getElementById('whistle');
  const bell = document.getElementById('bell');
  whistle.addEventListener('click', function () {
    const audio = document.getElementById(whistle.classList.contains('active') ? 'audio2' : 'audio1');
    audio.currentTime = 0;
    audio.play();
    whistle.classList.toggle('active');
  });
  bell.addEventListener('click', function () {
    const audio = document.getElementById(bell.classList.contains('active') ? 'audio4' : 'audio3');
    audio.currentTime = 0;
    audio.play();
    bell.classList.toggle('active');
  });
};

window.addEventListener('load', sound_play);