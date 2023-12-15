!function () {
    document.addEventListener("DOMContentLoaded", ready);
}();

function ready(){
    document.getElementById("loadtime").textContent = "load time = " + 
        (performance.mark('pageEnd').startTime / 1000).toFixed(3) + " sec";
}

function validateCharValues(lvlFrom, lvlTo, insFrom, insTo, resFrom, resTo){
    if (lvlFrom < 1 || lvlFrom > 60 || lvlTo < 1 || lvlTo > 60) return false;
    if (insFrom < 0 || insFrom > 3 || insTo < 0 || insTo > 3) return false;
    if (resFrom < 1 || resFrom > 10 || resTo < 1 || resTo > 10) return false;
    if (lvlFrom > lvlTo || insFrom > insTo || resFrom > resTo) return false;
    if (lvlFrom > 30 + 10 * insFrom || lvlTo > 30 + 10 * insTo) return false;
    if (resFrom > 1 && insFrom == 0 || resFrom > 5 && insFrom == 1 || resFrom > 8 && insFrom == 2) return false;
    if (resTo > 1 && insTo == 0 || resTo > 5 && insTo == 1 || resTo > 8 && insTo == 2) return false;
    return true;
}

function validatePsychValues(lvlFrom, lvlTo, ascFrom, ascTo){
    if (lvlFrom < 1 || lvlFrom > 60 || lvlTo < 1 || lvlTo > 60) return false;
    if (ascFrom < 0 || ascFrom > 3 || ascTo < 0 || ascTo > 3) return false;
    if (lvlFrom > lvlTo || ascFrom > ascTo) return false;
    if (lvlFrom > 20 && ascFrom == 0 || lvlFrom > 40 && ascFrom == 1 || lvlFrom > 50 && ascFrom == 2) return false;
    if (lvlTo > 20 && ascTo == 0 || lvlTo > 40 && ascTo == 1 || lvlTo > 50 && ascTo == 2) return false;
    return true;
}