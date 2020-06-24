const refs = {
  input: document.querySelector("#validation-input"),
};

const validState = (event) => {
  if (Number(event.target.dataset.length) === event.target.value.length) {
    refs.input.classList.replace("invalid", "valid");
    return;
  }
  refs.input.classList.add("invalid");
};

refs.input.addEventListener("blur", validState);
