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
                this.board[i][j] = new Node(i*this.w,j*this.w, this.w, false, false);
            }
        }

        var randCol = Math.round(Math.random() * this.columns);
        var randRow = Math.round(Math.random() * this.rows);

        this.board[randCol][randRow].setGoal(true);

        // this.board[10][10].setGoal(true);
        // this.board[11][10].setStart();
        // this.board[9][10].setStart();
        // this.board[10][11].setStart();
        // this.board[10][9].setStart();
    };
    this.init();

    this.display = function() {
        for(var i = 0;i < this.columns;i++) {
            for(var j = 0;j < this.rows;j++) {
                this.board[i][j].display();
            }
        }
    };

    this.getNode = function(row, col) {

        if(row > this.getRows() || col > this.getCols()) {
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

        neighbors.push(this.getNode(x - 1, y));
        neighbors.push(this.getNode(x + 1, y));
        neighbors.push(this.getNode(x, y - 1));
        neighbors.push(this.getNode(x, y + 1));

        return neighbors;
    };
}