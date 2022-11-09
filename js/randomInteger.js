/*
	Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
*/

const randomInteger = (min, max) => {
  let result = 0;

  do {
    result = Math.round(Math.random() * 10);
  } while (!(result >= min && result <= max));

  return result;
};

console.log(randomInteger(2, 5));
