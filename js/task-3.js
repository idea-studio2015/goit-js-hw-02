'use stict';

const findLongestWord = function (string) {
  const words = string.split(' ');
  let largestWord = words[0];
  for (const word of words) {
    if (word.length > largestWord.length) {
      largestWord = word;
    }
  }
  return largestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
