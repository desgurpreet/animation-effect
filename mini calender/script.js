const monthName = document.querySelector("#month-name");
const dayName = document.querySelector("#day-name");
const dayNumEl = document.querySelector("#day-number");
const yearEl = document.querySelector("#year");

const date = new Date();
const month = date.getMonth();
monthName.innerText = date.toLocaleString("en", {
  month: "long",
});
dayName.innerText = date.toLocaleString("en", {
  weekday: "long",
});
dayNumEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();
