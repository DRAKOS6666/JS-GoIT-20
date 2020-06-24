const refs = {
  rangeCtrl: document.querySelector("#font-size-control"),
  textSpan: document.querySelector("#text"),
};

const changeFontSize = (event) => {
  refs.textSpan.style.fontSize = event.target.value + "px";
};

refs.rangeCtrl.addEventListener("input", changeFontSize);
