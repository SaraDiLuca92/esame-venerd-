function changeBg() {
  let navbar = document.getElementById("navbar");
  let scrollValue = window.scrollY;
  if (scrollValue < 150) {
    navbar.classList.remove("bgColor");
  } else {
    navbar.classList.add("bgColor");
  }
}
window.addEventListener("scroll", changeBg);

function changeB() {
  let button = document.getElementById("buttonuno");
  let scrollValue = window.scrollY;
  if (scrollValue < 150) {
    buttonuno.classList.remove("button");
  } else {
    buttonuno.classList.add("button");
  }
}
window.addEventListener("scroll", changeB);
