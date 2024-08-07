const textareaEl = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const totalRemaining = document.getElementById("remaining-counter");
textareaEl.addEventListener("keyup", () => {
  updateCounter();
});
function updateCounter() {
  totalCounter.innerText = textareaEl.value.length;
  totalRemaining.innerText =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
