let total = 0;

do {
  const inputNumber = prompt('Введите число:');
  if (inputNumber === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  } else if (!Number(inputNumber)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(inputNumber);
    console.log(total);
  }
} while (true);
