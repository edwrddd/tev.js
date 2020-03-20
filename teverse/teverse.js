var assets = require("./assets/assets.js");
var auth = require("./assets/auth.js");
var orgs = require("./assets/orgs.js");
var user = require("./assets/user.js");
var util = require("./assets/util.js");

class teverse {
    constructor(options = {}) {
        this.login = auth.login;
        this.assets = assets;
        this.orgs = orgs;
        this.user = user;
        this.util = util

        return this
    }
}