webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
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
      console.log(value);
      console.log(currentUrl);
      console.log(nextUrl);
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
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3424708816" + " " + "navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3424708816" + " " + "nav-item text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: function onClick(value) {
          return _this2.onPageTransition(value = "/");
        },
        className: "jsx-3424708816" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3424708816" + " " + "nav-item text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: function onClick(value) {
          return _this2.onPageTransition(value = "/about");
        },
        className: "jsx-3424708816" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3424708816" + " " + "nav-item text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: function onClick(value) {
          return _this2.onPageTransition(value = "/portfolio");
        },
        className: "jsx-3424708816" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3424708816" + " " + "nav-item text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: function onClick(value) {
          return _this2.onPageTransition(value = "/contact");
        },
        className: "jsx-3424708816" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3424708816",
        css: ".navbar-nav.jsx-3424708816{width:200px !important;}.navbar.jsx-3424708816{visibility:hidden;opacity:0;height:0;padding:0px;-webkit-transition:height 0.8s ease,visibility 1s ease,opacity 1s ease;-moz-transition:height 0.8s ease,visibility 1s ease,opacity 1s ease;-o-transition:height 0.8s ease,visibility 1s ease,opacity 1s ease;-webkit-transition:height 0.8s ease,visibility 1s ease,opacity 1s ease;transition:height 0.8s ease,visibility 1s ease,opacity 1s ease;}.navbar-down.jsx-3424708816{height:550px;visibility:visible;opacity:1;}.navbar.jsx-3424708816 a.jsx-3424708816{font-size:25px;color:#e5e5e5;-webkit-transition:font-size 2s;-moz-transition:font-size 2s;-o-transition:font-size 2s;-webkit-transition:font-size 2s;transition:font-size 2s;}.navbar-down.jsx-3424708816 a.jsx-3424708816:hover{font-size:38px !important;color:#fffffff !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSUlByb2plY3RzXFxMUFNXZWJzaXRlXFxjb21wb25lbnRzXFxuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERzQixBQUlzQyxBQUlMLEFBV0wsQUFLRSxBQVNXLGFBYlAsRUFLTCxHQWhCTCxLQUpYLEdBNkI0QixFQXhCakIsQ0FnQnVCLEdBSm5DLEtBWGUsS0FXZCxPQVYwRSxHQXVCMUUsU0FSK0IsNkJBQ0YsMkJBQ0gsR0FoQjZDLHFEQWlCdkUsZUFoQnFFLGtFQUNILHNJQUNsRSIsImZpbGUiOiJDOlxcUlJQcm9qZWN0c1xcTFBTV2Vic2l0ZVxcY29tcG9uZW50c1xcbmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBDb25kaXRpb246IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrTmF2KCl7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgQ29uZGl0aW9uOiAhdGhpcy5zdGF0ZS5Db25kaXRpb25cclxuICAgICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25QYWdlVHJhbnNpdGlvbih2YWx1ZSl7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFVybCA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgICBjb25zdCBuZXh0VXJsID0gZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luICsgdmFsdWVcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVcmwpO1xyXG4gICAgY29uc29sZS5sb2cobmV4dFVybCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBDb25kaXRpb246ICF0aGlzLnN0YXRlLkNvbmRpdGlvblxyXG4gICAgICB9KTtcclxuICAgIHRoaXMucHJvcHMub25QYWdlVHJhbnNpdGlvbkNCKHZhbHVlKTtcclxuXHJcbiAgICBpZihjdXJyZW50VXJsICE9PSBuZXh0VXJsKXtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiBSb3V0ZXIucHVzaCh2YWx1ZSksIDUwMClcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLkNvbmRpdGlvbiA/IFwibmF2YmFyLWRvd24gbmF2YmFyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiA6IFwibmF2YmFyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIn0+XHJcbiAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgb25DbGljaz17dmFsdWUgPT4gdGhpcy5vblBhZ2VUcmFuc2l0aW9uKHZhbHVlID0gXCIvXCIpfT5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e3ZhbHVlID0+IHRoaXMub25QYWdlVHJhbnNpdGlvbih2YWx1ZSA9IFwiL2Fib3V0XCIpfT5BYm91dDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBvbkNsaWNrPXt2YWx1ZSA9PiB0aGlzLm9uUGFnZVRyYW5zaXRpb24odmFsdWUgPSBcIi9wb3J0Zm9saW9cIil9PlBvcnRmb2xpbzwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBvbkNsaWNrPXt2YWx1ZSA9PiB0aGlzLm9uUGFnZVRyYW5zaXRpb24odmFsdWUgPSBcIi9jb250YWN0XCIpfT5Db250YWN0PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLm5hdmJhci1uYXZcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXZiYXJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjhzIGVhc2UsIHZpc2liaWxpdHkgMXMgZWFzZSxvcGFjaXR5IDFzIGVhc2U7XHJcbiAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMC44cyBlYXNlLCB2aXNpYmlsaXR5IDFzIGVhc2Usb3BhY2l0eSAxcyBlYXNlO1xyXG4gICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGhlaWdodCAwLjhzIGVhc2UsIHZpc2liaWxpdHkgMXMgZWFzZSxvcGFjaXR5IDFzIGVhc2U7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuOHMgZWFzZSwgdmlzaWJpbGl0eSAxcyBlYXNlLG9wYWNpdHkgMXMgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFyLWRvd25cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhciBhIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNlNWU1ZTU7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBmb250LXNpemUgMnM7XHJcbiAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBmb250LXNpemUgMnM7XHJcbiAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogZm9udC1zaXplIDJzO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFyLWRvd24gYTpob3ZlclxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgIDwvbmF2PlxyXG5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl19 */\n/*@ sourceURL=C:\\RRProjects\\LPSWebsite\\components\\navbar.js */",
        __self: this
      }));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=_app.js.5f5830ec1ac73379917d.hot-update.js.map