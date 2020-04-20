const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const userInput = prompt("Введите пароль администратора!");

if (userInput === null) {
  message = "Отменено Пользователем!";
} else if (userInput === ADMIN_PASSWORD) {
  message = "Добро Пожаловать!";
} else message = "Доступ запрещен, неверный пароль!";

alert(message);
