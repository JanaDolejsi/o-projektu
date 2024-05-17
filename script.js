const rucicka = document.querySelector(".main__click");
const jarca = document.querySelector(".main__jarca");
const jarcaTitle = document.querySelector(".main__name--jarca");
const janca = document.querySelector(".main__janca");
const jancaTitle = document.querySelector(".main__name--janca");

// Kroužkování jména
janca.addEventListener("mouseenter", () => {
  jancaTitle.style.border = "5px solid #115b04";
  jancaTitle.style.borderRadius = "15px";
});

janca.addEventListener("mouseleave", () => {
  jancaTitle.style.border = "none";
});

jarca.addEventListener("mouseenter", () => {
  jarcaTitle.style.border = "5px solid #115b04";
  jarcaTitle.style.borderRadius = "15px";
});

jarca.addEventListener("mouseleave", () => {
  jarcaTitle.style.border = "none";
});

// Pohyb ručičky
const apper = () => {
  rucicka.style.display = "";
};
const disapper = () => {
  rucicka.style.display = "none";
};

const toggleAppear = () => {
  if ((rucicka.style.display = "none")) {
    rucicka.style.display = "";
    setTimeout(disapper, 4000);
  } else {
    rucicka.style.display = "none";
  }
};

setTimeout(disapper, 4000);
setInterval(toggleAppear, 15000);
