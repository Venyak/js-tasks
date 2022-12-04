/*
	Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
*/

const factorial = (n) => {
  return !n ? 1 : n * factorial(n - 1);
};

console.log(factorial(0));
console.log(factorial(5));
