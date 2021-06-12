
function bfs(board, startCol, startRow) {

    this.startCol = startCol;
    this.startRow = startRow;

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

            var neighbors = board.getNeighbors(v.getCol(), v.getRow());

            for(var i = 0;i < neighbors.length;i++) {
                if(!neighbors[i].isVisited()) {
                    neighbors[i].setVisited(true);
                    queue.push(neighbors[i]);
                }
            }
        }
    };
    
}