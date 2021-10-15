const valueRef = document.querySelector("#value");
const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);
let counterValue = 0;
const increaseByOne = (counterValue) => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};
const reduceByOne = (counterValue) => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};
btnDecrementRef.addEventListener("click", increaseByOne);
btnIncrementRef.addEventListener("click", reduceByOne);