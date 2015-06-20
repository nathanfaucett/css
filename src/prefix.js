var prefixes = require("./prefixes"),
    capitalizeString = require("capitalize_string");


module.exports = prefix;


function prefix(styles, key, value, prefixValue) {
    var i = -1,
        il = prefixes.length - 1,
        pre;

    prefixValue = prefixValue === true;

    while (i++ < il) {
        pre = prefixes[i];
        styles[pre.js + capitalizeString(key)] = prefixValue ? pre.css + value : value;
    }

    styles[key] = value;

    return styles;
}
