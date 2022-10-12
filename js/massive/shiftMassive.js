/*
	Написать функцию, которая принимает массив чисел, например [1,2,3,4,5], и переносит первый элемент массива в конец (например можно засунуть первый элемент в конец, затем удалить первый элемент), попробуй несколькими способами сделать, если догадаешься
*/

const shiftMassive = (numbers) => {
  const firstElement = numbers[0];
  const firstNum = numbers.shift();
  numbers.push(firstElement);

  return numbers;
};

const numbers = [1, 2, 3, 4, 5, 6];

console.log(shiftMassive(numbers));
