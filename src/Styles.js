var forEach = require("for_each"),
    indexOf = require("index_of"),
    capitalizeString = require("capitalize_string"),
    transition = require("./transition"),
    textShadow = require("./textShadow"),
    properties = require("./properties"),
    nonPrefixProperties = require("./nonPrefixProperties"),
    prefix = require("./prefix");


var Array_slice = Array.prototype.slice,
    StylesPrototype;


module.exports = Styles;


var css = require("./index");


function Styles() {}
StylesPrototype = Styles.prototype;

forEach(properties, function(key) {
    if (indexOf(nonPrefixProperties, key) === -1) {
        StylesPrototype["set" + capitalizeString(key)] = function(value) {
            return prefix(this, key, value, null, css.stopPrefix);
        };
    } else {
        StylesPrototype["set" + capitalizeString(key)] = function(value) {
            this[key] = value;
            return this;
        };
    }
});

StylesPrototype.setTransition = function() {
    return transition(this, Array_slice.call(arguments));
};

StylesPrototype.setTextShadow = function() {
    return textShadow(this, Array_slice.call(arguments));
};
