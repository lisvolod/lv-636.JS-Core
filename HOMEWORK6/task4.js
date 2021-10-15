function startAlerts() {
    let elem = document.querySelectorAll("#list li");
    
    alert(elem[0].textContent);
    alert(elem[4].textContent);
    alert(elem[1].textContent);
    alert(elem[3].textContent);
    alert(elem[2].textContent);    
}

function startAlerts2() {
    let elem = document.getElementById("list");
    
    alert(elem.children[0].textContent);
    alert(elem.children[4].textContent);
    alert(elem.children[1].textContent);
    alert(elem.children[3].textContent);
    alert(elem.children[2].textContent);
}

