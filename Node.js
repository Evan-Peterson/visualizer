

function Node(x, y, w, isGoal, visited, row, col) {

    // x and y coordinates for the node
    this.x = x;
    this.y = y;

    // Row and column of the node
    this.row = row;
    this.col = col;

    // True if the node has been visited, false if not
    this.visited = visited;

    // Color data for the node, defaults to grey
    this.r = 51;
    this.g = 51;
    this.b = 51;

    // True if the node is the start or not
    this.start = false;

    // If the node is a goal, set the color to green
    if(isGoal) {
        this.setColor(66, 245, 138);
    }

    // Width to of the node
    this.w = w;

    // Depth of the node from the start
    this.depth = 0;

    // True if the node is the goal node or not
    this.isGoal = false;

    // True if the node has been visited or not
    this.visited = false;

    this.wall = false;

    // Draws a rectangle at the nodes x y position and 
    // colors it according to whether it is the target or not
    this.display = function() {

        fill(this.r, this.g, this.b);

        // Uncomment to show depth
        // fill(10 * this.depth, 10 * this.depth, 10 * this.depth);
        
        rect(this.x, this.y, this.w, this.w);
    };

    // Getters and setter of isGoal
    this.isTarget = function() {
        return this.isGoal;
    };

    // Sets the node isGoal to the given value
    this.setGoal = function(isGoal) {
        this.isGoal = isGoal;

        if(this.isGoal) {
            this.setColor(156, 227, 100);
        } else {
            this.setColor(51, 51, 51);
        }
        
    };

    // Returns true if visited, false otherwise
    this.isVisited = function() {
        return this.visited;
    };

    // Setter for visited instance variable
    // Sets the color to blue if it is not the start and not the goal
    this.setVisited = function(visited) {
        this.visited = visited;
        if(!this.start && !this.isGoal) {
            this.setColor(90, 169, 230);
        }
        
    };

    // Returns true if it is the start
    this.isStart = function() {
        return this.start;
    };

    // Sets this node to the start
    // Changes the color to red
    this.setStart = function(val) {
        this.start = val;

        if(this.start) {
            this.setColor(255, 99, 146);
        } else {
            this.setColor(51, 51, 51);
        }
        
    };

    // Sets the color of this node with the given rgb values
    this.setColor = function(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    };

    // Returns this node's row in the board
    this.getRow = function() {
        return this.row;
    };

    this.getX = function() {
        return this.x;
    };

    this.getY = function() {
        return this.y;
    };

    // Returns this node's col in the board
    this.getCol = function() {
        return this.col;
    };

    // Returns the depth of the node
    this.getDepth = function() {
        return this.depth;
    };

    // Sets depth of the node
    this.setDepth = function(depth) {
        this.depth = depth;
    };

    // Getter for wall
    this.isWall = function() {
        return this.wall;
    };

    // Set wall to given value and set to white if true, else set to default grey
    this.setWall = function(wall) {

        if(!this.isGoal && !this.start) {
            this.wall = wall;
        }
        
        if(this.wall) {
            this.setColor(255, 255, 255);
        } else {
            this.setColor(51, 51, 51);
        }
        
    };

    // Resets the node to the default values
    this.reset = function() {
        this.visited = false;
        this.depth = 0;

        // If it is not the goal or the start, set the color to grey
        if(!this.isGoal && !this.start) {
            this.setColor(51, 51, 51);
        }
        
    };
}