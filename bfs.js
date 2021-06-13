
function bfs(board, startCol, startRow) {

    // Starting point row and column
    this.startCol = startCol;
    this.startRow = startRow;

    // PRobably move this somewhere else
    this.q = [];
    board.getNode(startCol, startRow).setVisited(true);
    this.q.push(board.getNode(startCol, startRow));

    this.step = function(nodes) {
        var v = this.q.shift();

        if(v.isTarget()) {
            return false;
        }

        var neighbors = board.getNeighbors(v.getCol(), v.getRow());

        for(var i = 0;i < neighbors.length;i++) {
            if(!neighbors[i].isVisited()) {
                neighbors[i].setVisited(true);

                nodes.push(neighbors[i]);
                
                this.q.push(neighbors[i]);
            }
        }

        return true;
    };


    /// Uses Breadth First Search to find the goal
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