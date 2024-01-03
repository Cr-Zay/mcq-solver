function OnBackSpace(){
    var line = document.getElementById("progress");
    if(line.textContent.length > 5)
    {
        line.textContent = line.textContent.substring(0, line.textContent.length-2);
    }
}

function OnOption(a){
    var line = document.getElementById("progress");
    line.textContent += a; 
}