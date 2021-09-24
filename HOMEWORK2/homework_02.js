/*task 1
Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.*/

let x = 1;
let y = 2;

let res1 = x + String(y)// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x)+String(y)// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x)&&Boolean(y)// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = NaN+x/y // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

/*task 2 
2. Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
	a) парним додатним;
	b) кратним числу 7.
Результат перевірки вивести в консоль.*/

let a = prompt ("Input number", "");
if ((a % 2 == 0) && (a % 7 ==0)) {console.log("The number is even and a multiple of 7")} 
	else {console.log("The number is either odd or not a multiple of 7")}

/*task 3
3. Створіть порожній масив;
1) У перший елемент масиву запишіть будь-яке число;
2) У другий елемент масиву запишіть будь-який рядок;
3) У третій елемент масиву запишіть будь-яке логічне значення;
4) У четвертий елемент масиву запишіть значення null;
5) Виведіть на екран число елементів, яке зберігається в масиві;
6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву;
7) Виведіть на екран п'ятий елемент масиву.
8) Видаліть 1-ий елемент масиву і виведіть масив на екран.*/

let arr = [];
arr[0] = 10;
arr[1] = "SomeText";
arr[2] = true;
arr[3] = null;
console.log(arr.length);
arr[4] = prompt("Input the value of the 5th element of the array", "");
alert ("The value of the 5th element of the array is equal "+ arr[4]);
arr.shift();
alert (arr);

// task 4
/*4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
Початковий масив:
let cities = ["Rome", "Lviv", "Warsaw"]; 
Результуючий масив:
"Rome*Lviv*Warsaw"*/

let cities = ["Rome", "Lviv", "Warsaw"];
let k = cities.length;  // Визначаємо кількість елементів масиву
let str = cities[0]; 	// Оголошуємо стрічку у яку будемо збирати елементи масиву та
						// записуємо в цю стрічку перший елемент масиву	
let i = 1; 		// Виставляємо лічильник на наступний елемент

while (i < k) {
str = str +"*"+ cities[i]; //Дописуємо в стрічку '*' та наступний елемент масиву
i++; 
};

let newArr = []; // Оголошуємо новий масив
newArr[0] = str; // Записуємо в 1-й його елемент зібрану стрічку
console.log(newArr);

// task 5
/*5. Використовуючи функцію prompt() 
задайте користувачу питання про досягнення ним повнолітнього віку. 
Результат запишіть в змінну isAdult. 
В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. 
Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. 
Якщо вік менше 18 років вивести “Ви ще надто молоді”, */

let isAdult = prompt ("How old are you?", "");
if (isAdult >= 18) {alert ("You have reached the age of majority")} 
	else {alert ("You are still too young")};

//task 6
/*6. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
Необхідно 
	a) визначити і вивести в консоль площу трикутника 
	b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. 
Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми 
(наприклад:  8.42355465 =>  8.424).  
*/
let a = prompt ("Input the length of the first side of the triangle:",""); //Вводимо дані
let b = prompt ("Input the length of the second side of the triangle:","");
let c = prompt ("Input the length of the third side of the triangle:","");

a = Number(a); //Приводимо їх до чисел
b = Number(b);
c = Number(c);
while (c >= (a + b)) 	//Перевіріяємо, чи довжина 3-ї сторони не більша за суму довжин двох перших сторін
			{alert ("Incorrect data");
 			c = prompt ("Input RIGHT length of the third side of the triangle:","");
 			c = Number(c);
			} 
let p = (a + b + c)/2; //Обчислюємо півпериметр
console.log("p="+p);
let s = Math.sqrt(p*(p-a)*(p-b)*(p-c)); //Обчислюємо площу
console.log("s="+s.toFixed(3));

if ((c**2==a**2+b**2) || (a**2==c**2+b**2) || (b**2==a**2+c**2)) //Перевіряємо, чи виконується теорема Піфагора
	{alert("This triangle is right-angled. Its area is "+s.toFixed(3))
	} 
	else {alert("This triangle is not right-angled. Its area is "+s.toFixed(3))
	}

//task 7
/*Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.*/

// variant 7.1
let now = new Date();
h= now.getHours();
if (h>= 23 && h< 5) {console.log ('Good Night')} else
if (h>= 5 && h< 11) {console.log ('Good Morning')} else
if (h>= 11 && h< 17) {console.log ('Good Afternoon')} else
if (h>= 17 && h< 23) {console.log ('Good Evening')}

// variant 7.2.1
let now = new Date();
h = now.getHours();

/*console.log (h);
console.log (typeof h);*/

switch (true) {
	case (h>= 23 && h< 5): 
		console.log ('Good Night');
		break;
	case (h>= 5 && h< 11): 
		console.log ('Good Morning');
		break;
	case (h>= 11 && h< 17): 
		console.log ('Good Afternoon');
		break;
	case (h>= 17 && h< 23): 
		console.log ('Good Evening');
		break;
	}

// variant 7.2.2
let now = new Date();
h = now.getHours();

/*console.log (h);
console.log (typeof h);*/

switch(true) {
	case (h==23 || h==1 || h==2 || h==3 || h==4) : 
		console.log ('Good Night');
		break;
	case (h==5 || h==6 || h==7 || h==8 || h==9 || h==10 || h==11) : 
		console.log ('Good Morning');
		break;
	case (h==12 || h==13 || h==14 || h==15 || h==16): 
		console.log ('Good Afternoon');
		break;
	case (h==17 || h==18 || h==19 || h==20 || h==21 || h==22) : 
		console.log ('Good Evening');
		break;
	}