let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");
  if (input === null) {
    if (numbers.length > 0) {
      for (const num of numbers) {
        total += num;
      }
    }
    break;
  } else {
    input = Number(input);
    if (Number.isNaN(input)) {
      alert("Было введено не число, попробуйте еще раз");
      continue;
    }
    numbers.push(input);
  }
} while (true);

console.log(`Общая сумма чисел равна ${total}`);
