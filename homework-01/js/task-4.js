let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

let userWishCount = prompt("Сколько дроидов желаете купить?");

if (userWishCount === null) {
  console.log("Отменено пользователем!");
} else {
  userWishCount = Number(userWishCount);
  totalPrice = userWishCount * pricePerDroid;

  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету");
  } else if (totalPrice <= credits) {
    credits = credits - totalPrice;
    console.log(
      `Вы купили ${userWishCount} дроидов, на счету осталось ${credits} кредитов`
    );
  }
}
