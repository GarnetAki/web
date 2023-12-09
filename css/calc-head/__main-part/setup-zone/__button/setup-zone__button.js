function addChar(e) {
    var buttons = document.getElementsByClassName("setup-zone").item(0);

    for (child of buttons.children) {
        if (child.classList.contains("pressed"))
            child.classList.remove("pressed");
    }

    e.classList.toggle("pressed");

    var panel = document.getElementById("add");
    panel.innerHTML = '';
    
    panel.style.display = "inline-flex";
    panel.innerHTML += "<button class=\"add-panel__button__close\" onclick=\"addClose(this)\"><img src=\"/web/resources/elements/cancel.png\"></button>";
    panel.innerHTML += "<div class=\"add-panel__search\"><button><img src=\"/web/resources/elements/search.png\"></button><input type=\"text\" placeholder=\"Search\"></div>";
}

function addPsychube(e) {
    var buttons = document.getElementsByClassName("setup-zone").item(0);

    for (child of buttons.children) {
        if (child.classList.contains("pressed"))
            child.classList.remove("pressed");
    }

    e.classList.toggle("pressed");

    var panel = document.getElementById("add");
    panel.innerHTML = '';
    
    panel.style.display = "inline-flex";
    panel.innerHTML += "<button class=\"add-panel__button__close\" onclick=\"addClose(this)\"><img src=\"/web/resources/elements/cancel.png\"></button>";
    panel.innerHTML += "<div class=\"add-panel__search\"><button><img src=\"/web/resources/elements/search.png\"></button><input type=\"text\" placeholder=\"Search\"></div>";
}

function addMaterials(e) {
    var buttons = document.getElementsByClassName("setup-zone").item(0);

    for (child of buttons.children) {
        if (child.classList.contains("pressed"))
            child.classList.remove("pressed");
    }
    
    e.classList.toggle("pressed");

    var panel = document.getElementById("add");
    panel.innerHTML = '';
    
    panel.style.display = "inline-flex";
    panel.innerHTML += "<button class=\"add-panel__button__close\" onclick=\"addClose(this)\"><img src=\"/web/resources/elements/cancel.png\"></button>";
    panel.innerHTML += "<button class=\"add-panel__button\" onclick=\"addOk(this)\">SAVE</button><button class=\"add-panel__button\" onclick=\"addCancel(this)\">CANCEL</button>";
}