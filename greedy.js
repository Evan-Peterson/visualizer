
function greedy(board, startCol, startRow, goalCol, goalRow) {

    this.q = new Queue();
    board.getNode(startCol, startRow).setVisited(true);
    this.q.enqueue(board.getNode(startCol, startRow));

    /**
     * Performs a single step in the greedy seach algorithm
     * @param {ArrayList} nodes list of nodes that need to be updated
     * @returns false if the target it found, true otherwise
     */
    this.step = function(nodes) {
        var v = this.q.dequeue();

        if(v.isTarget()) {
            return false;
        }

        var neighbors = board.getNeighbors(v.getCol(), v.getRow());

        for(var i = 0;i < neighbors.length;i++) {
            if(!neighbors[i].isVisited()) {
                neighbors[i].setVisited(true);

                neighbors[i].setDepth(v.getDepth() + 1);

                // Get the distance to the goal node and set the distance
                var dist = neighbors[i].findDistance(goalRow, goalCol);
                neighbors[i].setDistance(dist);

                this.q.enqueue(neighbors[i]);

                nodes.push(neighbors[i]);
                
            }
        }

        return true;
    };

}