/*
	Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
*/

const checkSpam = (str) => {
  const lcStr = str.toLowerCase();

  if (lcStr.includes('viagra') || lcStr.includes('xxx')) {
    return true;
  }

  return false;
};

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
