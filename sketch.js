
var board;
var bfs;
var search;
var backtrack;
var nodes;


// Initial canvas setup
function setup() {
    // Subtracts 25 from windowHeight to try and get rid of scroll bar

    createCanvas(windowWidth, windowHeight - 25);

    frameRate(120);

    board = new board();
    nodes = [];

    // Generate random row and column for start node
    var randColStart = Math.round(Math.random() * (board.getCols() - 1));
    var randRowStart = Math.round(Math.random() * (board.getRows() - 1));

    // Set color of start to white
    board.getNode(randColStart, randRowStart).setStart();

    bfs = new bfs(board, randColStart, randRowStart);

    search = false;
    backtrack = false;

    board.display();

    let visButtoon = select("#button");

    visButtoon.mousePressed(visualzeButtonPressed)

    // bfs.find();
}

// Continually looping function that draws things to the canvas
function draw() {
    
    // nodes = [];

    // console.log(frameRate());

    if(search) {
        search = bfs.step(nodes);

        if(!search) {
            backtrack = true;
            board.backTrack(nodes);
        }
    }
    // console.log(nodes.length);

    nodes = board.update(nodes);
}
  
// If the window is resized, resize the canvas to the new window size
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function visualzeButtonPressed() {

    if(!search && backtrack) {
        board.reset();
        board.display();

        search = false;
        backtrack = false;
    } else {
        search = true;
    }
    
}

function doubleClicked(event) {
    var node = board.findNode(event.layerX, event.layerY);

    if(node != null) {
        node.setVisited(true);
        nodes.push(node);
    }
}


function mouseDragged(event) {
    
    var node = board.findNode(event.layerX, event.layerY);

    if(node != null) {

        if(node.isWall()) {
            node.setWall(false);
        } else {
            node.setWall(true);
        }
        
        nodes.push(node);
    }
}