"use strict";

var _decorators = require("./decorators");

require("jest");

var _dec, _dec2, _dec3, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Test = (_dec = (0, _decorators.obsolete)(), _dec2 = (0, _decorators.obsolete)(), _dec3 = (0, _decorators.virtual)(), (_class = function Test() {
  _classCallCheck(this, Test);

  _initDefineProp(this, "obsoleteProperty", _descriptor, this);

  _initDefineProp(this, "obsoleteMethod", _descriptor2, this);

  _initDefineProp(this, "virtualMethod", _descriptor3, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "obsoleteProperty", [_dec], {
  enumerable: true,
  initializer: function initializer() {
    return 'initialized';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "obsoleteMethod", [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return function () {
      return 'string';
    };
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "virtualMethod", [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return function () {
      return 'original';
    };
  }
})), _class));

var Descendant =
/*#__PURE__*/
function (_Test) {
  _inherits(Descendant, _Test);

  function Descendant() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Descendant);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Descendant.__proto__ || Object.getPrototypeOf(Descendant)).call.apply(_ref, [this].concat(args))), _this.virtualMethod = function () {
      return 'overridden';
    }, _temp));
  }

  return Descendant;
}(Test);

test(function () {
  return expect(new Test().obsoleteProperty).toBe('initialized');
});
test(function () {
  return expect(new Test().obsoleteMethod()).toBe('string');
});
test(function () {
  return expect(new Test().virtualMethod()).toBe('original');
});
test(function () {
  return expect(new Descendant().virtualMethod()).toBe('overridden');
});