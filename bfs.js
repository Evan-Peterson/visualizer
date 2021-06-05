
function bfs(board) {

      for(var i = 0;i < board.getRows();i++) {
        console.log(board.getNode(i,0).isTarget());
    }
}