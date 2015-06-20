var forEach = require("for_each"),
    indexOf = require("index_of"),
    fastSlice = require("fast_slice"),
    prefix = require("./prefix"),
    properties = require("./properties"),
    transition = require("./transition"),
    nonPrefixProperties = require("./nonPrefixProperties");


var css = exports;


forEach(properties, function(key) {
    if (indexOf(nonPrefixProperties, key) === -1) {
        css[key] = function(styles, value) {
            return prefix(styles, key, value);
        };
    } else {
        css[key] = function(styles, value) {
            styles[key] = value;
            return styles;
        };
    }
});

css.opacity = require("./opacity");

css.transition = function(styles) {
    return transition(styles, fastSlice(arguments, 1));
};

css.prefixes = require("./prefixes");
css.properties = properties;

css.Styles = require("./Styles");
