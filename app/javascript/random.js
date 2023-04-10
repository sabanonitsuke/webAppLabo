function random() {
  console.log("ランダムが読み込まれています");

  const memberSubmit = document.getElementById('member-submit');

  memberSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    const memberForm = document.getElementById('member-form');
    const formData = new FormData(memberForm);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/rosters", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const formText = document.getElementById('member-text');
      const list = document.getElementById("list");
      const item = XHR.response.name;
      const html = `
      <li>${item.name}</li>
      `;
      list.insertAdjacentHTML("beforeend", html);
      formText.value = ""
    };
  });
};

window.addEventListener('load', random);