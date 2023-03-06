'use strict';

module.exports = core;

const pkg = require("../package.json")

function core() {
    // TODO
    checkPkgVersion()
}

function checkPkgVersion() {
    console.log(pkg.version)
}
