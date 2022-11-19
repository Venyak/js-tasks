/*
	Пусть arr – массив строк.

	Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
*/

let strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-O'];

const unique = (arr) => {
  let uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
};

console.log(unique(strings));
