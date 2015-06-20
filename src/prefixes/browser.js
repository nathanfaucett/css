var environment = require("environment"),
    createPrefix = require("./createPrefix");


var win = environment.window,
    doc = environment.document,

    styles = win.getComputedStyle(doc.documentElement, ""),

    pre = (
        Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/) ||
        (styles.OLink === "" && ["", "0"])
    )[1],

    dom = ("WebKit|Moz|MS|O").match(new RegExp("(" + pre + ")", "i"))[1];


module.exports = [createPrefix(dom, pre)];
