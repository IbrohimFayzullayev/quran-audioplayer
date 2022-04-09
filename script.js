const suralar = document.querySelector(".suralar");
const box1 = document.querySelector(".box__1");
const box2 = document.querySelector(".box__2");
const arabicText = document.querySelector(".arabic__text");

let addSura = async function () {
  let a = await fetch("https://api.quran.sutanlab.id/surah");
  let b = await a.json();
  for (let val in b.data) {
    suralar.innerHTML += `<div id="id_${Number(val) + 1}" class="row">
    <div class="sura__num">
      <p class="num_1">${Number(val) + 1}</p>
    </div>
    <div class="sura__info">
      <p class="arab__name name">${b.data[val].name.long}</p>
      <p class="sura__name name">${b.data[val].name.transliteration.en}</p>
    </div>
  </div>`;
  }
  let clicked = suralar.addEventListener("click", async function (e) {
    e.preventDefault();
    const englishText = document.querySelector(".english__text");
    englishText.innerHTML = "";
    arabicText.innerHTML = "";
    let target = e.target;
    let num = +target.closest(".row").id.split("_")[1];
    let k = await fetch(`https://api.quran.sutanlab.id/surah/${num}`);
    let c = await k.json();
    let i = 1;
    let j = 1;
    let verses = c.data.verses;
    for (let d of verses) {
      let html2 = `<p class="text__1">${j++}. ${d.text.transliteration.en}</p>`;
      englishText.insertAdjacentHTML("beforeend", html2);
    }
    impor(num);
  });
};
addSura();
let impor = function (id) {
  fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/uzb-alaaudeenmansou.json"
  )
    .then((res) => res.json())
    .then((res) => {
      let i = 1;
      res.quran.forEach((element) => {
        if (element.chapter == id) {
          let html1 = `<p class="text__1">${i++}. ${element.text}</p>`;
          arabicText.insertAdjacentHTML("beforeend", html1);
        }
      });
    });
};
