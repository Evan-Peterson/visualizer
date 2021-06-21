
function greedy(board, startCol, startRow, goalCol, goalRow) {

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

                neighbors.setDepth(v.getDepth() + 1);

                // Get the distance to the goal node and set the distance
                var dist = neighbors[i].findDistance(goalRow, goalCol);
                neighbors[i].setDistance(dist);

                
                
            }
        }

    };

}