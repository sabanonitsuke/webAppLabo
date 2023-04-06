function post() {
  let btnGetURL = document.getElementById('btnGetURL');
  let hrefGetURL = document.getElementById('hrefGetURL');

  btnGetURL.addEventListener('click', function () {
    console.log(hrefGetURL.href);
  });
};

window.addEventListener('load', post);