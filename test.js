var c = document.getElementById("mainCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF000";
ctx.fillRect(10,10,50,50);

function makeRectCopies(e) {
    var imgData = ctx.getImageData(10,10,50,50);
    var i, newR, newG, newB;

    newR = Math.random() * 255;
    newB = Math.random() * 255;
    newG = Math.random() * 255;

    for (i=0; i < imgData.data.length; i+=4) {
        imgData.data[i] = newR;
        imgData.data[i+1] = newB;
        imgData.data[i+2] = newG;
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, e.clientX, e.clientY);
}
c.addEventListener("click", makeRectCopies);