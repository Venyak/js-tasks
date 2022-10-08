const timeGreeting = (time, name) => {
  if (time >= 6 && time < 12) {
    return `Доброе утро, ${name}!`;
  } else if (time >= 12 && time < 18) {
    return `Добрый день, ${name}!`;
  } else if (time >= 18 && time < 24) {
    return `Добрый вечер, ${name}!`;
  } else {
    return `Доброй ночи, ${name}!`;
  }
};
