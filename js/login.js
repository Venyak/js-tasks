/*
	Напишите код, который будет спрашивать логин с помощью prompt.

	Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

	Пароль проверять так:

	Если введён пароль «Я главный», то выводить «Здравствуйте!»,
	Иначе – «Неверный пароль»,
	При отмене – «Отменено».
*/

let login = prompt('Кто там?', '');

if (login === 'Админ') {
  let password = prompt('Введите пароль!', '');

  if (password === 'Я главный') {
    alert('Здравствуйте!');
  } else if (!(password === 'Я главный') && password != null) {
    alert('Неверный пароль');
  } else if (password == null || password == '') {
    alert('Отменено');
  }
} else if (login !== 'Админ' && login != null) {
  alert('Я Вас не знаю');
} else if (login == null) {
  alert('Отменено');
}
