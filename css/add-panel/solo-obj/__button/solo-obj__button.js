function addSavePsychube(name, path, rar) {
    var panel = document.getElementsByClassName("object-panel").item(0);

    panel.innerHTML += '<div class=\"object\"> \
        <div class=\"object__head ' + rar + '\"> \
            <img src=\"' + path + '\" alt=\"' + name + 'Icon\"> \
            <text>' + name + '</text> \
            <button class=\"object__button\" onclick=\"redactPsych(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\')\"> \
                <img src=\"/web/resources/elements/pencil.png\" alt=\"Redact\"> \
            </button> \
            <button class=\"object__button\" onclick=\"deleteObj(this)\"> \
                <img src=\"/web/resources/elements/delete.png\" alt=\"Remove\"> \
            </button> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Level:</text> \
            <a>0</a> \
            <img src=\"/web/resources/elements/arrow-right.png\" alt=\"->\"> \
            <a>0</a> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Ascent:</text> \
            <a>0</a> \
            <img src=\"/web/resources/elements/arrow-right.png\" alt=\"->\"> \
            <a>0</a> \
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
    var panel = document.getElementsByClassName("object-panel").item(0);

    panel.innerHTML += '<div class=\"object\"> \
        <div class=\"object__head ' + rar + '\"> \
            <img src=\"' + path + '\" alt=\"' + name + 'Icon\"> \
            <text>' + name + '</text> \
            <button class=\"object__button\" onclick=\"redactChar(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\')\"> \
                <img src=\"/web/resources/elements/pencil.png\" alt=\"Redact\"> \
            </button> \
            <button class=\"object__button\" onclick=\"deleteObj(this)\"> \
                <img src=\"/web/resources/elements/delete.png\" alt=\"Remove\"> \
            </button> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Level:</text> \
            <a>0</a> \
            <img src=\"/web/resources/elements/arrow-right.png\" alt=\"->\"> \
            <a>0</a> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Insight:</text> \
            <a>0</a> \
            <img src=\"/web/resources/elements/arrow-right.png\" alt=\"->\"> \
            <a>0</a> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Resonate:</text> \
            <a>0</a> \
            <img src="/web/resources/elements/arrow-right.png\" alt=\"->\"> \
            <a>0</a> \
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