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

  const nextBtn = document.getElementById('next-btn');
  const display = document.getElementById('display');
  const remaining = document.getElementById('remaining');
  let rosters = Array.from(document.querySelectorAll('#list li')).map(li => li.textContent);
  let usedRosters = [];

  nextBtn.addEventListener('click', function () {
    if (rosters.length === 0) {
      display.textContent = '終了';
      remaining.innerHTML = "0"
      return;
    }
    remaining.innerHTML = rosters.length
    const randomIndex = Math.floor(Math.random() * rosters.length);
    const selectedName = rosters[randomIndex];
    display.textContent = selectedName;

    usedRosters.push(selectedName);
    rosters.splice(randomIndex, 1);
  });
};

window.addEventListener('load', random);