

function Node(x, y, w, isGoal, visited) {

    // x and y coordinates for the node
    this.x = x;
    this.y = y;

    // True if the node has been visited, false if not
    this.visited = visited;

    // Color data for the node, defaults to grey
    this.r = 51;
    this.g = 51;
    this.b = 51;

    // True if the node is the start or not
    this.start = false;

    if(isGoal) {
        this.setColor(66, 245, 138);
    }

    // Width to of the node
    this.w = w;

    // True if the node is the goal node or not
    this.isGoal = false;

    this.visited = false;

    // Draws a rectangle at the nodes x y position and 
    // colors it according to whether it is the target or not
    this.display = function() {

        fill(this.r, this.g, this.b);
        
        rect(this.x, this.y, this.w, this.w);
    };

    // Getters and setter of isGoal
    this.isTarget = function() {
        return isGoal;
    };

    this.setGoal = function(isGoal) {
        this.isGoal = isGoal;
        this.setColor(66, 245, 138);
    };

    this.isVisited = function() {
        return this.visited;
    };

    this.setVisited = function(visited) {
        this.visited = visited;
        if(!start) {
            this.setColor(105, 157, 240);
        }
        
    };

    this.isStart = function() {
        return this.start;
    };

    this.setStart = function() {
        this.start = true;
        this.setColor(255, 255, 255);
    };

    this.setColor = function(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    };
}