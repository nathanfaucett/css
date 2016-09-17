var prefixes = require("./prefixes"),
    prefixArray = require("./prefixArray");


module.exports = transition;


var css = require("./index");


function transition(styles, transitions) {
    var i, il, prefix;

    if (css.stopPrefix !== true) {
        i = -1;
        il = prefixes.length - 1;

        while (i++ < il) {
            prefix = prefixes[i];
            styles[prefix.js + "Transition"] = prefixArray(prefix.css, transitions).join(", ");
        }
    }

    styles.transition = transitions.join(", ");

    return styles;
}
