const refs = {
  inputNumber: document.querySelector("input[type=number]"),
  controls: document.querySelector("#controls"),
  boxWrapper: document.querySelector("#boxes"),
};

const randomColorCSS = function () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const createBoxes = (amount) => {
  let divCollection = [];
  for (let i = 0; i < amount; i += 1) {
    const elem = document.createElement("div");
    elem.style.backgroundColor = randomColorCSS();
    elem.style.width = `${30 + i * 10}px`;
    elem.style.height = `${30 + i * 10}px`;
    divCollection.push(elem);
  }
  refs.boxWrapper.append(...divCollection);
};

const destroyBoxes = () => {
  refs.boxWrapper.innerHTML = "";
};

const actionButton = (event) => {
  if (event.target.dataset.action === "render") {
    createBoxes(refs.inputNumber.value);
  } else {
    destroyBoxes();
  }
};

refs.controls.addEventListener("click", actionButton);
