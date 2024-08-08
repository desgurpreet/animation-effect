const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const videoContainerEl = document.querySelector(".video-container");
const main = document.querySelector(".container");
btnEl.addEventListener("click", () => {
  videoContainerEl.classList.remove("active");
  main.style.display = "none";
});
closeIconEl.addEventListener("click", () => {
  videoContainerEl.classList.add("active");
  main.style.display = "block";
});
