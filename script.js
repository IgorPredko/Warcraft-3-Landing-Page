////////////////////////Burger button///////////////////////
const burgerBtn = document.querySelector(".burger");
const menu = document.querySelector(".main__header-nav");

burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

/////////////To the top button///////////////////////

const toTheTop = document.querySelector("#return-to-top");

document.addEventListener("scroll", () => {
  btnVisibility();
});

const btnVisibility = () => {
  if (window.scrollY > 500) {
    toTheTop.style.display = "block";
  } else {
    toTheTop.style.display = "none";
  }
};

toTheTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

////////////////////////Races description//////////////////////////////
let udBtn = document.querySelector(".ud");
let orcBtn = document.querySelector(".orc");
let huBtn = document.querySelector(".hu");
let neBtn = document.querySelector(".ne");

const racesBack = document.querySelector(".race-info ");
const racesTitle = document.querySelector(".race-info h2");
const racesText = document.querySelector(".race-info p");

udBtn.addEventListener("click", () => {
  udBtn.classList.toggle("active-Icon");
  neBtn.classList.remove("active-Icon");
  huBtn.classList.remove("active-Icon");
  orcBtn.classList.remove("active-Icon");
  racesBack.style.background = "url('img/udSlide.jpg') no-repeat";
  racesBack.style.backgroundSize = "cover";
  racesBack.style.backgroundPosition = "right";
  racesTitle.innerText = "Undead";
  racesText.innerHTML = `A well balanced faction with durable ground forces and<br />
  potent air units, the undead Scourge fiends armies more<br />
  numerous than any other faction through insidious<br />
  necromantic magics.`;
});

orcBtn.addEventListener("click", () => {
  udBtn.classList.remove("active-Icon");
  neBtn.classList.remove("active-Icon");
  huBtn.classList.remove("active-Icon");
  orcBtn.classList.toggle("active-Icon");
  racesBack.style.background = "url('img/orcSlide.jpg')";
  racesBack.style.backgroundSize = "cover";
  racesBack.style.backgroundPosition = "right";
  racesTitle.innerText = "Orcs";
  racesText.innerHTML = `A confederation of orcs, trolls, and tauren, the Horde are<br>
  defined by their brute strenght and shamanistic power`;
});

huBtn.addEventListener("click", () => {
  udBtn.classList.remove("active-Icon");
  neBtn.classList.remove("active-Icon");
  orcBtn.classList.remove("active-Icon");
  huBtn.classList.toggle("active-Icon");
  racesBack.style.background = "url('img/huSlide.jpg')";
  racesBack.style.backgroundSize = "cover";
  racesBack.style.backgroundPosition = "right";
  racesTitle.innerText = "Humans";
  racesText.innerHTML = `The Human Alliance is a conglomeration of humans, elves<br>
  and dwarves. A versatile faction, they boast strong<br>
  ground and air troops, fearsome siege capability, and<br>
  mighty spellcasters.`;
});

neBtn.addEventListener("click", () => {
  udBtn.classList.remove("active-Icon");
  orcBtn.classList.remove("active-Icon");
  huBtn.classList.remove("active-Icon");
  neBtn.classList.toggle("active-Icon");
  racesBack.style.background = "url('img/neSlide.jpg')";
  racesBack.style.backgroundSize = "cover";
  racesBack.style.backgroundPosition = "right";
  racesTitle.innerText = "Night Elves";
  racesText.innerHTML = `The night elves of Kalimdor emphasize mobility, ranged<br>
  firepower, and spellcraft. Through they lack the brute<br>
  strength of other races, their skills with bow and magic<br>
  more than compensate.`;
});

/////////////////////////Featured Heroes//////////////////////////
let dreadIcon = document.querySelector(".hero-icon-dread ");
let taurenIcon = document.querySelector(".hero-icon-tauren ");
let bladeIcon = document.querySelector(".hero-icon-blade ");
let palaIcon = document.querySelector(".hero-icon-pala ");

const display = document.querySelector(".display-hero");

