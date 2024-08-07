const imageEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", () => {
  imageNum = 4;
  addNewImages();
});
function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageEl.appendChild(newImgEl);
  }
}

const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
inputEl.checked = false;
updateBody();
function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "tomato";
  }
}
inputEl.addEventListener("input", () => {
  updateBody();
});
