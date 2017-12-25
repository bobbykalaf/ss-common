"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obsolete = obsolete;

function obsolete() {
  return function (target, propertyKey, descriptor) {
    var className = target.name ? target.name : '??'; // eslint-disable-next-line no-console

    console.warn("WARN: ".concat(className, "::").concat(propertyKey, " is obsolete."));
    return descriptor;
  };
}