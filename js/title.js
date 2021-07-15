var i = 0;
var titleText = ["Toto", "Tot", "To", "T", "T", "To", "Tot", "Toto"]; // "."

if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {
    setInterval(loop, 500);
}

function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[i++ % titleText.length];
}

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
            e.keyCode === 86 ||
            e.keyCode === 85 ||
            e.keyCode === 117)) {
        return false;
    } else {
        return true;
    }
};