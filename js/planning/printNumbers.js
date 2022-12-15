/*
	Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

	Сделайте два варианта решения.

		Используя setInterval.
		Используя рекурсивный setTimeout.
*/

// Интервал
let printNumbers = (from, to) => {
  let curNum = from;

  let timerId = setInterval(() => {
    if (curNum <= to) {
      console.log(curNum);
      curNum++;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
};

// Рекурсивный setTimeout
let printNumbers2 = (from, to) => {
  let curNum = from;

  setTimeout(function increaseNum() {
    if (curNum <= to) {
      console.log(curNum);
      curNum++;
      setTimeout(increaseNum, 1000);
    }
  }, 1000);
};

printNumbers(1, 3);
printNumbers2(1, 3);
