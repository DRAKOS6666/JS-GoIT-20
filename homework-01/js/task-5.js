const userCountry = prompt("Введите страну для доставки");
let price = 0;
if (userCountry === null) {
  console.log("Отменено пользователем!");
} else {
  const userCountryLowerCase = userCountry.toLowerCase();
  switch (userCountryLowerCase) {
    case "китай":
      price = 100;
      break;
    case "чили":
      price = 250;
      break;
    case "австралия":
      price = 170;
      break;
    case "индия":
      price = 80;
      break;
    case "ямайка":
      price = 120;
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
  if (price > 0) {
    console.log(`Доставка в ${userCountry} будет стоить ${price} кредитов`);
  } else {
    console.log("В вашей стране доставка не доступна");
  }
}
