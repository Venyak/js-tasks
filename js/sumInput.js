/*
	Напишите функцию sumInput(), которая:

	Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
	Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
	Подсчитывает и возвращает сумму элементов массива.
*/

const sumInput = () => {
  let arr = [];

  while (true) {
    let newValue = prompt('Пополните массив числом', 0);
    if (newValue === '' || newValue === null) {
      break;
    }

    arr.push(+newValue);
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

alert(sumInput());
