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

// Вытянем из массива только цифры
function filter_list(l) {
  let filter_list = [];
  for (const item in l) {
    if (typeof l[item] === "number") {
      filter_list.push(l[item]);
    }
  }
  return filter_list;
}

//  Считает количество очков нашей команды в соревновании
// по такому массиву ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]
function points(games) {
  let ourTeamPoints = 0;

  for (let i = 0; i <= games.length - 1; i += 1) {
    const score = games[i];

    let ourTeam = Number(score[0]);
    let enemyTeam = Number(score[2]);

    if (ourTeam > enemyTeam) {
      ourTeamPoints += 3;
    } else if (ourTeam < enemyTeam) {
      ourTeamPoints += 0;
    } else if (ourTeam === enemyTeam) {
      ourTeamPoints += 1;
    }
  }
  return ourTeamPoints;
}

// Делает строку - аббривиатуру Большими буквами разделенные точками со строки.
// "David Mendieta Harrison" -> "D.M.H"
function abbrevName(name) {
  let arrName = name.split(" ");
  let abbrevName = "";

  for (let name of arrName) {
    if (arrName.indexOf(name) < arrName.length - 1) {
      abbrevName += name[0].toUpperCase() + ".";
    } else {
      abbrevName += name[0].toUpperCase();
    }
  }
  console.log(abbrevName);
  return abbrevName;
}

// Суммирует целые числа с двух массивов чисел (или одного мультимассива)
function arrayPlusArray(arr1, arr2) {
  const totalArray = arr1.concat(arr2);
  let concatArray = [];
  for (let innerArr of totalArray) {
    concatArray = concatArray.concat(innerArr);
  }

  let arrSum = 0;
  for (let arrNumber of concatArray) {
    arrSum += Number(arrNumber);
  }
  return arrSum;

  // Готовый короткий вариант
  // let taskArr = [1, 2, 3, 4, 5, 6];
  // let resultReduce = taskArr.reduce((acc, curr) => acc + curr);
  // console.log(resultReduce);
}

// Суммирует два числа переводит в 2ую систему, возвращает строку
function addBinary(a, b) {
  return (Number(a) + Number(b)).toString(2);
}

function womensAge(n) {
  n = Number(n);

  if (n < 21) {
    alert("You're too young for this function");
    return n;
  }

  const baseModulo = Math.round(n / 2);
  const baseSum = base + modulo;
  // const ageInBase = n.toString(base);
  alert(`${n}? Thats just ${baseModulo}, in base ${Math.round(base)}!`);
  return ageInBase;

  // if (n > 21 && n <= 72) {
  //   const ageInBase = n.toString(base);
  //   alert(`${n}? Thats just ${ageInBase}, in base ${Math.round(base)}!`);
  //   return ageInBase;
  // For very old woomens =)
  // } else if (n > 72) {
  //   const overBase = 36 + (n - 36);
  //   const ageInBase = n.toString(base);
  //   alert(`${n}? Thats just ${ageInBase}, in base ${Math.round(base)}!`);
  //   return ageInBase;
  // }
}
womensAge(prompt("Введите свой возраст"));
