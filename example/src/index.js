var css = global.css = require("../..");


var styles = {};


css.alignContent(styles, "left");
css.transition(
    styles,
    "background 200ms "+ css.easing.inOut +" 0ms",
    "opacity 100ms "+ css.easing.out +" 0ms",
    "width 100ms "+ css.easing["in"] +" 0ms"
);
css.textShadow(styles, "0 0 2px #000", "0 2px 2px #000");


console.log(styles);
