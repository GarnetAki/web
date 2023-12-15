function addSavePsychube(name, path, rar) {
    var ascTo = document.getElementById(name + 'AscTo').value;
    var ascFrom = document.getElementById(name + 'AscFrom').value;
    var lvlTo = document.getElementById(name + 'LvlTo').value;
    var lvlFrom = document.getElementById(name + 'LvlFrom').value;
    var panel = document.getElementsByClassName("object-panel").item(0);

    try{
        if (!validatePsychValues(lvlFrom, lvlTo, ascFrom, ascTo)){
            throw new Error("Incorrect parameters");
        }
    }catch(e){
        UIkit.notification({message: 'Wrong parameters', status: 'danger' ,timeout: 5000})
        return
    }
    
    try{
        for (var child in panel.childNodes){
            if (child > 0){
                if (panel.childNodes[child].classList.contains("object")){
                    if (panel.childNodes[child].childNodes.item(1).textContent.includes(name))
                        throw new Error("Already exists");
                }
            }
        }
    }catch(e){
        UIkit.notification({message: 'Psychube already exists', status: 'danger' ,timeout: 5000})
        return
    }

    panel.innerHTML += '<div class=\"object\"> \
        <div class=\"object__head ' + rar + '\"> \
            <img src=\"' + path + '\" alt=\"' + name + 'Icon\"> \
            <text>' + name + '</text> \
            <button class=\"object__button\" onclick=\"redactPsych(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\' \
            , ' + document.getElementById(name + 'LvlFrom').value + ', ' + document.getElementById(name + 'LvlTo').value + ', \
            '+ document.getElementById(name + 'AscFrom').value + ', ' + document.getElementById(name + 'AscTo').value + ')\"> \
                <img src=\"/web/resources/elements/pencil.png\" alt=\"Redact\"> \
            </button> \
            <button class=\"object__button\" onclick=\"deleteObj(this)\"> \
                <img src=\"/web/resources/elements/delete.png\" alt=\"Remove\"> \
            </button> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Level:</text> \
            <a>' + lvlFrom + '</a> \
            <img src=\"/web/resources/elements/arrow-right.png\" alt=\"->\"> \
            <a>' + lvlTo + '</a> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Ascent:</text> \
            <a>' + ascFrom + '</a> \
            <img src=\"/web/resources/elements/arrow-right.png\" alt=\"->\"> \
            <a>' + ascTo + '</a> \
        </div> \
        <div class=\"object__bot\"> \
        </div> \
    </div>'

    var buttons = document.getElementsByClassName("setup-zone").item(0);

    for (child of buttons.children) {
        if (child.classList.contains("pressed"))
            child.classList.remove("pressed");
    }

    var panel = document.getElementById("add");
    panel.innerHTML = '';
    panel.style.display = "none";
}

function addSaveChar(name, path, rar) {
    var resTo = document.getElementById(name + 'ResTo').value;
    var resFrom = document.getElementById(name + 'ResFrom').value;
    var lvlTo = document.getElementById(name + 'LvlTo').value;
    var lvlFrom = document.getElementById(name + 'LvlFrom').value;
    var insTo = document.getElementById(name + 'InsTo').value;
    var insFrom = document.getElementById(name + 'InsFrom').value;
    var panel = document.getElementsByClassName("object-panel").item(0);

    try{       
        if (!validateCharValues(lvlFrom, lvlTo, insFrom, insTo, resFrom, resTo)){
            throw new Error("Incorrect parameters");
        }
    }catch(e){
        UIkit.notification({message: 'Wrong parameters', status: 'danger' ,timeout: 5000})
        return
    }

    try{
        for (var child in panel.childNodes){
            if (child > 0){
                if (panel.childNodes[child].classList.contains("object")){
                    if (panel.childNodes[child].childNodes.item(1).textContent.includes(name))
                        throw new Error("Already exists");
                }
            }
        }
    }catch(e){
        UIkit.notification({message: 'Character already exists', status: 'danger' ,timeout: 5000})
        return
    }

    panel.innerHTML += '<div class=\"object\"> \
        <div class=\"object__head ' + rar + '\"> \
            <img src=\"' + path + '\" alt=\"' + name + 'Icon\"> \
            <text>' + name + '</text> \
            <button class=\"object__button\" onclick=\"redactChar(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\' \
            , ' + document.getElementById(name + 'LvlFrom').value + ', ' + document.getElementById(name + 'LvlTo').value + ', \
            ' + document.getElementById(name + 'InsFrom').value + ', ' + document.getElementById(name + 'InsTo').value + ', \
            ' + document.getElementById(name + 'ResFrom').value + ', ' + document.getElementById(name + 'ResTo').value + ')\"> \
                <img src=\"/web/resources/elements/pencil.png\" alt=\"Redact\"> \
            </button> \
            <button class=\"object__button\" onclick=\"deleteObj(this)\"> \
                <img src=\"/web/resources/elements/delete.png\" alt=\"Remove\"> \
            </button> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Level:</text> \
            <a>' + lvlFrom + '</a> \
            <img src=\"/web/resources/elements/arrow-right.png\" alt=\"->\"> \
            <a>' + lvlTo + '</a> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Insight:</text> \
            <a>' + insFrom + '</a> \
            <img src=\"/web/resources/elements/arrow-right.png\" alt=\"->\"> \
            <a>' + insTo + '</a> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Resonate:</text> \
            <a>' + resFrom + '</a> \
            <img src="/web/resources/elements/arrow-right.png\" alt=\"->\"> \
            <a>' + resTo + '</a> \
        </div> \
        <div class=\"object__bot\"> \
        </div> \
    </div>'

    var buttons = document.getElementsByClassName("setup-zone").item(0);

    for (child of buttons.children) {
        if (child.classList.contains("pressed"))
            child.classList.remove("pressed");
    }

    var panel = document.getElementById("add");
    panel.innerHTML = '';
    panel.style.display = "none";
}