// this is just the same as gravity

canvas("world", 0, 0, "black");

var Obj;

function start() {
    Obj = new Bounce(30, 80, "white", 144, 85);
    GameArea.start();
}

var GameArea = {
    canvas: document.getElementById("world"),
    start: function () {
        this.canvas.width = 1000;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    stop: function () {
        clearInterval(this.interval);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function updateGameArea() {
    GameArea.clear();
    Obj.newPos();
    Obj.update();
}
