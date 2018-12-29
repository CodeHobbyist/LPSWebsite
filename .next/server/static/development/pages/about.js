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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default, ContentAbout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentAbout", function() { return ContentAbout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_animated_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-animated-text */ "react-animated-text");
/* harmony import */ var react_animated_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_animated_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\RRProjects\\LPSWebsite\\pages\\about.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var About =
/*#__PURE__*/
function (_Component) {
  _inherits(About, _Component);

  function About(props) {
    var _this;

    _classCallCheck(this, About);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(About).call(this, props));
    _this.state = {
      sentenceValue: 'default',
      firstCondition: false,
      secondCondition: false,
      thirdCondition: false
    };
    return _this;
  }

  _createClass(About, [{
    key: "_onClick",
    value: function _onClick(event) {
      if (event === 'describe') {
        this.setState({
          sentenceValue: event,
          firstCondition: !this.state.firstCondition,
          secondCondition: false,
          thirdCondition: false
        });
      } else if (event === 'education') {
        this.setState({
          sentenceValue: event,
          firstCondition: false,
          secondCondition: !this.state.secondCondition,
          thirdCondition: false
        });
      } else if (event === 'recent') {
        this.setState({
          sentenceValue: event,
          firstCondition: false,
          secondCondition: false,
          thirdCondition: !this.state.thirdCondition
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-1807500771" + " " + "about-holder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-1807500771" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
        className: "jsx-1807500771" + " " + "title-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
        className: "jsx-1807500771" + " " + "list-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
        onClick: function onClick(event) {
          return _this2._onClick(event = "describe");
        },
        className: "jsx-1807500771" + " " + ((this.state.firstCondition ? "list-group-item disable" : "list-group-item") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "jsx-1807500771",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "About Me")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
        onClick: function onClick(event) {
          return _this2._onClick(event = "education");
        },
        className: "jsx-1807500771" + " " + ((this.state.secondCondition ? "list-group-item disable" : "list-group-item") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "jsx-1807500771",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "My Education")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
        onClick: function onClick(event) {
          return _this2._onClick(event = "recent");
        },
        className: "jsx-1807500771" + " " + ((this.state.thirdCondition ? "list-group-item disable" : "list-group-item") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "jsx-1807500771",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "My Recent Work Experiences"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ContentAbout, {
        sentenceValue: this.state.sentenceValue,
        conditionValue: this.state.condition,
        readMoreValue: this.state.readMoreValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1807500771",
        css: ".about-holder.jsx-1807500771{height:500px;}h1.jsx-1807500771{padding-bottom:25px;}.list-group.jsx-1807500771{display:block !important;height:50px;padding-top:5px;}.list-group-item.jsx-1807500771{float:left;position:inherit;margin-right:8px;border-radius:2px;font-weight:600;padding:0.2rem 1rem;background-color:transparent;border-color:#222;color:#e5e5e5 !important;-webkit-transition:border 0.5s ease;-ms-transition:border 0.5s ease;-webkit-transition:border 0.5s ease;transition:border 0.5s ease;}.list-group-item.jsx-1807500771:hover{cursor:pointer;border:1px solid;-webkit-transition:border 0.5s ease;-ms-transition:border 0.5s ease;-webkit-transition:border 0.5s ease;transition:border 0.5s ease;}.disable.jsx-1807500771{font-weight:600;border:1px solid;}.read-more.jsx-1807500771:hover{cursor:pointer;}.hide.jsx-1807500771{display:none;}.show.jsx-1807500771{display:block;}.disable.jsx-1807500771{pointer-events:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSUlByb2plY3RzXFxMUFNXZWJzaXRlXFxwYWdlc1xcYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VrQixBQUd1QixBQUdRLEFBR0ssQUFLYixBQWVJLEFBUUMsQUFLRCxBQUdGLEFBR0MsQUFHSyxXQXBDRixFQVhuQixBQTBDQSxDQUdBLENBbkJtQixBQWFuQixDQUxtQixJQS9CcEIsQUE2Q0UsS0ExQ1ksR0FNTSxJQWVtQixDQVF0QyxJQTVCaUIsUUFNRyxRQUxwQixVQU1rQixLQWNnQixXQWJaLG9CQUNTLENBYUQsNEJBWlYsa0JBQ08sa0JBWTNCLE9BWHNDLG9DQUNKLGdDQUNKLGdFQUM5QiIsImZpbGUiOiJDOlxcUlJQcm9qZWN0c1xcTFBTV2Vic2l0ZVxccGFnZXNcXGFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgV2F2ZSAgfSBmcm9tICdyZWFjdC1hbmltYXRlZC10ZXh0JztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEFib3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbmNvbnN0cnVjdG9yKHByb3BzKXtcclxuICBzdXBlcihwcm9wcyk7XHJcblxyXG4gIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNlbnRlbmNlVmFsdWU6ICdkZWZhdWx0JyxcclxuICAgICAgZmlyc3RDb25kaXRpb246IGZhbHNlLFxyXG4gICAgICBzZWNvbmRDb25kaXRpb246IGZhbHNlLFxyXG4gICAgICB0aGlyZENvbmRpdGlvbjogZmFsc2VcclxuICAgfVxyXG59XHJcblxyXG5fb25DbGljayhldmVudCl7XHJcblxyXG4gaWYoZXZlbnQgPT09ICdkZXNjcmliZScpe1xyXG4gICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgIHNlbnRlbmNlVmFsdWU6IGV2ZW50LFxyXG4gICAgICAgZmlyc3RDb25kaXRpb246ICF0aGlzLnN0YXRlLmZpcnN0Q29uZGl0aW9uLFxyXG4gICAgICAgc2Vjb25kQ29uZGl0aW9uOiBmYWxzZSxcclxuICAgICAgIHRoaXJkQ29uZGl0aW9uOiBmYWxzZVxyXG4gICAgIH0pO1xyXG4gfVxyXG4gZWxzZSBpZihldmVudCA9PT0gJ2VkdWNhdGlvbicpe1xyXG4gICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgIHNlbnRlbmNlVmFsdWU6IGV2ZW50LFxyXG4gICAgICAgZmlyc3RDb25kaXRpb246IGZhbHNlLFxyXG4gICAgICAgc2Vjb25kQ29uZGl0aW9uOiAhdGhpcy5zdGF0ZS5zZWNvbmRDb25kaXRpb24sXHJcbiAgICAgICB0aGlyZENvbmRpdGlvbjogZmFsc2VcclxuICAgICB9KTtcclxuIH1cclxuIGVsc2UgaWYoZXZlbnQgPT09ICdyZWNlbnQnKXtcclxuICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICBzZW50ZW5jZVZhbHVlOiBldmVudCxcclxuICAgICAgIGZpcnN0Q29uZGl0aW9uOiBmYWxzZSxcclxuICAgICAgIHNlY29uZENvbmRpdGlvbjogZmFsc2UsXHJcbiAgICAgICB0aGlyZENvbmRpdGlvbjogIXRoaXMuc3RhdGUudGhpcmRDb25kaXRpb25cclxuICAgICB9KTtcclxuIH1cclxuXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gcmV0dXJuKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtaG9sZGVyXCI+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlLXBhZ2VcIj5BYm91dDwvaDI+XHJcbiAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5maXJzdENvbmRpdGlvbiA/IFwibGlzdC1ncm91cC1pdGVtIGRpc2FibGVcIiA6IFwibGlzdC1ncm91cC1pdGVtXCJ9IG9uQ2xpY2s9e2V2ZW50ID0+IHRoaXMuX29uQ2xpY2soZXZlbnQgPSBcImRlc2NyaWJlXCIpfT48c3Bhbj5BYm91dCBNZTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2Vjb25kQ29uZGl0aW9uID8gXCJsaXN0LWdyb3VwLWl0ZW0gZGlzYWJsZVwiIDogXCJsaXN0LWdyb3VwLWl0ZW1cIn0gb25DbGljaz17ZXZlbnQgPT4gdGhpcy5fb25DbGljayhldmVudCA9IFwiZWR1Y2F0aW9uXCIpfT48c3Bhbj5NeSBFZHVjYXRpb248L3NwYW4+PC9saT5cclxuICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnRoaXJkQ29uZGl0aW9uID8gXCJsaXN0LWdyb3VwLWl0ZW0gZGlzYWJsZVwiIDogXCJsaXN0LWdyb3VwLWl0ZW1cIn0gb25DbGljaz17ZXZlbnQgPT4gdGhpcy5fb25DbGljayhldmVudCA9IFwicmVjZW50XCIpfT48c3Bhbj5NeSBSZWNlbnQgV29yayBFeHBlcmllbmNlczwvc3Bhbj48L2xpPlxyXG4gICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgPENvbnRlbnRBYm91dFxyXG4gICAgICAgICAgICBzZW50ZW5jZVZhbHVlID0ge3RoaXMuc3RhdGUuc2VudGVuY2VWYWx1ZX1cclxuICAgICAgICAgICAgY29uZGl0aW9uVmFsdWUgPSB7dGhpcy5zdGF0ZS5jb25kaXRpb259XHJcbiAgICAgICAgICAgIHJlYWRNb3JlVmFsdWUgPSB7dGhpcy5zdGF0ZS5yZWFkTW9yZVZhbHVlfVxyXG4gICAgICAgICAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmFib3V0LWhvbGRlcntcclxuICAgICAgICAgIGhlaWdodDo1MDBweDtcclxuICAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlzdC1ncm91cCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICBib3JkZXItY29sb3I6ICMyMjI7XHJcbiAgICAgICAgICAgY29sb3I6ICNlNWU1ZTUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGJvcmRlciAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuNXMgZWFzZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAubGlzdC1ncm91cC1pdGVtOmhvdmVyXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXIgMC41cyBlYXNlO1xyXG4gICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBib3JkZXIgMC41cyBlYXNlO1xyXG4gICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjVzIGVhc2U7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmRpc2FibGVcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLnJlYWQtbW9yZTpob3ZlclxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5oaWRlIHtcclxuICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5zaG93IHtcclxuICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuZGlzYWJsZSB7XHJcbiAgICAgICAgICAgcG9pbnRlci1ldmVudHM6bm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG5cclxuICApO1xyXG59XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50QWJvdXQgPSAoe3NlbnRlbmNlVmFsdWV9KSA9PiB7XHJcblxyXG5sZXQgVGl0bGVWYWx1ZSA9IFwiUGxlYXNlIGNob29zZSB3aGF0IGRvIHlvdSB3YW50IHRvIGtub3cgYWJvdXQgbWUuXCIgO1xyXG5cclxubGV0IE1haW5Db250ZW50ID0gKCkgPT4gKFxyXG4gICA8cD57VGl0bGVWYWx1ZX08L3A+XHJcbik7XHJcblxyXG5pZihzZW50ZW5jZVZhbHVlID09PSAnZGVzY3JpYmUnKXtcclxuXHJcbiAgICBUaXRsZVZhbHVlID0gXCJBYm91dCBNZVwiO1xyXG5cclxuICAgIE1haW5Db250ZW50ID0gKCkgPT4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8aDM+PFdhdmUgdGV4dD17VGl0bGVWYWx1ZX0gZWZmZWN0PVwidmVydGljYWxGYWRlSW5cIiBlZmZlY3REaXJlY3Rpb249XCJkb3duXCIgc3BlZWQ9ezQwfSBlZmZlY3REdXJhdGlvbj17MC4xfSBpdGVyYXRpb25zPXsxfS8+PC9oMz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgPHA+TXkgbmFtZSBpcyBMb3VpZSBQZWFybCBTaXNvbiwgYm9ybiBhbmQgcmFpc2VkIGluIHRoZSBQaGlsaXBwaW5lc1xyXG4gICAgICAgICAgICAgICAgYXMgbWVudGlvbmVkIG9uIG15IGhvbWUgcGFnZSBpJ20gYSAgZ3JhZHVhdGUgb2YgQmFjaGVsb3Igb2YgU2NpZW5jZSBJbiBJbmZvcm1hdGlvbiBUZWNobm9sb2d5XHJcbiAgICAgICAgICAgICAgICBhdCBJbmZvcm1hdGljcyBDb2xsZWdlIHdoaWNoIGlzIGJhc2VkIGluIHRoZSBwaGlsaXBwaW5lcy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBJJ20gYSBXZWJzaXRlIC8gV2ViIEFwcCBEZXZlbG9wZXIgZm9yIG1vcmUgdGhhbiAzIHllYXJzIG5vdywgbXkgdmVyeSBmaXJzdCBqb2Igd2FzIGEgV29yZFByZXNzIC8gZnJvbnQtZW5kIGRldmVsb3BlciBhdCA0dGhzaGlmdFxyXG4gICAgICAgICAgICAgICAgR2xvYmFsIFNvbHV0aW9ucyBiYXNlZCBvbiBNYWthdGksIE1ldHJvIE1hbmlsYSBQaGlsaXBwaW5lcy4gSSB3b3JrZWQgZm9yIG92ZXIgOCBtb250aHMgdGhlcmUgdGhlbiBpIHdhcyBoaXJlZCBhdCBOb3djb20gZ2xvYmFsXHJcbiAgICAgICAgICAgICAgICBTb2x1dGlvbnMgZm9yIE1pZCBTb2Z0d2FyZSBFbmdyIGZvciBvdmVyIDIgeWVhcnMsIGkgd2FzIGFsc28gYSBXb3JkUHJlc3MgLyBmcm9udC1lbmQgZGV2ZWxvcGVyLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIEkgY2FuIHNheSB0aGF0IGkgZ3JldyB1cCB3b3JraW5nIG9uIE5vd2NvbSwgbm90IG9ubHkgYXMgYSBXZWJzaXRlIERldmVsb3BlciBidXQgYWxzbyBhcyBhIGh1bWFuIGJlaW5nIGJlY2F1c2UgaSBsZWFybmVkIGEgbG90IGZyb21cclxuICAgICAgICAgICAgICAgIGhvdyB0byBoYW5kbGUgc3RyZXNzIHRvIGhvdyB0byBoYW5kbGUgdGFza3MgdGhlIGNvcnJlY3Qgd2F5LCBmb3IgZXhhbXBsZSwgd2hhdCBpcyB0aGUgcmlnaHQgdGhpbmcgdG8gZG8gaWYgZm9yIGV4YW1wbGUgeW91IGhhdmUgYSBidWcgb24gdGhlXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0aW9uIHNpdGVzIGV0Y2guIGkgd29ya2VkIGF0IE5vd2NvbSBmb3Igb3ZlciAyIGJlYXV0aWZ1bCBhbmQgcHJvcGVyb3VzIHllYXJzLCBpIGxlZnQgbm93Y29tIGFzIGEgTWlkIFNvZnR3YXJlIEVuZ3IuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgVGhlbiBjYW1lIGFuIG9wcG9ydHVuaXR5IHRvIGdvIGFicm9hZCwgSSBhbSBub3cgc3RheWluZyBoZXJlIGluIE5ldyBaZWFsYW5kIHRvIGJlIHdpdGggbXkgZnV0dXJlIGxvdmluZyB3aWZlLCB3aGljaCBpbiBkb2luZyBzb1xyXG4gICAgICAgICAgICAgICAgd2lsbCB0cnkgdGhlIHdhdGVycyBoZXJlIGluIE5ldyBaZWFsYW5kIGluIHRlcm1zIG9mIHRoZSBJVCB3b3JsZC4gSSBhbSBhbHdheXMgdmVyeSBwYXNzaW9uYXRlIHdoZW4gaXQgY29tZXMgdG8gd29yayBiZWNhdXNlIGkgYmVsaWV2ZVxyXG4gICAgICAgICAgICAgICAgeW91IHdpbGwgYWx3YXlzIG5lZWQgdG8gcHJvdmUgc29tZXRoaW5nLCBpIGFsd2F5cyBsb3ZlZCB0byBwcm92ZSBkb3VidGVycyB3cm9uZywgaSBndWVzcyB0aGF0IGlzIG15IHRoaW5nLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIEkgYWx3YXlzIGxvdmUgdG8gdHJ5IG5ldyB0aGluZ3MsIG5ldyBUZWNobm9sb2dpZXMsIG5ldyBsZWFybmluZ3MsIHNwZWNpYWxseSBpbiB0aGUgSVQgaW5kdXN0cnkuIHlvdSBzaG91bGQgYWx3YXlzIGJlIHVwZGF0ZWQgb24gdGhlIE5ld1xyXG4gICAgICAgICAgICAgICAgVGVjaG5vbG9naWVzIGluIHRoZSBtYXJrZXQgc28gdGhhdCB5b3VyIHNraWxscyBhbmQga25vd2xlZGdlIHdpbGwgYWxzbyBiZSB0aGUgbGF0ZXN0IHRyZW5kcy4gSSBhZG1pdCBpJ20gc3RpbGwgbm90IHRoZSBzZWFzb25lZCB2ZXRlcmFuXHJcbiAgICAgICAgICAgICAgICBXZWJzaXRlIERldmVsb3BlciwgYnV0IGkgdGhpbmsgd2hhdCBpIGNhbiBwdXQgb24gdGhlIHRhYmxlIGlzIGhhcmR3b3JrLCBwYXNzaW9uIGFuZCB3aWxsIG5vdCBzYXkgXCJOb1wiIGZvciBhbiBhbnN3ZXIuIGkgd2lsbCBhbHdheXNcclxuICAgICAgICAgICAgICAgIGZpbmQgdGhlIGFuc3dlciBubyBtYXR0ZXIgd2hhdC4gb3cgYW5kIHllYWggbm90IHRvIG1lbnRpb24gaW0gZWFzeSB0byBnZXQgYWxvbmcgd2l0aC4gbXkgY29tbXVuaWNhdGlvbiBza2lsbHMgaXMgY3Jpc3AgYXMgYSBmcmllZCBjaGlja2VuIGNhbiBiZS5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBTbyB5ZWFoLCBpZiB5b3UgdGhpbmsgaW0gdmVyeSB3ZWxsIHN1aXRlZCBvbiB5b3VyIGNvbXBhbnksIHBsZWFzZSBoaXQgbWUgdXAgYXQgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdCBNZTwvTGluaz5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgIFAuUy4gSW0gbm90IGEgV2Vic2l0ZSBEZXNpZ25lciBzbyBraW5kbHkgZXhjdXNlIG15IFVJLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5lbHNlIGlmKHNlbnRlbmNlVmFsdWUgPT09ICdlZHVjYXRpb24nKXtcclxuXHJcbiAgVGl0bGVWYWx1ZSA9IFwiTXkgRWR1Y2F0aW9uXCI7XHJcblxyXG4gIE1haW5Db250ZW50ID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGgzPjxXYXZlIHRleHQ9e1RpdGxlVmFsdWV9IGVmZmVjdD1cInZlcnRpY2FsRmFkZUluXCIgZWZmZWN0RGlyZWN0aW9uPVwiZG93blwiIHNwZWVkPXs0MH0gZWZmZWN0RHVyYXRpb249ezAuMX0gaXRlcmF0aW9ucz17MX0vPjwvaDM+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGk+QmFjaGVsb3Igb2YgU2NpZW5jZSBJbiBJbmZvcm1hdGlvbiBUZWNobm9sb2d5IC0gSW5mb3JtYXRpY3MgQ29sbGVnZSBFYXN0d29vcmQ8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5BZHZhbmNlIEludGVybmF0aW9uYWwgRGlwbG9tYSBpbiBJbmZvcm1hdGlvbiBUZWNobm9sb2d5ICgyIFllYXIgQ291cnNlKSAtIEluZm9ybWF0aWNzIENvbGxlZ2UgTGVnYXpwaTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPkJhY2hlbG9yIG9mIFNjaWVuY2UgSW4gTnVyc2luZyAtIFVuaXZlcnNpdHkgb2YgU3RvIFRob21hcyBMZWdhenBpPC9saT5cclxuICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZWxzZSBpZihzZW50ZW5jZVZhbHVlID09PSAncmVjZW50Jyl7XHJcbiAgVGl0bGVWYWx1ZSA9IFwiTXkgUmVjZW50IFdvcmsgRXhwZXJpZW5jZXNcIjtcclxuXHJcbiAgTWFpbkNvbnRlbnQgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8aDM+PFdhdmUgdGV4dD17VGl0bGVWYWx1ZX0gZWZmZWN0PVwidmVydGljYWxGYWRlSW5cIiBlZmZlY3REaXJlY3Rpb249XCJkb3duXCIgc3BlZWQ9ezQwfSBlZmZlY3REdXJhdGlvbj17MC4xfSBpdGVyYXRpb25zPXsxfS8+PC9oMz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgIDxsaT40dGhTaGlmdCBHbG9iYWwgU29sdXRpb25zIC0gV29yZFByZXNzIERldmVsb3BlcjwvbGk+XHJcbiAgICAgICAgICAgPGxpPk5vd2NvbSBHbG9iYWwgU29sdXRpb25zIC0gTWlkIFNvZnR3YXJlIEVuZ2luZWVyIChXb3JkUHJlc3MvRnJvbnQtZW5kIERldmVsb3Blcik8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1hYm91dC1ob2xkZXJcIj5cclxuICAgICAgIDxNYWluQ29udGVudCAvPlxyXG4gICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuY29udGVudC1hYm91dC1ob2xkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxufTtcclxuIl19 */\n/*@ sourceURL=C:\\RRProjects\\LPSWebsite\\pages\\about.js */",
        __self: this
      }));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (About);
var ContentAbout = function ContentAbout(_ref) {
  var sentenceValue = _ref.sentenceValue;
  var TitleValue = "Please choose what do you want to know about me.";

  var MainContent = function MainContent() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, TitleValue);
  };

  if (sentenceValue === 'describe') {
    TitleValue = "About Me";

    MainContent = function MainContent() {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "col-md-12 col-sm-12 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_animated_text__WEBPACK_IMPORTED_MODULE_2__["Wave"], {
        text: TitleValue,
        effect: "verticalFadeIn",
        effectDirection: "down",
        speed: 40,
        effectDuration: 0.1,
        iterations: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "col-md-12 col-sm-12 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "My name is Louie Pearl Sison, born and raised in the Philippines as mentioned on my home page i'm a  graduate of Bachelor of Science In Information Technology at Informatics College which is based in the philippines."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "I'm a Website / Web App Developer for more than 3 years now, my very first job was a WordPress / front-end developer at 4thshift Global Solutions based on Makati, Metro Manila Philippines. I worked for over 8 months there then i was hired at Nowcom global Solutions for Mid Software Engr for over 2 years, i was also a WordPress / front-end developer."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "I can say that i grew up working on Nowcom, not only as a Website Developer but also as a human being because i learned a lot from how to handle stress to how to handle tasks the correct way, for example, what is the right thing to do if for example you have a bug on the production sites etch. i worked at Nowcom for over 2 beautiful and properous years, i left nowcom as a Mid Software Engr."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Then came an opportunity to go abroad, I am now staying here in New Zealand to be with my future loving wife, which in doing so will try the waters here in New Zealand in terms of the IT world. I am always very passionate when it comes to work because i believe you will always need to prove something, i always loved to prove doubters wrong, i guess that is my thing."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "I always love to try new things, new Technologies, new learnings, specially in the IT industry. you should always be updated on the New Technologies in the market so that your skills and knowledge will also be the latest trends. I admit i'm still not the seasoned veteran Website Developer, but i think what i can put on the table is hardwork, passion and will not say \"No\" for an answer. i will always find the answer no matter what. ow and yeah not to mention im easy to get along with. my communication skills is crisp as a fried chicken can be."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "So yeah, if you think im very well suited on your company, please hit me up at ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "Contact Me")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "P.S. Im not a Website Designer so kindly excuse my UI.")));
    };
  } else if (sentenceValue === 'education') {
    TitleValue = "My Education";

    MainContent = function MainContent() {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "col-md-12 col-sm-12 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_animated_text__WEBPACK_IMPORTED_MODULE_2__["Wave"], {
        text: TitleValue,
        effect: "verticalFadeIn",
        effectDirection: "down",
        speed: 40,
        effectDuration: 0.1,
        iterations: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "col-md-12 col-sm-12 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "Bachelor of Science In Information Technology - Informatics College Eastwoord"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, "Advance International Diploma in Information Technology (2 Year Course) - Informatics College Legazpi"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "Bachelor of Science In Nursing - University of Sto Thomas Legazpi"))));
    };
  } else if (sentenceValue === 'recent') {
    TitleValue = "My Recent Work Experiences";

    MainContent = function MainContent() {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "col-md-12 col-sm-12 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_animated_text__WEBPACK_IMPORTED_MODULE_2__["Wave"], {
        text: TitleValue,
        effect: "verticalFadeIn",
        effectDirection: "down",
        speed: 40,
        effectDuration: 0.1,
        iterations: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "col-md-12 col-sm-12 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, "4thShift Global Solutions - WordPress Developer"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "Nowcom Global Solutions - Mid Software Engineer (WordPress/Front-end Developer)"))));
    };
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2267429135" + " " + "content-about-holder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MainContent, {
    className: "jsx-2267429135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2267429135",
    css: ".content-about-holder.jsx-2267429135{position:relative;padding-top:20px;text-align:justify !important;font-size:20px;color:#999999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSUlByb2plY3RzXFxMUFNXZWJzaXRlXFxwYWdlc1xcYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBME9tQixBQUcyQixrQkFDRCxpQkFDYSw4QkFDZixlQUNELGNBQ2hCIiwiZmlsZSI6IkM6XFxSUlByb2plY3RzXFxMUFNXZWJzaXRlXFxwYWdlc1xcYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBXYXZlICB9IGZyb20gJ3JlYWN0LWFuaW1hdGVkLXRleHQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuY29uc3RydWN0b3IocHJvcHMpe1xyXG4gIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2VudGVuY2VWYWx1ZTogJ2RlZmF1bHQnLFxyXG4gICAgICBmaXJzdENvbmRpdGlvbjogZmFsc2UsXHJcbiAgICAgIHNlY29uZENvbmRpdGlvbjogZmFsc2UsXHJcbiAgICAgIHRoaXJkQ29uZGl0aW9uOiBmYWxzZVxyXG4gICB9XHJcbn1cclxuXHJcbl9vbkNsaWNrKGV2ZW50KXtcclxuXHJcbiBpZihldmVudCA9PT0gJ2Rlc2NyaWJlJyl7XHJcbiAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgc2VudGVuY2VWYWx1ZTogZXZlbnQsXHJcbiAgICAgICBmaXJzdENvbmRpdGlvbjogIXRoaXMuc3RhdGUuZmlyc3RDb25kaXRpb24sXHJcbiAgICAgICBzZWNvbmRDb25kaXRpb246IGZhbHNlLFxyXG4gICAgICAgdGhpcmRDb25kaXRpb246IGZhbHNlXHJcbiAgICAgfSk7XHJcbiB9XHJcbiBlbHNlIGlmKGV2ZW50ID09PSAnZWR1Y2F0aW9uJyl7XHJcbiAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgc2VudGVuY2VWYWx1ZTogZXZlbnQsXHJcbiAgICAgICBmaXJzdENvbmRpdGlvbjogZmFsc2UsXHJcbiAgICAgICBzZWNvbmRDb25kaXRpb246ICF0aGlzLnN0YXRlLnNlY29uZENvbmRpdGlvbixcclxuICAgICAgIHRoaXJkQ29uZGl0aW9uOiBmYWxzZVxyXG4gICAgIH0pO1xyXG4gfVxyXG4gZWxzZSBpZihldmVudCA9PT0gJ3JlY2VudCcpe1xyXG4gICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgIHNlbnRlbmNlVmFsdWU6IGV2ZW50LFxyXG4gICAgICAgZmlyc3RDb25kaXRpb246IGZhbHNlLFxyXG4gICAgICAgc2Vjb25kQ29uZGl0aW9uOiBmYWxzZSxcclxuICAgICAgIHRoaXJkQ29uZGl0aW9uOiAhdGhpcy5zdGF0ZS50aGlyZENvbmRpdGlvblxyXG4gICAgIH0pO1xyXG4gfVxyXG5cclxufVxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiByZXR1cm4oXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1ob2xkZXJcIj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUtcGFnZVwiPkFib3V0PC9oMj5cclxuICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmZpcnN0Q29uZGl0aW9uID8gXCJsaXN0LWdyb3VwLWl0ZW0gZGlzYWJsZVwiIDogXCJsaXN0LWdyb3VwLWl0ZW1cIn0gb25DbGljaz17ZXZlbnQgPT4gdGhpcy5fb25DbGljayhldmVudCA9IFwiZGVzY3JpYmVcIil9PjxzcGFuPkFib3V0IE1lPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zZWNvbmRDb25kaXRpb24gPyBcImxpc3QtZ3JvdXAtaXRlbSBkaXNhYmxlXCIgOiBcImxpc3QtZ3JvdXAtaXRlbVwifSBvbkNsaWNrPXtldmVudCA9PiB0aGlzLl9vbkNsaWNrKGV2ZW50ID0gXCJlZHVjYXRpb25cIil9PjxzcGFuPk15IEVkdWNhdGlvbjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMuc3RhdGUudGhpcmRDb25kaXRpb24gPyBcImxpc3QtZ3JvdXAtaXRlbSBkaXNhYmxlXCIgOiBcImxpc3QtZ3JvdXAtaXRlbVwifSBvbkNsaWNrPXtldmVudCA9PiB0aGlzLl9vbkNsaWNrKGV2ZW50ID0gXCJyZWNlbnRcIil9PjxzcGFuPk15IFJlY2VudCBXb3JrIEV4cGVyaWVuY2VzPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICA8Q29udGVudEFib3V0XHJcbiAgICAgICAgICAgIHNlbnRlbmNlVmFsdWUgPSB7dGhpcy5zdGF0ZS5zZW50ZW5jZVZhbHVlfVxyXG4gICAgICAgICAgICBjb25kaXRpb25WYWx1ZSA9IHt0aGlzLnN0YXRlLmNvbmRpdGlvbn1cclxuICAgICAgICAgICAgcmVhZE1vcmVWYWx1ZSA9IHt0aGlzLnN0YXRlLnJlYWRNb3JlVmFsdWV9XHJcbiAgICAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYWJvdXQtaG9sZGVye1xyXG4gICAgICAgICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXN0LWdyb3VwIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xyXG4gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgIGJvcmRlci1jb2xvcjogIzIyMjtcclxuICAgICAgICAgICBjb2xvcjogI2U1ZTVlNSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyIDAuNXMgZWFzZTtcclxuICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYm9yZGVyIDAuNXMgZWFzZTtcclxuICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC41cyBlYXNlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW06aG92ZXJcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGJvcmRlciAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuNXMgZWFzZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuZGlzYWJsZVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAucmVhZC1tb3JlOmhvdmVyXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmhpZGUge1xyXG4gICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLnNob3cge1xyXG4gICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5kaXNhYmxlIHtcclxuICAgICAgICAgICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRBYm91dCA9ICh7c2VudGVuY2VWYWx1ZX0pID0+IHtcclxuXHJcbmxldCBUaXRsZVZhbHVlID0gXCJQbGVhc2UgY2hvb3NlIHdoYXQgZG8geW91IHdhbnQgdG8ga25vdyBhYm91dCBtZS5cIiA7XHJcblxyXG5sZXQgTWFpbkNvbnRlbnQgPSAoKSA9PiAoXHJcbiAgIDxwPntUaXRsZVZhbHVlfTwvcD5cclxuKTtcclxuXHJcbmlmKHNlbnRlbmNlVmFsdWUgPT09ICdkZXNjcmliZScpe1xyXG5cclxuICAgIFRpdGxlVmFsdWUgPSBcIkFib3V0IE1lXCI7XHJcblxyXG4gICAgTWFpbkNvbnRlbnQgPSAoKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxoMz48V2F2ZSB0ZXh0PXtUaXRsZVZhbHVlfSBlZmZlY3Q9XCJ2ZXJ0aWNhbEZhZGVJblwiIGVmZmVjdERpcmVjdGlvbj1cImRvd25cIiBzcGVlZD17NDB9IGVmZmVjdER1cmF0aW9uPXswLjF9IGl0ZXJhdGlvbnM9ezF9Lz48L2gzPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICA8cD5NeSBuYW1lIGlzIExvdWllIFBlYXJsIFNpc29uLCBib3JuIGFuZCByYWlzZWQgaW4gdGhlIFBoaWxpcHBpbmVzXHJcbiAgICAgICAgICAgICAgICBhcyBtZW50aW9uZWQgb24gbXkgaG9tZSBwYWdlIGknbSBhICBncmFkdWF0ZSBvZiBCYWNoZWxvciBvZiBTY2llbmNlIEluIEluZm9ybWF0aW9uIFRlY2hub2xvZ3lcclxuICAgICAgICAgICAgICAgIGF0IEluZm9ybWF0aWNzIENvbGxlZ2Ugd2hpY2ggaXMgYmFzZWQgaW4gdGhlIHBoaWxpcHBpbmVzLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIEknbSBhIFdlYnNpdGUgLyBXZWIgQXBwIERldmVsb3BlciBmb3IgbW9yZSB0aGFuIDMgeWVhcnMgbm93LCBteSB2ZXJ5IGZpcnN0IGpvYiB3YXMgYSBXb3JkUHJlc3MgLyBmcm9udC1lbmQgZGV2ZWxvcGVyIGF0IDR0aHNoaWZ0XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwgU29sdXRpb25zIGJhc2VkIG9uIE1ha2F0aSwgTWV0cm8gTWFuaWxhIFBoaWxpcHBpbmVzLiBJIHdvcmtlZCBmb3Igb3ZlciA4IG1vbnRocyB0aGVyZSB0aGVuIGkgd2FzIGhpcmVkIGF0IE5vd2NvbSBnbG9iYWxcclxuICAgICAgICAgICAgICAgIFNvbHV0aW9ucyBmb3IgTWlkIFNvZnR3YXJlIEVuZ3IgZm9yIG92ZXIgMiB5ZWFycywgaSB3YXMgYWxzbyBhIFdvcmRQcmVzcyAvIGZyb250LWVuZCBkZXZlbG9wZXIuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgSSBjYW4gc2F5IHRoYXQgaSBncmV3IHVwIHdvcmtpbmcgb24gTm93Y29tLCBub3Qgb25seSBhcyBhIFdlYnNpdGUgRGV2ZWxvcGVyIGJ1dCBhbHNvIGFzIGEgaHVtYW4gYmVpbmcgYmVjYXVzZSBpIGxlYXJuZWQgYSBsb3QgZnJvbVxyXG4gICAgICAgICAgICAgICAgaG93IHRvIGhhbmRsZSBzdHJlc3MgdG8gaG93IHRvIGhhbmRsZSB0YXNrcyB0aGUgY29ycmVjdCB3YXksIGZvciBleGFtcGxlLCB3aGF0IGlzIHRoZSByaWdodCB0aGluZyB0byBkbyBpZiBmb3IgZXhhbXBsZSB5b3UgaGF2ZSBhIGJ1ZyBvbiB0aGVcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Rpb24gc2l0ZXMgZXRjaC4gaSB3b3JrZWQgYXQgTm93Y29tIGZvciBvdmVyIDIgYmVhdXRpZnVsIGFuZCBwcm9wZXJvdXMgeWVhcnMsIGkgbGVmdCBub3djb20gYXMgYSBNaWQgU29mdHdhcmUgRW5nci5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBUaGVuIGNhbWUgYW4gb3Bwb3J0dW5pdHkgdG8gZ28gYWJyb2FkLCBJIGFtIG5vdyBzdGF5aW5nIGhlcmUgaW4gTmV3IFplYWxhbmQgdG8gYmUgd2l0aCBteSBmdXR1cmUgbG92aW5nIHdpZmUsIHdoaWNoIGluIGRvaW5nIHNvXHJcbiAgICAgICAgICAgICAgICB3aWxsIHRyeSB0aGUgd2F0ZXJzIGhlcmUgaW4gTmV3IFplYWxhbmQgaW4gdGVybXMgb2YgdGhlIElUIHdvcmxkLiBJIGFtIGFsd2F5cyB2ZXJ5IHBhc3Npb25hdGUgd2hlbiBpdCBjb21lcyB0byB3b3JrIGJlY2F1c2UgaSBiZWxpZXZlXHJcbiAgICAgICAgICAgICAgICB5b3Ugd2lsbCBhbHdheXMgbmVlZCB0byBwcm92ZSBzb21ldGhpbmcsIGkgYWx3YXlzIGxvdmVkIHRvIHByb3ZlIGRvdWJ0ZXJzIHdyb25nLCBpIGd1ZXNzIHRoYXQgaXMgbXkgdGhpbmcuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgSSBhbHdheXMgbG92ZSB0byB0cnkgbmV3IHRoaW5ncywgbmV3IFRlY2hub2xvZ2llcywgbmV3IGxlYXJuaW5ncywgc3BlY2lhbGx5IGluIHRoZSBJVCBpbmR1c3RyeS4geW91IHNob3VsZCBhbHdheXMgYmUgdXBkYXRlZCBvbiB0aGUgTmV3XHJcbiAgICAgICAgICAgICAgICBUZWNobm9sb2dpZXMgaW4gdGhlIG1hcmtldCBzbyB0aGF0IHlvdXIgc2tpbGxzIGFuZCBrbm93bGVkZ2Ugd2lsbCBhbHNvIGJlIHRoZSBsYXRlc3QgdHJlbmRzLiBJIGFkbWl0IGknbSBzdGlsbCBub3QgdGhlIHNlYXNvbmVkIHZldGVyYW5cclxuICAgICAgICAgICAgICAgIFdlYnNpdGUgRGV2ZWxvcGVyLCBidXQgaSB0aGluayB3aGF0IGkgY2FuIHB1dCBvbiB0aGUgdGFibGUgaXMgaGFyZHdvcmssIHBhc3Npb24gYW5kIHdpbGwgbm90IHNheSBcIk5vXCIgZm9yIGFuIGFuc3dlci4gaSB3aWxsIGFsd2F5c1xyXG4gICAgICAgICAgICAgICAgZmluZCB0aGUgYW5zd2VyIG5vIG1hdHRlciB3aGF0LiBvdyBhbmQgeWVhaCBub3QgdG8gbWVudGlvbiBpbSBlYXN5IHRvIGdldCBhbG9uZyB3aXRoLiBteSBjb21tdW5pY2F0aW9uIHNraWxscyBpcyBjcmlzcCBhcyBhIGZyaWVkIGNoaWNrZW4gY2FuIGJlLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIFNvIHllYWgsIGlmIHlvdSB0aGluayBpbSB2ZXJ5IHdlbGwgc3VpdGVkIG9uIHlvdXIgY29tcGFueSwgcGxlYXNlIGhpdCBtZSB1cCBhdCA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0IE1lPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgUC5TLiBJbSBub3QgYSBXZWJzaXRlIERlc2lnbmVyIHNvIGtpbmRseSBleGN1c2UgbXkgVUkuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcbmVsc2UgaWYoc2VudGVuY2VWYWx1ZSA9PT0gJ2VkdWNhdGlvbicpe1xyXG5cclxuICBUaXRsZVZhbHVlID0gXCJNeSBFZHVjYXRpb25cIjtcclxuXHJcbiAgTWFpbkNvbnRlbnQgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8aDM+PFdhdmUgdGV4dD17VGl0bGVWYWx1ZX0gZWZmZWN0PVwidmVydGljYWxGYWRlSW5cIiBlZmZlY3REaXJlY3Rpb249XCJkb3duXCIgc3BlZWQ9ezQwfSBlZmZlY3REdXJhdGlvbj17MC4xfSBpdGVyYXRpb25zPXsxfS8+PC9oMz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT5CYWNoZWxvciBvZiBTY2llbmNlIEluIEluZm9ybWF0aW9uIFRlY2hub2xvZ3kgLSBJbmZvcm1hdGljcyBDb2xsZWdlIEVhc3R3b29yZDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPkFkdmFuY2UgSW50ZXJuYXRpb25hbCBEaXBsb21hIGluIEluZm9ybWF0aW9uIFRlY2hub2xvZ3kgKDIgWWVhciBDb3Vyc2UpIC0gSW5mb3JtYXRpY3MgQ29sbGVnZSBMZWdhenBpPC9saT5cclxuICAgICAgICAgICAgICA8bGk+QmFjaGVsb3Igb2YgU2NpZW5jZSBJbiBOdXJzaW5nIC0gVW5pdmVyc2l0eSBvZiBTdG8gVGhvbWFzIExlZ2F6cGk8L2xpPlxyXG4gICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5lbHNlIGlmKHNlbnRlbmNlVmFsdWUgPT09ICdyZWNlbnQnKXtcclxuICBUaXRsZVZhbHVlID0gXCJNeSBSZWNlbnQgV29yayBFeHBlcmllbmNlc1wiO1xyXG5cclxuICBNYWluQ29udGVudCA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxoMz48V2F2ZSB0ZXh0PXtUaXRsZVZhbHVlfSBlZmZlY3Q9XCJ2ZXJ0aWNhbEZhZGVJblwiIGVmZmVjdERpcmVjdGlvbj1cImRvd25cIiBzcGVlZD17NDB9IGVmZmVjdER1cmF0aW9uPXswLjF9IGl0ZXJhdGlvbnM9ezF9Lz48L2gzPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgPGxpPjR0aFNoaWZ0IEdsb2JhbCBTb2x1dGlvbnMgLSBXb3JkUHJlc3MgRGV2ZWxvcGVyPC9saT5cclxuICAgICAgICAgICA8bGk+Tm93Y29tIEdsb2JhbCBTb2x1dGlvbnMgLSBNaWQgU29mdHdhcmUgRW5naW5lZXIgKFdvcmRQcmVzcy9Gcm9udC1lbmQgRGV2ZWxvcGVyKTwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWFib3V0LWhvbGRlclwiPlxyXG4gICAgICAgPE1haW5Db250ZW50IC8+XHJcbiAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jb250ZW50LWFib3V0LWhvbGRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG59O1xyXG4iXX0= */\n/*@ sourceURL=C:\\RRProjects\\LPSWebsite\\pages\\about.js */",
    __self: this
  }));
};

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/about.js */"./pages/about.js");


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

/***/ "react-animated-text":
/*!**************************************!*\
  !*** external "react-animated-text" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-animated-text");

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
//# sourceMappingURL=about.js.map