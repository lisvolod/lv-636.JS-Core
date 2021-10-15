function doSelect() {
    let elem = document.querySelectorAll("#text p");
    
    let count = 0;
    elem.forEach((element) => {
        let nElem = document.createElement("p");
        nElem.innerHTML = "Selector text "+count+ ": "+element.textContent;
        count++;
        document.body.appendChild(nElem);
    });
}

