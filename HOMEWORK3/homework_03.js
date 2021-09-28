/* task 1. 
Заданий масив з елементами [2, 3, 4, 5]. 
 За допомогою циклу for знайдіть добуток елементів цього масиву. 
 Також реалізуйте завдання через while. */


// task 1.1

let array = [2,3,4,5]; 
let mult = 1;
for (let i = 0; i < array.length; i += 1) {
    mult *= array[i];
 }
 console.log(mult);
 
 // task 1.2
 
let array = [2,3,4,5];
let i = 0; 
let mult = 1;
while (i < array.length) {    
    mult *= array[i];
   i++;
}
console.log(mult);

/* task 2.
Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. 
Для кожної ітерації він перевірятиме, чи є поточне число парним 
чи непарним, і відображатиме повідомлення на екрані.
Sample Output: 
"0 is even" 
"1 is odd" 
"2 is even"  */

for (let i = 0; i<=15; i += 1) 
{
    if (i % 2==0) {
        console.log ('Число '+i+' є парним')
    }
    else {console.log ('Число '+i+' є непарним')}
}
 
/* task 3. 
Напишіть функцію randArray(k), яка заповнюватиме 
масив k випадковими цілими числами. 
Випадкові числа генеруються із діапазону 1-500.

Sample Output:
randArray(5);  // 399,310,232,379,40*/

function getRandomIntInRange(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min; //Math.random - дійсне число з крапкою з діапазону між 0 и 1.
}                                                           //Math.floor - округлення вниз (відкидаємо дробову частину). 
                                                            //Тобто задираємо діапазон на одиницю догори і відкидаємо дробову частину
function randArray(k) 
{
  let arr=[];                                             //Оголошуємо порожній масив
    for (let i = 0; i < k; i++) {
        arr[i] = getRandomIntInRange(1,500);                //Наповнюємо масив випадковими числами
        console.log (i+1 +"-й елемент масиву = ",+ arr[i]); //Виводимо елементи масиву
    }
}

let k = +prompt ('Введіть кількість елементів масиву', '5'); //Запит на кількість елементів масиву
randArray(k);


/* task 4. 
Напишіть функцію raiseToDegree(a,b), 
яка повертає результат піднесення числа a до степеня b. 
Функція працює тільки з цілими числами. 
Реалізувати інтерфейс введення чисел a, b з клавіатури.*/

function raiseToDegree(x=a,y=b) 
{
    
        while (!Number.isInteger(x)) { //Перевіряємо чи ПЕРШЕ число є цілим
        x = +prompt ('Введене ПЕРШЕ число не є цілим. Введіть ще раз перше ЦІЛЕ число:', ''); //Якщо НІ - перевиєначаємо
        }                               //Крутимо цикл допоки не буде введено ціле число
        
        while (!Number.isInteger(y)) { //Перевіряємо чи ДРУГЕ число є цілим
        y = +prompt ('Введене ДРУГЕ число не є цілим. Введіть ще раз друге ЦІЛЕ число:', ''); //Якщо НІ - перевиєначаємо
        }                               //Крутимо цикл допоки не буде введено ціле число
          
    let res=x**y;
    console.log("Число "+x+" в степені "+y+" рівне: "+res);

    return res;
}

let a = +prompt ('Введіть ПЕРШЕ ціле число: ', ''); // Вводимо перше число 
let b = +prompt ('Введіть ДРУГЕ ціле число: ', ''); // Вводимо перше число 

raiseToDegree(a,b);

/*task 5. 
Реалізуйте функцію – findMin(), 
яка повинна приймати довільну кількість числових аргументів 
і повертати той, який має найменше значення. 
Порада: для розв’язку можете скористатися спеціальним масивом arguments.
Sample Output:
findMin(12, 14, 4, -4, 0.2); // => -4*/

function findMin() 
{
    let minElement = arguments[0]; /*Використовуємо спеціальний об'єкт arguments. 
                                     Припускаємо, що мінімальним є нульовий елемент*/

        for (let i = 0; i < arguments.length; i++) 
        {
            if (arguments[i] < minElement) 
            {
               minElement =  arguments[i];
            }
        }
    
    return minElement;
}

console.log(findMin(3, 4, -0.5, -9, 1.3, 10.5))

/*task 6. 
Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
Sample Output:
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true*/

function findUnique(arr) 
{
    arr.sort();          //Сортуємо мосив 
    console.log(arr); 
 
    let result = true;   //Припускаємо, що всі елементи масиву унікальні
    
    for (let i = 0; i < arr.length; i++) 
    { 
        if (arr[i] === arr[i-1])    //Порівнюємо сусідні елементи посортованого масиву
        {
            result = false;
        }
    }
    
    return result;
}
findUnique([1, 2, 3, 5, 13]);

/*task 7. 
Напишіть функцію, яка повертає останній елемент масиву. 
Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, 
що відповідає кількості 'х' останніх елементів масиву, які треба вивести.
Sample Output:
console.log(lastElem([3, 4, 10, -5]);      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]
*/

function lastArrayElements(someArr, count)
{
    
    if (count == undefined) 
    {
    count =1;    
    }
    let n = someArr.length-count;
    someArr.splice (0, n); //splice - обрізати масив, 0 - з якої позиції, n - кількість елементів
    
    console.log(someArr, count);
}
lastArrayElements([3, 4, 10, -5]);   // [10, -5] 

/*8. Напишіть функцію, яка приймає рядок як параметр і 
перетворює першу букву кожного слова рядка в верхній регістр.

Input string: 'i love java script' 
Output string: 'I Love Java Script'*/

/*Мануал дивимося тут
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/replace
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
https://www.w3schools.com/jsref/jsref_replace.asp
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_replace4
*/

/*Будемо використовувати метод  replace().
The replace() method searches a string for a specified value, 
or a regular expression, and returns a new string 
where the specified values are replaced.
replace()Метод повертає модифіковану стрічку, в якій замінюється шаблон.
JavaScript Regular Expressions Tutorial https://www.w3schools.com/js/js_regexp.asp
                                        https://www.w3schools.com/jsref/jsref_obj_regexp.asp*/

let str = "i love java script";  //Оголошуємо та ініціалізуємо стрічку
function capFirstLetter(str) 
{
return str.replace(/(^|\s)\S/g, function(x) 
                                 {
                                    return x.toUpperCase()
                                 }
                    )
}

console.log(capFirstLetter(str));

/*Регулярний вираз працює наступними чином: 
«Взяти символи які не є пропусками (\S), 
які стоять на початку стрічки (^) 
чи (x|y) після любого символа пропуску (пробєл, кілька пробєлів під ряд, табуляція та ін )) (\s) 
та перетворити їх у верхній регістр (toUpperCase)».
g - знайти всі збіги, а не зупинятися після першого збігу
Тобто регулярний вираз типу \s\S означає знайти пропуск+Непропуск, які розміщені підряд
*/