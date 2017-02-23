"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SINGLE_DASH = '-';
var DOUBLE_DASH = '--';
var ArgumentManager = (function () {
    function ArgumentManager() {
        var _this = this;
        this.commands = function () {
            _this.args = process.argv.slice(2);
        };
        this.on = function (name) {
        };
    }
    return ArgumentManager;
}());
exports.ArgumentManager = ArgumentManager;
