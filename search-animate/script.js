const searchEl = document.querySelector(".search");
const magnifireEl = document.querySelector(".magnifier");

magnifireEl.addEventListener("click", () => {
  searchEl.classList.toggle("active");
});
