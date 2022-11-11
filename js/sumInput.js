const sumInput = () => {
  let arr = [];

  while (true) {
    let newValue = prompt('Пополните массив числом', 0);
    if (newValue === '' || newValue === null) {
      break;
    }

    arr.push(+newValue);
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

alert(sumInput());
