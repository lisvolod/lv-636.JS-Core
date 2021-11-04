let currentDate = new Date();
//експортуємо виведення дати
module.exports.date = currentDate;

//експортуємо функцію привітання
module.exports.showMessage = function(name){
    let hour = currentDate.getHours();
    if(hour > 16)
        return "Добрий вечір, " + name;
    else if(hour > 10)
        return "Добрий день, " + name;
    else if(hour > 5)
        return "Добрий ранок, " + name;
    else
        return "Доброї ночі, " + name;
}