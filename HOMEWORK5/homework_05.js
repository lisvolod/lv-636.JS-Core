// Task 1. 
// Напишіть функцію propsCount(currentObject), 
// яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
// Наприклад для об’єкта
// let mentor = { 
//             course: "JS fundamental", 
//             duration: 3,
//             direction: "web-development" 
//         };
// Результат має бути 3.
// propsCount(mentor);  // 3

const mentor = {
                course: "JS fundamental",
                duration: 3,
                direction: "web-development"
            }

function propsCount(obj) 
{
    let arr = Object.keys(obj);
    return arr.length;
}

propsCount(mentor);

// Task 2. 
// Створіть довільний об’єкт, який має 5 полів. 
// Необхідно написати функцію showProps(obj), 
// яка приймає даний об’єкт і виводить список його властивостей записаних в масив. 
// Виведіть також масив значень властивостей об’єкта.

const user = {                  //Створюємо об'єкт
    userFirstName: "John",
    userLastName: "Smith",
    age: 33,
    isAdmin: true,
    position: "web-developer"
} 

function showProps(obj) {       // Функція виводу назв властивостей об'єкта
    const arr = Object.keys(obj);
    return arr;
}

function showValues(obj) {      // Функція виводу значень властивостей об'єкта
    const arr = Object.values(obj);
    return arr;
}
console.log(showProps(user));

console.log(showValues(user));


// Task 3. 
// Створіть клас Person, в якого конструктор приймає параметри name і surname, 
// а також міститься метод showFullName(), який виводить ім’я і прізвище особи. 

// Від класу Person наслідується клас Student, конструктор якого крім name і surname, 
// приймає параметр year (рік вступу до університету). 
	
// В класі Student необхідно перевизначити метод showFullName(midleName), 
// щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента. 
	
// Також в класі Student необхідно реалізувати метод showCourse(), 
// який виводитиме поточний курс студента (від 1 до 6). 
// Значення курсу визначатиметься як різниця поточного року (визначити самостійно) 
// і року вступу до ВУЗу year.
	
// Приклад результату:
// const stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 6

class Person {

    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return this.surname + " " + this.name; 
    }
}

class Student extends Person {
    
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName) {
        this.midleName = midleName;
        return this.surname + " " + this.name + " "+this.midleName; 
    }

    showCourse(){
        let today = new Date();
        let course = today.getFullYear() - this.year;
        return course;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); 
console.log("Current course: " + stud1.showCourse()); 

// Task 4. 
// Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: 
// fullName (ім’я і прізвище), dayRate (ставка за день роботи), 
// workingDays (кількість відпрацьованих днів). 

// 1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. 
// Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 

// 2) додати приватне поле experience і присвоїти йому значення 1.2 
// і використовувати його як додатковий множник 
// при визначенні зарплати – створити метод showSalaryWithExperience(). 
// Вивести значення зарплати з цим коефіцієнтом.

// 3) додати гетери і сетери для поля experience. 
// Встановити значення experience = 1.5 і вивести його на екран.

// 4) Вивести значення зарплати з новим experience.

// 5) Створити кілька екземплярів класу (працівників) 
// з різними зарплатами, як показано в прикладі нижче. 
// Посортувати зарплату працівників із найбільшим experience 
// по зростанню і вивести результат в форматі:   worker_fullName: salary_value 

class Worker {

    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary(){
        return this.dayRate * this.workingDays;
    }

    #experience = 1.2;

    showSalaryWithExperience(){
        return this.showSalary() * this.#experience;
    }

    get showExp () {
        return this.#experience;
    }

    set setExp (value) {
        this.#experience = value;
    }
    // salary = this.showSalaryWithExperience();
}

//Якщо розкоментувати, то можна побачити, що все працює

// const worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);                 
// console.log("Start salary "+worker1.showSalary());
// console.log("Start experience: " + worker1.showExp);
// console.log("Salary including start experience: "+worker1.showSalaryWithExperience());
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// console.log("Salary including new experience: "+worker1.showSalaryWithExperience());

// const worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);                 
// console.log("Start salary "+worker2.showSalary());
// console.log("Start experience: " + worker2.showExp);
// console.log("Salary including start experience: "+worker2.showSalaryWithExperience());
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// console.log("Salary including new experience: "+worker2.showSalaryWithExperience());

// const worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);                 
// console.log("Start salary "+worker3.showSalary());
// console.log("Start experience: " + worker3.showExp);
// console.log("Salary including start experience: "+worker3.showSalaryWithExperience());
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showExp);
// console.log("Salary including new experience: "+worker3.showSalaryWithExperience());


// Створюємо о'бкти класу Worker і приpначаємо їх полю #experience нові значення

const worker1 = new Worker("John Johnson", 20, 23);
worker1.setExp = 1.5;

