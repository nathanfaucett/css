module.exports = prefixArray;


function prefixArray(prefix, array) {
    var length = array.length,
        i = -1,
        il = length - 1,
        out = new Array(length);

    while (i++ < il) {
        out[i] = prefix + array[i];
    }

    return out;
}
