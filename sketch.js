
var board;
var bfs;
var search;
var backtrack;
var nodes;

var dragStart = false;

var startCol;
var startRow;


// Initial canvas setup
function setup() {
    // Subtracts 25 from windowHeight to try and get rid of scroll bar

    createCanvas(windowWidth, windowHeight - 25);

    frameRate(120);

    board = new board();
    nodes = [];

    // Generate random row and column for start node
    startCol = Math.round(Math.random() * (board.getCols() - 1));
    startRow = Math.round(Math.random() * (board.getRows() - 1));

    // Set color of start to white
    board.getNode(startCol, startRow).setStart(true);

    bfs = new bfs(board, startCol, startRow);

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

// Gets called when the mouse is being clicked and dragged
function mouseDragged(event) {
    
    // Find the node that is being clicked on
    var node = board.findNode(event.layerX, event.layerY);

    
    if(node != null) {

        if(dragStart) {
            console.log("first if");
            var start = board.getNode(startCol, startRow);
            start.setStart(false);

            node.setStart(true);

            startCol = node.getCol();
            startRow = node.getRow();

            nodes.push(start);
            nodes.push(node);
        } else if(!node.isTarget() && !node.isStart()) { // Only add wall if it is not the start or target
            console.log("second");
            // Delete wall if right clicking
            if(event.which == 3) {
                node.setWall(false);
            } else if(event.which == 1) { // Set wall if left clicking
                node.setWall(true);
            }
            
            // Add node to list to be updated
            nodes.push(node);
        } else {
            if(node.isStart()) {
                dragStart = true;
                console.log(event);
            }
        }
    }
}

// Called when mouse is released
// Used to know when the mouse has finished dragging
function mouseReleased() {
    dragStart = false;
}