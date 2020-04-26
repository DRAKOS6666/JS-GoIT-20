const findLongestWord = function (string) {
  const array = string.split(" ");
  let longestWord = array[0];
  for (const word of array) {
    if (word.length > longestWord.length) longestWord = word;
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
