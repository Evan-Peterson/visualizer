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

        // var randColStart = Math.round(Math.random() * this.columns);
        // var randRowStart = Math.round(Math.random() * this.row);

        // this.board[randColStart][randRowStart].setGoal(true);
        // console.log(this.board[10][10]);

        this.board[randCol][randRow].setGoal(true);
        // this.board[randColStart][randRowStart].set
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