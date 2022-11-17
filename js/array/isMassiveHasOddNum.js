/*
	Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если хотя бы один элемент нечетный, если все четные, то false.
*/

const isMassiveHasOddNum = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      return true;
    }
  }

  return false;
};

const numbers = [2, 4, 6, 8];

console.log(isMassiveHasOddNum(numbers));
