function changeByID() {
    document.getElementById("test").innerHTML = "Last. Changed by ID";
}

function changeByTagName(){
    document.getElementsByTagName("div")[0].innerHTML = "Last. Changed by Tag Name";
}