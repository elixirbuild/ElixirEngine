# TODO
## Make a Player Movement Component
Make a `Control()` component for more ineractivity.
```js
Obj = new Control(30, 30, "white", 144, 0.1);
```

Thats why we already have arrow key functions for the `Control()` component. 
```js
window.addEventListener('keydown', function (e) {
  GameArea.keys = (GameArea.keys || []);
  GameArea.keys[e.keyCode] = (e.type == "keydown");
})
window.addEventListener('keyup', function (e) {
  GameArea.keys[e.keyCode] = (e.type == "keydown");
})
```

## Other Ideas
- Make Items Die When Being Touched by the player
