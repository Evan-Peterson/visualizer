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
                this.board[i][j] = new Node(i*this.w,j*this.w, this.w);
            }
        }

    };
    this.init();

    this.display = function() {
        for(var i = 0;i < this.columns;i++) {
            for(var j = 0;j < this.rows;j++) {
                this.board[i][j].display();
            }
        }
    };

}