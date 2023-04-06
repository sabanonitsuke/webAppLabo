function post() {
  let btnGetURL = document.getElementById('btnGetURL');

  btnGetURL.addEventListener('click', function () {
    console.log('動いています');
  });
};

window.addEventListener('load', post);