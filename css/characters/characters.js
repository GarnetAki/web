!function () {
    document.addEventListener("DOMContentLoaded", getAllChars);
}();

async function getAllChars(){
    var panel = document.getElementsByClassName("characters").item(0);

    panel.innerHTML = "<div class=\"add-panel__preloader\"><div></div></div>";
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
        if (checkSortInfo(chars[char]["rarity"], chars[char]["element"], chars[char]["dmg_type"], chars[char]["tags"])){
            var rar = "six_star";
            if (chars[char]["rarity"] == 2) rar = "two_star";
            if (chars[char]["rarity"] == 3) rar = "three_star";
            if (chars[char]["rarity"] == 4) rar = "four_star";
            if (chars[char]["rarity"] == 5) rar = "five_star";
            
            var elem = "/web/resources/elements/afl_mineral.png";
            if (chars[char]["element"] == "star") elem = "/web/resources/elements/afl_star.png";
            if (chars[char]["element"] == "beast") elem = "/web/resources/elements/afl_beast.png";
            if (chars[char]["element"] == "plant") elem = "/web/resources/elements/afl_plant.png";
            if (chars[char]["element"] == "spirit") elem = "/web/resources/elements/afl_spirit.png";
            if (chars[char]["element"] == "intellect") elem = "/web/resources/elements/afl_intellect.png";
    
            panel.innerHTML += 
                '<div class=\"characters__char\"> \
                    <img class=\"characters__char__background\" src=\"' + chars[char]["image_path"] + '\"> \
                    <img class=\"characters__char__element\" src=\"' + elem + '\"> \
                    <div class=\"characters__char__overlay ' + rar + '\"> \
                        ' + chars[char]["name"] + ' \
                    </div> \
                </div>';
        }
    }
}

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

function checkSortInfo(rar, elem, type, tags){
    var rar_row = document.getElementById("sort-rar");
    var elem_row = document.getElementById("sort-elem");
    var type_row = document.getElementById("sort-type");
    var tags_row = document.getElementById("sort-tag");
    
    for (var button in rar_row.childNodes) {
        if (hasClass(rar_row.childNodes[button], "pressed")){
            if (rar_row.childNodes[button].childNodes.item(1)['alt'] == "2-star rarity"){
                if (rar != 2){
                    return false;
                }
            }
            if (rar_row.childNodes[button].childNodes.item(1)['alt'] == "3-star rarity"){
                if (rar != 3){
                    return false;
                }
            }
            if (rar_row.childNodes[button].childNodes.item(1)['alt'] == "4-star rarity"){
                if (rar != 4){
                    return false;
                }
            }
            if (rar_row.childNodes[button].childNodes.item(1)['alt'] == "5-star rarity"){
                if (rar != 5){
                    return false;
                }
            }
            if (rar_row.childNodes[button].childNodes.item(1)['alt'] == "6-star rarity"){
                if (rar != 6){
                    return false;
                }
            }
        }
    }

    for (var button in elem_row.childNodes) {
        if (hasClass(elem_row.childNodes[button], "pressed")){
            if (elem_row.childNodes[button].childNodes.item(1)['alt'] == "element: star"){
                if (elem != "star"){
                    return false;
                }
            }
            if (elem_row.childNodes[button].childNodes.item(1)['alt'] == "element: mineral"){
                if (elem != "mineral"){
                    return false;
                }
            }
            if (elem_row.childNodes[button].childNodes.item(1)['alt'] == "element: plant"){
                if (elem != "plant"){
                    return false;
                }
            }
            if (elem_row.childNodes[button].childNodes.item(1)['alt'] == "element: beast"){
                if (elem != "beast"){
                    return false;
                }
            }
            if (elem_row.childNodes[button].childNodes.item(1)['alt'] == "element: intellect"){
                if (elem != "intellect"){
                    return false;
                }
            }
            if (elem_row.childNodes[button].childNodes.item(1)['alt'] == "element: spirit"){
                if (elem != "spirit"){
                    return false;
                }
            }
        }
    }

    for (var button in type_row.childNodes) {
        if (hasClass(type_row.childNodes[button], "pressed")){
            if (type_row.childNodes[button].childNodes.item(1)['alt'] == "dmg type: reality"){
                if (type != "reality"){
                    return false;
                }
            }
            if (type_row.childNodes[button].childNodes.item(1)['alt'] == "dmg type: mental"){
                if (type != "mental"){
                    return false;
                }
            }
        }
    }

    for (var button in tags_row.childNodes) {
        if (hasClass(tags_row.childNodes[button], "pressed")){
            if (tags_row.childNodes[button].childNodes.length > 1){
                return true;
            }
            for (var tag of tags){
                if (tags_row.childNodes[button].textContent.includes(tag)){
                    return true;
                }
            }
        }
    }
    return false;
}