/*
	Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
*/

const ucFirst = (str) => {
  if (!str) {
    return str;
  }

  let ucFirtsStr = str[0].toUpperCase() + str.slice(1);

  return ucFirtsStr;
};

console.log(ucFirst('hello'));
