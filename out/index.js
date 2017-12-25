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

var _dec, _desc, _value, _class, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

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

var Test = (_dec = (0, _decorators.obsolete)(), (_class = function Test() {
  _classCallCheck(this, Test);

  _initDefineProp(this, "test", _descriptor, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "test", [_dec], {
  enumerable: true,
  initializer: function initializer() {
    return function () {
      return 'hi';
    };
  }
})), _class));
new Test().test();