module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/bitcoinChecker.png":
/*!***********************************!*\
  !*** ./images/bitcoinChecker.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bitcoinChecker-6a5c3d137b510e0697af455bf27c946f.png";

/***/ }),

/***/ "./images/darbyAutoCenter.png":
/*!************************************!*\
  !*** ./images/darbyAutoCenter.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/darbyAutoCenter-0bacc2d2503b4f4da390edfbd3367126.png";

/***/ }),

/***/ "./images/discovery.png":
/*!******************************!*\
  !*** ./images/discovery.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/discovery-5bae72b749895a7dc7288c5e1ce9db9f.png";

/***/ }),

/***/ "./images/graceAutoSales.png":
/*!***********************************!*\
  !*** ./images/graceAutoSales.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/graceAutoSales-3f4dc9ae4d11e4f49eb1283246c13b14.png";

/***/ }),

/***/ "./images/libertyAutoplex.png":
/*!************************************!*\
  !*** ./images/libertyAutoplex.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/libertyAutoplex-e2063a32a7b3399f1ffdda8867b306be.png";

/***/ }),

/***/ "./images/lowMilesAuto.png":
/*!*********************************!*\
  !*** ./images/lowMilesAuto.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/lowMilesAuto-3de6ea564decb0e32b8a90e0fba8508e.png";

/***/ }),

/***/ "./images/nht.png":
/*!************************!*\
  !*** ./images/nht.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/nht-fa7f943fc67c3a3f2cea013349f74234.png";

/***/ }),

