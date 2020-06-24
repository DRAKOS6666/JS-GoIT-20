let counterValue = 0;

const refs = {
  value: document.querySelector("#value"),
  increment: document.querySelector('button[data-action="increment"]'),
  decrement: document.querySelector('button[data-action="decrement"]'),
};

const refreshValue = () => {
  refs.value.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  refreshValue();
};

const decrement = () => {
  counterValue -= 1;
  refreshValue();
};

refs.increment.addEventListener("click", increment);
refs.decrement.addEventListener("click", decrement);
