function deleteObj(e) {
    var obj = e.parentNode.parentNode
    obj.parentNode.removeChild(obj)
}

function redactChar(e, name, path, rar) {
    var obj = e.parentNode.parentNode.parentNode
    obj.innerHTML = '<div class=\"object\"> \
        <div class=\"object__head ' + rar + '\"> \
            <img src=\"' + path + '\" alt=\"' + name + 'Icon\"> \
            <text>' + name + '</text> \
            <button class=\"object__button\" onclick=\"saveRedactChar(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\')\"> \
                <img src=\"/web/resources/elements/ok.png\" alt=\"Ok\"> \
            </button> \
            <button class=\"object__button\" onclick=\"cancelRedactChars(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\')\"> \
                <img src=\"/web/resources/elements/cancel.png\" alt=\"Cancel\"> \
            </button> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Level:</text> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
            <button class=\"object__cnt-button\" onclick=\"cntPlus(this)\"> \
                <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
            <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"/web/resources/elements/minus.png" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
            <button class="object__cnt-button" onclick=\"cntPlus(this)\"> \
                <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Insight:</text> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
            <button class=\"object__cnt-button\" onclick=\"cntPlus(this)\"> \
                <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
            <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
            <button class=\"object__cnt-button\" onclick=\"cntPlus(this)\"> \
                <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Resonate:</text> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
            <button class="object__cnt-button" onclick=\"cntPlus(this)\"> \
                <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
            <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"/web/resources/elements/minus.png\" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
            <button class=\"object__cnt-button\" onclick=\"cntPlus(this)\"> \
                <img src=\"/web/resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
        </div> \
    </div>'
}

function saveRedactChar(e, name, path, rar) {
    var obj = e.parentNode.parentNode.parentNode
    obj.innerHTML = 
        '<div class=\"object\"> \
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
}

function cancelRedactChars(e, name, path, rar) {
    var obj = e.parentNode.parentNode.parentNode
    obj.innerHTML =
        '<div class=\"object\"> \
            <div class=\"object__head ' + rar + '\"> \
                <img src=\"' + path + '\" alt=\"' + name + 'Icon\"> \
                <text>' + name + '</text> \
                <button class=\"object__button\" onclick=\"redactChar(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\')\"> \
                    <img src=\"resources/elements/pencil.png\" alt=\"Redact\"> \
                </button> \
                <button class=\"object__button\" onclick=\"deleteObj(this)\"> \
                    <img src=\"resources/elements/delete.png\" alt=\"Remove\"> \
                </button> \
            </div> \
            <div class=\"object__counter\"> \
                <text>Level:</text> \
                <a>0</a> \
                <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
                <a>0</a> \
            </div> \
            <div class=\"object__counter\"> \
                <text>Insight:</text> \
                <a>0</a> \
                <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
                <a>0</a> \
            </div> \
            <div class=\"object__counter\"> \
                <text>Resonate:</text> \
                <a>0</a> \
                <img src="resources/elements/arrow-right.png\" alt=\"->\"> \
                <a>0</a> \
            </div> \
            <div class=\"object__bot\"> \
            </div> \
        </div>'
}

function redactPsych(e, name, path, rar) {
    var obj = e.parentNode.parentNode.parentNode
    obj.innerHTML = '<div class=\"object\"> \
        <div class=\"object__head ' + rar + '\"> \
            <img src=\"' + path + '\" alt=\"' + name + 'Icon\"> \
            <text>' + name + '</text> \
            <button class=\"object__button\" onclick=\"saveRedactPsych(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\')\"> \
                <img src=\"resources/elements/ok.png\" alt=\"Ok\"> \
            </button> \
            <button class=\"object__button\" onclick=\"cancelRedactPsych(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\')\"> \
                <img src=\"resources/elements/cancel.png\" alt=\"Cancel\"> \
            </button> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Level:</text> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"resources/elements/minus.png\" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
            <button class=\"object__cnt-button\" onclick=\"cntPlus(this)\"> \
                <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
            <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"resources/elements/minus.png" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
            <button class="object__cnt-button" onclick=\"cntPlus(this)\"> \
                <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
        </div> \
        <div class=\"object__counter\"> \
            <text>Ascent:</text> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"resources/elements/minus.png\" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
            <button class=\"object__cnt-button\" onclick=\"cntPlus(this)\"> \
                <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
            <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
            <button class=\"object__cnt-button\" onclick=\"cntMinus(this)\"> \
                <img src=\"resources/elements/minus.png\" alt=\"Minus\"> \
            </button> \
            <input inputmode=\"numeric\" min=\"0\" value=\"0\"> \
            <button class=\"object__cnt-button\" onclick=\"cntPlus(this)\"> \
                <img src=\"resources/elements/plus.png\" alt=\"Plus\"> \
            </button> \
        </div> \
    </div>'
}

function saveRedactPsych(e, name, path, rar) {
    var obj = e.parentNode.parentNode.parentNode
    obj.innerHTML = 
        '<div class=\"object\"> \
            <div class=\"object__head ' + rar + '\"> \
                <img src=\"' + path + '\" alt=\"' + name + 'Icon\"> \
                <text>' + name + '</text> \
                <button class=\"object__button\" onclick=\"redactPsych(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\')\"> \
                    <img src=\"resources/elements/pencil.png\" alt=\"Redact\"> \
                </button> \
                <button class=\"object__button\" onclick=\"deleteObj(this)\"> \
                    <img src=\"resources/elements/delete.png\" alt=\"Remove\"> \
                </button> \
            </div> \
            <div class=\"object__counter\"> \
                <text>Level:</text> \
                <a>0</a> \
                <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
                <a>0</a> \
            </div> \
            <div class=\"object__counter\"> \
                <text>Ascent:</text> \
                <a>0</a> \
                <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
                <a>0</a> \
            </div> \
            <div class=\"object__bot\"> \
            </div> \
        </div>'
}

function cancelRedactPsych(e, name, path, rar) {
    var obj = e.parentNode.parentNode.parentNode
    obj.innerHTML =
        '<div class=\"object\"> \
            <div class=\"object__head ' + rar + '\"> \
                <img src=\"' + path + '\" alt=\"' + name + 'Icon\"> \
                <text>' + name + '</text> \
                <button class=\"object__button\" onclick=\"redactPsych(this, \'' + name + '\', \'' + path + '\', \'' + rar +  '\')\"> \
                    <img src=\"resources/elements/pencil.png\" alt=\"Redact\"> \
                </button> \
                <button class=\"object__button\" onclick=\"deleteObj(this)\"> \
                    <img src=\"resources/elements/delete.png\" alt=\"Remove\"> \
                </button> \
            </div> \
            <div class=\"object__counter\"> \
                <text>Level:</text> \
                <a>0</a> \
                <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
                <a>0</a> \
            </div> \
            <div class=\"object__counter\"> \
                <text>Ascent:</text> \
                <a>0</a> \
                <img src=\"resources/elements/arrow-right.png\" alt=\"->\"> \
                <a>0</a> \
            </div> \
            <div class=\"object__bot\"> \
            </div> \
        </div>'
}