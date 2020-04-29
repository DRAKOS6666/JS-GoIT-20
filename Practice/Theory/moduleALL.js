//========================================================================================================
// МОДУЛЬ 1
//========================================================================================================
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ПЕРЕМЕННЫЕ
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Константа хранящая значение цвета
const COLOR_TEAL = "#009688";

// Константа хранящая сообщение о авторизации
const MESSAGE_LOGIN_SUCCESS = "Добро пожаловать!";
// --------------------------------------------------------------------------------------

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
// --------------------------------------------------------------------------------------

// Переменная строкового типа

console.log("// Переменная строкового типа");
let varStr = "JavaScript?";
console.log(typeof varStr);
// --------------------------------------------------------------------------------------

// Итерация по строке

const string = "javascript";
for (const character of string) {
  console.log(character);
}
// --------------------------------------------------------------------------------------

// Переменная булево

console.log("// Переменная булево");
let varBoolean = false;
console.log(typeof varBoolean);
// --------------------------------------------------------------------------------------

// Конкатенация Строки с переменной

console.log("// Конкатенация Строки с переменной");
console.log("Are you learning " + varStr);
// --------------------------------------------------------------------------------------

// Модальное объявление пользователю

console.log("// Модальное объявление пользователю");
alert("Attention! You are learning JavaScript");
// --------------------------------------------------------------------------------------

// Модальное окно подтвердждения действия "Да" или "Нет"

console.log('// Модальное окно подтвердждения действия "Да" или "Нет"');
let isComing = confirm("Please confirm hotel reservation");
console.log(isComing);
// --------------------------------------------------------------------------------------

// Получение от пользователя данных типа строка

console.log("// Получение от пользователя данных типа строка");
let hotelName = prompt("Please enter desired hotel name:");
console.log(hotelName);
// --------------------------------------------------------------------------------------

// Цифровое значение невозможно получить с помощью prompt

console.log("// Цифровое значение невозможно получить с помощью prompt");
let value = prompt("Please enter a nuber!");
console.log(typeof value);
console.log(value);
// --------------------------------------------------------------------------------------

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
// --------------------------------------------------------------------------------------

// Приведение к числу

let valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // 'number'
let valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // 'number'
// --------------------------------------------------------------------------------------

// Парсинг целых чисел со строки

console.log("// Парсинг целых чисел со строки");
console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); //12
console.log(Number.parseInt("qweqwe")); // NaN
// --------------------------------------------------------------------------------------

// Парсинг дробных чисел со строки

console.log("// Парсинг дробных чисел со строки");
console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe")); // NaN
// --------------------------------------------------------------------------------------

// Проверка на число

console.log("// Проверка на число");
let validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false
let invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true
// --------------------------------------------------------------------------------------

// Сложение чисел с плавающей точкой

console.log("// Сложение чисел с плавающей точкой");
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.300000000004
// --------------------------------------------------------------------------------------

// Решение проблемы со сложением бесконечных дробей

console.log("// Решение проблемы со сложением бесконечных дробей");
console.log((0.1 * 10 + 0.2 * 10) / 10);
// --------------------------------------------------------------------------------------

// Математические функции

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
// --------------------------------------------------------------------------------------

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
// --------------------------------------------------------------------------------------

// Интерполяция и шаблонные строки

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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Логические операторы
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
// --------------------------------------------------------------------------------------

// Оператор ИЛИ

num = 5;
result = num < 10 || num > 30;
console.log(result); // true
num = 20;
result = num < 10 || num > 30;
console.log(result); // false
// --------------------------------------------------------------------------------------

// Оператор НЕ

console.log(!true); // false
console.log(!false); // true
console.log(!1); //false
console.log(!0); //true

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Операторы ветвления
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
// --------------------------------------------------------------------------------------

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
// --------------------------------------------------------------------------------------

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
// --------------------------------------------------------------------------------------

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
// --------------------------------------------------------------------------------------

// Тернарный оператор

console.log("// Тернарный оператор ");
// {условие} ? {выражение если условие правдиво} : {выражение если условие не правдиво}
// --------------------------------------------------------------------------------------

// Пример 1 - тип акаунта (детский либо взрослый)
age = 20;
let type = age >= 18 ? "adult" : "child"; // adult

