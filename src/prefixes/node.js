var forEach = require("for_each"),
    Prefix = require("./Prefix");


var prefixes = module.exports = [];


forEach([
    ["WebKit", "webkit"],
    ["Moz", "moz"],
    ["MS", "ms"],
    ["O", "o"]
], function(value) {
    prefixes[prefixes.length] = new Prefix(value[0], value[1]);
});
