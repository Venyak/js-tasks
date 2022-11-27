/*
	Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
*/

const getWeekDay = (date) => {
  let weekDay = date.getDay();

  if (weekDay == 0) {
    return 'ВС';
  } else if (weekDay == 1) {
    return 'ПН';
  } else if (weekDay == 2) {
    return 'ВТ';
  } else if (weekDay == 3) {
    return 'СР';
  } else if (weekDay == 4) {
    return 'ЧТ';
  } else if (weekDay == 5) {
    return 'ПТ';
  } else if (weekDay == 6) {
    return 'СБ';
  }
};

const getWeekDay2 = (date) => {
  const weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return weekDays[date.getDay()];
};

let date = new Date(2012, 0, 3);

console.log(getWeekDay(date));
console.log(getWeekDay2(date));
