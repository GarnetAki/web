function deleteObj(e) {
    var obj = e.parentNode.parentNode
    obj.parentNode.removeChild(obj)
}

function redactChar(e, name, path, rar, lvlFrom, lvlTo, insFrom, insTo, resFrom, resTo) {
    var obj = e.parentNode.parentNode.parentNode

    obj.innerHTML = '<div class=\"object\"> \
        <div class=\"object__head ' + rar + '\"> \
            <img src=\"' + path + '\" alt=\"' + name + 'Icon\"> \
            <text>' + name + '</text> \
            <button class=\"object__button\" onclick=\"saveRedactChar(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\')\"> \
                <img src=\"/web/resources/elements/ok.png\" alt=\"Ok\"> \
            </button> \
            <button class=\"object__button\" onclick=\"cancelRedactChar(this, \'' + name + '\', \'' + path + '\', \'' + rar + 
            '\', ' + lvlFrom + ', ' + lvlTo + ', ' + insFrom + ', ' + insTo + ', ' + resFrom + ', ' + resTo + ')\"> \
                <img src=\"/web/resources/elements/cancel.png\" alt=\"Cancel\"> \
            </button> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Level:</text> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" id=\"' + name + 'LvlFrom\" required pattern=\"[0-9]{,2}+$\" min=\"1\" max=\"60\" value=\"' + lvlFrom + '\" type=\"number\"> \
            <button class=\"object__cnt-button\" onclick=\"cntPlus(this)\"> \
                <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
            <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"/web/resources/elements/minus.png" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" id=\"' + name + 'LvlTo\" required pattern=\"[0-9]{,2}+$\" min=\"1\" max=\"60\" value=\"' + lvlTo + '\" type=\"number\"> \
            <button class="object__cnt-button" onclick=\"cntPlus(this)\"> \
                <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Insight:</text> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" id=\"' + name + 'InsFrom\" required pattern=\"[0-9]{,1}+$\" min=\"0\" max=\"3\" value=\"' + insFrom + '\" type=\"number\"> \
            <button class=\"object__cnt-button\" onclick=\"cntPlus(this)\"> \
                <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
            <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" id=\"' + name + 'InsTo\" required pattern=\"[0-9]{,1}+$\" min=\"0\" max=\"3\" value=\"' + insTo + '\" type=\"number\"> \
            <button class=\"object__cnt-button\" onclick=\"cntPlus(this)\"> \
                <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Resonate:</text> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" id=\"' + name + 'ResFrom\" required pattern=\"[0-9]{,2}+$\" min=\"1\" max=\"3\" value=\"' + resFrom + '\" type=\"number\"> \
            <button class="object__cnt-button" onclick=\"cntPlus(this)\"> \
                <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
            <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" id=\"' + name + 'ResTo\" required pattern=\"[0-9]{,2}+$\" min=\"1\" max=\"3\" value=\"' + resTo + '\" type=\"number\"> \
            <button class=\"object__cnt-button\" onclick=\"cntPlus(this)\"> \
                <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
        </div> \
    </div>'
}

function saveRedactChar(e, name, path, rar) {
    var resTo = document.getElementById(name + 'ResTo').value;
    var resFrom = document.getElementById(name + 'ResFrom').value;
    var lvlTo = document.getElementById(name + 'LvlTo').value;
    var lvlFrom = document.getElementById(name + 'LvlFrom').value;
    var insTo = document.getElementById(name + 'InsTo').value;
    var insFrom = document.getElementById(name + 'InsFrom').value;
    var obj = e.parentNode.parentNode.parentNode

    try{       
        if (!validateCharValues(lvlFrom, lvlTo, insFrom, insTo, resFrom, resTo)){
            throw new Error("Incorrect parameters");
        }
    }catch(e){
        UIkit.notification({message: 'Wrong parameters', status: 'danger' ,timeout: 5000})
        return
    }

    obj.innerHTML = 
        '<div class=\"object\"> \
            <div class=\"object__head ' + rar + '\"> \
                <img src=\"' + path + '\" alt=\"' + name + 'Icon\"> \
                <text>' + name + '</text> \
                <button class=\"object__button\" onclick=\"redactChar(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\', \
                    ' + lvlFrom + ', ' + lvlTo + ', \
                    ' + insFrom + ', ' + insTo + ', \
                    ' + resFrom + ', ' + resTo + ')\"> \
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
}

