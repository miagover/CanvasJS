function drawAll()
/*
  Purpose: This is the main drawing loop.
  Inputs: None, but it is affected by what the other functions are doing
  Returns: None, but it calls itself to cycle to the next frame
*/
{

  context.clearRect(0, 0, canvas.width, canvas.height);
  for (tile of tileList) {
    tile.move();
    tile.draw();
  }

  // Loop the animation to the next frame.
  window.requestAnimationFrame(drawAll);
}

// Set up the canvas and context objects
context = setUpContext();

document.addEventListener("keydown", myKeyDown);

// Create instance of Tile object
tile1 = new Tile(0, 0);
tileList = [tile1];

// Fire up the animation engine
window.requestAnimationFrame(drawAll);
