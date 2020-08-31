# ElixirEngine
The game engine that was built specifically for our 2D games.

![Known Vulnerabilities](https://snyk.io/test/github/dwyl/hapi-auth-jwt2/badge.svg?targetFile=package.json&style=flat-square)
[![CircleCI Build Status](https://circleci.com/gh/electron/electron/tree/master.svg?style=shield)](https://circleci.com/gh/electron/electron/tree/master)
[![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/4lggi9dpjc1qob7k/branch/master?svg=true)](https://ci.appveyor.com/project/electron-bot/electron-ljo26/branch/master)
[![devDependency Status](https://david-dm.org/electron/electron/dev-status.svg)](https://david-dm.org/electron/electron?type=dev)

Developed and maintaned by Elixir Build 2020 - 2020

## How to use

Add an `onload="start()"` function we can create objects in the canvas.
Also, create a canvas with an id attribute.

`index.html`
```html
<html>
  <head>
    <script src="script.js"></script>
    <title>Document</title>
  </head>
  <body onload="start()">
    <!-- A canvas that you can play on -->
    <canvas id="world"></canvas>
  </body>
</html>
```

# Components
These components are for what type of object you want.
If you wanted a normal object you could just use the `Gravity()` function.
If you wanted a bouncy object you could just use `Bounce()`.
If you want a rotating/spinning object you can use `Rotate()`.

Then create a js file.
`script.js`
```js
// with this function we can style canvas
canvas("world", 0, 0, "darkslategray");

// add some objects
var Obj;
var Wall;
var WallRight;

function start() {
    Obj = new Bounce(30, 30, "white", 144, 0.1);
    Wall = new Gravity(10, 270, "black", 0.1, 1)
    WallRight = new Gravity(10, 270, "black", 990, 20)

    GameArea.start();
}

// modify the scene
var GameArea = {
    canvas: document.getElementById("world"),
    start: function () {
        this.canvas.width = 1000;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);

        window.addEventListener('keydown', function (e) {
            GameArea.keys = (GameArea.keys || []);
            GameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            GameArea.keys[e.keyCode] = (e.type == "keydown");
        })
    },
    stop: function () {
        clearInterval(this.interval);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

// update the object's position
function updateGameArea() {
    GameArea.clear();
    Obj.newPos();
    Obj.update();

    Wall.newPos();
    Wall.update();

    WallRight.newPos();
    WallRight.update();
}
```

You can also use other components other than `bounce()`.

Normal Gravity
```js
Obj = new Gravity(30, 30, "white", 144, 0.1);
```

Rotate an object
```js
Obj = new Rotate(30, 30, "white", 144, 0.1);
```
But if you use the rotate component, the `updateGameArea` function will be different.
```js
function updateGameArea() {
    GameArea.clear();
    Obj.angle += 10 * Math.PI / 180;
    Obj.update();

    Wall.newPos();
    Wall.update();

    WallRight.newPos();
    WallRight.update();
}
```

The number before `Math.PI` is the speed.

## Versions
### - 0.1
First release of ElixirEngine.

## Credits
- Rogan Wido - Programmer
- Othnian Guzman - Assistant Programmer
