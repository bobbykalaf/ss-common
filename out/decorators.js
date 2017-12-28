"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alterDescriptor = alterDescriptor;
exports.obsolete = obsolete;
exports.enumerable = enumerable;
exports.nonEnumerable = nonEnumerable;
exports.freeze = freeze;
exports.virtual = virtual;

function alterDescriptor(descriptor) {
  var enumerable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var configurable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return { ...descriptor,
    enumerable: enumerable,
    configurable: configurable
  };
}

function obsolete() {
  return function (target, propertyKey, descriptor) {
    var className = target.name ? target.name : '??'; // eslint-disable-next-line no-console

    console.warn("WARN: ".concat(className, "::").concat(propertyKey, " is obsolete."));
    return descriptor;
  };
}

function enumerable() {
  return function (target, propertyKey, descriptor) {
    return alterDescriptor(descriptor, true);
  };
}

function nonEnumerable() {
  return function (target, propertyKey, descriptor) {
    return alterDescriptor(descriptor, false);
  };
}

function freeze() {
  return function (target, propertyKey, descriptor) {
    return alterDescriptor(descriptor, undefined, false);
  };
}

function virtual() {
  return function (target, propertyKey, descriptor) {
    return alterDescriptor(descriptor, undefined, true);
  };
}