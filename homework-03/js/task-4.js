const countTotalSalary = function (employees) {
  const arrValues = Object.values(employees);
  let arrValuesSum = 0;
  for (let arrNumber of arrValues) {
    arrValuesSum += Number(arrNumber);
  }
  return arrValuesSum;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
