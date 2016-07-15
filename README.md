css [![Build Status](https://travis-ci.org/nathanfaucett/css.svg?branch=master)](https://travis-ci.org/nathanfaucett/css)
=======

css helpers functions

```javascript
var css = require("@nathanfaucett/css");

var style = {
    background: "#ffffff"
};

css.alignContent(style, "left");
css.transition(
    style,
    "background 200ms "+ css.easing.inOut +" 0ms",
    "opacity 100ms "+ css.easing.out +" 0ms",
    "width 100ms "+ css.easing["in"] +" 0ms"
);
css.textShadow(style, "0 0 2px #000", "0 2px 2px #000");
```