// Пример 2 - найти большее число
let num1 = 5;
let num2 = 10;
let biggerNumber = num1 > num2 ? num1 : num2;
console.log(biggerNumber); // 10
// --------------------------------------------------------------------------------------

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
// --------------------------------------------------------------------------------------

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ЦИКЛЫ
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Цикл While

console.log("// Цикл While");
let clientCounter = 18;
let maxClients = 25;
while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}
// --------------------------------------------------------------------------------------

// Цикл DO...WHILE

console.log("// Цикл DO...WHILE");
let password = "";
do {
  password = prompt("Введите пароль длинее 4-х символов", "");
} while (password.length < 5);
console.log("Вы ввели пароль: ", password);
// --------------------------------------------------------------------------------------

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
// --------------------------------------------------------------------------------------

// Инструкция BREAK

console.log("// Инструкция BREAK");
for (let i = 0; i < 10; i += 1) {
  if (i == 5) {
    console.log("Дошли до 5-й итерации, прерываем цикл");
    break;
  }
}
// --------------------------------------------------------------------------------------

// Инструкция CONTINUE

console.log("// Инструкция CONTINUE");
let number = 10;
for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
}

//========================================================================================================
// Модуль 2
//========================================================================================================
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// МАССИВЫ
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Создание массива

// Пустой массив
let arr = [];
// Массив clients с тремя элементами
let clients = ["Mango", "Poly", "Ajax"];
console.log(clients); // ["Mango", "Poly", "Ajax"]
// --------------------------------------------------------------------------------------

// Получить значение элемента массива

let clients = ["Mango", "Poly", "Ajax"];
// Указывая в скобках индекс элемента мы получаем его значение
console.log(clients[0]); // Mango
console.log(clients[1]); // Poly
console.log(clients[2]); // Ajax
// --------------------------------------------------------------------------------------

// Переопределение значения в массиве

let clients = ["Mango", "Poly", "Ajax"];
// Значение элемента можно заменить
clients[0] = "Kiwi";
console.log(clients[0]); // Kiwi
// Или добавить
clients[3] = "Alex";
console.log(clients[3]); // Alex
// --------------------------------------------------------------------------------------

// Длина массива

let clients = ["Mango", "Poly", "Ajax"];
// length вернет текущую длину массива
console.log(clients.length); // 3
clients.length = 5;
console.log(clients.length); // 5
console.log(clients); // ["Mango", "Poly", "Ajax", empty × 2]
console.log(clients[4]); // undefined
clients.length = 2;
console.log(clients); // ["Mango", "Poly"]
// --------------------------------------------------------------------------------------

// Итерация по массиву

const clients = ["Mango", "Ajax", "Poly"];
for (let i = 0; i < clients.length; i += 1) {
  console.log("Logging clients: ", clients[i]);
}
const numbers = [];
for (let i = 0; i < 3; i += 1) {
  numbers.push(`label-${i}`);
}
console.log("numbers: ", numbers); // ['label-0', 'label-1', 'label-2']
// --------------------------------------------------------------------------------------

// Цикл for...of
// Итерация по массиву
const clients = ["Mango", "Ajax", "Poly"];
for (const client of clients) {
  console.log(client);
}
// --------------------------------------------------------------------------------------

// Поиск в массиве

const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message = "Клиента с таким именем нету в базе данных!";
for (const client of clients) {
  if (client === clientNameToFind) {
    message = "Клиент с таким именем есть в базе данных!";
    break;
  }
  // Если не совпадает, то на этой итерации ничего не делаем
}
// --------------------------------------------------------------------------------------

// Многомерные массивы

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 5, "Vasya"]],
];
alert(matrix[2][2][2]);
// --------------------------------------------------------------------------------------

// Перебор многомерного массива
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let total = 0;
for (let i = 0; i < matrix.length; i += 1) {
  console.log("Подмассив матрицы matrix[i]: ", matrix[i]);

  for (let j = 0; j < matrix[i].length; j += 1) {
    console.log("Элемент подмассива матрицы matrix[i][j]: ", matrix[i][j]);
    total += matrix[i][j];
  }
}
console.log(total); // 45
// --------------------------------------------------------------------------------------

// Методы массива

// split
const message = "Welcome to Bahamas!";
// Разбивает строку по разделителю, в данном случае это пробел
console.log(message.split(" ")); // ["Welcome", "to", "Bahamas!"]
// Вызов split с пустой строкой разобьёт по буквам
console.log(message.split("")); // [много букв :)]
// --------------------------------------------------------------------------------------

