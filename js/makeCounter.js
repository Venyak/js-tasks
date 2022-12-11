/*
	Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

		counter() должен возвращать следующее значение (как и раньше).
		counter.set(value) должен устанавливать счётчику значение value.
		counter.decrease() должен уменьшать значение счётчика на 1.
*/

function makeCounter() {
  // вместо
  // let count = 0

  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  counter.set = function (value) {
    return (counter.count = value);
  };

  counter.decrease = () => {
    return counter.count--;
  };

  return counter;
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.set(6));
console.log(counter.decrease());
console.log(counter.decrease());
