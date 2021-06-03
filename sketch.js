
// Initial canvas setup
function setup() {
    // Subtracts 25 from windowHeight to try and get rid of scroll bar
    createCanvas(windowWidth, windowHeight - 25);
}

// Continually looping function that draws things to the canvas
function draw() {
    //background(0, 100, 200);
}
  
// If the window is resized, resize the canvas to the new window size
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}