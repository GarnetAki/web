async function soloChar(e){
    var panel = document.getElementById("add");
    panel.innerHTML = '';
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
        panel.innerHTML = "<text class=\"error\">Bad response from server</text>"
        return
    }

    panel.innerHTML = panel.innerHTML.replace("<div class=\"add-panel__preloader\"><div></div></div>", "");
    
    for (var char in chars) {
        if (chars[char]["name"] == e.textContent){
            var rar = "six_star";
            if (chars[char]["rarity"] == 2) rar = "two_star";
            if (chars[char]["rarity"] == 3) rar = "three_star";
            if (chars[char]["rarity"] == 4) rar = "four_star";
            if (chars[char]["rarity"] == 5) rar = "five_star";

            panel.innerHTML += 
            '<div class=\"solo-obj\">\
                <div class=\"solo-obj__head ' + rar + '\"> \
                    <img src=\"' + chars[char]["icon_path"] + '\" alt=\"' + chars[char]["name"] + 'Icon\"> \
                    <text>' + chars[char]["name"] + '</text> \
                    <button class="solo-obj__button" onclick=\"addSaveChar(\'' + chars[char]["name"] + '\', \'' + chars[char]["icon_path"] + '\', \'' + rar +  '\')\"> \
                        <img src=\"/web/resources/elements/ok.png" alt="Ok"> \
                    </button> \
                    <button class=\"solo-obj__button\" onclick=\"addClose(this)\"> \
                        <img src=\"/web/resources/elements/cancel.png\" alt="Cancel"> \
                    </button> \
                </div> \
                <div class=\"solo-obj__counter\"> \
                    <text>Level:</text> \
                    <button class=\"solo-obj__cnt-button\" onclick=\"cntMinus(this)\"> \
                        <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\" type=\"number\"> \
                    <button class="solo-obj__cnt-button" onclick=\"cntPlus(this)\"> \
                        <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                    <img src=\"/web/resources/elements/arrow-right.png\" alt=\"->\"> \
                    <button class=\"solo-obj__cnt-button\" onclick=\"cntMinus(this)\"> \
                        <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\" type=\"number\"> \
                    <button class=\"solo-obj__cnt-button\" onclick=\"cntPlus(this)\"> \
                        <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                </div> \
                <div class=\"solo-obj__counter\"> \
                    <text>Insight:</text> \
                    <button class=\"solo-obj__cnt-button\" onclick=\"cntMinus(this)\"> \
                        <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\" type=\"number\"> \
                    <button class="solo-obj__cnt-button" onclick=\"cntPlus(this)\"> \
                        <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                    <img src=\"/web/resources/elements/arrow-right.png\" alt=\"->\"> \
                    <button class=\"solo-obj__cnt-button\" onclick=\"cntMinus(this)\"> \
                        <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\" type=\"number\"> \
                    <button class=\"solo-obj__cnt-button\ onclick=\"cntPlus(this)\""> \
                        <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                </div> \
                <div class=\"solo-obj__counter\"> \
                    <text>Resonate:</text> \
                    <button class=\"solo-obj__cnt-button\" onclick=\"cntMinus(this)\"> \
                        <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\" type=\"number\"> \
                    <button class="solo-obj__cnt-button" onclick=\"cntPlus(this)\"> \
                        <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                    <img src=\"/web/resources/elements/arrow-right.png\" alt=\"->\"> \
                    <button class=\"solo-obj__cnt-button\" onclick=\"cntMinus(this)\"> \
                        <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\" type=\"number\"> \
                    <button class=\"solo-obj__cnt-button\" onclick=\"cntPlus(this)\"> \
                        <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                </div> \
            </div>'
        }
    }
}

async function soloPsyhc(e){
    var panel = document.getElementById("add");
    panel.innerHTML = '';
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
        panel.innerHTML = "<text class=\"error\">Bad response from server</text>"
        return
    }

    panel.innerHTML = panel.innerHTML.replace("<div class=\"add-panel__preloader\"><div></div></div>", "");
    
    for (var psych in psychs) {
        if (psychs[psych]["name"] == e.textContent){
            var rar = "six_star";
            if (psychs[psych]["rarity"] == 2) rar = "two_star";
            if (psychs[psych]["rarity"] == 3) rar = "three_star";
            if (psychs[psych]["rarity"] == 4) rar = "four_star";
            if (psychs[psych]["rarity"] == 5) rar = "five_star";

            panel.innerHTML += 
            '<div class=\"solo-obj\">\
                <div class=\"solo-obj__head ' + rar + '\"> \
                    <img src=\"' + psychs[psych]["icon_path"] + '\" alt=\"' + psychs[psych]["name"] + 'Icon\"> \
                    <text>' + psychs[psych]["name"] + '</text> \
                    <button class="solo-obj__button" onclick=\"addSavePsychube(\'' + psychs[psych]["name"] + '\', \'' + psychs[psych]["icon_path"] + '\', \'' + rar +  '\')\"> \
                        <img src=\"/web/resources/elements/ok.png" alt="Ok"> \
                    </button> \
                    <button class=\"solo-obj__button\" onclick=\"addClose(this)\"> \
                        <img src=\"/web/resources/elements/cancel.png\" alt="Cancel"> \
                    </button> \
                </div> \
                <div class=\"solo-obj__counter\"> \
                    <text>Level:</text> \
                    <button class=\"solo-obj__cnt-button\" onclick=\"cntMinus(this)\"> \
                        <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\" type=\"number\"> \
                    <button class="solo-obj__cnt-button" onclick=\"cntPlus(this)\"> \
                        <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                    <img src=\"/web/resources/elements/arrow-right.png\" alt=\"->\"> \
                    <button class=\"solo-obj__cnt-button\" onclick=\"cntMinus(this)\"> \
                        <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\" type=\"number\"> \
                    <button class=\"solo-obj__cnt-button\" onclick=\"cntPlus(this)\"> \
                        <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                </div> \
                <div class=\"solo-obj__counter\"> \
                    <text>Ascent:</text> \
                    <button class=\"solo-obj__cnt-button\" onclick=\"cntMinus(this)\"> \
                        <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\" type=\"number\"> \
                    <button class="solo-obj__cnt-button" onclick=\"cntPlus(this)\"> \
                        <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                    <img src=\"/web/resources/elements/arrow-right.png\" alt=\"->\"> \
                    <button class=\"solo-obj__cnt-button\" onclick=\"cntMinus(this)\"> \
                        <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\" type=\"number\"> \
                    <button class=\"solo-obj__cnt-button\" onclick=\"cntPlus(this)\"> \
                        <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                </div> \
            </div>'
        }
    }
}