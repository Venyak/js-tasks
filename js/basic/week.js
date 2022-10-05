/*
	Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
*/

const whatDayOfTheWeek = (number) => {
  if (number === 1) {
    return 'Понедельник';
  } else if (number === 2) {
    return 'Вторник';
  } else if (number === 3) {
    return 'Среда';
  } else if (number === 4) {
    return 'Четверг';
  } else if (number === 5) {
    return 'Пятница';
  } else if (number === 6) {
    return 'Суббота';
  } else if (number === 7) {
    return 'Воскресенье';
  } else {
    return 'Введите число от 1 до 7';
  }
};
