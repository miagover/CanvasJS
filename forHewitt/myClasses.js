// Each tile is a tileSize x tileSize square
var tileSize = 100;
// Make sure that tileVel evenly divides tileSize
var tileVel = 4;

class Tile {
  // Input position as two coordinates, x and y
  // Set up value for what number is in the tile.
  constructor (xPos, yPos, value) {
    this.position = [xPos, yPos];
    this.canvasPosition = [xPos * tileSize, yPos * tileSize];
    this.value = 2;
    this.movingDown = false;
    this.movingRight = false;
  }

  get xPos () {return this.position[0];}
  get yPos () {return this.position[1];}

  move() {
    // This method just deals with the animation of the movement not the logic
    if ((this.movingRight) && (this.canvasPosition[0] < this.xPos * tileSize)) {
      this.canvasPosition[0] += tileVel;
      console.log("right");
    }
    if (this.canvasPosition[0] == this.xPos * tileSize) {
      this.movingRight = false;
    }
    if ((this.movingDown) && (this.canvasPosition[1] < this.yPos * tileSize)) {
      this.canvasPosition[1] += tileVel;
      console.log("down");
    }
    if (this.canvasPosition[1] == this.yPos * tileSize) {
      this.movingDown = false;
    }
  }

  draw() {
    // Background rectangle color
    context.fillStyle = "#aaffff";
    context.fillRect(this.canvasPosition[0], this.canvasPosition[1], tileSize, tileSize)
    // Text color
    context.fillStyle = "#000000";
    context.font = "40px sans";
    // Position = *Bottom* left corner, no idea why it's not top left
    context.fillText(this.value, this.canvasPosition[0] + tileSize * 0.4, this.canvasPosition[1] + tileSize * 0.6);
  }
}

function myKeyDown (event) {
  // This checks if a square is still moving; if so, don't take any more events
  stillMoving = false;
  for (tile of tileList) {
    if ((tile.movingRight) || (tile.movingDown)) {
      stillMoving = true;
    }
  }
  // Any key event that happens while the animation is still moving is ignored
  if (!stillMoving) {
    if (event.key == 's') {
      moveDown();
      console.log("Down");
    } else if (event.key == 'd') {
      moveRight();
      console.log("Right");
    }
  }
}

function moveRight() {
  // This only deals with the logic of the movement
  // It only triggers the animation to start
  // This needs to be way more complicated to get game logic working
  for (tile of tileList) {
    tile.position[0] = 3;
    // Trigger the animation
    tile.movingRight = true;
  }
}

function moveDown() {
  // Same as moveRight()
  for (tile of tileList) {
    tile.position[1] = 3;
    tile.movingDown = true;
  }
}


function setUpContext() {
  // Get width/height of the browser window
  console.log("Window is %d by %d", window.innerWidth, window.innerHeight);

  // Get the canvas, set the width and height from the window
  canvas = document.getElementById("mainCanvas");
  // I found that - 20 worked well for me, YMMV
  canvas.width = window.innerWidth - 20;
  canvas.height = window.innerHeight - 20;
  canvas.style.border = "1px solid black";

  // Set up the context for the animation
  context = canvas.getContext("2d");
  return context;
}
