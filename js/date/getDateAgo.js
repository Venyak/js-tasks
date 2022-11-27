/*
	Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
*/

const getDateAgo = (date, daysAgo) => {
  let newDate = new Date(date);

  newDate.setDate(date.getDate() - daysAgo);

  return newDate.getDate();
};

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));
