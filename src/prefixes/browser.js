var environment = require("environment"),
    getCurrentStyle = require("get_current_style"),
    Prefix = require("./Prefix");


var document = environment.document,

    styles = getCurrentStyle(document.documentElement || document.body.parentNode),

    pre = (
        Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/) ||
        (styles.OLink === "" && ["", "0"])
    )[1],

    dom = ("WebKit|Moz|MS|O").match(new RegExp("(" + pre + ")", "i"))[1];


module.exports = [new Prefix(dom, pre)];
