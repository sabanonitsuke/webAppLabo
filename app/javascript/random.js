function random() {
  console.log("ランダムが読み込まれています");
  const memberForm = document.getElementById('member-form');
  const memberSubmit = document.getElementById('member-submit');
  memberSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/rosters", true);
    XHR.responseType = "json";
    XHR.send("内容");
  });
};

window.addEventListener('load', random);