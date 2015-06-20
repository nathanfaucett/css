var capitalizeString = require("capitalize_string");


module.exports = createPrefix;


function createPrefix(dom, pre) {
    return {
        dom: dom,
        lowercase: pre,
        css: "-" + pre + "-",
        js: capitalizeString(pre)
    };
}
