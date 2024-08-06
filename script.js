let istatus = document.querySelector("h5");
let addFriend = document.querySelector("#add");
let bodyEl = document.querySelector("body");
let check = 0;
addFriend.addEventListener("click", function () {
  if (check === 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    addFriend.innerHTML = "Remove Friend";
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    addFriend.innerHTML = "Add Friend";

    check = 0;
  }
});
bodyEl.addEventListener("mousemove", (event) => {
  const xpos = event.offsetX;
  const ypos = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xpos + "px";
  spanEl.style.top = ypos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 2000);
});
