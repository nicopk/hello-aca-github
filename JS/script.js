function togglebtn() {
    var msgElement = document.getElementById("msg");
    if (msgElement.innerHTML=="") {
        msgElement.innerHTML="ACA just taught me about continuous integration and continuous deployment.";}
    else{
        msgElement.innerHTML="";}
    }