function cancelRedactChar(e, name, path, rar, lvlFrom, lvlTo, insFrom, insTo, resFrom, resTo) {
    var obj = e.parentNode.parentNode.parentNode
    obj.innerHTML =
        '<div class=\"object\"> \
            <div class=\"object__head ' + rar + '\"> \
                <img src=\"' + path + '\" alt=\"' + name + 'Icon\"> \
                <text>' + name + '</text> \
                <button class=\"object__button\" onclick=\"redactChar(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\', \
                ' + lvlFrom + ', ' + lvlTo + ', \
                ' + insFrom + ', ' + insTo + ', \
                ' + resFrom + ', ' + resTo + ')\"> \
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
}

function redactPsych(e, name, path, rar, lvlFrom, lvlTo, ascFrom, ascTo) {
    var obj = e.parentNode.parentNode.parentNode
    obj.innerHTML = '<div class=\"object\"> \
        <div class=\"object__head ' + rar + '\"> \
            <img src=\"' + path + '\" alt=\"' + name + 'Icon\"> \
            <text>' + name + '</text> \
            <button class=\"object__button\" onclick=\"saveRedactPsych(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\')\"> \
                <img src=\"resources/elements/ok.png\" alt=\"Ok\"> \
            </button> \
            <button class=\"object__button\" onclick=\"cancelRedactPsych(this, \'' + name + '\', \'' + path + '\', \'' + rar + 
              '\', ' + lvlFrom + ', ' + lvlTo + ', ' + ascFrom + ', ' + ascTo + ')\"> \
                <img src=\"resources/elements/cancel.png\" alt=\"Cancel\"> \
            </button> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Level:</text> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"resources/elements/minus.png\" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" id=\"' + name + 'LvlFrom\" required pattern=\"[0-9]{,1}+$\" min=\"1\" max=\"60\" value=\"' + lvlFrom + '\" type=\"number\"> \
            <button class=\"object__cnt-button\" onclick=\"cntPlus(this)\"> \
                <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
            <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"resources/elements/minus.png" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" id=\"' + name + 'LvlTo\" required pattern=\"[0-9]{,1}+$\" min=\"1\" max=\"60\" value=\"' + lvlTo + '\" type=\"number\"> \
            <button class="object__cnt-button" onclick=\"cntPlus(this)\"> \
                <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Ascent:</text> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"resources/elements/minus.png\" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" id=\"' + name + 'AscFrom\" required pattern=\"[0-9]{,1}+$\" min=\"0\" max=\"3\" value=\"' + ascFrom + '\" type=\"number\"> \
            <button class=\"object__cnt-button\" onclick=\"cntPlus(this)\"> \
                <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
            <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"resources/elements/minus.png\" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" id=\"' + name + 'AscTo\" required pattern=\"[0-9]{,1}+$\" min=\"0\" max=\"3\" value=\"' + ascTo + '\" type=\"number\"> \
            <button class=\"object__cnt-button\" onclick=\"cntPlus(this)\"> \
                <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
        </div> \
    </div>'
}

function saveRedactPsych(e, name, path, rar) {
    var ascTo = document.getElementById(name + 'AscTo').value;
    var ascFrom = document.getElementById(name + 'AscFrom').value;
    var lvlTo = document.getElementById(name + 'LvlTo').value;
    var lvlFrom = document.getElementById(name + 'LvlFrom').value;
    var obj = e.parentNode.parentNode.parentNode
    
    try{       
        if (!validatePsychValues(lvlFrom, lvlTo, ascFrom, ascTo)){
            throw new Error("Incorrect parameters");
        }
    }catch(e){
        UIkit.notification({message: 'Wrong parameters', status: 'danger' ,timeout: 5000})
        return
    }

    obj.innerHTML = 
        '<div class=\"object\"> \
            <div class=\"object__head ' + rar + '\"> \
                <img src=\"' + path + '\" alt=\"' + name + 'Icon\"> \
                <text>' + name + '</text> \
                <button class=\"object__button\" onclick=\"redactPsych(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\' \
                , ' + lvlFrom + ', ' + lvlTo + ', \
                '+ ascFrom + ', ' + ascTo + ')\"> \
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
}

function cancelRedactPsych(e, name, path, rar, lvlFrom, lvlTo, ascFrom, ascTo) {
    var obj = e.parentNode.parentNode.parentNode
    obj.innerHTML =
        '<div class=\"object\"> \
            <div class=\"object__head ' + rar + '\"> \
                <img src=\"' + path + '\" alt=\"' + name + 'Icon\"> \
                <text>' + name + '</text> \
                <button class=\"object__button\" onclick=\"redactPsych(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\' \
                , ' + lvlFrom + ', ' + lvlTo + ', \
                '+ ascFrom + ', ' + ascTo + ')\"> \
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
}