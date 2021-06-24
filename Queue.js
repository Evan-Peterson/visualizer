
function Queue() {

    // Amount of children each node has
    this.k = 2;

    // List containing all of the keys
    this.heap = [];

    // Main queue functions

    // Adds element to the queue
    this.enqueue = function(node) {
        // Add node to heap
        this.heap.push(node);

        // Restore up to maintian heap property
        this.restoreDown(this.heap.length - 1);
    };

    // Removes an item from the queue
    this.dequeue = function() {

        // Get the first element of the heap
        // Should be the highest priority
        // var result = this.heap.shift();

        // if(this.heap.length != 0) {
        //     this.heap.unshift(this.heap.pop());

        //     this.restoreDown(0);
        // }

        var min = this.findMin();

        var result = this.heap[min];

        this.heap.splice(min, 1);


        return result;
    };

    // this.insert = function() {
        
    // };

    // this.extractMin = function() {

    // };

    this.findMin = function() {
        var min = 0;

        for(var i = 0;i < this.heap.length;i++) {
            if(this.heap[i].getDistance() < this.heap[min].getDistance()) {
                min = i;
            }
        }

        return min;
    };
 
    // Returns true if the heap is empty
    this.isEmpty = function() {
        return this.heap.length == 0;
    };

    /**
     * Recursively swap keys until the heap satifies heap properties
     * @param {Integer} key index of the node being heapified
     */
    this.restoreDown = function(key) {
        // Get the left and right children
        var left = (2 * key) + 1;
        var right = (2 * key) + 2;

        // Find the smallest between the children and the key
        var smallest = key;

        if(left < this.heap.length) {
            if(this.heap[left].getDistance() < this.heap[key].getDistance()) {
                smallest = left;
            }
        }

        if(right < this.heap.length) {
            if(this.heap[right].getDistance() < this.heap[key].getDistance()) {
                smallest = right;
            }
        }


        // If the smallest is not the key
        // Then swap the key and the smallest
        // Recursively call the function on the smallest 

        if(smallest != key) {
            var temp = this.heap[key];
            this.heap[key] = this.heap[smallest];
            this.heap[smallest] = temp;

            this.restoreDown(smallest);
        }
    };

    /**
     * Restores the heap up from the bottom to maintain heap property
     * Recursive
     * @param {Int} key key to restore on
     */
    this.restoreUp = function(key) {

    };

    /**
     * Prints out the heap array for debug purposes
     */
    this.print = function() {
        var output = "";
        for(var i = 0;i < this.heap.length;i++) {
            output += this.heap[i].getDistance() + ", ";
        }

        console.log(output);
    };

}