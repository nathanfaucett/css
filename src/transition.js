var prefixes = require("./prefixes"),
    prefixArray = require("./prefixArray");


module.exports = transition;


function transition(styles, transitions) {
    var i = -1,
        il = prefixes.length - 1,
        prefix;

    while (i++ < il) {
        prefix = prefixes[i];
        styles[prefix.js + "Transition"] = prefixArray(prefix.css, transitions).join(", ");
    }

    styles.transition = transitions.join(", ");

    return styles;
}
