"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = abinfo;

// import React from 'react'

/* eslint-disable */
function abinfo(titleHere) {
  const wrapperNow = document.querySelector('.' + titleHere[1]); // console.log(wrapperNow.offsetParent)

  if (wrapperNow !== null) {
    return {
      current: wrapperNow,
      classList: wrapperNow.classList,
      childElementCount: wrapperNow.childElementCount,
      offsetParent: wrapperNow.offsetParent,
      gpb: {
        topDocumentDistance: wrapperNow.offsetTop,
        bottomDocumentDistance: wrapperNow.offsetTop + wrapperNow.offsetHeight,
        leftDocumentDistance: wrapperNow.offsetLeft,
        rightDocumentDistance: wrapperNow.offsetLeft + wrapperNow.offsetWidth,
        blockHeight: wrapperNow.offsetHeight,
        blockWidth: wrapperNow.offsetWidth,
        scrollHeight: wrapperNow.scrollHeight,
        scrollLeft: wrapperNow.scrollLeft,
        scrollTop: wrapperNow.scrollTop,
        scrollWidth: wrapperNow.scrollWidth,
        clientHeight: wrapperNow.clientHeight,
        clientLeft: wrapperNow.clientLeft,
        clientTop: wrapperNow.clientTop,
        clientWidth: wrapperNow.clientWidth
      },
      aria: {
        ariaAtomic: null,
        ariaAutoComplete: null,
        ariaBusy: null,
        ariaChecked: null,
        ariaColCount: null,
        ariaColIndex: null,
        ariaColSpan: null,
        ariaCurrent: null,
        ariaDescription: null,
        ariaDisabled: null,
        ariaExpanded: null,
        ariaHasPopup: null,
        ariaHidden: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLevel: null,
        ariaLive: null,
        ariaModal: null,
        ariaMultiLine: null,
        ariaMultiSelectable: null,
        ariaOrientation: null,
        ariaPlaceholder: null,
        ariaPosInSet: null,
        ariaPressed: null,
        ariaReadOnly: null,
        ariaRelevant: null,
        ariaRequired: null,
        ariaRoleDescription: null,
        ariaRowCount: null,
        ariaRowIndex: null,
        ariaRowSpan: null,
        ariaSelected: null,
        ariaSetSize: null,
        ariaSort: null,
        ariaValueMax: null,
        ariaValueMin: null,
        ariaValueNow: null,
        ariaValueText: null
      }
    };
  }
}