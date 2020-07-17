window.addEventListener('load', start);

let squad = document.querySelector('#squad');
let hexOut = document.querySelector('#hex');

let red = document.querySelector('#red');
let blue = document.querySelector('#blue');
let green = document.querySelector('#green');

let redOutput = document.querySelector('#red-output');
let blueOutput = document.querySelector('#blue-output');
let greenOutput = document.querySelector('#green-output');

function start() {
    setColor();
}

function setColor() {
    let redHex = parseInt(red.value).toString(16);
    let blueHex = parseInt(blue.value).toString(16);
    let greenHex = parseInt(green.value).toString(16);

    let hex = "#" + countHex(redHex) + countHex(blueHex) + countHex(greenHex);

    squad.style.backgroundColor = hex;
    hexOut.value = hex;
}

function countHex(number) {
    let hexNumber = 0;
    
    if(number.length < 2) {
        return "0" + number;
    } else {
        return number;
    }
}

red.addEventListener('change', function() {
    setColor();
    redOutput.value = red.value;
}, false);

red.addEventListener('input', function() {
    setColor();
    redOutput.value = red.value;
}, false);

blue.addEventListener('change', function() {
    setColor();
    blueOutput.value = blue.value;
}, false);

blue.addEventListener('input', function() {
    setColor();
    blueOutput.value = blue.value;
}, false);

green.addEventListener('change', function() {
    setColor();
    greenOutput.value = green.value;
}, false);

green.addEventListener('input', function() {
    setColor();
    greenOutput.value = green.value;
}, false);