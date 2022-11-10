/*
	Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

	Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
*/

const truncate = (str, maxLength) => {
  if (str.length > maxLength) {
    const newStr = `${str.slice(0, maxLength - 1)}...`;

    return newStr;
  }

  return str;
};

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
console.log(truncate('Всем привет!', 20));
