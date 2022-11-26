/*
	Напишите функцию count(obj), которая возвращает количество свойств объекта:
*/

const count = (obj) => {
  return Object.keys(obj).length;
};

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(count(salaries));

const count2 = (obj) => {
  let result = 0;

  for (value of Object.keys(obj)) {
    result++;
  }

  return result;
};

let salaries2 = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(count2(salaries));
