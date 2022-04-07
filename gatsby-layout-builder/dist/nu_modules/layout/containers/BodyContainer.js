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
  var _opt$bgImage, _opt$bgImage2;

  let {
    children,
    opt
  } = _ref;
  const bgStyle = (_opt$bgImage = opt.bgImage) !== null && _opt$bgImage !== void 0 && _opt$bgImage.src ? "url(".concat(((_opt$bgImage2 = opt.bgImage) === null || _opt$bgImage2 === void 0 ? void 0 : _opt$bgImage2.src) || ' ', ")") : 'unset';
  return /*#__PURE__*/_react.default.createElement(_context.default.Consumer, null, value => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Body.default, {
    opt: opt || false,
    customClasses: (opt === null || opt === void 0 ? void 0 : opt.classes) || '',
    bgImage: bgStyle || false
  }, children)));
};

var _default = BodyContainer;
exports.default = _default;