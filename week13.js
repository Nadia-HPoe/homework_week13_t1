//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate);
//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = currentDate.getFullYear();
console.log(currentYear);
//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = new Date();
console.log(currentMonth.getMonth());
//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = new Date();
console.log(currentDay.getDate());
//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date(1991, 4, 3)
console.log(birthday);
//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const futureDate = new Date(2023, 7, 15);
console.log(futureDate);
//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
const dayDiff = futureDate - currentDate;
console.log(Math.floor(dayDiff / (1000 * 60 * 60 * 24)));
//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date(2023, 6, 1);
console.log(pastDate);
//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
console.log(Math.floor((currentDate - pastDate) / (1000 * 60 * 60 * 24)));
//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date(2023, 6, 13);
console.log(nextWeek);
//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());
//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = currentDate.getFullYear() + 5;
console.log(futureYear);
//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date(futureYear, 4, 3);
console.log(futureDateInFutureYear);
//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
console.log(futureYear - currentYear);
//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
let date = new Date(Date.parse(strDate));
console.log(date);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
let timeStamp = Date.parse(strDate);
console.log(timeStamp);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const wrongDate = '2023/06/15';
const dateChange = Date.parse(wrongDate);
if (isNaN(dateChange) === true) {
    console.log("Неправильный формат даты");
}
else {
    console.log("Правильный формат даты");
}


//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;

if (number >= 0) {
    console.log("Положительное число!");
}
else {
    console.log("Отрицательное число!");
}
//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
let num = Math.abs(number);

if (num % 2 === 0) {
    console.log("Четное число!");
}
else {
    console.log("Нечетное число!");
}
//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (num % 3 === 0) {
    console.log("Число кратное 3!");
}
else {
    console.log("Число не кратное 3!");
}
//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (String(number).length === 1) {
    console.log("Число однозначное");
}
else {
    console.log("Число не однозначное");
}
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (String(number).length === 2) {
    console.log("Число двузначное");
}
else {
    console.log("Число не двузначное");
}
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number > 0 || number === 0) {
    console.log("Положительное число или ноль");
}
else {
    console.log("Отрицательное число!");
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.

if (num % 5 === 0) {
    console.log("кратно 5");
}
else if (num % 7 === 0) {
    console.log("кратно 7");
}
else {
    console.log("не кратно 5 или 7");
}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number < 0 || number === 0) {
    console.log("Отрицательное число или ноль");
}
else {
    console.log("Положительное число");
}

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (String(number).length === 3 && number > 0) {
    console.log("Это трёхзначное положительное число");
}
else {
    console.log("Это не трёхзначное положительное число");
}

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let weekDay = 1;
switch (weekDay) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Thuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Not a day!");
}

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'N';
let fullName;

switch (direction) {
    case "W":
        console.log("West");
        break;
    case "N":
        console.log("North");
        break;
    case "E":
        console.log("East");
        break;
    case "S":
        console.log("South");
        break;
    default:
        console.log("WTF is this? Try again!");
}
