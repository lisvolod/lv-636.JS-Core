// Task 1. 
// Реалізуйте функцію calcRectangleArea(), 
// яка приймає 2 параметри ширина прямокутника width 
// і висота прямокутника height і обраховує його площу. 
// Передбачити припинення виконання програми і генерацію винятку 
// у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі 
// виняткові ситуації.

function calcRectangleArea(w,h) 
{
    if (isNaN(w) || isNaN(h) || (w <= 0) || (h <= 0)) 
    {
        throw new UserExeption ("TypeError. Inputed data are not numrers or less than zero");
    }
    else 
    {
        let s = w * h;
        console.log("S=",+s);
        return s;    
    }
}

function UserExeption (message)
{
    this.name = "UserExeption";
    this.message = message;
}

try 
{
    // Закоментарено варіанти, які викидають помилку. 
    // Пробувати по одному варіанту
    // 
    // calcRectangleArea(2, "abc");
    // calcRectangleArea(2, -3);
    calcRectangleArea(2, 3);
}

catch (err)
{
    console.log(err.name);
    console.log(err.message);
}

// Task 2. 
// Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і 
// генерувати в модальному вікні помилки у випадку, коли: 
// 	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
// 	- нечислове значення
// 	- вік юзера менше 14 років. 
// В іншому разі юзер отримує доступ до перегляду фільму.
// В блокові catch передбачити виведення назви і опису помилки.

function checkAge()
{
    let age = prompt("Введіть свій вік");       //Запит на ввід age. Отримуємо в age string
    let numOfAge = Number(age);                 //Пробуємо привести string до number

    switch(true)
    {
        case (age == "") : throw new UserExeption ("Ви не ввели жодного значення");
        case (isNaN(numOfAge)): throw new UserExeption ("Ви ввели нечислове значення");
        case (numOfAge < 14) : throw new UserExeption ("Ви занадто юні");
    }

    let accessAllowed = true;
    alert ("Acees allowed");
    return accessAllowed;
}

function UserExeption (message)
{
    this.name = "UserExeption";
    this.message = message;
}

try 
{
    checkAge()
}
catch (err)
{
    alert("Виникла помилка: "+err.name+". "+err.message);
}

// Task 3. 
// Створіть клас MonthException, 
// конструктор якого приймає параметр message 
// і ініціалізує поле name значенням 'MonthException'.
// 
// Реалізуйте функцію showMonthName(month), 
// в якій параметр month – це порядковий номер місяця в році. 
// Функція повертає назву місяця відповідно до введеного номера місяця. 
// У випадку некоректного вводу кидається ексепшн 
// у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.

// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
	
// Приклад роботи програми:
// > console.log(showMonthName(5)); 
// May
// > console.log(showMonthName(14)); 
// MonthException Incorrect month number


class MonthException {

    constructor(message) {
        this.name = "MonthException: ";
        this.message = message;
    }
}
 
function showMonthName(month) {
    month = month - 1;                  // Вводимо корекцію для суміщення індексів масиву 
                                        // з назвами місяців (1 = January, 12 = December)
    
    const months = ["January","February","March",
                    "April","May","June",
                    "July", "August","September",
                    "October","November","December"];
    
    if (months[month]) {
        return months[month];
    } else {
            throw "Incorrect month number"; //Прокидаємо помилку
            }
}
  
  try { console.log(showMonthName(5));      //Пробуємо використати функцію showMonthName()
        console.log(showMonthName(14));
  }
  catch (e) {                               //Перехоплюємо помилку
    const Err = new MonthException(e);      //Генеруємо об'єкт
    console.log(Err.name+" "+Err.message)   //Виводимо властивості згенерованого об'єкта
  }

  
// Task 4. 
// Реалізуйте функцію showUser(id), 
// яка приймає параметром користувацьке id 
// і повертає об’єкт, який містить значення переданої id. 
// Також функція викидає помилку у разі якщо введено від’ємне id.
	
// Реалізуйте функцію showUsers(ids), 
// яка приймає параметром масив користувацьких айді ids, 
// перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, 
// в разі виключної ситуації виводить повідомлення про помилку. 
// Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

// 	Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]

function showUser(id) 
{
    if (id >= 0)
    {
    return {id}  // Тут return {id} це те саме, що return {id:id}. JS приймає такі скорочені записи
    } 
    else {throw new Error ("Error: ID must not be negative: "+id)};    
}
// Код для перевірки роботи самої функції showUser(id)
// 
// let id = +prompt("Inpit ID: ");
// try
// {
// id = showUser(id);
// console.log(id);
// }
// catch (err)
// {
//     console.log(err.message);
// }


function showUsers(ids)
{
    let arr = [];                                   //Оголошуємо порожній масив
    for (let i = 0; i < ids.length; i++)            //Перебираємо елементи вхідного масиву
    {
        try 
        {
            arr.push(showUser(ids[i]));             //Добавляємо в кінець нового масиву прийнятне значення
        }
        catch (err)
        {
            console.log(err.message)                //Виводимо помилку про неприйнятні значення
        }
    }    
    
    console.log(arr);
    return arr;
}

showUsers([7, -12, 44, 22]);

