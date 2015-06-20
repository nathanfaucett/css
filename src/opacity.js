var prefix = require("./prefix");


module.exports = opacity;


function opacity(styles, value) {
    styles["-ms-filter"] = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + value + ")";
    styles.filter = "alpha(opacity=" + value + ")";
    return prefix(styles, "opacity", value);
}
