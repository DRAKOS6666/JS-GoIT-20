// Константа хранящая значение цвета
const COLOR_TEAL = "#009688";

// Константа хранящая сообщение о авторизации
const MESSAGE_LOGIN_SUCCESS = "Добро пожаловать!";

// Обявление переменной которую можно менять
console.log("// Обявление переменной которую можно менять");
let unDef; //undefined //объявляем переменную не инициализировав ее
console.log(typeof a); //вывыдим сообщение с определением типа (typeof) в консоль разработчика

let varNull = null; //объявление переменной с инициализацией
console.log(typeof varNull);

// Переменная числового типа
console.log("// Переменная числового типа");

let varNumber = 121;
console.log(typeof varNumber);

// Переменная строкового типа
console.log("// Переменная строкового типа");
let varStr = "JavaScript?";
console.log(typeof varStr);

// Переменная булево
console.log("// Переменная булево");

let varBoolean = false;
console.log(typeof varBoolean);

// Конкатенация Строки с переменной
console.log("// Конкатенация Строки с переменной");

console.log("Are you learning " + varStr);

// Модальное объявление пользователю
console.log("// Модальное объявление пользователю");
alert("Attention! You are learning JavaScript");

// Модальное окно подтвердждения действия "Да" или "Нет"
console.log('// Модальное окно подтвердждения действия "Да" или "Нет"');
let isComing = confirm("Please confirm hotel reservation");
console.log(isComing);

// Получение от пользователя данных типа строка
console.log("// Получение от пользователя данных типа строка");

let hotelName = prompt("Please enter desired hotel name:");
console.log(hotelName);

// Цифровое значение невозможно получить с помощью prompt
console.log("// Цифровое значение невозможно получить с помощью prompt");
let value = prompt("Please enter a nuber!");
console.log(typeof value);
console.log(value);

// Приведение к числу
console.log("// Приведение к числу");

// a > b и a < b - больше/меньше
// a >= b и a <= b - больше/меньше или равно
// a == b - равенство
// a != b - неравенство
// a === b - строгое равенство
// a !== b - строгое неравенствоa > b и a < b - больше/меньше
// a >= b и a <= b - больше/меньше или равно
// a == b - равенство
// a != b - неравенство
// a === b - строгое равенство
// a !== b - строгое неравенство

let x = 5;
let y = 10;
let z = 5;

console.log("x > y:", x > y); // false
console.log("x < y:", x < y); // true
console.log("x < z:", x < z); // false
console.log("x <= z:", x <= z); // true
console.log("x === y:", x === y); // false
console.log("x === z:", x === z); // true
console.log("x !== y:", x !== y); // true
console.log("x !== z:", x !== z); // false

// Приведение к числу
console.log("// Приведение к числу");
let valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // 'number'

let valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // 'number'

// Парсинг целых чисел со строки
console.log("// Парсинг целых чисел со строки");
console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); //12
console.log(Number.parseInt("qweqwe")); // NaN

// Парсинг дробных чисел со строки
console.log("// Парсинг дробных чисел со строки");
console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe")); // NaN

// Проверка на число
console.log("// Проверка на число");

let validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false
let invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true

// Сложение чисел с плавающей точкой
console.log("// Сложение чисел с плавающей точкой");
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.300000000004

// Решение проблемы со сложением бесконечных дробей
console.log("// Решение проблемы со сложением бесконечных дробей");
console.log((0.1 * 10 + 0.2 * 10) / 10);

console.log("// Математические функции");
//  Math.floor(num) - возвращает наибольшее целое число, меньшее, либо равное указанному
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - возвращает наименьшее целое число,
// большее, либо равное указанному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа, округлённое до ближайшего целого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - возвращает наибольшее число из набора
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - возвращает наименьшее число из набора
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - возведение в степень
console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
console.log(Math.random()); // случайное число между 0 и 1
console.log(Math.random() * (10 - 1) + 1); // случайное число от 1 до 10

// Конкатенация
console.log("// Конкатенация");
let message = "Mango " + "is" + " happy";
console.log(message); // Mango is happy

// Теперь посмотрим на порядок операндов
let result;

result = 5 + "5";
console.log(result); // '55'
console.log(typeof result); // string

result = 5 + "5" + 5;
console.log(result); // '555'
console.log(typeof result); // string

/*
 * Обратите внимание, произошла математическая операция
 * сложения для первых двух пятерок, после чего 10 было
 * преобразовано в строку '10' и сшито с '5'
 */
result = 5 + 5 + "5";
console.log(result); // '105'
console.log(typeof result); // string

console.log(message.length); // 19
console.log("There is nothing impossible to him who will try".length); // 47

console.log(message.toLowerCase()); // welcome to bahamas!
console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!

