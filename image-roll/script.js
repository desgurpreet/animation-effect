const imageEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timer; //for ikko time per rotate na hove onclick and set time according
prevEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});
nextEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);

  updateGallery();
});
function updateGallery() {
  imageEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  imageEl.style.transition = `all 0.7s`;
  timer = setTimeout(() => {
    x = x + 45;
    updateGallery();
  }, 3000);
}
updateGallery();
