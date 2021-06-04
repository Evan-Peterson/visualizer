
// var grid;

var board;
var bfs;


// Initial canvas setup
function setup() {
    // Subtracts 25 from windowHeight to try and get rid of scroll bar

    console.log("Width: "+ windowWidth);
    console.log("Height: " + windowHeight);
    createCanvas(windowWidth, windowHeight - 25);

    // grid = create2DArray(Math.round(width/8), Math.round(height/8));

    board = new board();

    board.init();

    bfs = new bfs(board);
}

// Continually looping function that draws things to the canvas
function draw() {
    board.display();
}
  
// If the window is resized, resize the canvas to the new window size
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// function create2DArray(width, height) {
//     var arr = new Array(height || 0);

//     for(var i = 0;i < arr.length;i++) {
//         arr[i] = new Array(width);
//     }

//     return arr;
// }