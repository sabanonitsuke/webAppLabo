async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Unable to copy text to clipboard', err);
  }
}


function post() {
  let btnGetURL = document.getElementById('btnGetURL');
  let hrefGetURL = document.getElementById('hrefGetURL');

  btnGetURL.addEventListener('click', function () {
    copyToClipboard(hrefGetURL.href); //URLの取得
  });
};

window.addEventListener('load', post);