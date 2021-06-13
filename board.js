function board() {

    // Width of the cells
    this.w = 8;

    // Amount of columns and rows based on width/height and width of cell
    this.columns = Math.round(width/this.w);
    this.rows = Math.round(height/this.w);

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

        var randCol = Math.round(Math.random() * this.columns);
        var randRow = Math.round(Math.random() * this.rows);

        this.board[randCol][randRow].setGoal(true);
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

        if(north != -1) {
            neighbors.push(north);
        }

        var south = this.getNode(x, y + 1);

        if(south != -1) {
            neighbors.push(south);
        }

        var east = this.getNode(x + 1, y);

        if(east != -1) {
            neighbors.push(east);
        }

        var west = this.getNode(x - 1, y);

        if(west != -1) {
            neighbors.push(west);
        }

        return neighbors;
    };
}