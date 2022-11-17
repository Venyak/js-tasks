/*
	Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

	Функция должна возвращать новый массив и не изменять исходный.
*/

const filterRange = (arr, min, max) => {
  const filteredArr = [];
  arr.forEach((value, index) => {
    if (value >= min && value <= max) {
      filteredArr.push(value);
    }
  });

  return filteredArr;
};

const filterRange2 = (arr, min, max) => {
  return arr.filter((item) => item >= min && item <= max);
};

someNumbers = [5, 3, 8, 1];

console.log(filterRange(someNumbers, 2, 5));
console.log(filterRange2(someNumbers, 2, 5));
