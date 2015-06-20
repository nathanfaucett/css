var forEach = require("for_each"),
    createPrefix = require("./createPrefix");


var prefixes = module.exports = [];


forEach([
    ["WebKit", "webkit"],
    ["Moz", "moz"],
    ["MS", "ms"],
    ["O", "o"]
], function(value) {
    prefixes[prefixes.length] = createPrefix(value[0], value[1]);
});
