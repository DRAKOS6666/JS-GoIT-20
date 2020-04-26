let logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  if (login.length > 4 && login.length < 16) return true;
  else {
    return false;
  }
};

const isLoginUnique = function (allLogins, login) {
  if (!allLogins.includes(login)) {
    return true;
  } else {
    return false;
  }
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      console.log("Логин успешно добавлен!");
      return allLogins;
    } else {
      console.log("Такой логин уже используется!");
    }
  } else {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов!");
  }
};

const input = prompt("Введите логин");
if (input === null) {
  alert("Отменено пользователем!");
} else {
  const newLogins = addLogin(logins, input);
  if (newLogins != undefined) {
    logins = newLogins;
  }
}

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
