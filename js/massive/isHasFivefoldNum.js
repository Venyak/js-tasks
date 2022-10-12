/*
	Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])
*/

const isHasFivefoldNum = (numbers) => {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0) {
      result.push(numbers[i]);
    }
  }

  return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 10];

console.log(isHasFivefoldNum(numbers));
