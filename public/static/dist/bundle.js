/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/static/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/index.html":
/*!***************************!*\
  !*** ./public/index.html ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!doctype html> <html lang=en> <head> <link rel=stylesheet href=./static/dist/main.css> <meta charset=utf-8> <meta http-equiv=x-ua-compatible content=\\\"ie=edge\\\"> <meta name=viewport content=\\\"width=device-width,initial-scale=1,shrink-to-fit=no\\\"> <link rel=icon href=/images/sm.png sizes=32x32 /> <link rel=icon href=/images/sm.png sizes=192x192 /> <title> Scratch Paper </title> </head> <body id=home> <main> </main> <script async src=./static/dist/bundle.js></script> </body> </html> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvaW5kZXguaHRtbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9pbmRleC5odG1sPzEyY2MiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjwhZG9jdHlwZSBodG1sPiA8aHRtbCBsYW5nPWVuPiA8aGVhZD4gPGxpbmsgcmVsPXN0eWxlc2hlZXQgaHJlZj0uL3N0YXRpYy9kaXN0L21haW4uY3NzPiA8bWV0YSBjaGFyc2V0PXV0Zi04PiA8bWV0YSBodHRwLWVxdWl2PXgtdWEtY29tcGF0aWJsZSBjb250ZW50PVxcXCJpZT1lZGdlXFxcIj4gPG1ldGEgbmFtZT12aWV3cG9ydCBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLHNocmluay10by1maXQ9bm9cXFwiPiA8bGluayByZWw9aWNvbiBocmVmPS9pbWFnZXMvc20ucG5nIHNpemVzPTMyeDMyIC8+IDxsaW5rIHJlbD1pY29uIGhyZWY9L2ltYWdlcy9zbS5wbmcgc2l6ZXM9MTkyeDE5MiAvPiA8dGl0bGU+IFNjcmF0Y2ggUGFwZXIgPC90aXRsZT4gPC9oZWFkPiA8Ym9keSBpZD1ob21lPiA8bWFpbj4gPC9tYWluPiA8c2NyaXB0IGFzeW5jIHNyYz0uL3N0YXRpYy9kaXN0L2J1bmRsZS5qcz48L3NjcmlwdD4gPC9ib2R5PiA8L2h0bWw+IFwiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/index.html\n");

/***/ }),

/***/ "./public/static/css/main.scss":
/*!*************************************!*\
  !*** ./public/static/css/main.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3RhdGljL2Nzcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3RhdGljL2Nzcy9tYWluLnNjc3M/OGU1MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/static/css/main.scss\n");

/***/ }),

/***/ "./public/static/index.js":
/*!********************************!*\
  !*** ./public/static/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/main.js */ \"./public/static/js/main.js\");\n\n__webpack_require__(/*! ./css/main.scss */ \"./public/static/css/main.scss\");\n\n__webpack_require__(/*! ../index.html */ \"./public/index.html\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3RhdGljL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0YXRpYy9pbmRleC5qcz9jZTVjIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vanMvbWFpbi5qcycpO1xucmVxdWlyZSgnLi9jc3MvbWFpbi5zY3NzJyk7XG5yZXF1aXJlKCcuLi9pbmRleC5odG1sJyk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/static/index.js\n");

/***/ }),

/***/ "./public/static/js/main.js":
/*!**********************************!*\
  !*** ./public/static/js/main.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3RhdGljL2pzL21haW4uanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/static/js/main.js\n");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map