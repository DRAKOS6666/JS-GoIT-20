// function diagonalDifference(arr) {
//   const arrItems = arr.length;
//   let result = 0;
//   let sumLeftToRight = 0;
//   let sumRightToLeft = 0;
//   for (let i = 0; i < arrItems; i += 1) {
//     sumLeftToRight += Number(arr[i]);
//   }
//   for (let i = arrItems; (i = 0); i -= 1) {
//     sumRightToLeft += Number(arr[i]);
//   }
//   return Math.abs(sumLeftToRight - sumRightToLeft);
// }

// console.log(
//   diagonalDifference([
//     [34, 76, 13, 76, 29],
//     [43, 27, 23, 86, -56],
//     [-23, 65, 23, 14, 74],
//     [12, -45, -73, 23, 85],
//     [76, 56, 29, -85, 12],
//   ])
// );
