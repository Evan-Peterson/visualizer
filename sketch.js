
var grid;

// Initial canvas setup
function setup() {
    // Subtracts 25 from windowHeight to try and get rid of scroll bar
    createCanvas(windowWidth, windowHeight - 25);

    grid = create2DArray(Math.round(width/8), Math.round(height/8));

}

// Continually looping function that draws things to the canvas
function draw() {
    var x = 0;
    var y = 0;
    for(var i = 0;i < grid.length;i+= 10) {
        for(var j = 0;j < grid[0].length;j+= 10) {
            fill(51);
            rect(x, y, 8, 8);
            x += 10;
        }

        y += 10;
    }
}
  
// If the window is resized, resize the canvas to the new window size
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function create2DArray(width, height) {
    var arr = new Array(height || 0);

    for(var i = 0;i < arr.length;i++) {
        arr[i] = new Array(width);
    }

    return arr;
}