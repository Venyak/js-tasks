/*
	Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
*/

const camelize = (str) => {
  let arrStr = str.split('-');

  for (let i = 1; i < arrStr.length; i++) {
    arrStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].slice(1);
  }

  let camelizedStr = arrStr.join('');

  return camelizedStr;
};

const camelize2 = (str) => {
  return str
    .split('-')
    .map((word, index) => (index == 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join('');
};

console.log(camelize('list-style-image'));
console.log(camelize2('list-style-image'));
