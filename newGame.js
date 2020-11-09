// The first two coordinates are one end, the second two are the other end.
var linePos = [0, 0, 0, 0];
var lineVel = [1, 2, 3, 4];

// First two coordinates are x,y of center, last is radius
var circlePos = [300, 300, 25];
var circleVel = [3, -3, 0];

function applyVelocity (position, velocity) {
  /*
    Parameters: Position and Velocity of an object
      Assumption: Velocity list has same length as position list.
    Returns: None, but modifies global variables
    Purpose: Apply velocity to position, moving the object.
  */
  var i = 0;
  for (i = 0; i < position.length; i++) {
    position[i] += velocity[i];
  }
}

// Count frames, track time so we can compute fps rate
var frames = 0;
var start = new Date();
var now = new Date();
console.log(start);

function drawAll()
/*
  Purpose: This is the main drawing loop.
  Inputs: None, but it is affected by what the other functions are doing
  Returns: None, but it calls itself to cycle to the next frame
*/
{
  frames += 1;
  if (frames % 200 == 0) {
    now = new Date();
    msecs = now.getTime() - start.getTime();
    console.log(now.getTime());
    console.log("fps:", (frames / msecs) * 1000);
  }
}


function drawAll()
/*
  Purpose: This is the main drawing loop.
  Inputs: None, but it is affected by what the other functions are doing
  Returns: None, but it calls itself to cycle to the next frame
*/
{
  calculateFPS();

  applyVelocity(linePos, lineVel);
  applyVelocity(circlePos, circleVel);

  // If the line hits the end of the canvas, bounce
  // Add/subtract a little speed
  if ((linePos[0] > canvas.width) || (linePos[0] < 0)) {
    lineVel[0] *= -1;
    lineVel[0] += Math.random() - 0.5;
    // console.log(lineVel);
  }
  if ((linePos[1] > canvas.height) || (linePos[1] < 0)) {
    lineVel[1] *= -1;
    lineVel[1] += Math.random() - 0.5;
    // console.log(lineVel);
  }
  if ((linePos[2] > canvas.width) || (linePos[2] < 0)) {
    lineVel[2] *= -1;
    lineVel[2] += Math.random() - 0.5;
    // console.log(lineVel);
  }
  if ((linePos[3] > canvas.height) || (linePos[3] < 0)) {
    lineVel[3] *= -1;
    lineVel[3] += Math.random() - 0.5;
    // console.log(lineVel);
  }

  // Draw the line
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.lineWidth = 3;
  context.lineCap = 'round';
  context.beginPath();
  context.moveTo(linePos[0], linePos[1]);
  context.lineTo(linePos[2], linePos[3]);
  context.stroke();
  context.beginPath();
  context.arc(circlePos[0], circlePos[1], circlePos[2], 0, 2*Math.PI);
  context.stroke();

  // Loop the animation to the next frame.
  window.requestAnimationFrame(drawAll);
}

// Get width/height of the browser window
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;
console.log("Window is %d by %d", windowWidth, windowHeight);

// Get the canvas, set the width and height from the window
canvas = document.getElementById("mainCanvas");
// I found that - 20 worked well for me, YMMV
canvas.width = windowWidth - 20;
canvas.height = windowHeight - 20;
canvas.style.border = "1px solid black";

// Set up the context for the animation
context = canvas.getContext("2d");

// Fire up the animation engine
window.requestAnimationFrame(drawAll);
