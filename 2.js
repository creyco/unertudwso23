const img = document.querySelectorAll(".img-box");
const win = document.querySelector(".window");
const fullImg = document.querySelector(".full-img");

img.forEach((imgs) => {
  imgs.addEventListener("click", () => {
    const val = imgs.getAttribute("data-value");
    win.classList.add("open");

    fullImg.src = `img/u${val}.png`;   

  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("window")) {
    win.classList.remove("open");
  }
});

fullImg.addEventListener('click', () => {
  if (fullImg.style.transform) {
    fullImg.style.transform = '';
  } else {
    fullImg.style.transform = 'scale(2)';
  }
});