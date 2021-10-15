function changePicture() {
    let triger = document.getElementsByClassName("image")[0].getAttribute('triger');
    if (triger == "dog") {
        document.getElementsByClassName("image")[0].src = "cat.jpg";
        document.getElementsByClassName("image")[0].setAttribute("triger", "cat");
        document.getElementsByClassName("btn")[0].setAttribute("value", "Змінити картинку на собаку");
    } else if (triger == "cat") {
        document.getElementsByClassName("image")[0].src = "dog.jpg"
        document.getElementsByClassName("image")[0].setAttribute("triger", "dog");
        document.getElementsByClassName("btn")[0].setAttribute("value", "Змінити картинку на кота");
        }
}