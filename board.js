

function board() {

    this.w = 8;
    this.columns = width/this.w;
    this.rows = height/this.w;

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

    }

}