// fetch("https://api.alquran.cloud/v1/ayah/260/editions/quran-uthmani,uz.sodik")
//   .then((response) => response.json())
//   .then((res) => console.log(res));
// fetch("https://api.quran.sutanlab.id/surah/1")
//   .then((response) => response.json())
//   .then((res) => console.log(res));
// fetch("https://api.quran.sutanlab.id/surah")
//   .then((response) => response.json())
//   .then((res) => console.log(res));
let nomi;
let oqish;
const suralar = document.querySelector(".suralar");
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
  let clicked = document.addEventListener("click", async function (e) {
    let target = e.target;
    let num = Number(target.closest(".row").id[3]);
    let k = await fetch(`https://api.quran.sutanlab.id/surah/${num}`);
    let c = await k.json();

    // for (let d of c.data.verses) {
    //   console.log(d.text.arab);
    //   console.log(d.text.transliteration.en);
    // }
  });
};
addSura();
