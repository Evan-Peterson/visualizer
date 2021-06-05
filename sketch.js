


var board;
var bfs;


// Initial canvas setup
function setup() {
    // Subtracts 25 from windowHeight to try and get rid of scroll bar

    createCanvas(windowWidth, windowHeight - 25);


    board = new board();


    // console.log(board.getNode(10,10).isTarget());

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
