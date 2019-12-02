'use strict';

let input;
const numbers = [];
let total = Number('0');

while (true) {
  input = prompt('Введите число:');

  if (isNaN(input) === false) {
    if (input === null) {
      break;
    } else {
      input = Number(input);
      numbers.push(input);
      for (let i = 0; i < numbers.length; i++) {
        numbers[i] = input;
        total += numbers[i];
      }
    }
    alert(`Было введено не число, попробуйте еще раз`);
  }
}

console.log(`Общая сумма чисел равна ${total}`);
