/*
	Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
*/

const getSecondsToTomorrow = () => {
  let now = new Date();

  let tomorow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorow - now;

  return Math.round(diff / 1000);
};
