"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MainMenu = _ref => {
  let {
    wrapperRef,
    isVisibleClass,
    ariaVisible
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("nav", {
    ref: wrapperRef,
    className: 'main-nav menu-state-' + isVisibleClass,
    itemScope: "itemScope",
    itemType: "http://schema.org/SiteNavigationElement"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "",
    id: "mainmenu",
    role: "menu",
    "aria-labelledby": "check-toggle-icon"
  }, /*#__PURE__*/_react.default.createElement("li", {
    role: "none"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Login / Registre-se")), /*#__PURE__*/_react.default.createElement("li", {
    role: "none"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://descola.org/cursos",
    role: "menuitem",
    itemProp: "url",
    title: "Cursos da Descola",
    "aria-label": "Acesso a p\xE1gina: Cursos, no webs\xEDtio da Descola"
  }, "Cursos")), /*#__PURE__*/_react.default.createElement("li", {
    role: "none"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://descola.org/sobre",
    role: "menuitem",
    itemProp: "url",
    title: "O que \xE9 a Descola?",
    "aria-label": "Acesso a p\xE1gina: O que \xE9 a Descola? No webs\xEDtio da Descola"
  }, "O Que \xE9 a Descola?")), /*#__PURE__*/_react.default.createElement("li", {
    role: "none"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://descola.org/empresas",
    role: "menuitem",
    itemProp: "url",
    title: "Para Empresas",
    "aria-label": "Acesso a p\xE1gina: Para empresas, no webs\xEDtio da Descola"
  }, "Para empresas")), /*#__PURE__*/_react.default.createElement("li", {
    role: "none"
  }, /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    to: "/",
    role: "menuitem",
    itemProp: "url",
    title: "Blog da Descola",
    "aria-label": "Acesso a p\xE1gina: Blog, no webs\xEDtio da Descola"
  }, "Blog"))));
};

var _default = MainMenu;
exports.default = _default;