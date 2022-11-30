/*
	Напишите функцию formatDate(date), форматирующую date по следующему принципу:

		Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
		В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
		В противном случае, если меньше часа, вывести "m мин. назад".
		В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
*/

const formatDate = (date) => {
  let now = new Date();

  let diff = now - date;
  let sec = Math.floor(diff / 1000);
  let min = Math.floor(sec / 60);

  if (diff < 1000) {
    return `прямо сейчас`;
  } else if (sec < 60) {
    return `${sec} сек назад`;
  } else if (min < 60) {
    return `${min} мин назад`;
  }

  let d = date;

  d = [
    '0' + d.getDate(),
    '0' + d.getMonth(),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes(),
  ].map((components) => components.slice(-2));

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
};

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
