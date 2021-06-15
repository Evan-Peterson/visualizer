function board() {

    // Width of the cells
    this.w = 16;

    // Amount of columns and rows based on width/height and width of cell
    this.columns = Math.round(width/this.w);
    this.rows = Math.round(height/this.w);

    this.goalCol;
    this.goalRow;

    this.start;

    // Creates 2D array with columns as the outer array
    // This mimics x y coordinate plane
    this.board = new Array(this.columns);
    for(var i = 0;i < this.columns;i++) {
        this.board[i] = new Array(this.rows);
    }

    // Initializes each cell of the board to a new Node object
    // Also randomly selects a row and col for the goal
    this.init = function() {
        for(var i = 0;i < this.columns;i++) {
            for(var j = 0;j < this.rows;j++) {
                this.board[i][j] = new Node(i*this.w, j*this.w, this.w, false, false, j, i);
            }
        }

        this.goalCol = Math.round(Math.random() * (this.columns - 1));
        this.goalRow = Math.round(Math.random() * (this.rows - 1));

        // this.goalCol = 50;
        // this.goalRow = 50;

        this.board[this.goalCol][this.goalRow].setGoal(true);
    };
    this.init();

    // Displays the nodes in the board to the screen
    this.display = function() {
        for(var i = 0;i < this.columns;i++) {
            for(var j = 0;j < this.rows;j++) {
                this.board[i][j].display();
            }
        }
    };

    this.update = function(nodes) {
        for(var i = 0;i < nodes.length;i++) {
            nodes[i].display();
        }
    };

    // Returns the node at the col row given
    // Returns -1 if the given col row is out of bounds
    this.getNode = function(col, row) {

        if(row >= this.getRows() || col >= this.getCols() || row < 0 || col < 0) {
            return -1;
        }

        return this.board[col][row];
    };

    // Returns number of columns
    this.getCols = function() {
        return this.board.length;
    };

    // Returns number of rows
    this.getRows = function() {
        return this.board[0].length;
    };


    // Returns an array of cells directly adjacent to the given x and y
    // If the given x and y is at an edge, then it returns only the neighbors that exist
    this.getNeighbors = function(x, y) {
        var neighbors = [];

        var north = this.getNode(x, y - 1);

        if(north != -1 && !north.isWall()) {
            neighbors.push(north);
        }

        var south = this.getNode(x, y + 1);

        if(south != -1 && !south.isWall()) {
            neighbors.push(south);
        }

        var east = this.getNode(x + 1, y);

        if(east != -1 && !east.isWall()) {
            neighbors.push(east);
        }

        var west = this.getNode(x - 1, y);

        if(west != -1 && !west.isWall()) {
            neighbors.push(west);
        }

        return neighbors;
    };

    // Backtracts from the goal to the start using node depth to find the 
    // shortest path
    this.backTrack = function(nodes) {

        // Set the first node to the goal
        var curNode = this.getNode(this.goalCol, this.goalRow);

        // Loop while the current node is not the start
        while(!curNode.isStart()) {

            // Get all the neighbors for the current node
            var neighbors = this.getNeighbors(curNode.getCol(), curNode.getRow());

            // minimum depth node index
            var min = 9999;

            // Loop through all the neighbors and find the one with the smallest depth
            for(var i = 0;i < neighbors.length;i++) {
                // if the depth is lower than the min and is visited, set the min to current index
                if(neighbors[i].getDepth() < curNode.getDepth() && neighbors[i].isVisited()) {
                    min = i;
                }
            }

            
            // if node smaller node depth was found, return
            if(min == 9999) {
                return true;
            }

            // Set the node in the path to yellow if it is not the start
            if(!neighbors[min].isStart()) {
                neighbors[min].setColor(255, 228, 94);
            }
            
            // push the node to the list of nodes to be updated
            nodes.push(neighbors[min]);
            // Set the current node to the new smallest depth node
            curNode = neighbors[min];
        }
    };
}