// При этом исходная строка не изменяется
let message1 = "Welcome to Bahamas!";
console.log(message1); // Welcome to Bahamas!

console.log(message1.indexOf("to")); // 8
console.log(message1.indexOf("hello")); // -1

// Все методы строк чувствительны к регистру
console.log(message1.includes("welcome")); // false
console.log(message1.includes("Welcome")); // true

// Интерполяция и шаблонные строки
console.log("// Интерполяция и шаблонные строки");

// Используя переменные необходимо составить строку с подставленными значениями
let name = "Mango";
let age = 2;
let mood = "happy";

let message2 =
  "My name is " + name + ", I'm " + age + " years old and " + mood + ".";

console.log(message2); // My name is Mango, I'm 2 years old and happy.

/*
 * Составлять строки с подставляемыми значениями
 * используя конкатенацию очень неудобно.
 * На помощь приходят шаблонные строки и интерполяция.
 */
let sameMessage = `My name is ${name}, I'm ${age} years old and ${mood}.`;

console.log(sameMessage); // My name is Mango, I'm 2 years old and happy.

// В интерполяции можно использовать любое валидное выражение
console.log(`Результат сложения равен ${2 + 2}.`); // Результат равен 4.

// Логические операторы
console.log("Логические операторы");
// Оператор И
let num = 20;
result = num > 10 && num < 30;
console.log("result"); // true

num = 40;
result = num > 10 && num < 30;
console.log("result"); // false

let isOnline = true;
let isFriend = true;
let isDnd = false;

let canOpenChat = isOnline && isFriend && !isDnd;
console.log("canOpenChat: ", canOpenChat);

// Оператор ИЛИ
num = 5;
result = num < 10 || num > 30;
console.log(result); // true

num = 20;
result = num < 10 || num > 30;
console.log(result); // false

// Оператор НЕ
console.log(!true); // false
console.log(!false); // true
console.log(!1); //false
console.log(!0); //true

// Операторы ветвления
// Оператор IF
console.log("// Операторы ветвления");
console.log("// Оператор IF");

let cost = 0;
let subscription = "pro";

if (subscription === "pro") {
  cost = 100;
}

console.log(cost); // 100

cost = 0;
subscription = "free";

if (subscription === "pro") {
  cost = 100;
}

console.log(cost); // 0

// Оператор IF...ELSE
console.log("// Оператор IF...ELSE");

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 0

subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100

// Операторы ELSE...IF
console.log("// Операторы ELSE...IF");

subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
}

console.log(cost); // 500

// Практичный пример
let totalExpenses = 2000;
let payment = 500;
let discount = 0;

if (totalExpenses >= 100 && totalExpenses < 1000) {
  discount = 0.02;
  console.log("Бронзовый партнер, скидка 2%");
} else if (totalExpenses >= 100 && totalExpenses < 5000) {
  discount = 0.05;
  console.log("Серебряный партнер, скидка 5%");
} else if (totalExpenses >= 5000) {
  discount = 0.1;
  console.log("Золотой партнер, скидка 10%");
}

let finalAmount = payment - payment * discount;
console.log(finalAmount);

console.log(
  `Оформляем заказ на сумму ${finalAmount} со скидкой ${discount * 100}%`
);

// Тернарный оператор
console.log("// Тернарный оператор ");
// {условие} ? {выражение если условие правдиво} : {выражение если условие не правдиво}

// Пример 1 - тип акаунта (детский либо взрослый)
age = 20;
let type = age >= 18 ? "adult" : "child"; // adult

// Пример 2 - найти большее число
let num1 = 5;
let num2 = 10;
let biggerNumber = num1 > num2 ? num1 : num2;

console.log(biggerNumber); // 10

// Оператор SWITCH
console.log("// Оператор SWITCH");

cost = undefined;
subscription = "premiums";

switch (subscription) {
  case "free":
    cost = 0;
    break;

  case "pro":
    cost = 100;
    break;

  case "premium":
    cost = 500;
    break;

  default:
    console.log("Invalid subscription type");
}

console.log(cost); // 500

// ЦИКЛЫ

// Цикл While
console.log("// Цикл While");

let clientCounter = 18;
let maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

// Цикл DO...WHILE
console.log("// Цикл DO...WHILE");
let password = "";

do {
  password = prompt("Введите пароль длинее 4-х символов", "");
} while (password.length < 5);

console.log("Вы ввели пароль: ", password);

// Цикл FOR
console.log("// Цикл FOR");
// Easy
let max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(i);
}

// Midle
let target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);

// Инструкция BREAK
console.log("// Инструкция BREAK");

for (let i = 0; i < 10; i += 1) {
  if (i == 5) {
    console.log("Дошли до 5-й итерации, прерываем цикл");
    break;
  }
}

// Инструкция CONTINUE
console.log("// Инструкция CONTINUE");

let number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
}
