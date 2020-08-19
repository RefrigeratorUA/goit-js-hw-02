const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';

const userPassword = prompt('Введите пароль администратора:');

if (userPassword === null) {
  message = CANCELED_BY_USER;
} else if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
} else {
  message = ACCESS_DENIED;
}

alert(message);
