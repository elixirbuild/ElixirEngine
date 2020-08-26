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
