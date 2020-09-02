/*!
 *  render.js
 *  This file holds all the object functions in the module
 *  Copyright (C) 2020 - 2020 Rogan Wido
 *  You have permission to use this module.
*/

// render functions:

// style the canvas
function canvas(engine, width, height, background) {
    var canvas = document.getElementById(engine);
    canvas.width = height;
    canvas.height = width;
    canvas.style.background = background;
}

// create rectangle in the canvas
function createRectangle(engine, backgroundColor, pos1, pos2, pos3, pos4) {
    var canvas = document.getElementById(engine);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(pos1, pos2, pos3, pos4);
}

// create clickable rectangle in the canvas

function createClickable(color, x, y, width, height, f) {
    var elem = document.getElementById('world'),
        elemLeft = elem.offsetLeft,
        elemTop = elem.offsetTop,
        context = elem.getContext('2d'),
        elements = [];

    // Add event listener for `click` events.
    elem.addEventListener('click', function (event) {
        // prevents lagging
        console.clear();

        var x = event.pageX - elemLeft,
            y = event.pageY - elemTop;
        console.log(x, y);
        elements.forEach(function (element) {
            if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
                // runs the function in the "f" parameter
                f();
            }
        });

    }, false);

    // Add element.
    elements.push({
        colour: color,
        width: width,
        height: height,
        top: y,
        left: x
    });

    // Render elements.
    elements.forEach(function (element) {
        context.fillStyle = element.colour;
        context.fillRect(element.left, element.top, element.width, element.height);
    });
}

// Gravity

// Normal Hit
function Gravity(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 2;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.update = function () {
        ctx = GameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function () {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function () {
        var rockbottom = GameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
        }
    }
}    

// Bouncy Hit
function Bounce(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.1;
    this.gravitySpeed = 0;
    this.bounce = 0.6;
    this.update = function () {
        ctx = GameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function () {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function () {
        var rockbottom = GameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }
    }
}

// Movement

// Rotate
function Rotate(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.angle = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = GameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        ctx.restore();
    }
}
