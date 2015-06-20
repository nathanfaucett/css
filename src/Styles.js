var forEach = require("for_each"),
    isFunction = require("is_function"),
    capitalizeString = require("capitalize_string"),
    transition = require("./transition"),
    css = require("./index");


var Array_slice = Array.prototype.slice,
    StylesPrototype;


module.exports = Styles;


function Styles() {}
StylesPrototype = Styles.prototype;

forEach(css, function(fn, key) {
    if (isFunction(fn)) {
        StylesPrototype["set" + capitalizeString(key)] = function(value) {
            return fn(this, value);
        };
    }
});

StylesPrototype.setTransition = function() {
    return transition(this, Array_slice.call(arguments));
};
