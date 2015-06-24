var prefixes = require("./prefixes");


module.exports = textShadow;


var css = require("./index");


function textShadow(styles, textShadows) {
    var i, il, prefix;

    if (css.stopPrefix !== true) {
        i = -1;
        il = prefixes.length - 1;

        while (i++ < il) {
            prefix = prefixes[i];
            styles[prefix.js + "TextShadow"] = textShadows.join(", ");
        }
    }

    styles.textShadow = textShadows.join(", ");

    return styles;
}
