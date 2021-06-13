
var board;
var bfs;
var search;


// Initial canvas setup
function setup() {
    // Subtracts 25 from windowHeight to try and get rid of scroll bar

    createCanvas(windowWidth, windowHeight - 25);


    board = new board();

    // Generate random row and column for start node
    var randColStart = Math.round(Math.random() * (board.getCols() - 1));
    var randRowStart = Math.round(Math.random() * (board.getRows() - 1));

    // Set color of start to white
    board.getNode(randColStart, randRowStart).setStart();

    bfs = new bfs(board, randColStart, randRowStart);

    search = true;

    // bfs.find();
}

// Continually looping function that draws things to the canvas
function draw() {
    board.display();

    console.log("loop");

    if(search) {
        search = bfs.step();
    }
}
  
// If the window is resized, resize the canvas to the new window size
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
