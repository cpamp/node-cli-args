"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentManager_1 = require("../lib/ArgumentManager");
ArgumentManager_1.Arguments.on(new ArgumentManager_1.Argument('hello', 'h', 'world'), function (val) {
    console.log('Hello' + val);
});
ArgumentManager_1.Arguments.on(new ArgumentManager_1.Argument('bye', 'b', 'worldss'), function (val) {
    console.log('Goodbye ' + val);
});
ArgumentManager_1.Arguments.on(new ArgumentManager_1.Argument('another one', 'b', 'yes'), function (v) {
    console.log(v);
});
