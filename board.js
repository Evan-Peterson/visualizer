function board() {

    this.w = 8;
    this.columns = Math.round(width/this.w);
    this.rows = Math.round(height/this.w);

    this.start;

    this.board = new Array(this.columns);
    for(var i = 0;i < this.columns;i++) {
        this.board[i] = new Array(this.rows);
    }


    this.init = function() {
        for(var i = 0;i < this.columns;i++) {
            for(var j = 0;j < this.rows;j++) {
                this.board[i][j] = new Node(i*this.w, j*this.w, this.w, false, false, j, i);
            }
        }

        var randCol = Math.round(Math.random() * this.columns);
        var randRow = Math.round(Math.random() * this.rows);

        this.board[randCol][randRow].setGoal(true);

        // this.board[10][10].setGoal(true); // Middle
        // this.board[11][10].setVisited();  // East
        // this.board[9][10].setVisited();   // West
        // this.board[10][11].setVisited();  // South
        // this.board[10][9].setVisited();   // North

        console.log("cols: " + this.columns);
        console.log("rows: " + this.rows);
    };
    this.init();

    this.display = function() {
        for(var i = 0;i < this.columns;i++) {
            for(var j = 0;j < this.rows;j++) {
                this.board[i][j].display();
            }
        }
    };

    this.getNode = function(col, row) {

        if(row >= this.getRows() || col >= this.getCols() || row < 0 || col < 0) {
            return -1;
        }

        return this.board[col][row];
    };

    this.getCols = function() {
        return this.board.length;
    };

    this.getRows = function() {
        return this.board[0].length;
    };

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