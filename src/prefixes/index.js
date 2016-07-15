var environment = require("@nathanfaucett/environment");


if (environment.browser) {
    module.exports = require("./browser");
} else {
    module.exports = require("./node");
}
