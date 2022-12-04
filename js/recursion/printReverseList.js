/*
	Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
*/

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

//Рекурсия
const printReverseList = (list) => {
  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
};

//Цикл
const printReverseList2 = (list) => {
  let l = list;
  let arr = [];

  while (l) {
    arr.push(l.value);
    l = l.next;
  }

  let arrRev = arr.reverse();

  for (let i = 0; i < arrRev.length; i++) {
    console.log(arrRev[i]);
  }
};

console.log('Рекурсия:');
printReverseList(list);
console.log('\nЦикл:');
printReverseList2(list);
