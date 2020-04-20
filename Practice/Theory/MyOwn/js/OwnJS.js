// Берем данные с инпутов HTML

const numberInputRef = document.querySelector('input[name="number"]');
const powerInputRef = document.querySelector('input[name="power"]');
const buttonRef = document.querySelector("button");

buttonRef.addEventListener("click", function () {
  console.log("numberInputRef.value: ", numberInputRef.value);
  console.log("powerInputRef.value: ", powerInputRef.value);

  const number = Number(numberInputRef.value);
  const power = Number(powerInputRef.value);

  const result = Math.pow(number, power);
  console.log(result);
});

// Радромайзер "Кто пойдет\сделает"
let random = Math.random() * 10;
// random = 6;
console.log(random);

console.log("Сейчас выясним кто!");
if (random <= 3.333) {
  console.log("Мама");
} else if (random > 3.333 && random <= 6.666) {
  console.log("Папа");
} else if (random > 6.666 && random <= 10) {
  console.log("Настя");
} else console.log("Что-то не так");
