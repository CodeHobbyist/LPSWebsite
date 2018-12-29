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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./components/navbar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\RRProjects\\LPSWebsite\\components\\layout.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, props));
    _this.state = {
      Condition: false
    };
    _this.Navbar = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    return _this;
  }

  _createClass(Layout, [{
    key: "onClick",
    value: function onClick() {
      this.Navbar.current.onClickNav();
      this.setState({
        Condition: !this.state.Condition
      });
    }
  }, {
    key: "onPageTransitionCB",
    value: function onPageTransitionCB(value) {
      this.setState({
        Condition: !this.state.Condition
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var onPageTransitionCB = function onPageTransitionCB(value) {
        _this2.onPageTransitionCB(value);
      };

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-899069483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "LPS Website"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://bootswatch.com/4/cerulean/bootstrap.min.css",
        className: "jsx-899069483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css",
        className: "jsx-899069483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-899069483" + " " + ((this.state.Condition ? "header-nav-down" : "") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ref: this.Navbar,
        onPageTransitionCB: onPageTransitionCB,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-899069483" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: function onClick(event) {
          return _this2.onClick();
        },
        className: "jsx-899069483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-899069483" + " " + ((this.state.Condition ? "fas fa-caret-up" : "fas fa-caret-down") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-899069483" + " " + ((this.state.Condition ? "opacity-nav-down" : "") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
        className: "jsx-899069483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
        className: "jsx-899069483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
        className: "jsx-899069483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3101171143",
        css: "header.jsx-899069483 span.jsx-899069483{text-align:center;}.fa-caret-down.jsx-899069483,.fa-caret-up.jsx-899069483{font-size:45px !important;color:#e5e5e5;-webkit-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-ms-transform:rotateY(0deg);transform:rotateY(0deg);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;}.fa-caret-down.jsx-899069483:hover,.fa-caret-up.jsx-899069483:hover{-webkit-transform:rotateY(360deg);-webkit-transform:rotateY(360deg);-ms-transform:rotateY(360deg);transform:rotateY(360deg);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;}header.jsx-899069483{background:#343a40 !important;z-index:9;}.header-nav-down.jsx-899069483{position:absolute;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSUlByb2plY3RzXFxMUFNXZWJzaXRlXFxjb21wb25lbnRzXFxsYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERnQixBQUkyQixBQUlTLEFBT08sQUFNSixBQUlaLGtCQXBCcEIsQUFxQmEsUUFqQkksR0FrQmpCLENBTFksSUFOZ0IsTUFOTyxBQWFuQyxnQ0FaMkIsb0RBTUQsZ0NBTEMsZ0VBTTNCLGdDQUxBIiwiZmlsZSI6IkM6XFxSUlByb2plY3RzXFxMUFNXZWJzaXRlXFxjb21wb25lbnRzXFxsYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgIENvbmRpdGlvbjogZmFsc2VcclxuICAgIH1cclxuICAgIHRoaXMuTmF2YmFyID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgfVxyXG5cclxub25DbGljaygpe1xyXG5cclxuICB0aGlzLk5hdmJhci5jdXJyZW50Lm9uQ2xpY2tOYXYoKTtcclxuICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgQ29uZGl0aW9uOiAhdGhpcy5zdGF0ZS5Db25kaXRpb25cclxuICB9KTtcclxuXHJcbn1cclxuXHJcbm9uUGFnZVRyYW5zaXRpb25DQih2YWx1ZSl7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIENvbmRpdGlvbjogIXRoaXMuc3RhdGUuQ29uZGl0aW9uXHJcbiAgfSk7XHJcbn1cclxuXHJcbnJlbmRlcigpe1xyXG5cclxuICBjb25zdCBvblBhZ2VUcmFuc2l0aW9uQ0IgPSAodmFsdWUpID0+IHt0aGlzLm9uUGFnZVRyYW5zaXRpb25DQih2YWx1ZSl9XHJcblxyXG4gIHJldHVybihcclxuXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPkxQUyBXZWJzaXRlPC90aXRsZT5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Jvb3Rzd2F0Y2guY29tLzQvY2VydWxlYW4vYm9vdHN0cmFwLm1pbi5jc3NcIj48L2xpbms+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjYuMS9jc3MvYWxsLmNzc1wiPjwvbGluaz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLkNvbmRpdGlvbiA/IFwiaGVhZGVyLW5hdi1kb3duXCIgOiBcIlwifT5cclxuICAgICAgPE5hdmJhclxyXG4gICAgICAgIHJlZj17dGhpcy5OYXZiYXJ9XHJcbiAgICAgICAgb25QYWdlVHJhbnNpdGlvbkNCID0ge29uUGFnZVRyYW5zaXRpb25DQn1cclxuICAgICAgLz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIiA+XHJcbiAgICAgICAgPGEgb25DbGljaz17ZXZlbnQgPT4gdGhpcy5vbkNsaWNrKCl9PjxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5Db25kaXRpb24gPyBcImZhcyBmYS1jYXJldC11cFwiIDogXCJmYXMgZmEtY2FyZXQtZG93blwifT48L2k+PC9hPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLkNvbmRpdGlvbiA/IFwib3BhY2l0eS1uYXYtZG93blwiIDogXCJcIn0+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMy4zLjEvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy43L2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgIDwvZm9vdGVyPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBoZWFkZXIgc3BhblxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5mYS1jYXJldC1kb3duLCAuZmEtY2FyZXQtdXBcclxuICAgICAge1xyXG4gICAgICAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgY29sb3I6ICNlNWU1ZTU7XHJcbiAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxuICAgICAgfVxyXG4gICAgICAuZmEtY2FyZXQtZG93bjpob3ZlciwgLmZhLWNhcmV0LXVwOmhvdmVyIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxuICAgICAgfVxyXG4gICAgICBoZWFkZXJcclxuICAgICAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzNDNhNDAgIWltcG9ydGFudDtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItbmF2LWRvd24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzNDNhNDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogTGF0byxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gICAgICBib2R5IC5jb250YWluZXJcclxuICAgICAge1xyXG4gICAgICAgIHdpZHRoOiA5MDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XHJcbiAgICAgIH1cclxuICAgICAgaDEsaDIsaDMsaDRcclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiAjZTVlNWU1ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5vcGFjaXR5LW5hdi1kb3duXHJcbiAgICAgIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzg4ODtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\RRProjects\\LPSWebsite\\components\\layout.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "593871653",
        css: "body{background:#343a40 !important;font-family:Lato,Helvetica,Arial,sans-serif;}body .container{width:900px;padding-top:50px;padding-bottom:50px;text-align:justify;}h1,h2,h3,h4{color:#e5e5e5 !important;}p{font-size:20px !important;}a:hover{-webkit-text-decoration:none !important;text-decoration:none !important;cursor:pointer;}.opacity-nav-down{opacity:0;display:none;}::-webkit-scrollbar{width:2px;}::-webkit-scrollbar-track{background:#f1f1f1;}::-webkit-scrollbar-thumb{background:#888;}::-webkit-scrollbar-thumb:hover{background:#555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSUlByb2plY3RzXFxMUFNXZWJzaXRlXFxjb21wb25lbnRzXFxsYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUZ1QixBQUd1QyxBQUtsQixBQU9hLEFBR0MsQUFHTSxBQUt0QixBQUtBLEFBS1MsQUFLSCxBQUtBLFVBbkJILEFBS2YsRUF2Qm1CLElBaUNuQixBQUtBLEdBVkEsSUFUQSxFQVpBLENBR0EsR0FUc0IsQ0FOd0IsbUJBTzFCLG1CQUNwQixJQVVpQixFQWpCakIsYUFrQkEiLCJmaWxlIjoiQzpcXFJSUHJvamVjdHNcXExQU1dlYnNpdGVcXGNvbXBvbmVudHNcXGxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgQ29uZGl0aW9uOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdGhpcy5OYXZiYXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICB9XHJcblxyXG5vbkNsaWNrKCl7XHJcblxyXG4gIHRoaXMuTmF2YmFyLmN1cnJlbnQub25DbGlja05hdigpO1xyXG4gIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBDb25kaXRpb246ICF0aGlzLnN0YXRlLkNvbmRpdGlvblxyXG4gIH0pO1xyXG5cclxufVxyXG5cclxub25QYWdlVHJhbnNpdGlvbkNCKHZhbHVlKXtcclxuICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgQ29uZGl0aW9uOiAhdGhpcy5zdGF0ZS5Db25kaXRpb25cclxuICB9KTtcclxufVxyXG5cclxucmVuZGVyKCl7XHJcblxyXG4gIGNvbnN0IG9uUGFnZVRyYW5zaXRpb25DQiA9ICh2YWx1ZSkgPT4ge3RoaXMub25QYWdlVHJhbnNpdGlvbkNCKHZhbHVlKX1cclxuXHJcbiAgcmV0dXJuKFxyXG5cclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+TFBTIFdlYnNpdGU8L3RpdGxlPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vYm9vdHN3YXRjaC5jb20vNC9jZXJ1bGVhbi9ib290c3RyYXAubWluLmNzc1wiPjwvbGluaz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNi4xL2Nzcy9hbGwuY3NzXCI+PC9saW5rPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3RoaXMuc3RhdGUuQ29uZGl0aW9uID8gXCJoZWFkZXItbmF2LWRvd25cIiA6IFwiXCJ9PlxyXG4gICAgICA8TmF2YmFyXHJcbiAgICAgICAgcmVmPXt0aGlzLk5hdmJhcn1cclxuICAgICAgICBvblBhZ2VUcmFuc2l0aW9uQ0IgPSB7b25QYWdlVHJhbnNpdGlvbkNCfVxyXG4gICAgICAvPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiID5cclxuICAgICAgICA8YSBvbkNsaWNrPXtldmVudCA9PiB0aGlzLm9uQ2xpY2soKX0+PGkgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLkNvbmRpdGlvbiA/IFwiZmFzIGZhLWNhcmV0LXVwXCIgOiBcImZhcyBmYS1jYXJldC1kb3duXCJ9PjwvaT48L2E+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuQ29uZGl0aW9uID8gXCJvcGFjaXR5LW5hdi1kb3duXCIgOiBcIlwifT5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8zLjMuMS9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjcvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGhlYWRlciBzcGFuXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmZhLWNhcmV0LWRvd24sIC5mYS1jYXJldC11cFxyXG4gICAgICB7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICBjb2xvcjogI2U1ZTVlNTtcclxuICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG4gICAgICB9XHJcbiAgICAgIC5mYS1jYXJldC1kb3duOmhvdmVyLCAuZmEtY2FyZXQtdXA6aG92ZXIge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG4gICAgICB9XHJcbiAgICAgIGhlYWRlclxyXG4gICAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzM0M2E0MCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1uYXYtZG93biB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzM0M2E0MCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICAgIGJvZHkgLmNvbnRhaW5lclxyXG4gICAgICB7XHJcbiAgICAgICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246anVzdGlmeTtcclxuICAgICAgfVxyXG4gICAgICBoMSxoMixoMyxoNFxyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6ICNlNWU1ZTUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBhOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLm9wYWNpdHktbmF2LWRvd25cclxuICAgICAge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjODg4O1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzU1NTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl19 */\n/*@ sourceURL=C:\\RRProjects\\LPSWebsite\\components\\layout.js */",
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/loader.js":
/*!******************************!*\
  !*** ./components/loader.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\RRProjects\\LPSWebsite\\components\\loader.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Loader =
/*#__PURE__*/
function (_Component) {
  _inherits(Loader, _Component);

  function Loader() {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, _getPrototypeOf(Loader).apply(this, arguments));
  }

  _createClass(Loader, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, "Loading......"));
    }
  }]);

  return Loader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\RRProjects\\LPSWebsite\\components\\navbar.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navbar).call(this, props));
    _this.state = {
      Condition: false
    };
    return _this;
  }

  _createClass(Navbar, [{
    key: "onClickNav",
    value: function onClickNav() {
      this.setState({
        Condition: !this.state.Condition
      });
    }
  }, {
    key: "onPageTransition",
    value: function onPageTransition(value) {
      var currentUrl = document.location.href;
      var nextUrl = document.location.origin + value;
      this.setState({
        Condition: !this.state.Condition
      });
      this.props.onPageTransitionCB(value);

      if (currentUrl !== nextUrl) {
        setTimeout(function () {
          return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(value);
        }, 500);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-3424708816" + " " + ((this.state.Condition ? "navbar-down navbar justify-content-center" : "navbar justify-content-center") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3424708816" + " " + "navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3424708816" + " " + "nav-item text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: function onClick(value) {
          return _this2.onPageTransition(value = "/");
        },
        className: "jsx-3424708816" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3424708816" + " " + "nav-item text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: function onClick(value) {
          return _this2.onPageTransition(value = "/about");
        },
        className: "jsx-3424708816" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3424708816" + " " + "nav-item text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: function onClick(value) {
          return _this2.onPageTransition(value = "/portfolio");
        },
        className: "jsx-3424708816" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3424708816" + " " + "nav-item text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: function onClick(value) {
          return _this2.onPageTransition(value = "/contact");
        },
        className: "jsx-3424708816" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3424708816",
        css: ".navbar-nav.jsx-3424708816{width:200px !important;}.navbar.jsx-3424708816{visibility:hidden;opacity:0;height:0;padding:0px;-webkit-transition:height 0.8s ease,visibility 1s ease,opacity 1s ease;-moz-transition:height 0.8s ease,visibility 1s ease,opacity 1s ease;-o-transition:height 0.8s ease,visibility 1s ease,opacity 1s ease;-webkit-transition:height 0.8s ease,visibility 1s ease,opacity 1s ease;transition:height 0.8s ease,visibility 1s ease,opacity 1s ease;}.navbar-down.jsx-3424708816{height:550px;visibility:visible;opacity:1;}.navbar.jsx-3424708816 a.jsx-3424708816{font-size:25px;color:#e5e5e5;-webkit-transition:font-size 2s;-moz-transition:font-size 2s;-o-transition:font-size 2s;-webkit-transition:font-size 2s;transition:font-size 2s;}.navbar-down.jsx-3424708816 a.jsx-3424708816:hover{font-size:38px !important;color:#fffffff !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSUlByb2plY3RzXFxMUFNXZWJzaXRlXFxjb21wb25lbnRzXFxuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURzQixBQUlzQyxBQUlMLEFBV0wsQUFLRSxBQVNXLGFBYlAsRUFLTCxHQWhCTCxLQUpYLEdBNkI0QixFQXhCakIsQ0FnQnVCLEdBSm5DLEtBWGUsS0FXZCxPQVYwRSxHQXVCMUUsU0FSK0IsNkJBQ0YsMkJBQ0gsR0FoQjZDLHFEQWlCdkUsZUFoQnFFLGtFQUNILHNJQUNsRSIsImZpbGUiOiJDOlxcUlJQcm9qZWN0c1xcTFBTV2Vic2l0ZVxcY29tcG9uZW50c1xcbmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBDb25kaXRpb246IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrTmF2KCl7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgQ29uZGl0aW9uOiAhdGhpcy5zdGF0ZS5Db25kaXRpb25cclxuICAgICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25QYWdlVHJhbnNpdGlvbih2YWx1ZSl7XHJcbiAgICBjb25zdCBjdXJyZW50VXJsID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcclxuICAgIGNvbnN0IG5leHRVcmwgPSBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4gKyB2YWx1ZVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgQ29uZGl0aW9uOiAhdGhpcy5zdGF0ZS5Db25kaXRpb25cclxuICAgICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLm9uUGFnZVRyYW5zaXRpb25DQih2YWx1ZSk7XHJcbiAgICBpZihjdXJyZW50VXJsICE9PSBuZXh0VXJsKXtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiBSb3V0ZXIucHVzaCh2YWx1ZSksIDUwMClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5Db25kaXRpb24gPyBcIm5hdmJhci1kb3duIG5hdmJhciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgOiBcIm5hdmJhciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJ9PlxyXG4gICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e3ZhbHVlID0+IHRoaXMub25QYWdlVHJhbnNpdGlvbih2YWx1ZSA9IFwiL1wiKX0+SG9tZTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBvbkNsaWNrPXt2YWx1ZSA9PiB0aGlzLm9uUGFnZVRyYW5zaXRpb24odmFsdWUgPSBcIi9hYm91dFwiKX0+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgb25DbGljaz17dmFsdWUgPT4gdGhpcy5vblBhZ2VUcmFuc2l0aW9uKHZhbHVlID0gXCIvcG9ydGZvbGlvXCIpfT5Qb3J0Zm9saW88L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgb25DbGljaz17dmFsdWUgPT4gdGhpcy5vblBhZ2VUcmFuc2l0aW9uKHZhbHVlID0gXCIvY29udGFjdFwiKX0+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5uYXZiYXItbmF2XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFyXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTowO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC44cyBlYXNlLCB2aXNpYmlsaXR5IDFzIGVhc2Usb3BhY2l0eSAxcyBlYXNlO1xyXG4gICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDAuOHMgZWFzZSwgdmlzaWJpbGl0eSAxcyBlYXNlLG9wYWNpdHkgMXMgZWFzZTtcclxuICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBoZWlnaHQgMC44cyBlYXNlLCB2aXNpYmlsaXR5IDFzIGVhc2Usb3BhY2l0eSAxcyBlYXNlO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjhzIGVhc2UsIHZpc2liaWxpdHkgMXMgZWFzZSxvcGFjaXR5IDFzIGVhc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhci1kb3duXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXZiYXIgYSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZTVlNWU1O1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZm9udC1zaXplIDJzO1xyXG4gICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogZm9udC1zaXplIDJzO1xyXG4gICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGZvbnQtc2l6ZSAycztcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhci1kb3duIGE6aG92ZXJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICA8L25hdj5cclxuXHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\RRProjects\\LPSWebsite\\components\\navbar.js */",
        __self: this
      }));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/loader */ "./components/loader.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-page-transitions */ "next-page-transitions");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\RRProjects\\LPSWebsite\\pages\\_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_page_transitions__WEBPACK_IMPORTED_MODULE_6__["PageTransition"], {
        timeout: 2000,
        classNames: "page-transition",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, _extends({}, pageProps, {
        className: "jsx-3318065999" + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3318065999",
        css: ".page-transition-enter{opacity:0;width:0;}.page-transition-enter-active{opacity:1;width:100%;background-color:transparent;-webkit-transition:opacity 5s,width 2s ease;transition:opacity 5s,width 2s ease;}.page-transition-exit{opacity:1;width:100%;}.page-transition-exit-active{opacity:0;width:0;-webkit-transition:opacity 0.5s,width 2s ease;transition:opacity 0.5s,width 2s ease;}.page-transition-enter .title-page{-ms-transform:translate(400px,0px);-webkit-transform:translate(400px,0px);-webkit-transform:translate(400px,0px);-ms-transform:translate(400px,0px);transform:translate(400px,0px);-webkit-transition:-webkit-transform 2s ease;-webkit-transition:transform 2s ease;transition:transform 2s ease;}.page-transition-enter-active .title-page{-ms-transform:translate(0px,0px);-webkit-transform:translate(0px,0px);-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);-webkit-transition:-webkit-transform 2s ease;-webkit-transition:transform 2s ease;transition:transform 2s ease;}.page-transition-exit .title-page{-ms-transform:translate(0px,0px);-webkit-transform:translate(0px,0px);-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);-webkit-transition:-webkit-transform 0.5s ease;-webkit-transition:transform 0.5s ease;transition:transform 0.5s ease;}.page-transition-exit-active .title-page{-ms-transform:translate(400px,0px);-webkit-transform:translate(400px,0px);-webkit-transform:translate(400px,0px);-ms-transform:translate(400px,0px);transform:translate(400px,0px);-webkit-transition:-webkit-transform 0.5s ease;-webkit-transition:transform 0.5s ease;transition:transform 0.5s ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSUlByb2plY3RzXFxMUFNXZWJzaXRlXFxwYWdlc1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QjJCLEFBR3VCLEFBSUEsQUFNQSxBQUlBLEFBS3lCLEFBTUYsQUFNQSxBQU1FLFVBcEMzQixBQUlHLEFBTUEsQUFJSCxRQWJWLEFBY3lDLEdBVlYsQUFNL0IsWUFjdUMsQUFNQSxFQVpFLEFBa0JBLGVBL0JGLG9CQW9CUixBQU1BLElBWkUsQUFrQkEsNEJBdEJqQyw0QkFUQSx1Q0FvQitCLEFBTUUsVUFaRixBQWtCRSxxR0FYakMsTUFNQSxJQVpBLE1Ba0JBIiwiZmlsZSI6IkM6XFxSUlByb2plY3RzXFxMUFNXZWJzaXRlXFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRlcic7XHJcbmltcG9ydCB7IFBhZ2VUcmFuc2l0aW9uIH0gZnJvbSAnbmV4dC1wYWdlLXRyYW5zaXRpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCByb3V0ZXIsIGN0eCB9KSB7XHJcbiAgICBsZXQgcGFnZVByb3BzID0ge31cclxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH1cclxuICB9XHJcbnJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8UGFnZVRyYW5zaXRpb24gdGltZW91dD17MjAwMH0gY2xhc3NOYW1lcz1cInBhZ2UtdHJhbnNpdGlvblwiPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICA8L1BhZ2VUcmFuc2l0aW9uPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1cywgd2lkdGggMnMgZWFzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMsIHdpZHRoIDJzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIC50aXRsZS1wYWdlIHtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDQwMHB4LDBweCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAwcHgsMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAwcHgsMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyLWFjdGl2ZSAudGl0bGUtcGFnZXtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwwcHgpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQgLnRpdGxlLXBhZ2V7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQtYWN0aXZlIC50aXRsZS1wYWdle1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAwcHgsMHB4KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MDBweCwwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MDBweCwwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\RRProjects\\LPSWebsite\\pages\\_app.js */",
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-page-transitions":
/*!****************************************!*\
  !*** external "next-page-transitions" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-page-transitions");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=_app.js.map