const offScreenMenu = document.querySelector(".off-screen-menu");
const blur = document.querySelector(".blur");
const hamBtn = document.querySelector(".mobile-nav_hambtn");
const closebtn = document.querySelector(".closeBtn");

hamBtn.addEventListener("click", () => {
  offScreenMenu.classList.toggle("active");
  blur.classList.toggle("active");
});
closebtn.addEventListener("click", () => {
  offScreenMenu.classList.remove("active");
  blur.classList.remove("active");
});
