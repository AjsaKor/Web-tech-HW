// 1. Создать страницу, которая спрашивает имя у пользователя и выводит его с помощью функции.

function helloUser () {
let name = prompt('Как Вас зовут?');
alert (`Привет, ${name}!`);
}
helloUser ();


// 2. Перепишите код, используя конструкцию switch-case, запрашивая возраст пользователя через диалоговое окно.

let age = +prompt('Сколько Вам лет?');
switch (age) {
    case 18:
        alert('Вы совершеннолетний, все можно');
        break;
    case 10:
        alert('Вам надо учить уроки!');
        break;
    case 30:
        alert('Ложитесь спать, завтра на работу.');
        break;
    default:
        alert('Мы не знаем, что вам делать.');
        break;    
}