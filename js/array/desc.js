/*
	сортировать в порядке убывания
*/

// const desc = (a, b) => {
//   if (a > b) return -1;
//   if (a == b) return 0;
//   if (a < b) return 1;
// };

const desc = (a, b) => {
  return b - a;
};

let arr = [5, 2, 1, -10, 8];

arr.sort(desc);

console.log(arr);
