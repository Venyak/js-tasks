/*
	Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый
*/

for (let i = 1; i <= 100; i++) {
  let ageGroup = '';

  if (i < 18) {
    ageGroup = 'ребенок';
  } else if (i < 31) {
    ageGroup = 'молодой';
  } else if (i < 56) {
    ageGroup = 'зрелый';
  } else if (i <= 100) {
    ageGroup = 'пожилой';
  }

  console.log(`${i} - ${ageGroup}`);
}