// join
const clients = ["Mango", "Poly", "Ajax"];
// Сошьет все элементы массива в строку,
// между каждой парой элементов будет указанный разделитель
console.log(clients.join(" ")); // "Mango Poly Ajax"
console.log(clients.join(",")); // "Mango,Poly,Ajax"
console.log(clients.join("-")); // "Mango-Poly-Ajax"
// --------------------------------------------------------------------------------------

// Получить индекс элемента массива
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1
// --------------------------------------------------------------------------------------

// Проверка наличия элемента в массиве
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.includes("Poly")); // true
console.log(clients.includes("Monkong")); // false
// --------------------------------------------------------------------------------------

// Проверка множественных условий с includes()
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
if (redFruits.includes(fruit)) {
  сonsole.log("It is a red fruit!");
  // --------------------------------------------------------------------------------------
}

// Методы push(), pop(), shift(), unshift()

// push и pop
// Добавляем элементы в конец массива
stack.push(1);
console.log(stack); // [1]
stack.push(2);
console.log(stack); // [1, 2]
stack.push(3);
console.log(stack); // [1, 2, 3]
// Удаляем элементы из конца массива
console.log(stack.pop()); //  3
console.log(stack); // [1, 2]
console.log(stack.pop()); //  2
console.log(stack); // [1]
console.log(stack.pop()); //  1
console.log(stack); // []
console.log(stack.pop()); //  undefined
// --------------------------------------------------------------------------------------

// shift() и unshift()
const clients = ["Mango", "Ajax", "Poly"];
console.log(clients.shift()); // Mango
console.log(clients); // ["Ajax", "Poly"]
clients.unshift("Kiwi");
console.log(clients); // ["Kiwi", "Ajax", "Poly"]
// --------------------------------------------------------------------------------------

// Метод slice(begin, end)
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// Вернет новый массив в котором будут элементы с индексами от 1 до 2
console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]
// Вернет новый массив в котором будут
// элементы с индексами от 1 до (clients.length - 1)
console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// Вернет копию исходного массива
console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]
// Вернет новый массив состоящих из последних двух элементом исходного
console.log(clients.slice(-2)); // ["Poly", "Kiwi"]
// --------------------------------------------------------------------------------------

// Метод splice(position, num)

// Предположим, у нас есть массив оценок, который содержит пять чисел от 1 до 5.
const scores = [1, 2, 3, 4, 5];
// Следующая операция удаляет три элемента массива,
// начиная с первого элемента (индекс 0).
const deletedScores = scores.splice(0, 3);
// Теперь массив scores содержит два элемента.
console.log(scores); // [4, 5]
// А массив deletedScores содержит три удаленных элемента.
console.log(deletedScores); // [1, 2, 3]
// --------------------------------------------------------------------------------------

// Вставка элементов в массив splice()

// Предположим, что у вас есть массив с названиями цветов в виде строк.
const colors = ["red", "green", "blue"];
// Следующая операция помещает один новый элемент перед вторым элементом.
colors.splice(2, 0, "purple");
// Теперь массив цветов содержит четыре элемента
// с новым элементом, вставленным во вторую позицию.
console.log(colors); // ["red", "green", "purple", "blue"]
// Вы можете вставить более одного элемента, передав четвертый, пятый аргумент и т. д.
colors.splice(1, 0, "yellow", "pink");
// --------------------------------------------------------------------------------------

// Замена элементов массива splice()
// Предположим, у вас есть массив языков программирования из четырех элементов.
const languages = ["C", "C++", "Java", "JavaScript"];
// Следующая операция заменяет второй элемент на новый.
languages.splice(1, 1, "Python");
// В массиве языков теперь все еще четыре элемента,
// но второй элемент теперь «Python» вместо «C++».
console.log(languages); // ["C", "Python", "Java", "JavaScript"]
// Вы можете заменить один элемент на несколько элементов,
// передав больше аргументов
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages);
// ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
// --------------------------------------------------------------------------------------

