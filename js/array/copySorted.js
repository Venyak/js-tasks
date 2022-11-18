/*
	У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
*/

const copySorted = (arr) => {
  return arr.concat().sort();
};

let arr = ['HTML', 'JavaScript', 'CSS'];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)
