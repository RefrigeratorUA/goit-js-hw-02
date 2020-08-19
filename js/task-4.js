const orderPieces = Number.parseInt(prompt('Введите количество дроидов:'));

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces !== null || orderPieces !== 0 ? orderPieces * pricePerDroid : 0;
let balanceCredit = credits - totalPrice;
let message;

// Write code under this line
if (orderPieces === null) {
  message = 'Отменено пользователем!';
} else if (balanceCredit >= 0) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else {
  message = 'Недостаточно средств на счету!';
}

console.log('Задание 4: ', message);
