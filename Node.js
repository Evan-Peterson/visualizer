

function Node(x, y, w, isGoal) {

    // x and y coordinates for the node
    this.x = x;
    this.y = y;

    // Width to of the node
    this.w = w;

    // True if the node is the goal node or not
    this.isGoal = false;

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
}