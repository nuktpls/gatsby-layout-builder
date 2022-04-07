"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _context = _interopRequireDefault(require("../services/context"));

var _Body = _interopRequireDefault(require("../components/Body"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line
const BodyContainer = _ref => {
  var _bgImage, _bgImage2;

  let {
    children,
    opt
  } = _ref;
  const bgStyle = (_bgImage = bgImage) !== null && _bgImage !== void 0 && _bgImage.src ? "url(".concat(((_bgImage2 = bgImage) === null || _bgImage2 === void 0 ? void 0 : _bgImage2.src) || ' ', ")") : 'unset';
  return /*#__PURE__*/_react.default.createElement(_context.default.Consumer, null, value => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Body.default, {
    opt: opt || false,
    customClasses: (opt === null || opt === void 0 ? void 0 : opt.classes) || '',
    bgImage: bgStyle || false
  }, children)));
};

var _default = BodyContainer;
exports.default = _default;