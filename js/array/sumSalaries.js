/*
	Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

	Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
*/

const sumSalaries = (obj) => {
  let result = 0;

  for (value of Object.values(obj)) {
    result += value;
  }

  return result;
};

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries));
