const total = 100;
let ordered = 50;

console.log(`Заказано ${ordered} товаров, доступно ${total} товаров.`);

if (ordered > total) {
  console.log("На складе недостаточно товаров!");
} else console.log("Заказ оформлен, с вами свяжется менеджер.");

ordered = 20;
console.log(`Заказано ${ordered} товаров, доступно ${total} товаров.`);

if (ordered > total) {
  console.log("На складе недостаточно товаров!");
} else console.log("Заказ оформлен, с вами свяжется менеджер.");

ordered = 80;
console.log(`Заказано ${ordered} товаров, доступно ${total} товаров.`);

if (ordered > total) {
  console.log("На складе недостаточно товаров!");
} else console.log("Заказ оформлен, с вами свяжется менеджер.");

ordered = 130;
console.log(`Заказано ${ordered} товаров, доступно ${total} товаров.`);

if (ordered > total) {
  console.log("На складе на " + (ordered - total) + " товаров меньше.");
  console.log("На складе недостаточно товаров!");
} else console.log("Заказ оформлен, с вами свяжется менеджер.");
