
function bfs(board, startCol, startRow) {

    this.startCol = startCol;
    this.startRow = startRow;

    // for(var i = 0;i < board.getRows();i++) {
    //     if(!board.getNode(i,0).isTarget()) {
    //         board.getNode(i,0).setVisited(true);
    //     }
        
    // }

    this.step = function() {

    };

    this.find = function() {
        
        // Create a "queue" 
        var queue = [];

        // Set the start node to visited
        board.getNode(startCol, startRow).setVisited(true);

        // Enqueue the start node
        queue.push(board.getNode(startCol, startRow));

        while(queue.length != 0) {
            var v = queue.shift();

            if(v.isTarget()) {
                return v;
            }

            var neighbors = board.getNeighbors(v.getRow(), v.getCol());

            // console.log(v.getX() + ", " + v.getY());
            // console.log(neighbors);

            for(var i = 0;i < neighbors.length;i++) {
                if(!neighbors[i].isVisited()) {
                    neighbors[i].setVisited(true);
                    queue.push(neighbors[i]);
                }
            }
        }
    };
    
}