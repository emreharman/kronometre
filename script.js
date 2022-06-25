var saniyeElement = document.getElementById("saniye");
var dakikaElement = document.getElementById("dakika");

var basla = document.getElementById("basla");
var durdur = document.getElementById("durdur");
var sifirla = document.getElementById("sifirla");

var saniye = 0;
var dakika = 0;
var interval;

basla.onclick = function () {
  basla.style.backgroundColor = "white";
  basla.style.color = "rgb(44, 159, 179)";
  durdur.style.backgroundColor = "rgb(44, 159, 179)";
  durdur.style.color = "white";
  sifirla.style.backgroundColor = "rgb(44, 159, 179)";
  sifirla.style.color = "white";
  clearInterval(interval);
  interval = setInterval(() => {
    saniye = saniye + 1;
    if (saniye % 60 === 0) {
      saniye = 0;
      dakika = dakika + 1;
      dakikaElement.innerHTML = dakika;
    }

    saniyeElement.innerHTML = saniye;
  }, 1000);
};

durdur.onclick = function () {
  durdur.style.backgroundColor = "red";
  durdur.style.color = "white";
  basla.style.backgroundColor = "rgb(44, 159, 179)";
  basla.style.color = "white";
  sifirla.style.backgroundColor = "rgb(44, 159, 179)";
  sifirla.style.color = "white";
  clearInterval(interval);
};

sifirla.onclick = function () {
  sifirla.style.backgroundColor = "black";
  sifirla.style.color = "white";
  durdur.style.backgroundColor = "rgb(44, 159, 179)";
  durdur.style.color = "white";
  basla.style.backgroundColor = "rgb(44, 159, 179)";
  basla.style.color = "white";
  clearInterval(interval);
  saniye = 0;
  dakika = 0;
  saniyeElement.innerHTML = saniye;
  dakikaElement.innerHTML = dakika;
};
