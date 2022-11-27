/*
	Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

	Если объект salaries пустой, то нужно вернуть null.
	Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
*/

const topSalary = (obj) => {
  let max = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(obj)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
};

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salaries));
