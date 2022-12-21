windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

var canvas = document.getElementById("mainCanvas");
canvas.width = windowWidth;
canvas.height = windowHeight;

var ctx = canvas.getContext("2d");
ctx.fillStyle = pickColor();
ctx.font = "bold 30px Tahoma";
ctx.fillText("Wordle", canvas.width/2-57, 50);
ctx.font = "bold 40px Verdana";
let row1 = new Row(100);
row1.current = true;
row1.draw();
let row2 = new Row(156);
row2.draw();
let row3 = new Row(212);
row3.draw();
let row4 = new Row(268);
row4.draw();
let row5 = new Row(324);
row5.draw();
let row6 = new Row(380);
row6.draw();

var solutionStr = "amply"
var answer = solutionStr.split("");
var rows = [row1, row2, row3, row4, row5, row6];

function pickColor(){
    let r = Math.random() * 210;
    let g = Math.random() * 210;
    let b = Math.random() * 210;
    return "rgb(" + r + ", " + b + ", " + g + ")";
}

function onKeyPress(e){
    if (e.key="Enter") {
        var guessValue = document.getElementById("guess").value;
        const guessLetters = guessValue.split("");
        var notGreens = solutionStr.split("");
        if (guessLetters.length == 5){
            for (i=0; i<rows.length; i++) {
                if (rows[i].current == true) {
                    rows[i].sq1.content = guessLetters[0].toUpperCase();
                    if (guessLetters[0] == answer[0]) {
                        rows[i].sq1.status = "green";
                        let index = notGreens.indexOf(guessLetters[0]);
                        notGreens.splice(index, 1);
                    }
                    else if (answer.includes(guessLetters[0]) && notGreens.includes(guessLetters[0])){
                        rows[i].sq1.status = "yellow";
                    }
                    else {
                        rows[i].sq1.status = "grey";
                    }
                    // next row
                    rows[i].sq2.content = guessLetters[1].toUpperCase();
                    if (guessLetters[1] == answer[1]) {
                        rows[i].sq2.status = "green";
                        let index = notGreens.indexOf(guessLetters[1]);
                        notGreens.splice(index, 1);
                    }
                    else if (notGreens.includes(guessLetters[1])){
                        rows[i].sq2.status = "yellow";
                    }
                    else {
                        rows[i].sq2.status = "grey";
                    }
                    // next row
                    rows[i].sq3.content = guessLetters[2].toUpperCase();
                    if (guessLetters[2] == answer[2]) {
                        rows[i].sq3.status = "green";
                        let index = notGreens.indexOf(guessLetters[2]);
                        notGreens.splice(index, 1);
                    }
                    else if (notGreens.includes(guessLetters[2])){
                        rows[i].sq3.status = "yellow";
                    }
                    else {
                        rows[i].sq3.status = "grey";
                    }
                    // next row
                    rows[i].sq4.content = guessLetters[3].toUpperCase();
                    if (guessLetters[3] == answer[3]) {
                        rows[i].sq4.status = "green";
                        let index = notGreens.indexOf(guessLetters[3]);
                        notGreens.splice(index, 1);
                    }
                    else if (notGreens.includes(guessLetters[3])){
                        rows[i].sq4.status = "yellow";
                    }
                    else {
                        rows[i].sq4.status = "grey";
                    }
                    // next row
                    rows[i].sq5.content = guessLetters[4].toUpperCase();
                    if (guessLetters[4] == answer[4]) {
                        rows[i].sq5.status = "green";
                        let index = notGreens.indexOf(guessLetters[4]);
                        notGreens.splice(index, 1);
                    }
                    else if (notGreens.includes(guessLetters[4])){
                        rows[i].sq5.status = "yellow";
                    }
                    else {
                        rows[i].sq5.status = "grey";
                    }
                    rows[i].draw();
                    var drawn = i;
                }
            }
            rows[drawn].current = false;
            rows[drawn+1].current = true;
        }
        else {
            alert("Guesses must be 5 letters!");
        }
    }
}

canvas.addEventListener("keydown", onKeyPress);