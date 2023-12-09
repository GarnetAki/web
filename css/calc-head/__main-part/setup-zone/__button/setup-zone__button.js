async function addChar(e) {
    if (!e.classList.contains("pressed")){
        var buttons = document.getElementsByClassName("setup-zone").item(0);
    
        for (var child of buttons.children) {
            if (child.classList.contains("pressed"))
                child.classList.remove("pressed");
        }
    
        e.classList.toggle("pressed");

        var panel = document.getElementById("add");
        panel.innerHTML = '';
        
        panel.style.display = "inline-flex";
        panel.innerHTML += "<button class=\"add-panel__button__close\" onclick=\"addClose(this)\"><img src=\"resources/elements/cancel.png\"></button>";
        panel.innerHTML += "<div class=\"add-panel__search\"><button><img src=\"resources/elements/search.png\"></button><input type=\"text\" placeholder=\"Search\"></div>";
    
        panel.innerHTML += "<div class=\"add-panel__preloader\"><div></div></div>";
        var chars;
        await fetch('https://my-json-server.typicode.com/GarnetAki/web/Characters')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                chars = data;
            });
    
        panel.innerHTML = panel.innerHTML.replace("<div class=\"add-panel__preloader\"><div></div></div>", "");
        
        for (var char in chars) {
            panel.innerHTML += '<div class=\"add-panel__character\" onclick=\"soloChar(this)\"><img src=\"' 
            + chars[char]["icon_path"] + '">' + chars[char]["name"] + '</div>';
        }
    }
}

async function addPsychube(e) {
    if (!e.classList.contains("pressed")){
        var buttons = document.getElementsByClassName("setup-zone").item(0);

        for (var child of buttons.children) {
            if (child.classList.contains("pressed"))
                child.classList.remove("pressed");
        }
    
        e.classList.toggle("pressed");
    
        var panel = document.getElementById("add");
        panel.innerHTML = '';
        
        panel.style.display = "inline-flex";
        panel.innerHTML += "<button class=\"add-panel__button__close\" onclick=\"addClose(this)\"><img src=\"resources/elements/cancel.png\"></button>";
        panel.innerHTML += "<div class=\"add-panel__search\"><button><img src=\"resources/elements/search.png\"></button><input type=\"text\" placeholder=\"Search\"></div>";
    
        panel.innerHTML += "<div class=\"add-panel__preloader\"><div></div></div>";
        var psychs;
        await fetch('https://my-json-server.typicode.com/GarnetAki/web/Psychubes')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                psychs = data;
            });
    
        panel.innerHTML = panel.innerHTML.replace("<div class=\"add-panel__preloader\"><div></div></div>", "");
        
        for (var psych in psychs) {
            panel.innerHTML += '<div class=\"add-panel__character\" onclick=\"soloPsyhc(this)\"><img src=\"' 
            + psychs[psych]["icon_path"] + '">' + psychs[psych]["name"] + '</div>';
        }
    }
}

function addMaterials(e) {
    var buttons = document.getElementsByClassName("setup-zone").item(0);

    for (var child of buttons.children) {
        if (child.classList.contains("pressed"))
            child.classList.remove("pressed");
    }
    
    e.classList.toggle("pressed");

    var panel = document.getElementById("add");
    panel.innerHTML = '';
    
    panel.style.display = "inline-flex";
    panel.innerHTML += "<button class=\"add-panel__button\" onclick=\"addOk(this)\">SAVE</button><button class=\"add-panel__button\" onclick=\"addCancel(this)\">CANCEL</button>";

    panel.innerHTML += "<div class=\"add-panel__preloader\"><div></div></div>";
}