// Метод concat()
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];
const allClients = oldClients.concat(newClients);
console.log(allClients);
// ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]
console.log(oldClients);
// ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients);
// ["Monkong", "Singu"]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ФУНКЦИИ
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// a, b, c это параметры
const add = function (a, b, c) {
  return a + b + c;
};
// 1, 2, 3 это аргументы
const result = add(1, 2, 3);
console.log(result); // 6
// 5, 10, 15 это аргументы
console.log(add(5, 10, 15)); // 30
// --------------------------------------------------------------------------------------

// Порядок выполения кода
const fnA = function () {
  console.log("Начала выполняться [fnA]");
  fnB();
  console.log("Продолжила выполняться [fnA] после выхода из [fnB]");
};
const fnB = function () {
  console.log("Выполняется [fnB]");
};
console.log("Начал выполнение [main]");
fnA();
console.log("Продолжил выполняться [main] после выхода из [fnA]");
/*
 * Начал выполнение [main]
 * Начала выполняться [fnA]
 * Выполняется [fnB]
 * Продолжила выполняться [fnA] после выхода из [fnB]
 * Продолжил выполняться [main] после выхода из [fnA]
 */
// --------------------------------------------------------------------------------------

// Параметры фунции по умолчанию

const count = function (countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
};
count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
count(); // countFrom = 0, countTo = 10, step = 1
// --------------------------------------------------------------------------------------

// Псевдомассив arguments
const sum = function () {
  let total = 0;
  for (const argument of arguments) {
    total += argument;
  }
  return total;
};
console.log(sum(1, 2, 3)); //  6
console.log(sum(1, 2, 3, 4)); //  10
console.log(sum(1, 2, 3, 4, 5)); //  15
// --------------------------------------------------------------------------------------

// Способы преобразовать псевдомассив
// 1
const fn = function () {
  // В переменной args будет полноценный массив
  const args = Array.from(arguments);
};
// 2
const fn = function (...args) {
  // В переменной args будет полноценный массив
};
// --------------------------------------------------------------------------------------

// Паттерн Guard Clause

const withdraw = function (amount, balance) {
  if (amount === 0) {
    console.log("Для проведения операции введите сумму больше нуля.");
  } else if (amount > balance) {
    console.log("Недостаточно средств на счету.");
  } else {
    console.log("Операция снятия средств проведена.");
  }
};
withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
withdraw(500, 300); // Недостаточно средств на счету.
withdraw(100, 300); // Операция снятия средств проведена.
// --------------------------------------------------------------------------------------

// СТРЕЛОЧНЫЕ ФУНКЦИИ

// Обычное функциональное выражение
const add = function (a, b, c) {
  return a + b + c;
};
// Тоже самое записно как стрелочная функция
const add = (a, b, c) => a + b + c;
// --------------------------------------------------------------------------------------

// Если параметров несколько, то они перечисляются через запятую в круглых скобках.
const fn = (a, b, c) => {
  return a + b + c;
};
// Если параметр один, то он может быть без круглых скобок.
const fn = (x) => {
  return x * 2;
};
// Если параметров нет, то обязательно должны быть пустые круглые скобки.
const fn = () => {
  console.log("Hello! :]");
};
// --------------------------------------------------------------------------------------

/*
 * Если фигурные скобки после => есть, значит необходимо явно указать то,
 * что должна вернуть функция - поставить return и выражение.
 * Это называется явный возврат (explicit return)
 */
const fn = (a, b, c) => {
  return a + b + c;
};
/*
 * Если фигурных скобок нет, то возвращается результат выражения стоящего после =>
 * Это называется неявный возврат (implicit return)
 * В примере ниже вернется результат выражения сложения a, b и c
 */
const fn = (a, b, c) => a + b + c;
// --------------------------------------------------------------------------------------

// Стрелочные функции и arguments

const add = (...args) => {
  console.log(args);
};
add(1, 2, 3); // [1, 2, 3]
// --------------------------------------------------------------------------------------

//========================================================================================================
// Модуль 3
//========================================================================================================

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ОБЪЕКТЫ
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const hotel = {name: 'Hotel'};
//    объект^ (ключ^   :  ^значение ключа)
//             ^свойство объекта^
// Создание объекта и доступ к его свойствам

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};

console.log(hotel.name); // Resort Hotel
console.log(hotel["name"]); // Resort Hotel
hotel.name = "Coastline Resort";
console.log(hotel.name); // Coastline Resort
console.log(hotel["name"]); // Coastline Resort
hotel["name"] = "Stardust Hotel";
console.log(hotel.name); // Stardust Hotel
console.log(hotel["name"]); // Stardust Hotel
// --------------------------------------------------------------------------------------

