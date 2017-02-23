"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SINGLE_DASH = '-';
var DOUBLE_DASH = '--';
var EQUAL = '=';
var ArgumentManager = (function () {
    function ArgumentManager() {
        var _this = this;
        this.shorts = [];
        this.longs = [];
        this.defaults = [];
        this.getValue = function (arg, value) {
            var indexEqual = arg.indexOf(EQUAL);
            if (indexEqual !== -1) {
                return arg.substr(indexEqual + 1);
            }
            else {
                return value;
            }
        };
        this.indexOf = function (arr, arg) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].indexOf(arg) === 0)
                    return i;
            }
            return -1;
        };
        this.callArg = function (lngShrt, arg, defaultValue, callback) {
            var index = _this.indexOf(lngShrt, arg);
            if (index !== -1) {
                var value = _this.getValue(lngShrt[index], defaultValue);
                callback(value);
                return true;
            }
            return false;
        };
        this.remove = function (arg) {
            var longIndex = _this.longs.indexOf(arg.getLong());
            var shortIndex = _this.shorts.indexOf(arg.getShort());
            if (longIndex !== -1)
                _this.longs[longIndex] = '';
            if (shortIndex !== -1)
                _this.shorts[shortIndex] = '';
        };
        this.on = function (arg, callback) {
            var defaultValue = arg.getDefaultValue();
            var called = _this.callArg(_this.longs, arg.getLong(), defaultValue, callback) ||
                _this.callArg(_this.shorts, arg.getShort(), defaultValue, callback);
            if (called) {
                _this.remove(arg);
            }
        };
        var args = process.argv.slice(2);
        args.forEach(function (arg, i) {
            if (arg.length > 2 && arg.indexOf(DOUBLE_DASH) === 0) {
                _this.longs.push(arg.slice(2));
            }
            else if (arg.length > 1 && arg.indexOf(SINGLE_DASH) === 0) {
                var shorts = arg.split('');
                shorts.forEach(function (short) {
                    _this.shorts.push(short);
                });
            }
            else {
                _this.defaults.push(arg);
            }
        });
    }
    return ArgumentManager;
}());
exports.Arguments = new ArgumentManager();
var Argument_1 = require("./Argument");
exports.Argument = Argument_1.Argument;
