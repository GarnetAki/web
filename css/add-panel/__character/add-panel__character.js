async function soloChar(e){
    var panel = document.getElementById("add");
    panel.innerHTML = '';
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
    
    console.log(e.textContent);
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
                    <button class="solo-obj__button"> \
                        <img src=\"resources/elements/ok.png" alt="Ok"> \
                    </button> \
                    <button class=\"solo-obj__button\"> \
                        <img src=\"resources/elements/cancel.png\" onclick=\"addClose(this)\" alt="Cancel"> \
                    </button> \
                </div> \
                <div class=\"solo-obj__counter\"> \
                    <text>Level:</text> \
                    <button class=\"solo-obj__cnt-button\"> \
                        <img src=\"resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
                    <button class="solo-obj__cnt-button"> \
                        <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                    <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
                    <button class=\"solo-obj__cnt-button\"> \
                        <img src=\"resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
                    <button class=\"solo-obj__cnt-button\"> \
                        <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                </div> \
                <div class=\"solo-obj__counter\"> \
                    <text>Insight:</text> \
                    <button class=\"solo-obj__cnt-button\"> \
                        <img src=\"resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
                    <button class="solo-obj__cnt-button"> \
                        <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                    <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
                    <button class=\"solo-obj__cnt-button\"> \
                        <img src=\"resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
                    <button class=\"solo-obj__cnt-button\"> \
                        <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                </div> \
                <div class=\"solo-obj__counter\"> \
                    <text>Resonate:</text> \
                    <button class=\"solo-obj__cnt-button\"> \
                        <img src=\"resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
                    <button class="solo-obj__cnt-button"> \
                        <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                    <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
                    <button class=\"solo-obj__cnt-button\"> \
                        <img src=\"resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
                    <button class=\"solo-obj__cnt-button\"> \
                        <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
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
    var chars;
    await fetch('https://my-json-server.typicode.com/GarnetAki/web/Psychubes')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            chars = data;
        });

    panel.innerHTML = panel.innerHTML.replace("<div class=\"add-panel__preloader\"><div></div></div>", "");
    
    console.log(e.textContent);
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
                    <button class="solo-obj__button"> \
                        <img src=\"resources/elements/ok.png" alt="Ok"> \
                    </button> \
                    <button class=\"solo-obj__button\"> \
                        <img src=\"resources/elements/cancel.png\" onclick=\"addClose(this)\" alt="Cancel"> \
                    </button> \
                </div> \
                <div class=\"solo-obj__counter\"> \
                    <text>Level:</text> \
                    <button class=\"solo-obj__cnt-button\"> \
                        <img src=\"resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
                    <button class="solo-obj__cnt-button"> \
                        <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                    <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
                    <button class=\"solo-obj__cnt-button\"> \
                        <img src=\"resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
                    <button class=\"solo-obj__cnt-button\"> \
                        <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                </div> \
                <div class=\"solo-obj__counter\"> \
                    <text>Ascent:</text> \
                    <button class=\"solo-obj__cnt-button\"> \
                        <img src=\"resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
                    <button class="solo-obj__cnt-button"> \
                        <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                    <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
                    <button class=\"solo-obj__cnt-button\"> \
                        <img src=\"resources/elements/minus.png\" alt=\"Minus\"> \
                    </button> \
                    <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
                    <button class=\"solo-obj__cnt-button\"> \
                        <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
                    </button> \
                </div> \
            </div>'
        }
    }
}