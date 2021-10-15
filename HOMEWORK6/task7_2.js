function createNewBody(){
    let aNewBodyElement = document.createElement("body");
            aNewBodyElement.id = "newBodyElement";
            document.body = aNewBodyElement;
}

function createMainElenent(){
    let elem = document.createElement("main");
    elem.className = "mainClass check item";
    document.getElementById("newBodyElement").appendChild(elem);
}

function createDivElement(){
    let elem = document.createElement("div");
    elem.id = "myDiv";
    document.getElementsByClassName("mainClass check item")[0].appendChild(elem);
}

function createPElenent(){
    let elem = document.createElement("p");
    elem.innerHTML = "First paragraph";
    document.getElementById("myDiv").appendChild(elem);
}

function removeOldBody() {
    let elem = document.getElementsByTagName("body")[1];
    elem.setAttribute("id", "oldbody")
    // elem.parentNode.removeChild(elem);
    // }
}


