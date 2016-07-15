var color = require("@nathanfaucett/color"),
    toStyle = require("./toStyle");


var fade_color = color.create();


module.exports = fade;


function fade(style, amount) {
    var value = fade_color;
    color.fromStyle(value, style);
    value[3] *= amount;
    return toStyle(value);
}
