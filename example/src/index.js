var css = global.css = require("../..");


var styles = new css.Styles();


styles.setAlignContent("left");
styles.setTransition("background 200ms linear 0ms", "opacity 100ms linear 0ms");


console.log(styles);
