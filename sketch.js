
var board;
var bfs;
var search;


// Initial canvas setup
function setup() {
    // Subtracts 25 from windowHeight to try and get rid of scroll bar

    createCanvas(windowWidth, windowHeight - 25);

    frameRate(120);

    board = new board();

    // Generate random row and column for start node
    var randColStart = Math.round(Math.random() * (board.getCols() - 1));
    var randRowStart = Math.round(Math.random() * (board.getRows() - 1));

    // Set color of start to white
    board.getNode(randColStart, randRowStart).setStart();

    bfs = new bfs(board, randColStart, randRowStart);

    search = false;

    board.display();

    let visButtoon = select("#button");

    visButtoon.mousePressed(visualzeButtonPressed)

    // bfs.find();
}

// Continually looping function that draws things to the canvas
function draw() {
    
    var nodes = [];

    // console.log(frameRate());

    if(search) {
        search = bfs.step(nodes);
    } else {
        board.backTrack(nodes);
    }

    board.update(nodes);
}
  
// If the window is resized, resize the canvas to the new window size
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function visualzeButtonPressed() {
    search = true;
}