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

const burgerBtn = document.querySelector(".burger");
const menu = document.querySelector(".main__header-nav");

burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
