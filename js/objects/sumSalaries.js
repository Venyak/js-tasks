/*
	Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. 
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const summary = (obj) => {
  let result = 0;

  for (key in obj) {
    result += obj[key];
  }

  return result;
};

console.log(summary(salaries));
