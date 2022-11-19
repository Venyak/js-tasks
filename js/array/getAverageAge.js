/*
	Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
*/

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };

let arr = [vasya, petya, masha];

const getAverageAge = (arr) => {
  let sum = 0;
  let allItems = arr.length;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].age;
  }

  return sum / allItems;
};

console.log(getAverageAge(arr));
