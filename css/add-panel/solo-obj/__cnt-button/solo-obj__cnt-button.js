function cntMinus(e){
    var flag = false;
    for (var child of e.parentElement.children){
        if (flag){
            child.value = child.value - 1;
            break;
        }
        if (child == e && !flag){
            flag = true;
        }
    }
}

function cntPlus(e){
    var ind = 1
    for (var child in e.parentElement.children){
        if (e.parentElement.children[child] == e){
            ind = child;
            break;
        }
    }
    e.parentElement.children[ind - 1].value = parseInt(e.parentElement.children[ind - 1].value) + 1;
}