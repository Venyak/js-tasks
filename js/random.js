/*
	Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
*/

const random = (min, max) => {
  let result = 0;

  do {
    result = Math.random() * 10;
  } while (!(result > min && result <= max));

  return result;
};

console.log(random(2, 5));
