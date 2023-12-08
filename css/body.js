!function () {
    document.addEventListener("DOMContentLoaded", ready);
}();

function ready(){
    document.getElementById("loadtime").textContent = "load time = " + 
        (window.performance.timing.loadEventEnd - window.performance.timing.loadEventStart) + " sec";
}