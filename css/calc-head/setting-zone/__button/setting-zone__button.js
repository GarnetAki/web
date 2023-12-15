!function () {
    document.addEventListener("DOMContentLoaded", addKeysCalc);
}();

function addKeysCalc(){
    key('c', function(){
        addChar(document.getElementById("add-char-btn"));
    });
    key('p', function(){
        addPsychube(document.getElementById("add-psych-btn"));
    });
    key('i', function(){
        addMaterials(document.getElementById("add-inv-btn"));
    });
    key('escape', function(){
        addClose(this);
    });
}

function clearAll(e) {
    var panel = document.getElementsByClassName("object-panel").item(0);
    panel.innerHTML = ''
}