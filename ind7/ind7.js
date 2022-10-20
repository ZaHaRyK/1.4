function nothide() {
    document.getElementById('block').style.display = "block"
}

function hide() {
    document.getElementById('block').style.display = "none"
}

function hideornot() {
    if(document.getElementById('input').value == '') {
        nothide()
    }else{
        hide()
    }
}