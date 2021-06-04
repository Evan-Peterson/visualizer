

function Node(x, y, w, isGoal) {

    // x and y coordinates for the node
    this.x = x;
    this.y = y;

    // Width to of the node
    this.w = w;

    // True if the node is the goal node or not
    this.isGoal = false;

    this.display = function() {
        if(this.isGoal) {
            fill(66, 245, 138)
        } else {
            fill(51);
        }
        
        rect(this.x, this.y, this.w,this.w);
    };

    this.isTarget = function() {
        return isGoal;
    };

    this.setGoal = function(isGoal) {
        this.isGoal = isGoal;
    };
}