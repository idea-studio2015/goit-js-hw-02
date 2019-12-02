'use strict';

const WORD1 = 'sale';
const WORD2 = 'spam';

const checkForSpam = function(str) {
  let wordArr = str.toLowerCase();
  if (wordArr.indexOf(WORD1) !== -1 || wordArr.indexOf(WORD2) !== -1) {
    return true;
  }

  return false;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
