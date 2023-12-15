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
        try{
            await fetch('https://my-json-server.typicode.com/GarnetAki/web/Characters')
                .then((response) => {
                    if (response.status >= 400 && response.status < 600) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                })
                .then((data) => {
                    chars = data;
                });
        }catch(e){
            panel.innerHTML = panel.innerHTML.replace("<div class=\"add-panel__preloader\"><div></div></div>", "");
            panel.innerHTML += "<text class=\"error\">Bad response from server</text>"
            return
        }
    
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
        try{
            await fetch('https://my-json-server.typicode.com/GarnetAki/web/Psychubes')
                .then((response) => {
                    if (response.status >= 400 && response.status < 600) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                })
                .then((data) => {
                    psychs = data;
                });
        }catch(e){
            panel.innerHTML = panel.innerHTML.replace("<div class=\"add-panel__preloader\"><div></div></div>", "");
            panel.innerHTML += "<text class=\"error\">Bad response from server</text>"
            return
        }
    
        panel.innerHTML = panel.innerHTML.replace("<div class=\"add-panel__preloader\"><div></div></div>", "");
        
        for (var psych in psychs) {
            panel.innerHTML += '<div class=\"add-panel__character\" onclick=\"soloPsyhc(this)\"><img src=\"' 
            + psychs[psych]["icon_path"] + '">' + psychs[psych]["name"] + '</div>';
        }
    }
}

async function addMaterials(e) {
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
        panel.innerHTML += "<button class=\"add-panel__button\" onclick=\"addOk(this)\">SAVE</button><button class=\"add-panel__button\" onclick=\"addCancel(this)\">CANCEL</button>";

        panel.innerHTML += "<div class=\"add-panel__preloader\"><div></div></div>";

        var materials;
        try{
            await fetch('https://my-json-server.typicode.com/GarnetAki/web/Materials')
                .then((response) => {
                    if (response.status >= 400 && response.status < 600) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                })
                .then((data) => {
                    materials = data;
                });
        }catch(e){
            panel.innerHTML = panel.innerHTML.replace("<div class=\"add-panel__preloader\"><div></div></div>", "");
            panel.innerHTML += "<text class=\"error\">Bad response from server</text>"
            return
        }
        
        panel.innerHTML = panel.innerHTML.replace("<div class=\"add-panel__preloader\"><div></div></div>", "");
        
        for (var material in materials) {
            panel.innerHTML += '<div class=\"add-panel__material\"> \
                    <img src=\"' + materials[material]["icon_path"] + '\"> \
                    <input inputmode="numeric" min="0" value="0"> \
                </div>'
        }
    }
}