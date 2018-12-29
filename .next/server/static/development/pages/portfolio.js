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
        className: "jsx-1393530762" + " " + "portfolio-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-1393530762" + " " + "title-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Website / Website Application Portfolio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "I started my IT industry career mainly on WordPress PHP Development and Front-end Development, currently i am now focusing on Front-end Development mainly using React and Nextjs."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "img-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _images_lowMilesAuto_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        className: "jsx-1393530762" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "div-opacity-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Low Miles Auto"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.lowmiles.net/",
        target: "_blank",
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-1393530762" + " " + "fas fa-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "img-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _images_libertyAutoplex_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        className: "jsx-1393530762" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "div-opacity-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Liberty Autoplex"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.libertyautoplex.com/",
        target: "_blank",
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-1393530762" + " " + "fas fa-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "img-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _images_yalCars_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        className: "jsx-1393530762" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "div-opacity-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Yalcars"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.yalcars.com/",
        target: "_blank",
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-1393530762" + " " + "fas fa-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "img-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _images_nht_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        className: "jsx-1393530762" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "div-opacity-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "North Hollywood Toyota"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.northhollywoodtoyota.com/",
        target: "_blank",
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-1393530762" + " " + "fas fa-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "img-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _images_discovery_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        className: "jsx-1393530762" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "div-opacity-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Discovery Auto Tampa"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.discoveryautotampa.com/",
        target: "_blank",
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-1393530762" + " " + "fas fa-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "img-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _images_graceAutoSales_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        className: "jsx-1393530762" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "div-opacity-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Grace Auto Sales and Service"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.graceautosalesandservice.com/",
        target: "_blank",
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-1393530762" + " " + "fas fa-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "img-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _images_darbyAutoCenter_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        className: "jsx-1393530762" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "div-opacity-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Darby Auto Center"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.darbyautocenter.com/",
        target: "_blank",
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-1393530762" + " " + "fas fa-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "img-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _images_bitcoinChecker_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-1393530762" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1393530762" + " " + "div-opacity-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Bitcoin Checker"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "ReactJS JavaScript JQuery html CSS less Bootstrap Third Party API"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://github.com/CodeHobbyist/BitcoinChecker",
        target: "_blank",
        className: "jsx-1393530762",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-1393530762" + " " + "fas fa-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1393530762",
        css: ".portfolio-holder.jsx-1393530762 .container.jsx-1393530762{color:#999999 !important;}.portfolio-holder.jsx-1393530762 .container.jsx-1393530762 .row.jsx-1393530762{padding-top:15px;}.portfolio-holder.jsx-1393530762 .container.jsx-1393530762 img.jsx-1393530762{height:auto;width:100%;}.div-opacity-holder.jsx-1393530762{background-color:transparent;position:absolute;height:220px;width:93.5%;top:0;left:15px;-webkit-transition:background-color 0.8s ease;-ms-transition:background-color 0.8s ease;-webkit-transition:background-color 0.8s ease;transition:background-color 0.8s ease;}.div-opacity-holder.jsx-1393530762:hover{cursor:pointer;background-color:rgba(0,0,0,0.8);-webkit-transition:background-color 0.8s ease;-ms-transition:background-color 0.8s ease;-webkit-transition:background-color 0.8s ease;transition:background-color 0.8s ease;}.div-opacity-holder.jsx-1393530762 a.jsx-1393530762{position:absolute;bottom:0;left:16px;opacity:0;-webkit-transition:bottom 0.8s ease-out,opacity 0.8s ease-out;-ms-transition:bottom 0.8s ease-out,opacity 0.8s ease-out;-webkit-transition:bottom 0.8s ease-out,opacity 0.8s ease-out;transition:bottom 0.8s ease-out,opacity 0.8s ease-out;}.div-opacity-holder.jsx-1393530762:hover a.jsx-1393530762{bottom:9px;opacity:1;-webkit-transition:bottom 0.8s ease,opacity 0.8s ease;-ms-transition:bottom 0.8s ease,opacity 0.8s ease;-webkit-transition:bottom 0.8s ease,opacity 0.8s ease;transition:bottom 0.8s ease,opacity 0.8s ease;}.div-opacity-holder.jsx-1393530762 p.jsx-1393530762{position:absolute;left:135px;opacity:0;top:10px;color:#e5e5e5 !important;-webkit-transition:left 0.8s ease-out,opacity 0.8s ease-out;-ms-transition:left 0.8s ease-out,opacity 0.8s ease-out;-webkit-transition:left 0.8s ease-out,opacity 0.8s ease-out;transition:left 0.8s ease-out,opacity 0.8s ease-out;}.div-opacity-holder.jsx-1393530762:hover p.jsx-1393530762{left:15px;opacity:1;-webkit-transition:left 0.8s ease,opacity 0.8s ease;-ms-transition:left 0.8s ease,opacity 0.8s ease;-webkit-transition:left 0.8s ease,opacity 0.8s ease;transition:left 0.8s ease,opacity 0.8s ease;}.div-opacity-holder.jsx-1393530762 h6.jsx-1393530762{position:absolute;left:17px;top:70px;opacity:0;padding-right:20px;color:#999999 !important;-webkit-transition:top 0.8s ease-out,opacity 0.8s ease-out;-ms-transition:top 0.8s ease-out,opacity 0.8s ease-out;-webkit-transition:top 0.8s ease-out,opacity 0.8s ease-out;transition:top 0.8s ease-out,opacity 0.8s ease-out;}.div-opacity-holder.jsx-1393530762:hover h6.jsx-1393530762{top:44px;opacity:1;-webkit-transition:top 0.8s ease-out,opacity 0.8s ease-out;-ms-transition:top 0.8s ease-out,opacity 0.8s ease-out;-webkit-transition:top 0.8s ease-out,opacity 0.8s ease-out;transition:top 0.8s ease-out,opacity 0.8s ease-out;}@media screen and (max-device-width:768px) and (min-device-width:300px){.div-opacity-holder.jsx-1393530762{height:174px !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSUlByb2plY3RzXFxMUFNXZWJzaXRlXFxwYWdlc1xccG9ydGZvbGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFIb0IsQUFHc0MsQUFHUixBQUdMLEFBS2lCLEFBV2QsQUFPRyxBQVNQLEFBT1MsQUFVVixBQU9VLEFBV1QsQUFZZSxTQVhkLENBbEJGLENBakJBLENBaENDLEdBZ0J5QixFQW5CdEMsQ0EwQlcsQUFnQkksQUFpQkQsQ0FZa0QsQ0FsQlQsQ0FqQkUsRUFoQ3pELENBOEVFLENBckZGLEVBOEJZLENBaUNDLENBcERPLEFBbUNOLFFBZkYsQUFpQ0UsRUFqQkQsUUFuQ0UsQUFvQmtELEFBaUMxQyxDQTFDeUIsQUF5Qm5CLFlBbkNmLE1BcURlLE1BcERyQixBQTJDMkMsQ0FSYyxFQVRaLEdBekJ6QyxBQTREZ0QsVUEzRFosR0FtRGdCLEdBM0NwQixlQVNpQixXQXlCZCxLQWpCRSxRQVNZLEFBMEJMLENBM0RaLEVBUUosY0EyQ29CLGlCQWxDSCxTQWhCakIsYUFpQ2lCLGdCQWtCRCxXQVZ4RCxJQWpDQSxLQWdCQSxrQkFtQ0EsaUJBMURBLHVCQWdCQSxrQkFpQkEsY0FrQkEiLCJmaWxlIjoiQzpcXFJSUHJvamVjdHNcXExQU1dlYnNpdGVcXHBhZ2VzXFxwb3J0Zm9saW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBsb3dNaWxlc0F1dG8gZnJvbSAnLi4vaW1hZ2VzL2xvd01pbGVzQXV0by5wbmcnO1xyXG5pbXBvcnQgbGliZXJ0eUF1dG9wbGV4IGZyb20gJy4uL2ltYWdlcy9saWJlcnR5QXV0b3BsZXgucG5nJztcclxuaW1wb3J0IHlhbENhcnMgZnJvbSAnLi4vaW1hZ2VzL3lhbENhcnMucG5nJztcclxuaW1wb3J0IG5odCBmcm9tICcuLi9pbWFnZXMvbmh0LnBuZyc7XHJcbmltcG9ydCBkaXNjb3ZlcnkgZnJvbSAnLi4vaW1hZ2VzL2Rpc2NvdmVyeS5wbmcnO1xyXG5pbXBvcnQgZ3JhY2VBdXRvU2FsZXMgZnJvbSAnLi4vaW1hZ2VzL2dyYWNlQXV0b1NhbGVzLnBuZyc7XHJcbmltcG9ydCBkYXJieUF1dG9DZW50ZXIgZnJvbSAnLi4vaW1hZ2VzL2RhcmJ5QXV0b0NlbnRlci5wbmcnO1xyXG5pbXBvcnQgYml0Y29pbkNoZWNrZXIgZnJvbSAnLi4vaW1hZ2VzL2JpdGNvaW5DaGVja2VyLnBuZyc7XHJcblxyXG5jbGFzcyBQb3J0Zm9saW8gZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICBzdXBlcihwcm9wcyk7XHJcbiB9XHJcblxyXG4gcmVuZGVyKCl7XHJcbiAgIHJldHVybihcclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1ob2xkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlLXBhZ2VcIj5XZWJzaXRlIC8gV2Vic2l0ZSBBcHBsaWNhdGlvbiBQb3J0Zm9saW88L2gyPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEkgc3RhcnRlZCBteSBJVCBpbmR1c3RyeSBjYXJlZXIgbWFpbmx5IG9uIFdvcmRQcmVzcyBQSFAgRGV2ZWxvcG1lbnQgYW5kIEZyb250LWVuZCBEZXZlbG9wbWVudCwgY3VycmVudGx5IGkgYW0gbm93IGZvY3VzaW5nIG9uXHJcbiAgICAgICAgICAgIEZyb250LWVuZCBEZXZlbG9wbWVudCBtYWlubHkgdXNpbmcgUmVhY3QgYW5kIE5leHRqcy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb3dNaWxlc0F1dG99IGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LW9wYWNpdHktaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5Mb3cgTWlsZXMgQXV0bzwvcD5cclxuICAgICAgICAgICAgICAgIDxoNj5Xb3JkUHJlc3MgUGhwIEpRdWVyeSBKYXZhU2NyaXB0IGMjIEh0bWwgQ1NTIGxlc3MgQm9vdHN0cmFwIE1lZGlhIFF1ZXJ5IEVsYXN0aWMgU2VhcmNoPC9oNj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5sb3dtaWxlcy5uZXQvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWxpbmtcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpYmVydHlBdXRvcGxleH0gY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtb3BhY2l0eS1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPkxpYmVydHkgQXV0b3BsZXg8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDY+V29yZFByZXNzIFBocCBKUXVlcnkgSmF2YVNjcmlwdCBjIyBIdG1sIENTUyBsZXNzIEJvb3RzdHJhcCBNZWRpYSBRdWVyeSBFbGFzdGljIFNlYXJjaDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGliZXJ0eWF1dG9wbGV4LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtbGlua1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17eWFsQ2Fyc30gY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtb3BhY2l0eS1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPllhbGNhcnM8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDY+V29yZFByZXNzIFBocCBKUXVlcnkgSmF2YVNjcmlwdCBjIyBIdG1sIENTUyBsZXNzIEJvb3RzdHJhcCBNZWRpYSBRdWVyeSBFbGFzdGljIFNlYXJjaDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueWFsY2Fycy5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWxpbmtcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e25odH0gY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtb3BhY2l0eS1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPk5vcnRoIEhvbGx5d29vZCBUb3lvdGE8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDY+V29yZFByZXNzIFBocCBKUXVlcnkgSmF2YVNjcmlwdCBjIyBIdG1sIENTUyBsZXNzIEJvb3RzdHJhcCBNZWRpYSBRdWVyeSBFbGFzdGljIFNlYXJjaDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubm9ydGhob2xseXdvb2R0b3lvdGEuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1saW5rXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGlzY292ZXJ5fSBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1vcGFjaXR5LWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHA+RGlzY292ZXJ5IEF1dG8gVGFtcGE8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDY+V29yZFByZXNzIFBocCBKUXVlcnkgSmF2YVNjcmlwdCBjIyBIdG1sIENTUyBsZXNzIEJvb3RzdHJhcCBNZWRpYSBRdWVyeSBFbGFzdGljIFNlYXJjaDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZGlzY292ZXJ5YXV0b3RhbXBhLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtbGlua1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z3JhY2VBdXRvU2FsZXN9IGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LW9wYWNpdHktaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5HcmFjZSBBdXRvIFNhbGVzIGFuZCBTZXJ2aWNlPC9wPlxyXG4gICAgICAgICAgICAgICAgPGg2PldvcmRQcmVzcyBQaHAgSlF1ZXJ5IEphdmFTY3JpcHQgYyMgSHRtbCBDU1MgbGVzcyBCb290c3RyYXAgTWVkaWEgUXVlcnkgRWxhc3RpYyBTZWFyY2g8L2g2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmdyYWNlYXV0b3NhbGVzYW5kc2VydmljZS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWxpbmtcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXJieUF1dG9DZW50ZXJ9IGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LW9wYWNpdHktaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5EYXJieSBBdXRvIENlbnRlcjwvcD5cclxuICAgICAgICAgICAgICAgIDxoNj5Xb3JkUHJlc3MgUGhwIEpRdWVyeSBKYXZhU2NyaXB0IGMjIEh0bWwgQ1NTIGxlc3MgQm9vdHN0cmFwIE1lZGlhIFF1ZXJ5IEVsYXN0aWMgU2VhcmNoPC9oNj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5kYXJieWF1dG9jZW50ZXIuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1saW5rXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiaXRjb2luQ2hlY2tlcn0gY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtb3BhY2l0eS1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPkJpdGNvaW4gQ2hlY2tlcjwvcD5cclxuICAgICAgICAgICAgICAgIDxoNj5SZWFjdEpTIEphdmFTY3JpcHQgSlF1ZXJ5IGh0bWwgQ1NTIGxlc3MgQm9vdHN0cmFwIFRoaXJkIFBhcnR5IEFQSTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NvZGVIb2JieWlzdC9CaXRjb2luQ2hlY2tlclwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1saW5rXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5wb3J0Zm9saW8taG9sZGVyIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTk5OSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBvcnRmb2xpby1ob2xkZXIgLmNvbnRhaW5lciAucm93IHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucG9ydGZvbGlvLWhvbGRlciAuY29udGFpbmVyIGltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kaXYtb3BhY2l0eS1ob2xkZXJcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDkzLjUlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjhzIGVhc2U7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuOHMgZWFzZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjhzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGl2LW9wYWNpdHktaG9sZGVyOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjhzIGVhc2U7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuOHMgZWFzZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjhzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGl2LW9wYWNpdHktaG9sZGVyIGEge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGVmdDogMTZweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3R0b20gMC44cyBlYXNlLW91dCwgb3BhY2l0eSAwLjhzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYm90dG9tIDAuOHMgZWFzZS1vdXQsIG9wYWNpdHkgMC44cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuOHMgZWFzZS1vdXQsIG9wYWNpdHkgMC44cyBlYXNlLW91dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kaXYtb3BhY2l0eS1ob2xkZXI6aG92ZXIgYSB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogOXB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvdHRvbSAwLjhzIGVhc2UsIG9wYWNpdHkgMC44cyBlYXNlO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYm90dG9tIDAuOHMgZWFzZSwgb3BhY2l0eSAwLjhzIGVhc2U7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjhzIGVhc2UsIG9wYWNpdHkgMC44cyBlYXNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRpdi1vcGFjaXR5LWhvbGRlciBwIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgbGVmdDogMTM1cHg7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNlNWU1ZTUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC44cyBlYXNlLW91dCwgb3BhY2l0eSAwLjhzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBsZWZ0IDAuOHMgZWFzZS1vdXQsIG9wYWNpdHkgMC44cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuOHMgZWFzZS1vdXQsIG9wYWNpdHkgMC44cyBlYXNlLW91dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kaXYtb3BhY2l0eS1ob2xkZXI6aG92ZXIgcCB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAwLjhzIGVhc2UsIG9wYWNpdHkgMC44cyBlYXNlO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogbGVmdCAwLjhzIGVhc2UsIG9wYWNpdHkgMC44cyBlYXNlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuOHMgZWFzZSwgb3BhY2l0eSAwLjhzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGl2LW9wYWNpdHktaG9sZGVyIGg2IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgbGVmdDogMTdweDtcclxuICAgICAgICAgICAgICB0b3A6IDcwcHg7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjOTk5OTk5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0b3AgMC44cyBlYXNlLW91dCwgb3BhY2l0eSAwLjhzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiB0b3AgMC44cyBlYXNlLW91dCwgb3BhY2l0eSAwLjhzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjhzIGVhc2Utb3V0LCBvcGFjaXR5IDAuOHMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGl2LW9wYWNpdHktaG9sZGVyOmhvdmVyIGg2IHtcclxuICAgICAgICAgICAgICB0b3A6IDQ0cHg7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHRvcCAwLjhzIGVhc2Utb3V0LCBvcGFjaXR5IDAuOHMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IHRvcCAwLjhzIGVhc2Utb3V0LCBvcGFjaXR5IDAuOHMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuOHMgZWFzZS1vdXQsIG9wYWNpdHkgMC44cyBlYXNlLW91dDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuXHJcbiAgICAgICAgICBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDc2OHB4KVxyXG4gICAgICAgICAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMDBweClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLmRpdi1vcGFjaXR5LWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNzRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgKTtcclxuIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvO1xyXG4iXX0= */\n/*@ sourceURL=C:\\RRProjects\\LPSWebsite\\pages\\portfolio.js */",
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