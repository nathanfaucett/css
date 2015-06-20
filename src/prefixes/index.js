var environment = require("environment");


if (environment.browser) {
    module.exports = require("./browser");
} else {
    module.exports = require("./node");
}
