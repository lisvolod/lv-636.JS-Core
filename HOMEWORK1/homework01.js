//task1 /*Напишіть скріпт всередині HTML-документу, який виводить на екран ваше імя за допомогою функції alert().*/

// HTML structure

/*<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>firstName</title>
</head>
<body lang="ua">
<script>
	alert("Volodymyr");
</script>
</body>
</html>*/

//task2 
/*Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище.    
      Підключіть створений файл до HTML-документу .*/

// HTML structure
/*<html>
<head>
	<meta charset="utf-8">
	<title>lastName</title>
</head>
<body lang="ua">
<script src=task_02.js></script>
</body>
</html>*/

// JS-content of file task_02.js
console.log("Lisovy");

// task3
/*a) оголосіть дві змінні;
    b) запишіть у змінні будь-які значення;
    c) виведіть на екран значення змінних;
    d) скопіюйте значення однієї змінної в іншу;
    e) виведіть на екран значення змінних.
*/
const a = 3; 
let b = 5;
alert('aStart='+a);
alert('bStart='+b);
b = a;
alert('aFinish='+a);
alert('bFinish='+b);

//task4
/*Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. 
Значення кожної властивості повинно відповідати відповідному примітивному типу даних.*/

const commodity = {
title: "Milk",
weight: 900,
availability: true,
price: undefined,
note: null 
};
console.log (commodity);

//task5
/*Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. 
Результат запишіть в змінну isAdult і виведіть в консоль.*/

let isAdult = confirm ("Are you an adult?");
console.log(isAdult);

// task6
/*В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
	- ваше ім’я
	- ваше прізвище
	- навчальна група
	- ваш рік народження.
Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
Визначте тип кожної змінної.
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.
*/
let firstName = 'Volodymyr';
console.log (typeof firstName);

let lastName = 'Lisovy';
console.log (typeof lastName);

let group = 'lv-636.JS-Core';
console.log (typeof group);

let age = 43;
console.log (typeof age);

let isMarried = true;
console.log (typeof isMarried);

console.log ('Your age is '+age);

if (isMarried == true) 
    {console.log ('Your marital status is MARRIED');
    } 
else {console.log ('Your are SINGLE, SEPARATED, DIVORSED or WIDOWED')}

console.log ('Your Firts Name is '+firstName);
console.log ('Your Last Name is '+lastName);
console.log ('Your group is '+group);

let x = null;
console.log (typeof x);

let birthMonth;
console.log (typeof birthMonth);


// task7
/*За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача 
логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. 
Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.*/

let user = {     	// default object
  	name: 'John',  
  	email: 'johndoe@domen.com', 
	password: 'YourPassword',
};

user.name = prompt('What is your name?', user.name);
user.email = prompt('Write your e-mail', user.email);
user.password = prompt('Wrtite your password', user.password);

alert("Dear "+user.name+" , your email is "+user.email+", your password is "+user.password);

// task8
/*Напишіть скріпт, який вираховує кількість секунд в годині, 
в добі, в місяці, записує результати в відповідні змінні, 
і виводить їх значення на екран.*/

let daysQuantity = prompt('Enter the number of days in the month',30);
let houshQuantity = daysQuantity*24;
let minutesQuantity = houshQuantity*60;
let secondsQuantity = minutesQuantity*60;
let secondsInHour = 60*60;
let secondsInDay = secondsInHour*24;
let secondsInMonth = secondsInDay * daysQuantity;
alert("In this month there will be "+houshQuantity+" housrs, "+ minutesQuantity+" minutes and "+secondsQuantity+" seconds. In ich hour you will have "+ secondsInHour+" seconsd. In ich day you will have "+ secondsInDay+" seconds. That month you will have "+ secondsInMonth+" seconds. Do you realy don't have a time?" );
