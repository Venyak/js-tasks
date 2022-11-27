/*
	Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
*/

const getLastDayOfMonth = (year, month) => {
  let date = new Date(year, month + 1, 0);

  return date.getDate();
};

console.log(getLastDayOfMonth(2012, 1));
