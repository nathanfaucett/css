var capitalizeString = require("capitalize_string");


module.exports = Prefix;


function Prefix(dom, pre) {
    this.dom = dom;
    this.lowercase = pre;
    this.css = "-" + pre + "-";
    this.js = capitalizeString(pre);
}
