/*
	Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
*/

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (obj[key] === Number(obj[key])) {
      obj[key] *= 2;
      console.log(obj[key]);
    }
  }
};

multiplyNumeric(menu);
console.log(menu);
