//Рекурсия
const fib = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

//Цикл
const fib2 = (n) => {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
};

console.log('Рекурсия:');
console.log(fib(3));
console.log(fib(7));
console.log('\nЦикл:');
console.log(fib2(3));
console.log(fib2(7));
console.log(fib2(77));
