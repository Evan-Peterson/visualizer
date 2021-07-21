function board() {

    // Width of the cells
    this.w = 16;

    // Amount of columns and rows based on width/height and width of cell
    this.columns = Math.round(width/this.w);
    this.rows = Math.round(height/this.w);

    // Creates 2D array with columns as the outer array
    // This mimics x y coordinate plane
    this.board = new Array(this.columns);
    for(var i = 0;i < this.columns;i++) {
        this.board[i] = new Array(this.rows);
    }

    /**
     * Initializes each cell of the board to a new Node object
     * Also randomly selects a row and col for the goal
     */
    this.init = function() {
        for(var i = 0;i < this.columns;i++) {
            for(var j = 0;j < this.rows;j++) {
                this.board[i][j] = new Node(i*this.w, j*this.w, this.w, false, false, j, i);
            }
        }
    };
    this.init();

    /**
     * Loops through all of the nodes and updates them
     * Redraws every node even if they didnt change
     */
    this.display = function() {
        for(var i = 0;i < this.columns;i++) {
            for(var j = 0;j < this.rows;j++) {
                this.board[i][j].display();
            }
        }
    };

    /**
     * Resets all the nodes in the board to their default values
     */
    this.reset = function() {
        for(var i = 0;i < this.columns;i++) {
            for(var j = 0;j < this.rows;j++) {
                this.board[i][j].reset();
            }
        }
    };

    /**
     * Loops through given list of nodes and redraws them
     * @param {ArrayList} nodes list of nodes to update
     * @returns empty list
     */
    this.update = function(nodes) {
        for(var i = 0;i < nodes.length;i++) {
            nodes[i].display();
        }

        return [];
    };

    /**
     * Returns the node at the col row given
     * Returns -1 if the given col row is out of bounds
     * @param {Int} col column of node to find
     * @param {Int} row row of node to find
     * @returns Node 
     */
    this.getNode = function(col, row) {

        if(row >= this.getRows() || col >= this.getCols() || row < 0 || col < 0) {
            return -1;
        }

        return this.board[col][row];
    };

    /**
     * Finds the node in the board that is within the given x and y
     * Returns the node if found or null if not
     * @param {Double} x given x value on the canvas
     * @param {*} y given y value on the canvas
     * @returns Node
     */
    this.findNode = function(x, y) {

        for(var i = 0;i < this.columns;i++) {
            for(var j = 0;j < this.rows;j++) {
                if((x >= this.board[i][j].getX() && x <= (this.board[i][j].getX() + this.w)) && 
                (y >= this.board[i][j].getY() && y <= (this.board[i][j].getY() + this.w))) {
                    return this.board[i][j];
                }
            }
        }

        return null;
    };

    /**
     * Returns number of columns in board
     * @returns Integer
     */
    this.getCols = function() {
        return this.board.length;
    };

    /**
     * Returns number of rows in board
     * @returns Integer
     */
    this.getRows = function() {
        return this.board[0].length;
    };

    /**
     * Returns an array of cells directly adjacent to the given x and y
     * If the given x and y is at an edge, then it returns only the neighbors that exist
     * @param {Integer} x given column
     * @param {Integer} y given row
     * @returns Array of Nodes
     */
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

    /**
     * Backtracts from the goal to the start using node depth to find the 
     * shortest path
     * @param {ArrayList} nodes list of nodes that need to be updated
     * @param {Integer} col given column  
     * @param {Integer} row given row
     * @returns Boolean
     */
    this.backTrack = function(nodes, col, row) {

        // Set the first node to the goal
        var curNode = this.getNode(col, row);

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