// При отсутствии ключа он будет создан

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};
hotel.address = "1, Beach ave.";
hotel["manager"] = "Chuck Norris";
console.log(hotel.address); // 1, Beach ave.
console.log(hotel.manager); // Chuck Norris
// --------------------------------------------------------------------------------------

// Удаление свойств

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};
delete hotel.name;
console.log(hotel); // {stars: 5, capacity: 100}
delete hotel["stars"];
console.log(hotel); // {capacity: 100}
// --------------------------------------------------------------------------------------

// Отсутствующие свойства
const hotel = {
  name: "Resort Hotel",
  stars: 5,
  guests: ["mango", "poly", "ajax"],
};
console.log(hotel.stars); // 5
console.log(hotel.pool); // undefined
// --------------------------------------------------------------------------------------

// Короткие свойства
let name = "Resort Hotel";
let stars = 5;
// Эта ES5 запись избыточна
const es5hotel = {
  name: name,
  stars: stars,
  capacity: 100,
};
/*
 * ES6 Shorthand properties
 * Имя ключа будет аналогично имени переменной
 * Значение свойства будет равно значению переменной
 */
const es6hotel = {
  name,
  stars,
  capacity: 100,
};
console.log(es6hotel); // {name: "Resort Hotel", stars: 5, capacity: 100}
// --------------------------------------------------------------------------------------

// Вычисляемые свойства

const key = "person";
const getKey = function () {
  return "age";
};
// Computed properties
const object = {
  [key]: "Mango",
  [getKey()]: 2,
};
console.log(object); // {person: 'Mango', age: 2}
// --------------------------------------------------------------------------------------

// Методы объекта

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
  // Так метод объявлялся в ES5
  greetInES5: function () {
    console.log("Welcome!");
  },
  // Так метод объявляется в ES6
  greetInES6() {
    console.log("Welcome!");
  },
};
hotel.greetInEs5(); // Welcome!
hotel.greetInEs6(); // Welcome!

// Добавление новых методов объекта
const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};
hotel.greet = function () {
  console.log("Welcome!");
};
hotel.greet(); // Welcome!
// --------------------------------------------------------------------------------------

// Доступ к объекту через this

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
  showName() {
    console.log(this.name);
  },
  changeCapacity(value) {
    this.capacity = value;
  },
};
hotel.showName(); // Resort Hotel
hotel.changeCapacity(200);
console.log(hotel.capacity); // 200
// --------------------------------------------------------------------------------------

// Переребор Объекта

// Цикл for...in
const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};
// Перебор ключей объекта hotel
for (const key in hotel) {
  console.log("Key: ", key);
}
/*
 * Key: name
 * Key: stars
 * Key: capacity
 */

// Получаем значение свойства с заданым ключом

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};
for (const key in hotel) {
  console.log("Value: ", hotel[key]);
}
/*
 * Value: "Resort Hotel"
 * Value: 5
 * Value: 100
 */
// --------------------------------------------------------------------------------------

// Object.keys(), Object.values(), Object.entries()

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};
const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]
const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};
const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
for (const key of keys) {
  console.log("Value: ", hotel[key]);
}
/*
 * Value: Resort Hotel
 * Value: 5
 * Value: 100
 */

// Вариант 2 с использованием Object.entries()
const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};
/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */
const entries = Object.entries(hotel);
/*
 * На каждой итерации по entries выберем первый элемент подмассива (ключ)
 * в переменную key, а второй (значение) в переменную value
 */
for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];
  console.log(`${key}: ${value}`);
}
/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */

// Вариант 3 с использованием Object.values()
const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};
const values = Object.values(goods); // [6, 3, 4, 7]
let total = 0;
for (const value of values) {
  total += value;
}
console.log(total); // 20
// --------------------------------------------------------------------------------------

//

// --------------------------------------------------------------------------------------

//

// --------------------------------------------------------------------------------------

//

// --------------------------------------------------------------------------------------

//

// --------------------------------------------------------------------------------------

//

// --------------------------------------------------------------------------------------

//

// --------------------------------------------------------------------------------------

//

// --------------------------------------------------------------------------------------