/***/ "./images/yalCars.png":
/*!****************************!*\
  !*** ./images/yalCars.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/yalCars-b946dd7790a34ab844fc1301c21bf444.png";

/***/ }),

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_lowMilesAuto_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/lowMilesAuto.png */ "./images/lowMilesAuto.png");
/* harmony import */ var _images_lowMilesAuto_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_lowMilesAuto_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_libertyAutoplex_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/libertyAutoplex.png */ "./images/libertyAutoplex.png");
/* harmony import */ var _images_libertyAutoplex_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_libertyAutoplex_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_yalCars_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/yalCars.png */ "./images/yalCars.png");
/* harmony import */ var _images_yalCars_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_yalCars_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_nht_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/nht.png */ "./images/nht.png");
/* harmony import */ var _images_nht_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_nht_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_discovery_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/discovery.png */ "./images/discovery.png");
/* harmony import */ var _images_discovery_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_discovery_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_graceAutoSales_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/graceAutoSales.png */ "./images/graceAutoSales.png");
/* harmony import */ var _images_graceAutoSales_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_graceAutoSales_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_darbyAutoCenter_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/darbyAutoCenter.png */ "./images/darbyAutoCenter.png");
/* harmony import */ var _images_darbyAutoCenter_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_darbyAutoCenter_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_bitcoinChecker_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/bitcoinChecker.png */ "./images/bitcoinChecker.png");
/* harmony import */ var _images_bitcoinChecker_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_bitcoinChecker_png__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\RRProjects\\LPSWebsite\\pages\\portfolio.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var Portfolio =
/*#__PURE__*/
function (_Component) {
  _inherits(Portfolio, _Component);

  function Portfolio(props) {
    _classCallCheck(this, Portfolio);

    return _possibleConstructorReturn(this, _getPrototypeOf(Portfolio).call(this, props));
  }

  _createClass(Portfolio, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "portfolio-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-200830944" + " " + "title-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Website / Website Application Portfolio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "I started my IT industry career mainly on WordPress PHP Development and Front-end Development, currently i am now focusing on Front-end Development mainly using React and Nextjs."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "img-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _images_lowMilesAuto_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        className: "jsx-200830944" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "div-opacity-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Low Miles Auto"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.lowmiles.net/",
        target: "_blank",
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-200830944" + " " + "fas fa-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "img-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _images_libertyAutoplex_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        className: "jsx-200830944" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "div-opacity-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Liberty Autoplex"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.libertyautoplex.com/",
        target: "_blank",
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-200830944" + " " + "fas fa-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "img-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _images_yalCars_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        className: "jsx-200830944" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "div-opacity-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Yalcars"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.yalcars.com/",
        target: "_blank",
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-200830944" + " " + "fas fa-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "img-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _images_nht_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        className: "jsx-200830944" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "div-opacity-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "North Hollywood Toyota"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.northhollywoodtoyota.com/",
        target: "_blank",
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-200830944" + " " + "fas fa-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "img-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _images_discovery_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        className: "jsx-200830944" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "div-opacity-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Discovery Auto Tampa"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.discoveryautotampa.com/",
        target: "_blank",
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-200830944" + " " + "fas fa-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "img-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _images_graceAutoSales_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        className: "jsx-200830944" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "div-opacity-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Grace Auto Sales and Service"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.graceautosalesandservice.com/",
        target: "_blank",
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-200830944" + " " + "fas fa-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "img-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _images_darbyAutoCenter_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        className: "jsx-200830944" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "div-opacity-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Darby Auto Center"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.darbyautocenter.com/",
        target: "_blank",
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-200830944" + " " + "fas fa-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "img-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _images_bitcoinChecker_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-200830944" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-200830944" + " " + "div-opacity-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Bitcoin Checker"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "ReactJS JavaScript JQuery html CSS less Bootstrap Third Party API"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://github.com/CodeHobbyist/BitcoinChecker",
        target: "_blank",
        className: "jsx-200830944",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-200830944" + " " + "fas fa-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "200830944",
        css: ".portfolio-holder.jsx-200830944 .container.jsx-200830944{color:#999999 !important;}.portfolio-holder.jsx-200830944 .container.jsx-200830944 .row.jsx-200830944{padding-top:15px;}.portfolio-holder.jsx-200830944 .container.jsx-200830944 img.jsx-200830944{height:auto;width:100%;}.div-opacity-holder.jsx-200830944{background-color:transparent;position:absolute;height:220px;width:93.5%;top:0;left:15px;-webkit-transition:background-color 0.8s ease;-ms-transition:background-color 0.8s ease;-webkit-transition:background-color 0.8s ease;transition:background-color 0.8s ease;}.div-opacity-holder.jsx-200830944:hover{cursor:pointer;background-color:rgba(0,0,0,0.8);-webkit-transition:background-color 0.8s ease;-ms-transition:background-color 0.8s ease;-webkit-transition:background-color 0.8s ease;transition:background-color 0.8s ease;}.div-opacity-holder.jsx-200830944 a.jsx-200830944{position:absolute;bottom:0;left:16px;opacity:0;-webkit-transition:bottom 0.8s ease-out,opacity 0.8s ease-out;-ms-transition:bottom 0.8s ease-out,opacity 0.8s ease-out;-webkit-transition:bottom 0.8s ease-out,opacity 0.8s ease-out;transition:bottom 0.8s ease-out,opacity 0.8s ease-out;}.div-opacity-holder.jsx-200830944:hover a.jsx-200830944{bottom:9px;opacity:1;-webkit-transition:bottom 0.8s ease,opacity 0.8s ease;-ms-transition:bottom 0.8s ease,opacity 0.8s ease;-webkit-transition:bottom 0.8s ease,opacity 0.8s ease;transition:bottom 0.8s ease,opacity 0.8s ease;}.div-opacity-holder.jsx-200830944 p.jsx-200830944{position:absolute;left:135px;opacity:0;top:10px;color:#e5e5e5 !important;-webkit-transition:left 0.8s ease-out,opacity 0.8s ease-out;-ms-transition:left 0.8s ease-out,opacity 0.8s ease-out;-webkit-transition:left 0.8s ease-out,opacity 0.8s ease-out;transition:left 0.8s ease-out,opacity 0.8s ease-out;}.div-opacity-holder.jsx-200830944:hover p.jsx-200830944{left:15px;opacity:1;-webkit-transition:left 0.8s ease,opacity 0.8s ease;-ms-transition:left 0.8s ease,opacity 0.8s ease;-webkit-transition:left 0.8s ease,opacity 0.8s ease;transition:left 0.8s ease,opacity 0.8s ease;}.div-opacity-holder.jsx-200830944 h6.jsx-200830944{position:absolute;left:17px;top:70px;opacity:0;padding-right:20px;color:#999999 !important;-webkit-transition:top 0.8s ease-out,opacity 0.8s ease-out;-ms-transition:top 0.8s ease-out,opacity 0.8s ease-out;-webkit-transition:top 0.8s ease-out,opacity 0.8s ease-out;transition:top 0.8s ease-out,opacity 0.8s ease-out;}.div-opacity-holder.jsx-200830944:hover h6.jsx-200830944{top:44px;opacity:1;-webkit-transition:top 0.8s ease-out,opacity 0.8s ease-out;-ms-transition:top 0.8s ease-out,opacity 0.8s ease-out;-webkit-transition:top 0.8s ease-out,opacity 0.8s ease-out;transition:top 0.8s ease-out,opacity 0.8s ease-out;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSUlByb2plY3RzXFxMUFNXZWJzaXRlXFxwYWdlc1xccG9ydGZvbGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIb0IsQUFHb0MsQUFHUixBQUdMLEFBS2lCLEFBV2QsQUFPRyxBQVNQLEFBT1MsQUFVVixBQU9VLEFBV1QsU0FDQyxDQWxCRixDQWpCQSxDQWhDQyxHQWdCeUIsRUFuQnRDLENBMEJXLEFBZ0JJLEFBaUJELENBWWtELENBbEJULENBakJFLEVBaEN6RCxFQVBBLEVBOEJZLENBaUNDLENBcERPLEFBbUNOLFFBZkYsQUFpQ0UsRUFqQkQsUUFuQ0UsQUFvQmtELEFBaUMxQyxDQTFDeUIsQUF5Qm5CLFlBbkNmLE1BcURlLE1BcERyQixBQTJDMkMsQ0FSYyxFQVRaLEdBekJ6QyxBQTREZ0QsVUEzRFosR0FtRGdCLEdBM0NwQixlQVNpQixXQXlCZCxLQWpCRSxRQVNZLEFBMEJMLENBM0RaLEVBUUosY0EyQ29CLGlCQWxDSCxTQWhCakIsYUFpQ2lCLGdCQWtCRCxXQVZ4RCxJQWpDQSxLQWdCQSxrQkFtQ0EsaUJBMURBLHVCQWdCQSxrQkFpQkEsY0FrQkEiLCJmaWxlIjoiQzpcXFJSUHJvamVjdHNcXExQU1dlYnNpdGVcXHBhZ2VzXFxwb3J0Zm9saW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBsb3dNaWxlc0F1dG8gZnJvbSAnLi4vaW1hZ2VzL2xvd01pbGVzQXV0by5wbmcnO1xyXG5pbXBvcnQgbGliZXJ0eUF1dG9wbGV4IGZyb20gJy4uL2ltYWdlcy9saWJlcnR5QXV0b3BsZXgucG5nJztcclxuaW1wb3J0IHlhbENhcnMgZnJvbSAnLi4vaW1hZ2VzL3lhbENhcnMucG5nJztcclxuaW1wb3J0IG5odCBmcm9tICcuLi9pbWFnZXMvbmh0LnBuZyc7XHJcbmltcG9ydCBkaXNjb3ZlcnkgZnJvbSAnLi4vaW1hZ2VzL2Rpc2NvdmVyeS5wbmcnO1xyXG5pbXBvcnQgZ3JhY2VBdXRvU2FsZXMgZnJvbSAnLi4vaW1hZ2VzL2dyYWNlQXV0b1NhbGVzLnBuZyc7XHJcbmltcG9ydCBkYXJieUF1dG9DZW50ZXIgZnJvbSAnLi4vaW1hZ2VzL2RhcmJ5QXV0b0NlbnRlci5wbmcnO1xyXG5pbXBvcnQgYml0Y29pbkNoZWNrZXIgZnJvbSAnLi4vaW1hZ2VzL2JpdGNvaW5DaGVja2VyLnBuZyc7XHJcblxyXG5jbGFzcyBQb3J0Zm9saW8gZXh0ZW5kcyBDb21wb25lbnR7XHJcblxyXG4gY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICBzdXBlcihwcm9wcyk7XHJcbiB9XHJcblxyXG4gcmVuZGVyKCl7XHJcbiAgIHJldHVybihcclxuXHJcblxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWhvbGRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUtcGFnZVwiPldlYnNpdGUgLyBXZWJzaXRlIEFwcGxpY2F0aW9uIFBvcnRmb2xpbzwvaDI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgSSBzdGFydGVkIG15IElUIGluZHVzdHJ5IGNhcmVlciBtYWlubHkgb24gV29yZFByZXNzIFBIUCBEZXZlbG9wbWVudCBhbmQgRnJvbnQtZW5kIERldmVsb3BtZW50LCBjdXJyZW50bHkgaSBhbSBub3cgZm9jdXNpbmcgb25cclxuICAgICAgICAgICAgRnJvbnQtZW5kIERldmVsb3BtZW50IG1haW5seSB1c2luZyBSZWFjdCBhbmQgTmV4dGpzLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvd01pbGVzQXV0b30gY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtb3BhY2l0eS1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPkxvdyBNaWxlcyBBdXRvPC9wPlxyXG4gICAgICAgICAgICAgICAgPGg2PldvcmRQcmVzcyBQaHAgSlF1ZXJ5IEphdmFTY3JpcHQgYyMgSHRtbCBDU1MgbGVzcyBCb290c3RyYXAgTWVkaWEgUXVlcnkgRWxhc3RpYyBTZWFyY2g8L2g2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmxvd21pbGVzLm5ldC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtbGlua1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGliZXJ0eUF1dG9wbGV4fSBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1vcGFjaXR5LWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHA+TGliZXJ0eSBBdXRvcGxleDwvcD5cclxuICAgICAgICAgICAgICAgIDxoNj5Xb3JkUHJlc3MgUGhwIEpRdWVyeSBKYXZhU2NyaXB0IGMjIEh0bWwgQ1NTIGxlc3MgQm9vdHN0cmFwIE1lZGlhIFF1ZXJ5IEVsYXN0aWMgU2VhcmNoPC9oNj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saWJlcnR5YXV0b3BsZXguY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1saW5rXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt5YWxDYXJzfSBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1vcGFjaXR5LWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHA+WWFsY2FyczwvcD5cclxuICAgICAgICAgICAgICAgIDxoNj5Xb3JkUHJlc3MgUGhwIEpRdWVyeSBKYXZhU2NyaXB0IGMjIEh0bWwgQ1NTIGxlc3MgQm9vdHN0cmFwIE1lZGlhIFF1ZXJ5IEVsYXN0aWMgU2VhcmNoPC9oNj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55YWxjYXJzLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtbGlua1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmh0fSBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1vcGFjaXR5LWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHA+Tm9ydGggSG9sbHl3b29kIFRveW90YTwvcD5cclxuICAgICAgICAgICAgICAgIDxoNj5Xb3JkUHJlc3MgUGhwIEpRdWVyeSBKYXZhU2NyaXB0IGMjIEh0bWwgQ1NTIGxlc3MgQm9vdHN0cmFwIE1lZGlhIFF1ZXJ5IEVsYXN0aWMgU2VhcmNoPC9oNj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5ub3J0aGhvbGx5d29vZHRveW90YS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWxpbmtcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkaXNjb3Zlcnl9IGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LW9wYWNpdHktaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5EaXNjb3ZlcnkgQXV0byBUYW1wYTwvcD5cclxuICAgICAgICAgICAgICAgIDxoNj5Xb3JkUHJlc3MgUGhwIEpRdWVyeSBKYXZhU2NyaXB0IGMjIEh0bWwgQ1NTIGxlc3MgQm9vdHN0cmFwIE1lZGlhIFF1ZXJ5IEVsYXN0aWMgU2VhcmNoPC9oNj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5kaXNjb3ZlcnlhdXRvdGFtcGEuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1saW5rXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtncmFjZUF1dG9TYWxlc30gY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtb3BhY2l0eS1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPkdyYWNlIEF1dG8gU2FsZXMgYW5kIFNlcnZpY2U8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDY+V29yZFByZXNzIFBocCBKUXVlcnkgSmF2YVNjcmlwdCBjIyBIdG1sIENTUyBsZXNzIEJvb3RzdHJhcCBNZWRpYSBRdWVyeSBFbGFzdGljIFNlYXJjaDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ3JhY2VhdXRvc2FsZXNhbmRzZXJ2aWNlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtbGlua1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhcmJ5QXV0b0NlbnRlcn0gY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtb3BhY2l0eS1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPkRhcmJ5IEF1dG8gQ2VudGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgPGg2PldvcmRQcmVzcyBQaHAgSlF1ZXJ5IEphdmFTY3JpcHQgYyMgSHRtbCBDU1MgbGVzcyBCb290c3RyYXAgTWVkaWEgUXVlcnkgRWxhc3RpYyBTZWFyY2g8L2g2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmRhcmJ5YXV0b2NlbnRlci5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWxpbmtcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2JpdGNvaW5DaGVja2VyfSBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1vcGFjaXR5LWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHA+Qml0Y29pbiBDaGVja2VyPC9wPlxyXG4gICAgICAgICAgICAgICAgPGg2PlJlYWN0SlMgSmF2YVNjcmlwdCBKUXVlcnkgaHRtbCBDU1MgbGVzcyBCb290c3RyYXAgVGhpcmQgUGFydHkgQVBJPC9oNj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQ29kZUhvYmJ5aXN0L0JpdGNvaW5DaGVja2VyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWxpbmtcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5wb3J0Zm9saW8taG9sZGVyIC5jb250YWluZXIge1xyXG4gICAgICAgICAgY29sb3I6ICM5OTk5OTkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBvcnRmb2xpby1ob2xkZXIgLmNvbnRhaW5lciAucm93IHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucG9ydGZvbGlvLWhvbGRlciAuY29udGFpbmVyIGltZ3tcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGl2LW9wYWNpdHktaG9sZGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDkzLjUlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjhzIGVhc2U7XHJcbiAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjhzIGVhc2U7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuOHMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdi1vcGFjaXR5LWhvbGRlcjpob3ZlciB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC44cyBlYXNlO1xyXG4gICAgICAgICAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC44cyBlYXNlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjhzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXYtb3BhY2l0eS1ob2xkZXIgYSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBsZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm90dG9tIDAuOHMgZWFzZS1vdXQsIG9wYWNpdHkgMC44cyBlYXNlLW91dDtcclxuICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBib3R0b20gMC44cyBlYXNlLW91dCwgb3BhY2l0eSAwLjhzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuOHMgZWFzZS1vdXQsIG9wYWNpdHkgMC44cyBlYXNlLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdi1vcGFjaXR5LWhvbGRlcjpob3ZlciBhIHtcclxuICAgICAgICAgIGJvdHRvbTogOXB4O1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm90dG9tIDAuOHMgZWFzZSwgb3BhY2l0eSAwLjhzIGVhc2U7XHJcbiAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYm90dG9tIDAuOHMgZWFzZSwgb3BhY2l0eSAwLjhzIGVhc2U7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC44cyBlYXNlLCBvcGFjaXR5IDAuOHMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdi1vcGFjaXR5LWhvbGRlciBwIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAxMzVweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2U1ZTVlNSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC44cyBlYXNlLW91dCwgb3BhY2l0eSAwLjhzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogbGVmdCAwLjhzIGVhc2Utb3V0LCBvcGFjaXR5IDAuOHMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC44cyBlYXNlLW91dCwgb3BhY2l0eSAwLjhzIGVhc2Utb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGl2LW9wYWNpdHktaG9sZGVyOmhvdmVyIHAge1xyXG4gICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC44cyBlYXNlLCBvcGFjaXR5IDAuOHMgZWFzZTtcclxuICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBsZWZ0IDAuOHMgZWFzZSwgb3BhY2l0eSAwLjhzIGVhc2U7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuOHMgZWFzZSwgb3BhY2l0eSAwLjhzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXYtb3BhY2l0eS1ob2xkZXIgaDYge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE3cHg7XHJcbiAgICAgICAgICAgIHRvcDogNzBweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM5OTk5OTkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0b3AgMC44cyBlYXNlLW91dCwgb3BhY2l0eSAwLjhzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogdG9wIDAuOHMgZWFzZS1vdXQsIG9wYWNpdHkgMC44cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuOHMgZWFzZS1vdXQsIG9wYWNpdHkgMC44cyBlYXNlLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdi1vcGFjaXR5LWhvbGRlcjpob3ZlciBoNiB7XHJcbiAgICAgICAgICAgIHRvcDogNDRweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0b3AgMC44cyBlYXNlLW91dCwgb3BhY2l0eSAwLjhzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogdG9wIDAuOHMgZWFzZS1vdXQsIG9wYWNpdHkgMC44cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuOHMgZWFzZS1vdXQsIG9wYWNpdHkgMC44cyBlYXNlLW91dDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgKTtcclxuIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvO1xyXG4iXX0= */\n/*@ sourceURL=C:\\RRProjects\\LPSWebsite\\pages\\portfolio.js */",
        __self: this
      }));
    }
  }]);

  return Portfolio;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/portfolio.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/portfolio.js */"./pages/portfolio.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=portfolio.js.map