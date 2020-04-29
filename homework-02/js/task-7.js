let logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  let result = false;
  if (login.length >= 4 && login.length < 16) result = true;
  return result;
};

const isLoginUnique = function (allLogins, login) {
  let result = false;
  if (!allLogins.includes(login)) {
    result = true;
  }
  return result;
};

const addLogin = function (allLogins, login) {
  let message = "";
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      message = "Логин успешно добавлен!";
    } else {
      message = "Такой логин уже используется!";
    }
  } else {
    message = "Ошибка! Логин должен быть от 4 до 16 символов!";
  }
  console.log(message);
  return allLogins;
};

const input = prompt("Введите логин");
if (input === null) {
  alert("Отменено пользователем!");
} else {
  addLogin(logins, input);
}

addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
