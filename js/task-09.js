const randomColor = document.querySelector(".widget");
randomColor.addEventListener("click", onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonClick(evt) {
  if (!evt.target.classList.contains("changeColor")) {
  const color = getRandomHexColor();
  document.body.style.background = color;
  return;
  }
}

console.log();