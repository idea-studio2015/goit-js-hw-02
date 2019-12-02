'use strict';

const formatString = function(string) {
  const limitSymbol = 40;
  const realLength = string.length;

  if (realLength < limitSymbol) {
    return string;
  }

  if (realLength > limitSymbol) {
    const splicedLength = string.slice(40) + '...';
    return splicedLength;
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
