function inputText(){
    document.getElementById("input1").value = prompt("Ввдеть текст для першого поля","");
    document.getElementById("input2").value = prompt("Ввдеть текст для другого поля","");
}
function cangeText(){
    let elem = document.getElementsByClassName("textfield");
    if (elem[0].id == "input1") {
        document.body.prepend(document.getElementById("input2"));
        document.getElementById("btn2").setAttribute("value", "Поміняти ще раз"); 
    } else {
        document.body.prepend(document.getElementById("input1"));
         
    }
}