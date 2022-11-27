/*
	В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
*/

const getLocalDay = (date) => {
  let localDay = date.getDay();

  if (localDay == 0) {
    localDay = 7;
  }

  return localDay;
};

let date = new Date(2022, 10, 27);

console.log(getLocalDay(date));
