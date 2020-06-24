const refs = {
  input: document.querySelector("#name-input"),
  outText: document.querySelector("#name-output"),
};

const refreshName = (event) => {
  if (event.target.value === "") {
    refs.outText.textContent = "незнакомец";
    return;
  }
  refs.outText.textContent = event.target.value;
};

refs.input.addEventListener("input", refreshName);
