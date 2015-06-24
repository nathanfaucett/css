var css = global.css = require("../..");


var styles = new css.Styles();


styles.setAlignContent("left");
styles.setTransition("background 200ms linear 0ms", "opacity 100ms linear 0ms");
styles.setTextShadow("0 0 2px #000", "0 2px 2px #000");


console.log(styles);
