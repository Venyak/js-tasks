/*
	Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
*/

// Рекурсия
const sumTo = (num) => {
  if (num == 1) {
    return num;
  } else {
    return num + sumTo(num - 1);
  }
};

//Цикл
const sumTo2 = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }

  return sum;
};

//Формула
const sumTo3 = (num) => {
  return (num * (num + 1)) / 2;
};

console.log('Рекурсия:');
console.log(sumTo(100));
console.log('\nЦикл:');
console.log(sumTo2(100));
console.log('\nФормула:');
console.log(sumTo3(100));
