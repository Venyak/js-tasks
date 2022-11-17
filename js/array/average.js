/*
	Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)
*/

const average = (numbers) => {
  let result = 0;
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  result = sum / numbers.length;
  result = result.toFixed(1);

  return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 13, 41, 515];

console.log(average(numbers));