const worker2 = new Worker("Tom Tomson", 48, 22);
worker2.setExp = 1.5;

const worker3 = new Worker("Andy Ander", 29, 23);
worker3.setExp = 1.5;


// Створюємо нове поле salary в кожному о'бєкті, щоб посортувати їх по цьому полю 
// (наразі існує тільки метод showSalaryWithExperience())
worker1.salary = worker1.showSalaryWithExperience();
worker2.salary = worker2.showSalaryWithExperience();
worker3.salary = worker3.showSalaryWithExperience();

// console.log(worker1);
// console.log(worker2);
// console.log(worker3);

//Збираємо всі створені об'єкти в масив
let workers = [worker1, worker2, worker3];

// Виводимо певні поля несортованого масиву
console.log("******************** Unsorted salaries *****************");
workers.forEach(worker => console.log(worker.fullName+": "+worker.salary));

// Пишемо  [compareFunction] для методу arr.sort([compareFunction]),
// тобто в даному випадку для сортування масиву обє'ктів по прийнятому полю field об'єкта
// Вимоги до структури функції [compareFunction] опитано тут: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Стрілочні функції (скорочений запис функцій) описані тут: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions
function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }

//Сортуємо масив об'єкті по полю salary
workers.sort(byField('salary'));

//Виводимо певні поля посортованого масиву
console.log("******************** Sorted salaries *****************");
workers.forEach(worker => console.log(worker.fullName+": "+worker.salary));

console.log(workers);

// Task 5. 
// Створіть батьківський клас GeometricFigure, 
// який має порожній метод для визначення площі getArea() 
// та метод toString() для виведення назви класу.
// Створіть 3 класи нащадки Triangle, Square і Circle, 
// які наслідуються від класу GeometricFigure. 
// Кожен з дочірніх класів має свою реалізацію методу getArea(), 
// для визначення площі фігури. В конструкторах дочірніх класів 
// передбачити властивості необхідні для визначення площі фігури, 
// наприклад для кола - радіус r.

// Створіть зовнішню функцію handleFigures(figures), 
// яка прийматиме масив об’єктів дочірніх класів figures, 
// перевірятиме чи об’єкт належить батьківському класу з урахуванням наслідування, 
// виводитиме назву створеного об’єкту відповідної фігури, 
// розраховану площу фігури 
// та сумарну площу всіх фігур. 
// Для реалізації функції можете використати метод reduce().

class GeometricFigure {
    
    getArea() {
    return 0;
    }

    toString() {
    return Object.getPrototypeOf(this).constructor.name;
    }
}

// const figure = new GeometricFigure();
// console.log(figure.toString());

class Triangle extends GeometricFigure{
    
    constructor (firstSideLenght, secondSideLenght, thirdSideLenght){
        super();
        this.a = firstSideLenght;
        this.b = secondSideLenght;
        this.c = thirdSideLenght;
    }

    getArea() {
        let p = (this.a + this.b + this.c) / 2;
        let s = (p*(p-this.a)*(p-this.b)*(p-this.c))**(1/2);
        return s;
    }
}

class Square extends GeometricFigure {

    constructor(firstSideLenght, secondSideLenght) {
        super();
        this.a = firstSideLenght;
        this.b = secondSideLenght;
    }
    
    getArea() {
        let s = this.a * this.b;
        return s;
    }
}

class Circle extends GeometricFigure {

    constructor(radius){
        super();
        this.r = radius; 
    }

    getArea() {
        let s = Math.PI*this.r*this.r;
        return s;
    }
}

// Створюємо кілька об'єктів
const figure1 = new Triangle (5, 6, 7);
const figure2 = new Square (5, 6);
const figure3 = new Circle (5);

// Поміщаємо їх в масив

const arr = [figure1, figure2, figure3];

// console.log(figure1.toString(), figure1.getArea());
// console.log(figure2.toString(), figure2.getArea());
// console.log(figure3.toString(), figure3.getArea());

function handleFigures(figures) {
    figures.forEach (figure => {if (figure instanceof  GeometricFigure) 
                                    {
                                        console.log("Geometric figure: "+figure.toString()+" - area: "+figure.getArea());
                                    } else
                                    {
                                        console.log("An Object "+figure.toString()+" isn't instanse of "+GeometricFigure.toString());
                                    }
                                }
                    );
    console.log("Total area: "+figures.reduce ((accumulator, currentValue) => accumulator + currentValue.getArea(),initialValue = 0));
}
// array.reduce(callback[, initialValue])
// Метод reduce() виконує функцію callback один раз для кожного елемента, присутнього в масиві, 
// за винятком пустот, приймаючи чотири аргументи: 
// - початкове значення (або значення від попереднього виклику callback), 
// - значення поточного елемента, 
// - поточний індекс, 
// - масив, за яким відбувається ітерація.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

handleFigures(arr);