"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeForward = composeForward;
exports.composeReverse = composeReverse;
exports.pipeForward = pipeForward;
exports.pipeReverse = pipeReverse;

require("babel-polyfill");

var _decorators = require("./decorators");

function composeForward(f1) {
  return function (f2) {
    return function (t) {
      return f2(f1(t));
    };
  };
}

function composeReverse(f2) {
  return function (f1) {
    return function (t) {
      return composeForward(f1)(f2)(t);
    };
  };
}

function pipeForward(x) {
  return function (f1) {
    return f1(x);
  };
}

function pipeReverse(f1) {
  return function (x) {
    return pipeForward(x)(f1);
  };
}