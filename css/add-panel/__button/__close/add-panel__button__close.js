function addClose(e) {
    var buttons = document.getElementsByClassName("setup-zone").item(0);

    for (child of buttons.children) {
        if (child.classList.contains("pressed"))
            child.classList.remove("pressed");
    }

    var panel = document.getElementById("add");
    panel.innerHTML = '';
    panel.style.display = "none";
}
