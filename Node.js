

function Node(x, y, w, isGoal, visited) {

    // x and y coordinates for the node
    this.x = x;
    this.y = y;

    // Width to of the node
    this.w = w;

    // True if the node is the goal node or not
    this.isGoal = false;

    this.visited = false;

    // Draws a rectangle at the nodes x y position and 
    // colors it according to whether it is the target or not
    this.display = function() {
        if(this.isGoal) {
            fill(66, 245, 138)
        } else {
            fill(51);
        }
        
        rect(this.x, this.y, this.w,this.w);
    };

    // Getters and setter of isGoal
    this.isTarget = function() {
        return isGoal;
    };

    this.setGoal = function(isGoal) {
        this.isGoal = isGoal;
    };

    this.isVisited = function() {
        return this.visited;
    };

    this.setVisited = function(visited) {
        this.visited = visited;
    };
}