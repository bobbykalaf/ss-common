'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.alterDescriptor = alterDescriptor;
exports.obsolete = obsolete;
exports.enumerable = enumerable;
exports.nonEnumerable = nonEnumerable;
exports.freeze = freeze;
exports.virtual = virtual;
exports.override = override;
exports.extend = extend;
function alterDescriptor(descriptor, isenumerable, isconfigurable, isValue) {
    var value = isValue || descriptor.value;
    var enumerable = isenumerable || descriptor.enumerable;
    var configurable = isconfigurable || descriptor.configurable;
    return _extends({}, descriptor, { enumerable: enumerable, configurable: configurable, value: value });
}
function obsolete() {
    return function (target, propertyKey, descriptor) {
        var className = target.name ? target.name : '??';
        // eslint-disable-next-line no-console
        console.warn('WARN: ' + className + '::' + propertyKey + ' is obsolete.');
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
function override() {
    return function (target, propertyKey, descriptor) {
        return function (never) {
            throw new Error('Method: ' + propertyKey + ' must be overridden');
        };
    };
}
function extend(extendBy) {
    return function (target, propertyKey, descriptor) {
        return alterDescriptor(descriptor, undefined, undefined, extendBy);
    };
}