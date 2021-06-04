
function bfs(board) {

     for(var i = 0;i < board.getCols();i++) {
        console.log(board.getNode(i,0).isTarget());
    }
}