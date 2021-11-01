// ************ Task 1 ************************

function upperCase(opt) {
    let regEx = /^[A-Z]/
    if (regEx.test(opt)) {
        console.log("String's starts with uppercase character")
    } else console.log("String isn't starts with uppercase character")
}
upperCase("regexp")
upperCase("RegExp")

// ************ Task 2 ************************

function checkEmail(email){
// let regEx = /^[A-Za-z0-9_]+@[A-Za-z0-9_]+\.[A-Za-z0-9_]{2,4}/
let regEx = /[-\.\w]+@([\w-]+\.)\w{2,4}/
if (regEx.test(email)) {
    return true
} else return false
}

checkEmail("Qmail2@gmail.com")

// ************ Task 3 ************************
let str = "cdbBdbsbz"
let rExp = /d(b+)(d)/ig
let arr = rExp.exec(str)
console.log(arr)

// ************ Task 4 ************************
let re1 = /\s/
let srt = "Java Script"
let arr = srt.split(re1)
arr.reverse()
str = arr.join(', ')
console.log(str)

// ************ Task 5 ************************

// Пишемо функцію для валідації карт Visa та MasterCars

// Усі номери карток Visa починаються з 4.
// Нові картки мають 16 цифр. Старі картки мають 13.

// Номери MasterCard починаються з чисел від 51 до 55 
// або з чисел від 2221 до 2720. Усі мають 16 цифр.


function validateCard(str) {
    let regexp = /\D/g                      //Вибираємо з стрічки всі НЕцифри
    str = str.replace(regexp,'')            //Витираємо їх
   
    let rExpForVisa = /^4[0-9]{12}(?:[0-9]{3})/
    let rExpForMasterCars = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}/
    if (rExpForVisa.test(str) && (str.length == 16 || str.length == 13)) {
        console.log(`Your card ${str} is Visa`)
        return true
    } else if (rExpForMasterCars.test(str) && str.length == 16) {
        console.log(`Your card ${str} is MasterCard`)
        return true
    } else {
        console.log (`Your card ${str} is neither Visa nor MasterCard`)
        return false
    }
}

validateCard("4356 7777 8888 9999")
// validateCard("5168-7777-8888-9999")
// validateCard("9999-9999-8888-9999")

// ************ Task 6 ************************
function checkEmail(email){
    let regEx = /^[A-Za-z0-9]+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
        
    if (regEx.test(email)) {
        console.log("Email is correct!")
        return true
    } else {
        console.log("Email is not correct!")
        return false}
    }

checkEmail('my_mail@gmail.com')
// checkEmail('#my_mail@gmail.com')
// checkEmail('my_ma-il@gmail.com')
// checkEmail('my_ma--il@gmail.com');

// ************ Task 7 ************************

function checkLogin (str){
    const rExp1 = /(\d+\.\d+)|(\d+)/g     // Вибираємо числа 
    
    const rExp2 = /^[A-Za-z]{1}[0-9A-Za-z\.]{1,9}$/
    
    const result = rExp2.test(str)
    
    console.log(`For login ${str} was found numbers: ${str.match(rExp1).join(", ")}. Result is "${result}"`)
}
checkLogin("ee1.1ret3");
checkLogin("ee1*1ret3");
checkLogin("2e1.1ret3");
