function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onButtonClick = () => {
    const color = getRandomHexColor();
    document.body.style.background = color;
    colorNameSpanRef.textContent = color;
}

const colorNameSpanRef = document.querySelector(".color");

const changeColorButtonRef = document.querySelector(".change-color");
changeColorButtonRef.addEventListener("click", onButtonClick);
