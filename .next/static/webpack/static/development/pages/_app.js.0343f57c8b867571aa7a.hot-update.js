webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./components/navbar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
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
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ref: this.Navbar,
        onPageTransitionCB: onPageTransitionCB,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-899069483" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: function onClick(event) {
          return _this2.onClick();
        },
        className: "jsx-899069483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-899069483" + " " + ((this.state.Condition ? "fas fa-caret-up" : "fas fa-caret-down") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-899069483" + " " + ((this.state.Condition ? "opacity-nav-down" : "") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
        className: "jsx-899069483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
        className: "jsx-899069483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
        className: "jsx-899069483",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3101171143",
        css: "header.jsx-899069483 span.jsx-899069483{text-align:center;}.fa-caret-down.jsx-899069483,.fa-caret-up.jsx-899069483{font-size:45px !important;color:#e5e5e5;-webkit-transform:rotateY(0deg);-webkit-transform:rotateY(0deg);-ms-transform:rotateY(0deg);transform:rotateY(0deg);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;}.fa-caret-down.jsx-899069483:hover,.fa-caret-up.jsx-899069483:hover{-webkit-transform:rotateY(360deg);-webkit-transform:rotateY(360deg);-ms-transform:rotateY(360deg);transform:rotateY(360deg);-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;}header.jsx-899069483{background:#343a40 !important;z-index:9;}.header-nav-down.jsx-899069483{position:absolute;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSUlByb2plY3RzXFxMUFNXZWJzaXRlXFxjb21wb25lbnRzXFxsYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRnQixBQUkyQixBQUlTLEFBT08sQUFNSixBQUlaLGtCQXBCcEIsQUFxQmEsUUFqQkksR0FrQmpCLENBTFksSUFOZ0IsTUFOTyxBQWFuQyxnQ0FaMkIsb0RBTUQsZ0NBTEMsZ0VBTTNCLGdDQUxBIiwiZmlsZSI6IkM6XFxSUlByb2plY3RzXFxMUFNXZWJzaXRlXFxjb21wb25lbnRzXFxsYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgIENvbmRpdGlvbjogZmFsc2VcclxuICAgIH1cclxuICAgIHRoaXMuTmF2YmFyID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgfVxyXG5cclxub25DbGljaygpe1xyXG5cclxuICB0aGlzLk5hdmJhci5jdXJyZW50Lm9uQ2xpY2tOYXYoKTtcclxuICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgQ29uZGl0aW9uOiAhdGhpcy5zdGF0ZS5Db25kaXRpb25cclxuICB9KTtcclxuXHJcbn1cclxuXHJcbm9uUGFnZVRyYW5zaXRpb25DQih2YWx1ZSl7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIENvbmRpdGlvbjogIXRoaXMuc3RhdGUuQ29uZGl0aW9uXHJcbiAgfSk7XHJcbn1cclxuXHJcbnJlbmRlcigpe1xyXG5cclxuICBjb25zdCBvblBhZ2VUcmFuc2l0aW9uQ0IgPSAodmFsdWUpID0+IHt0aGlzLm9uUGFnZVRyYW5zaXRpb25DQih2YWx1ZSl9XHJcblxyXG4gIHJldHVybihcclxuXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPkxQUyBXZWJzaXRlPC90aXRsZT5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Jvb3Rzd2F0Y2guY29tLzQvY2VydWxlYW4vYm9vdHN0cmFwLm1pbi5jc3NcIj48L2xpbms+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjYuMS9jc3MvYWxsLmNzc1wiPjwvbGluaz5cclxuICAgICAgXHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5Db25kaXRpb24gPyBcImhlYWRlci1uYXYtZG93blwiIDogXCJcIn0+XHJcbiAgICAgIDxOYXZiYXJcclxuICAgICAgICByZWY9e3RoaXMuTmF2YmFyfVxyXG4gICAgICAgIG9uUGFnZVRyYW5zaXRpb25DQiA9IHtvblBhZ2VUcmFuc2l0aW9uQ0J9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgPlxyXG4gICAgICAgIDxhIG9uQ2xpY2s9e2V2ZW50ID0+IHRoaXMub25DbGljaygpfT48aSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuQ29uZGl0aW9uID8gXCJmYXMgZmEtY2FyZXQtdXBcIiA6IFwiZmFzIGZhLWNhcmV0LWRvd25cIn0+PC9pPjwvYT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5Db25kaXRpb24gPyBcIm9wYWNpdHktbmF2LWRvd25cIiA6IFwiXCJ9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuMy4xL2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjMuNy9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgaGVhZGVyIHNwYW5cclxuICAgICAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuZmEtY2FyZXQtZG93biwgLmZhLWNhcmV0LXVwXHJcbiAgICAgIHtcclxuICAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIGNvbG9yOiAjZTVlNWU1O1xyXG4gICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcbiAgICAgIH1cclxuICAgICAgLmZhLWNhcmV0LWRvd246aG92ZXIsIC5mYS1jYXJldC11cDpob3ZlciB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcbiAgICAgIH1cclxuICAgICAgaGVhZGVyXHJcbiAgICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzQzYTQwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLW5hdi1kb3duIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzQzYTQwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG8sSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgYm9keSAuY29udGFpbmVyXHJcbiAgICAgIHtcclxuICAgICAgICB3aWR0aDogOTAwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG4gICAgICB9XHJcbiAgICAgIGgxLGgyLGgzLGg0XHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogI2U1ZTVlNSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAub3BhY2l0eS1uYXYtZG93blxyXG4gICAgICB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG5cclxuICApO1xyXG59XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\RRProjects\\LPSWebsite\\components\\layout.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "593871653",
        css: "body{background:#343a40 !important;font-family:Lato,Helvetica,Arial,sans-serif;}body .container{width:900px;padding-top:50px;padding-bottom:50px;text-align:justify;}h1,h2,h3,h4{color:#e5e5e5 !important;}p{font-size:20px !important;}a:hover{-webkit-text-decoration:none !important;text-decoration:none !important;cursor:pointer;}.opacity-nav-down{opacity:0;display:none;}::-webkit-scrollbar{width:2px;}::-webkit-scrollbar-track{background:#f1f1f1;}::-webkit-scrollbar-thumb{background:#888;}::-webkit-scrollbar-thumb:hover{background:#555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSUlByb2plY3RzXFxMUFNXZWJzaXRlXFxjb21wb25lbnRzXFxsYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0Z1QixBQUd1QyxBQUtsQixBQU9hLEFBR0MsQUFHTSxBQUt0QixBQUtBLEFBS1MsQUFLSCxBQUtBLFVBbkJILEFBS2YsRUF2Qm1CLElBaUNuQixBQUtBLEdBVkEsSUFUQSxFQVpBLENBR0EsR0FUc0IsQ0FOd0IsbUJBTzFCLG1CQUNwQixJQVVpQixFQWpCakIsYUFrQkEiLCJmaWxlIjoiQzpcXFJSUHJvamVjdHNcXExQU1dlYnNpdGVcXGNvbXBvbmVudHNcXGxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgQ29uZGl0aW9uOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdGhpcy5OYXZiYXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICB9XHJcblxyXG5vbkNsaWNrKCl7XHJcblxyXG4gIHRoaXMuTmF2YmFyLmN1cnJlbnQub25DbGlja05hdigpO1xyXG4gIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBDb25kaXRpb246ICF0aGlzLnN0YXRlLkNvbmRpdGlvblxyXG4gIH0pO1xyXG5cclxufVxyXG5cclxub25QYWdlVHJhbnNpdGlvbkNCKHZhbHVlKXtcclxuICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgQ29uZGl0aW9uOiAhdGhpcy5zdGF0ZS5Db25kaXRpb25cclxuICB9KTtcclxufVxyXG5cclxucmVuZGVyKCl7XHJcblxyXG4gIGNvbnN0IG9uUGFnZVRyYW5zaXRpb25DQiA9ICh2YWx1ZSkgPT4ge3RoaXMub25QYWdlVHJhbnNpdGlvbkNCKHZhbHVlKX1cclxuXHJcbiAgcmV0dXJuKFxyXG5cclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+TFBTIFdlYnNpdGU8L3RpdGxlPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vYm9vdHN3YXRjaC5jb20vNC9jZXJ1bGVhbi9ib290c3RyYXAubWluLmNzc1wiPjwvbGluaz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNi4xL2Nzcy9hbGwuY3NzXCI+PC9saW5rPlxyXG4gICAgICBcclxuICAgIDwvSGVhZD5cclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLkNvbmRpdGlvbiA/IFwiaGVhZGVyLW5hdi1kb3duXCIgOiBcIlwifT5cclxuICAgICAgPE5hdmJhclxyXG4gICAgICAgIHJlZj17dGhpcy5OYXZiYXJ9XHJcbiAgICAgICAgb25QYWdlVHJhbnNpdGlvbkNCID0ge29uUGFnZVRyYW5zaXRpb25DQn1cclxuICAgICAgLz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIiA+XHJcbiAgICAgICAgPGEgb25DbGljaz17ZXZlbnQgPT4gdGhpcy5vbkNsaWNrKCl9PjxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5Db25kaXRpb24gPyBcImZhcyBmYS1jYXJldC11cFwiIDogXCJmYXMgZmEtY2FyZXQtZG93blwifT48L2k+PC9hPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLkNvbmRpdGlvbiA/IFwib3BhY2l0eS1uYXYtZG93blwiIDogXCJcIn0+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMy4zLjEvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy43L2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgIDwvZm9vdGVyPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBoZWFkZXIgc3BhblxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5mYS1jYXJldC1kb3duLCAuZmEtY2FyZXQtdXBcclxuICAgICAge1xyXG4gICAgICAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgY29sb3I6ICNlNWU1ZTU7XHJcbiAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxuICAgICAgfVxyXG4gICAgICAuZmEtY2FyZXQtZG93bjpob3ZlciwgLmZhLWNhcmV0LXVwOmhvdmVyIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxuICAgICAgfVxyXG4gICAgICBoZWFkZXJcclxuICAgICAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzNDNhNDAgIWltcG9ydGFudDtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItbmF2LWRvd24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzNDNhNDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogTGF0byxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gICAgICBib2R5IC5jb250YWluZXJcclxuICAgICAge1xyXG4gICAgICAgIHdpZHRoOiA5MDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XHJcbiAgICAgIH1cclxuICAgICAgaDEsaDIsaDMsaDRcclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiAjZTVlNWU1ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5vcGFjaXR5LW5hdi1kb3duXHJcbiAgICAgIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzg4ODtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\RRProjects\\LPSWebsite\\components\\layout.js */",
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.0343f57c8b867571aa7a.hot-update.js.map