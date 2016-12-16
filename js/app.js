//A function to generate the clour

function getColour() {
    return '#' + Math.random().toString(16).slice(2,8);
}

//A function to set the background

function setBackground() {
    var bgColour = getColour();
    document.body.style.background = bgColour;
}

//A funtion that runs when the spacebar is pressed

document.body.onkeyup = function(e){
    if(e.keycode == 32) {
        setBackground();
    }
}



