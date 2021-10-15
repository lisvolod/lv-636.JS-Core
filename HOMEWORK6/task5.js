function changeCSS(){
    document.getElementsByTagName("h1")[0].style.backgroundColor = "lightgreen";

    let elemP = document.querySelectorAll("#myDiv p");
    elemP[0].style.fontWeight = "bold";
    elemP[1].style.color = "red";
    elemP[2].style.textDecoration = "underline";
    elemP[3].style.fontStyle = "italic";
    
    let elemLi = document.querySelectorAll("#myList li");
        elemLi.forEach(element => {
            element.style.display = "inline";
        });
    
    document.getElementsByTagName("span")[0].style.display = "none";
    
    
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "inline-block";
}

function reloadWindow(){
    location.reload();
    return false;
}

