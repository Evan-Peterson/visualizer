
var board;
var bfs;


// Initial canvas setup
function setup() {
    // Subtracts 25 from windowHeight to try and get rid of scroll bar

    createCanvas(windowWidth, windowHeight - 25);


    board = new board();

    // Generate random row and column for start node
    var randColStart = Math.round(Math.random() * board.getCols());
    var randRowStart = Math.round(Math.random() * board.getRows());

    // Set color of start to white
    board.getNode(randColStart, randRowStart).setStart();

    // var startNeighbors = board.getNeighbors(randColStart, randRowStart);

    // for(var i = 0;i < startNeighbors.length;i++) {
    //     startNeighbors[i].setVisited(true);
    // }

    bfs = new bfs(board, randColStart, randRowStart);

    

    bfs.find();
}

// Continually looping function that draws things to the canvas
function draw() {
    board.display();
}
  
// If the window is resized, resize the canvas to the new window size
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
