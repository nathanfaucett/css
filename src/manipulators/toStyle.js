var color = require("color");


module.exports = toStyle;


function toStyle(value) {
    if (value[3] === 1) {
        return color.toHEX(value);
    } else {
        return color.toRGBA(value);
    }
}
