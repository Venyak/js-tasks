/*
	Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст ([{name: 'Иван', age: 23},...]) и возвращает массим, где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".
*/

const employeeToStr = (mas) => {
  let result = [];

  for (let i = 0; i < mas.length; i++) {
    result.push(`Имя: ${mas[i].name}, возраст: ${mas[i].age}`);
  }

  return result;
};

const employee = [
  { name: 'Иван', age: 23 },
  { name: 'Николай', age: 30 },
  { name: 'Артем', age: 21 },
];

console.log(employeeToStr(employee));
