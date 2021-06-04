

function Node(x,y,w) {

    this.x = x;
    this.y = y;
    this.w = w;

    this.display = function() {
        fill(51);
        rect(this.x, this.y, this.w,this.w);
    };
}