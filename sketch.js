
var board;
var bfs;
var search;
var backtrack;
var nodes;

var dragStart = false;
var dragTarget = false;

var startCol;
var startRow;

var goalCol;
var goalRow;


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

    goalCol = Math.round(Math.random() * (board.getCols() - 1));
    goalRow = Math.round(Math.random() * (board.getRows() - 1));

    board.getNode(goalCol, goalRow).setGoal(true);

    // console.log(board.getNode(goalCol, goalRow));

    bfs = new bfs(board, startCol, startRow);
    greedy = new greedy(board, startCol, startRow, goalCol, goalRow);

    search = false;
    backtrack = false;

    board.display();

    let visButtoon = select("#button");

    visButtoon.mousePressed(visualzeButtonPressed);

    // var q = new Queue();

    // var n0 = new Node();
    // n0.setDistance(1);

    // var n1 = new Node();
    // n1.setDistance(11);

    // var n2 = new Node();
    // n2.setDistance(2);

    // var n3 = new Node();
    // n3.setDistance(3);

    // var n4 = new Node();
    // n4.setDistance(10);

    // var n5 = new Node();
    // n5.setDistance(9);

    

    // q.enqueue(n0);
    // q.enqueue(n1);
    // q.enqueue(n2);
    // q.enqueue(n3);
    // q.enqueue(n4);
    // q.enqueue(n5);

    // q.print();

    // q.dequeue();

    // q.print();

    // q.dequeue();

    // q.print();


}

// Continually looping function that draws things to the canvas
function draw() {

    if(search) {
        search = greedy.step(nodes);

        if(!search) {
            backtrack = true;
            board.backTrack(nodes, goalCol, goalRow);
        }
    }


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

// function search(alg) {

// }

// Gets called when the mouse is being clicked and dragged
function mouseDragged(event) {
    
    // Find the node that is being clicked on
    var node = board.findNode(event.layerX, event.layerY);

    
    if(node != null) {

        // If the user is dragging the start node
        if(dragStart) {
            // Find the start node in the board
            var start = board.getNode(startCol, startRow);
            
            // Set the previous start to false and the new node to the start
            start.setStart(false);
            node.setStart(true);

            // Update the start row and col
            startCol = node.getCol();
            startRow = node.getRow();

            // Add both nodes to list to be updated
            nodes.push(start);
            nodes.push(node);
        } else if(dragTarget) { // If the user is dragging the target

            // Find the target
            var target = board.getNode(goalCol, goalRow);

            // Set previous target to false and new target to the current node
            target.setGoal(false);
            node.setGoal(true);

            // Update the goal row and col
            goalCol = node.getCol();
            goalRow = node.getRow();

            // Add both nodes to be updated
            nodes.push(target);
            nodes.push(node);
            
        } else if(!node.isTarget() && !node.isStart()) { // Only add wall if it is not the start or target
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
            } else if(node.isTarget()) {
                dragTarget = true;
            }
        }
    }
}

// Called when mouse is released
// Used to know when the mouse has finished dragging
function mouseReleased() {
    dragStart = false;
    dragTarget = false;
}