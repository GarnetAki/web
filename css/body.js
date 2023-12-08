!function () {
    document.addEventListener("DOMContentLoaded", ready);
}();

function ready(){
    document.getElementById("loadtime").textContent = "load time = " + 
        (performance.mark('pageEnd').startTime / 1000).toFixed(3) + " sec";
}