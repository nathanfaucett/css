var environment = require("@nathanfaucett/environment");


if (environment.browser && !environment.worker) {
    module.exports = require("./browser");
} else {
    module.exports = require("./node");
}
