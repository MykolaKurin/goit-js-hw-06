const createBtnRef = document.querySelector(
  'button[data-create]');
  
const destroyBtnRef = document.querySelector(
  'button[data-destroy]');

const inputRef = document.querySelector('input');

createBtnRef.addEventListener("click", onCreate);
destroyBtnRef.addEventListener("click", destroyBoxes);

function onCreate() {
  createBoxes(inputRef.value);
}

function createBoxes(amount) {
  const boxNumberRef = 
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