dreadIcon.addEventListener("click", () => {
  dreadIcon.classList.toggle("active-Icon");
  taurenIcon.classList.remove("active-Icon");
  bladeIcon.classList.remove("active-Icon");
  palaIcon.classList.remove("active-Icon");
  display.innerHTML = `<img src="img/dreadHero.png" alt="" />`;
});

bladeIcon.addEventListener("click", () => {
  dreadIcon.classList.remove("active-Icon");
  taurenIcon.classList.remove("active-Icon");
  bladeIcon.classList.toggle("active-Icon");
  palaIcon.classList.remove("active-Icon");
  display.innerHTML = `<img src="img/bladeHero.png" alt="">`;
});

taurenIcon.addEventListener("click", () => {
  dreadIcon.classList.remove("active-Icon");
  taurenIcon.classList.toggle("active-Icon");
  bladeIcon.classList.remove("active-Icon");
  palaIcon.classList.remove("active-Icon");
  display.innerHTML = `<img src="img/taurenHero.png" alt="">`;
});

palaIcon.addEventListener("click", () => {
  dreadIcon.classList.remove("active-Icon");
  taurenIcon.classList.remove("active-Icon");
  bladeIcon.classList.remove("active-Icon");
  palaIcon.classList.toggle("active-Icon");
  display.innerHTML = `<img src="img/paladinHero.png" alt="">`;
});

///////////////////Display text/////////////////////////
const words = document.querySelectorAll(".words");
const raceIcon = document.querySelectorAll(".nine-icon");
raceIcon.forEach((icon) => {
  icon.style.opacity = 0;
});

function displayWord() {
  for (let i = 0; i < words.length; i++) {
    words[i].style.animation = "fadeIn 3s forwards";
    words[1].style.animationDelay = "1s";
    words[2].style.animationDelay = "2s";
    words[3].style.animationDelay = "3s";
  }
}

function showIcon() {
  for (let i = 0; i < raceIcon.length; i++) {
    raceIcon[i].style.animation = "fadeIn 3s forwards";
    raceIcon[1].style.animationDelay = "1s";
    raceIcon[2].style.animationDelay = "2s";
    raceIcon[3].style.animationDelay = "3s";
    raceIcon[3].addEventListener(
      "animationend",
      function () {
        fadeOut();
      },
      false
    );
  }
}

function fadeOut() {
  raceIcon.forEach((icon) => {
    icon.style.animation = "fadeOut 3s forwards";
  });
  words.forEach((word) => {
    word.style.animation = "fadeOut 3s forwards";
  });
}

setInterval(() => {
  displayWord();
  showIcon();
}, 9000);

/////////////Modal window///////////////////////

let modal = document.getElementById("order-main");
let goldBtn = document.querySelector(".btn-gold");
let modalClose = document.querySelector(".modal-close");

goldBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

const standartEdition = document.querySelector(".price-1");
const warEdition = document.querySelector(".price-2");
const orderBack = document.querySelector(".order-image");

standartEdition.addEventListener("click", () => {
  orderBack.style.background = "url(img/hu_Back.jpg)";
  orderBack.style.backgroundSize = "cover";
  orderBack.style.backgroundPosition = "right";
  standartEdition.classList.toggle("priceActive");
  warEdition.classList.remove("priceActive");
});

warEdition.addEventListener("click", () => {
  orderBack.style.background = "url(img/ne_Back.jpg)";
  orderBack.style.backgroundSize = "cover";
  orderBack.style.backgroundPosition = "right";
  warEdition.classList.toggle("priceActive");
  standartEdition.classList.remove("priceActive");
});

$(document).ready(function () {
  var body = $("body");
  body.fadeIn(600);
  $(document).on(
    "click",
    "a:not([href^='#']):not([href^='tel']):not([href^='mailto'])",
    function (e) {
      e.preventDefault();
      $("body").fadeOut(600);
      var self = this;
      setTimeout(function () {
        window.location.href = $(self).attr("href");
      }, 600);
    }
  );
});

/*----в  css пишем для "бади", так как на выходе страничка не будет плавно появляться если не прописать----*/

//  body {
//   display: none;
//  }
