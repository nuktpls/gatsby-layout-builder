"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Row = _interopRequireDefault(require("../components/Row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import LayoutContext, { LayoutProvider } from '../services/LayoutContext'
// import { Page__Settings } from '../config/'
// import useSetLocation from '@tools/useSetLocation'
const RowContainer = _ref => {
  let {
    children,
    opt,
    // querySelector,
    sectionTitle,
    setLocation
  } = _ref;
  const data = {
    wrapperRef: null,
    handleRefState: null,
    refState: null,
    // application configs
    scroll: true,
    resize: true,
    outsideClick: true,
    hasOverlay: false,
    mouseDown: {
      on: true,
      clickElement: '.menu-wrapper'
    },
    location: 'Layout Location',
    rowHeading: null,
    headingOn: null,
    backgroundColor: '#000',
    color: '#fff',
    layoutType: null,
    alignContent: null,
    specialDisplay: null,
    // tirar isso e colocar no bloco ( carousel or column )
    numberOfColumns: null
  };
  const defaulHeading = sectionTitle || 'sEM tÍTUlo';
  let rowHeading = null;
  let defaultBgColor = 'white';
  let theme__color = false;

  if (data && data.query) {
    if (data.query[0].backgroundColor && !(opt !== null && opt !== void 0 && opt.bgColor)) {
      defaultBgColor = 'row_color__' + data.query[0].backgroundColor;
      theme__color = true;
    } else if (opt !== null && opt !== void 0 && opt.bgColor) {
      defaultBgColor = opt === null || opt === void 0 ? void 0 : opt.bgColor;
      theme__color = false;
    } else {
      defaultBgColor = 'white';
      theme__color = false;
    }

    if (data.query[0].headingOn) {
      if (data.query[0].rowHeading) {
        rowHeading = data.query[0].rowHeading;
      } else {
        rowHeading = defaulHeading;
      }
    }
  }

  const params = {
    element: 'divisor',
    rowHeading: data ? rowHeading : defaulHeading
  };
  const optNormatize = {
    elementClass: (opt === null || opt === void 0 ? void 0 : opt.classes) || null,
    boxed: (opt === null || opt === void 0 ? void 0 : opt.isBoxed) || false,
    bgColor: theme__color,
    numColumns: (opt === null || opt === void 0 ? void 0 : opt.numColumns) || 1,
    widthColumns: (opt === null || opt === void 0 ? void 0 : opt.widthColumns) || '1fr',
    alignTo: (opt === null || opt === void 0 ? void 0 : opt.alignTo) || 'left',
    title: (opt === null || opt === void 0 ? void 0 : opt.title) || (opt === null || opt === void 0 ? void 0 : opt.classes),
    role: (opt === null || opt === void 0 ? void 0 : opt.role) || null
  };
  const bgOpt = {
    theme_color: defaultBgColor,
    value_bgColor: opt === null || opt === void 0 ? void 0 : opt.bgColor,
    background: opt === null || opt === void 0 ? void 0 : opt.bgImg
  };
  return /*#__PURE__*/_react.default.createElement(_Row.default, {
    children: children,
    params: params,
    opt: optNormatize,
    bgOpt: bgOpt,
    bgImg: opt === null || opt === void 0 ? void 0 : opt.bgImg
  });
};

var _default = RowContainer;
exports.default = _default;