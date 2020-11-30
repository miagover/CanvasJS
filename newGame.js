function drawAll()
/*
  Purpose: This is the main drawing loop.
  Inputs: None, but it is affected by what the other functions are doing
  Returns: None, but it calls itself to cycle to the next frame
*/
{
  line.applyVelocity();
  line.bounceCheck();

  // Draw the line
  context.clearRect(0, 0, canvas.width, canvas.height);
  line.draw();

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

// Create instance of Line object
line = new Line();
console.log(line);
context.strokeStyle = line.color;
context.lineWidth = line.width;
context.lineCap = line.cap;

// Fire up the animation engine
window.requestAnimationFrame(drawAll);
