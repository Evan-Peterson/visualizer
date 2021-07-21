

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

    this.distance = Infinity;

    /**
     * Draws a rectangle at the nodes x y position and 
     * colors it according to whether it is the target or not
     */
    this.display = function() {

        fill(this.r, this.g, this.b);

        // Uncomment to show depth
        // fill(10 * this.depth, 10 * this.depth, 10 * this.depth);
        
        rect(this.x, this.y, this.w, this.w);
    };

    /**
     * Getters and setter of isGoal
     * @returns true if node is goal, false otherwise
     */
    this.isTarget = function() {
        return this.isGoal;
    };

    /**
     * Sets the node isGoal to the given boolean value
     * sets the color depending if it is true or not
     * @param {Boolean} isGoal value to set isGoal to
     */
    this.setGoal = function(isGoal) {
        this.isGoal = isGoal;

        if(this.isGoal) {
            this.setColor(156, 227, 100);
        } else {
            this.setColor(51, 51, 51);
        }
        
    };

    /**
     * Returns true if visited, false otherwise
     * @returns boolean true or false
     */
    this.isVisited = function() {
        return this.visited;
    };

    /**
     * Setter for visited instance variable
     * Sets the color to blue if it is not the start and not the goal
     * @param {Boolean} visited true or false
     */
    this.setVisited = function(visited) {
        this.visited = visited;
        if(!this.start && !this.isGoal) {
            this.setColor(90, 169, 230);
        }
        
    };

    /**
     * Returns true if it is the start
     * @returns true or false
     */
    this.isStart = function() {
        return this.start;
    };

    /**
     * Sets this node to the start
     * Changes the color to red
     * @param {Boolean} val true or false
     */
    this.setStart = function(val) {
        this.start = val;

        if(this.start) {
            this.setColor(255, 99, 146);
        } else {
            this.setColor(51, 51, 51);
        }
        
    };

    /**
     * Sets the color of this node with the given rgb values
     * @param {Int} r number between 0 255
     * @param {Int} g number between 0 255
     * @param {Int} b number between 0 255
     */
    this.setColor = function(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    };

    /**
     * Returns this node's row in the board
     * @returns integer row of this node
     */
    this.getRow = function() {
        return this.row;
    };

    /**
     * Returns this node's col in the board
     * @returns integer
     */
     this.getCol = function() {
        return this.col;
    };

    /**
     * Returns the x value of the node's place on the canvas
     * @returns integer
     */
    this.getX = function() {
        return this.x;
    };

    /**
     * Returns the y value of the node's place on the canvas
     * @returns integer
     */
    this.getY = function() {
        return this.y;
    };

    /**
     * Returns the number of nodes from the start this node is
     * @returns integer value representing the depth
     */
    this.getDepth = function() {
        return this.depth;
    };

    /**
     * Sets depth of the node
     * @param {Int} depth integer
     */
    this.setDepth = function(depth) {
        this.depth = depth;
    };

    /**
     * Returns true if wall, false otherwise
     * @returns boolean
     */
    this.isWall = function() {
        return this.wall;
    };

    /**
     * Returns the distance of the node to the target
     * @returns double
     */
    this.getDistance = function() {
        return this.distance;
    };

    /**
     * Sets the distance of the node to given value
     * @param {Double} distance distance to start
     */
    this.setDistance = function(distance) {
        this.distance = distance;
    };

    /**
     * Returns the Euclidean distance between this node and the given row col
     * @param {Integer} row row of the node 
     * @param {Integer} col column of the node
     * @returns euclidean distance from this node to the given node
     */
    this.findDistance = function(row, col) {
        return Math.sqrt((this.row - row)*(this.row - row) + (this.col - col)*(this.col - col));
    };

    /**
     * Set wall to given value and set to white if true, else set to default grey
     * @param {Boolean} wall true or false
     */
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

    /**
     * Resets the node to the default values
     */
    this.reset = function() {
        this.visited = false;
        this.depth = 0;

        // If it is not the goal or the start, set the color to grey
        if(!this.isGoal && !this.start) {
            this.setColor(51, 51, 51);
        }
        
    };
}