/*
	Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если все элементы четные, если бы хотя бы один элемент не четный, то false.
*/

const isMassiveEven = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      return false;
    }
  }

  return true;
};

const numbers = [2, 4, 6, 8, 9];

console.log(isMassiveEven(numbers));
