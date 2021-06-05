function board() {

    this.w = 8;
    this.columns = Math.round(width/this.w);
    this.rows = Math.round(height/this.w);

    this.board = new Array(this.columns);
    for(var i = 0;i < this.columns;i++) {
        this.board[i] = new Array(this.rows);
    }


    this.init = function() {
        for(var i = 0;i < this.columns;i++) {
            for(var j = 0;j < this.rows;j++) {
                this.board[i][j] = new Node(i*this.w,j*this.w, this.w, false);
            }
        }

        var randCol = Math.round(Math.random() * this.columns);
        var randRow = Math.round(Math.random() * this.rows);

        this.board[randCol][randRow].setGoal(true);

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
        return this.board[col][row];
    };

    this.getCols = function() {
        return this.board.length;
    };

    this.getRows = function() {
        return this.board[0].length;
    };
}