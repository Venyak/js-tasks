/*
	Напишите функцию printList(list), которая выводит элементы списка по одному.
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
const printList = (list) => {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
};

//Цикл
const printList2 = (list) => {
  let l = list;

  while (l) {
    console.log(l.value);
    l = l.next;
  }
};

console.log('Рекурсия:');
printList(list);
console.log('\nЦикл:');
printList2(list);
