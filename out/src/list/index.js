'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filterNullEmpty = filterNullEmpty;

var _index = require('./../text/index');

function filterNullEmpty(list) {
    return list.filter(function (v) {
        return (0, _index.isNotNullOrEmpty)(v);
    });
}