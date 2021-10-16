const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const valueRef = document.querySelector("#value");
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);
let counterValue = 0;
const increaseByOne = (counterValue) => {
  counterValue -= 1;
  return (valueRef.textContent = counterValue);
};
const reduceByOne = (counterValue) => {
  counterValue += 1;
  return (valueRef.textContent = counterValue);
};
btnDecrementRef.addEventListener("click", increaseByOne);
btnIncrementRef.addEventListener("click", reduceByOne);