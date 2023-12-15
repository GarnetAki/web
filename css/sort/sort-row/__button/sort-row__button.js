function setSelected(e) {
    if (e.classList.contains("pressed")) {
        e.parentElement.children.item(0).classList.toggle("pressed")
    } else {
        for (child in e.parentElement.children) {
            if (e.parentElement.children.item(child).classList.contains("pressed"))
                e.parentElement.children.item(child).classList.remove("pressed");
        }
    }
    e.classList.toggle("pressed");
    getAllChars();
}