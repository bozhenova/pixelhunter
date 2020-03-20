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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fonts/roboto.woff":
/*!***************************!*\
  !*** ./fonts/roboto.woff ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"075a84c76855a9caaed45cf87a4034e0.woff\");\n\n//# sourceURL=webpack:///./fonts/roboto.woff?");

/***/ }),

/***/ "./fonts/roboto.woff2":
/*!****************************!*\
  !*** ./fonts/roboto.woff2 ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c685c08fad6d3fb0db22bc1d17f537d0.woff2\");\n\n//# sourceURL=webpack:///./fonts/roboto.woff2?");

/***/ }),

/***/ "./fonts/robotobold.woff":
/*!*******************************!*\
  !*** ./fonts/robotobold.woff ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d4fc033d0a688a763abd9c097c587fc4.woff\");\n\n//# sourceURL=webpack:///./fonts/robotobold.woff?");

/***/ }),

/***/ "./fonts/robotobold.woff2":
/*!********************************!*\
  !*** ./fonts/robotobold.woff2 ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e6079cb9a359ca8acaba5dd6fbed3ab2.woff2\");\n\n//# sourceURL=webpack:///./fonts/robotobold.woff2?");

/***/ }),

/***/ "./fonts/robotomedium.woff":
/*!*********************************!*\
  !*** ./fonts/robotomedium.woff ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"922cf15b9d742ab24091e26afcfd6377.woff\");\n\n//# sourceURL=webpack:///./fonts/robotomedium.woff?");

/***/ }),

/***/ "./fonts/robotomedium.woff2":
/*!**********************************!*\
  !*** ./fonts/robotomedium.woff2 ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e5b14aa0dcbdca48416f0df482452db4.woff2\");\n\n//# sourceURL=webpack:///./fonts/robotomedium.woff2?");

/***/ }),

/***/ "./img/egg_big.png":
/*!*************************!*\
  !*** ./img/egg_big.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3a6f7b70d959af5e4d3dc2d1b5ccc499.png\");\n\n//# sourceURL=webpack:///./img/egg_big.png?");

/***/ }),

/***/ "./img/egg_distort.png":
/*!*****************************!*\
  !*** ./img/egg_distort.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"24a47c6f7e84ff25cdad967b6753eb63.png\");\n\n//# sourceURL=webpack:///./img/egg_distort.png?");

/***/ }),

/***/ "./img/heart__full.svg":
/*!*****************************!*\
  !*** ./img/heart__full.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a226a64fa7f154d652cc7d7f10268cec.svg\");\n\n//# sourceURL=webpack:///./img/heart__full.svg?");

/***/ }),

/***/ "./img/icon-cross.svg":
/*!****************************!*\
  !*** ./img/icon-cross.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9f19f3be0912e9afbf87006456f774db.svg\");\n\n//# sourceURL=webpack:///./img/icon-cross.svg?");

/***/ }),

/***/ "./img/icon-top.svg":
/*!**************************!*\
  !*** ./img/icon-top.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9f154ec5b132d69e701afdf084c402a7.svg\");\n\n//# sourceURL=webpack:///./img/icon-top.svg?");

/***/ }),

/***/ "./img/paint_big.png":
/*!***************************!*\
  !*** ./img/paint_big.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"8c418f34803ffe0e2071375e0796a5e6.png\");\n\n//# sourceURL=webpack:///./img/paint_big.png?");

/***/ }),

/***/ "./img/photo_big.png":
/*!***************************!*\
  !*** ./img/photo_big.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"04a88789aae3a5ab593f315892427e10.png\");\n\n//# sourceURL=webpack:///./img/photo_big.png?");

/***/ }),

/***/ "./img/result-correct.svg":
/*!********************************!*\
  !*** ./img/result-correct.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e5ae37b4af09c76169a2f0d35dc9979a.svg\");\n\n//# sourceURL=webpack:///./img/result-correct.svg?");

/***/ }),

/***/ "./img/result-fast.svg":
/*!*****************************!*\
  !*** ./img/result-fast.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6259e9432c6457b8a4c3f1c321d00656.svg\");\n\n//# sourceURL=webpack:///./img/result-fast.svg?");

/***/ }),

/***/ "./img/result-slow.svg":
/*!*****************************!*\
  !*** ./img/result-slow.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a3482f60b730631bf155974ccb6f6e50.svg\");\n\n//# sourceURL=webpack:///./img/result-slow.svg?");

/***/ }),

/***/ "./img/result-unknown.svg":
/*!********************************!*\
  !*** ./img/result-unknown.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"8529433c9e938cbd586ba013c51f84cb.svg\");\n\n//# sourceURL=webpack:///./img/result-unknown.svg?");

/***/ }),

/***/ "./img/result-wrong.svg":
/*!******************************!*\
  !*** ./img/result-wrong.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"448376673b84ce57e1256edd0eee1a2c.svg\");\n\n//# sourceURL=webpack:///./img/result-wrong.svg?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./sass/style.scss\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_createElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/createElement.js */ \"./js/createElement.js\");\n/* harmony import */ var _js_showScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/showScreen.js */ \"./js/showScreen.js\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/main.js */ \"./js/main.js\");\n/* harmony import */ var _js_intro_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/intro.js */ \"./js/intro.js\");\n/* harmony import */ var _js_greeting_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/greeting.js */ \"./js/greeting.js\");\n/* harmony import */ var _js_rules_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/rules.js */ \"./js/rules.js\");\n/* harmony import */ var _js_game_1_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/game-1.js */ \"./js/game-1.js\");\n/* harmony import */ var _js_game_2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/game-2.js */ \"./js/game-2.js\");\n/* harmony import */ var _js_game_3_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/game-3.js */ \"./js/game-3.js\");\n/* harmony import */ var _js_stats_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/stats.js */ \"./js/stats.js\");\n\n\n\n\nObject(_js_main_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/createElement.js":
/*!*****************************!*\
  !*** ./js/createElement.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createElement(template) {\n  const element = document.createElement(`div`);\n  element.innerHTML = template;\n  return element.firstElementChild;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElement);\n\n//# sourceURL=webpack:///./js/createElement.js?");

/***/ }),

/***/ "./js/game-1.js":
/*!**********************!*\
  !*** ./js/game-1.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./js/createElement.js\");\n/* harmony import */ var _showScreen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showScreen.js */ \"./js/showScreen.js\");\n/* harmony import */ var _game_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-2 */ \"./js/game-2.js\");\n\n\n\n\nconst gameOneScreen = Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`<div><header class=\"header\">\n\t<button class=\"back\">\n\t\t<span class=\"visually-hidden\">Вернуться к началу</span>\n\t\t<svg class=\"icon\" width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" fill=\"#000000\">\n\t\t\t<use xlink:href=\"img/sprite.svg#arrow-left\"></use>\n\t\t</svg>\n\t\t<svg class=\"icon\" width=\"101\" height=\"44\" viewBox=\"0 0 101 44\" fill=\"#000000\">\n\t\t\t<use xlink:href=\"img/sprite.svg#logo-small\"></use>\n\t\t</svg>\n\t</button>\n\t<div class=\"game__timer\">NN</div>\n\t<div class=\"game__lives\">\n\t\t<img src=\"img/heart__empty.svg\" class=\"game__heart\" alt=\" Missed Life\" width=\"31\" height=\"27\">\n\t\t<img src=\"img/heart__full.svg\" class=\"game__heart\" alt=\"Life\" width=\"31\" height=\"27\">\n\t\t<img src=\"img/heart__full.svg\" class=\"game__heart\" alt=\"Life\" width=\"31\" height=\"27\">\n\t</div>\n\t</header>\n\t<section class=\"game\">\n\t<p class=\"game__task\">Угадайте для каждого изображения фото или рисунок?</p>\n\t<form class=\"game__content\">\n\t\t<div class=\"game__option\">\n\t\t\t<img src=\"http://placehold.it/468x458\" alt=\"Option 1\" width=\"468\" height=\"458\">\n\t\t\t<label class=\"game__answer game__answer--photo\">\n\t\t\t\t<input class=\"visually-hidden\" name=\"question1\" type=\"radio\" value=\"photo\">\n\t\t\t\t<span>Фото</span>\n\t\t\t</label>\n\t\t\t<label class=\"game__answer game__answer--paint\">\n\t\t\t\t<input class=\"visually-hidden\" name=\"question1\" type=\"radio\" value=\"paint\">\n\t\t\t\t<span>Рисунок</span>\n\t\t\t</label>\n\t\t</div>\n\t\t<div class=\"game__option\">\n\t\t\t<img src=\"http://placehold.it/468x458\" alt=\"Option 2\" width=\"468\" height=\"458\">\n\t\t\t<label class=\"game__answer  game__answer--photo\">\n\t\t\t\t<input class=\"visually-hidden\" name=\"question2\" type=\"radio\" value=\"photo\">\n\t\t\t\t<span>Фото</span>\n\t\t\t</label>\n\t\t\t<label class=\"game__answer  game__answer--paint\">\n\t\t\t\t<input class=\"visually-hidden\" name=\"question2\" type=\"radio\" value=\"paint\">\n\t\t\t\t<span>Рисунок</span>\n\t\t\t</label>\n\t\t</div>\n\t</form>\n\t<ul class=\"stats\">\n\t\t<li class=\"stats__result stats__result--wrong\"></li>\n\t\t<li class=\"stats__result stats__result--slow\"></li>\n\t\t<li class=\"stats__result stats__result--fast\"></li>\n\t\t<li class=\"stats__result stats__result--correct\"></li>\n\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t</ul>\n\t</section></div>`);\n\nObject(_showScreen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(gameOneScreen);\n\nconst gameOneRadioButtons = gameOneScreen.querySelectorAll(`input`);\nlet isFirstChecked = false;\nlet isSecondChecked = false;\n\ngameOneRadioButtons.forEach((gameOneRadioButton) => {\n\tgameOneRadioButton.addEventListener(`change`, (e) => {\n\t\tif (e.target.name === `question1`) {\n\t\t\tisFirstChecked = true;\n\t\t}\n\n\t\tif (e.target.name === `question2`) {\n\t\t\tisSecondChecked = true;\n\t\t}\n\n\t\tif (isFirstChecked && isSecondChecked) {\n\t\t\tgameOneScreen.classList.add(`hidden`);\n\t\t\t_game_2__WEBPACK_IMPORTED_MODULE_2__[\"default\"].classList.remove(`hidden`);\n\t\t}\n\t});\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameOneScreen);\n\n//# sourceURL=webpack:///./js/game-1.js?");

/***/ }),

/***/ "./js/game-2.js":
/*!**********************!*\
  !*** ./js/game-2.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./js/createElement.js\");\n/* harmony import */ var _showScreen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showScreen.js */ \"./js/showScreen.js\");\n/* harmony import */ var _game_3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-3.js */ \"./js/game-3.js\");\n\n\n\n\nconst gameTwoScreen = Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`<div><header class=\"header\">\n\t<button class=\"back\">\n\t\t<span class=\"visually-hidden\">Вернуться к началу</span>\n\t\t<svg class=\"icon\" width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" fill=\"#000000\">\n\t\t\t<use xlink:href=\"img/sprite.svg#arrow-left\"></use>\n\t\t</svg>\n\t\t<svg class=\"icon\" width=\"101\" height=\"44\" viewBox=\"0 0 101 44\" fill=\"#000000\">\n\t\t\t<use xlink:href=\"img/sprite.svg#logo-small\"></use>\n\t\t</svg>\n\t</button>\n\t<div class=\"game__timer\">NN</div>\n\t<div class=\"game__lives\">\n\t\t<img src=\"img/heart__empty.svg\" class=\"game__heart\" alt=\"Life\" width=\"31\" height=\"27\">\n\t\t<img src=\"img/heart__full.svg\" class=\"game__heart\" alt=\"Life\" width=\"31\" height=\"27\">\n\t\t<img src=\"img/heart__full.svg\" class=\"game__heart\" alt=\"Life\" width=\"31\" height=\"27\">\n\t</div>\n\t</header>\n\t<section class=\"game\">\n\t<p class=\"game__task\">Угадай, фото или рисунок?</p>\n\t<form class=\"game__content  game__content--wide\">\n\t\t<div class=\"game__option\">\n\t\t\t<img src=\"http://placehold.it/705x455\" alt=\"Option 1\" width=\"705\" height=\"455\">\n\t\t\t<label class=\"game__answer  game__answer--photo\">\n\t\t\t\t<input class=\"visually-hidden\" name=\"question1\" type=\"radio\" value=\"photo\">\n\t\t\t\t<span>Фото</span>\n\t\t\t</label>\n\t\t\t<label class=\"game__answer  game__answer--paint\">\n\t\t\t\t<input class=\"visually-hidden\" name=\"question1\" type=\"radio\" value=\"paint\">\n\t\t\t\t<span>Рисунок</span>\n\t\t\t</label>\n\t\t</div>\n\t</form>\n\t<ul class=\"stats\">\n\t\t<li class=\"stats__result stats__result--wrong\"></li>\n\t\t<li class=\"stats__result stats__result--slow\"></li>\n\t\t<li class=\"stats__result stats__result--fast\"></li>\n\t\t<li class=\"stats__result stats__result--correct\"></li>\n\t\t<li class=\"stats__result stats__result--wrong\"></li>\n\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t\t<li class=\"stats__result stats__result--slow\"></li>\n\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t\t<li class=\"stats__result stats__result--fast\"></li>\n\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t</ul>\n\t</section></div>`);\n\nObject(_showScreen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(gameTwoScreen);\n\nconst gameTwoRadioButtons = gameTwoScreen.querySelectorAll(`input`);\n\ngameTwoRadioButtons.forEach((gameTwoRadioButton) => {\n\tgameTwoRadioButton.addEventListener(`change`, () => {\n\t\tgameTwoScreen.classList.add(`hidden`);\n\t\t_game_3_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].classList.remove(`hidden`);\n\t});\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameTwoScreen);\n\n//# sourceURL=webpack:///./js/game-2.js?");

/***/ }),

/***/ "./js/game-3.js":
/*!**********************!*\
  !*** ./js/game-3.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./js/createElement.js\");\n/* harmony import */ var _showScreen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showScreen.js */ \"./js/showScreen.js\");\n/* harmony import */ var _stats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stats.js */ \"./js/stats.js\");\n\n\n\n\nconst gameThreeScreen = Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`<div><header class=\"header\">\n\t<button class=\"back\">\n\t\t<span class=\"visually-hidden\">Вернуться к началу</span>\n\t\t<svg class=\"icon\" width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" fill=\"#000000\">\n\t\t\t<use xlink:href=\"img/sprite.svg#arrow-left\"></use>\n\t\t</svg>\n\t\t<svg class=\"icon\" width=\"101\" height=\"44\" viewBox=\"0 0 101 44\" fill=\"#000000\">\n\t\t\t<use xlink:href=\"img/sprite.svg#logo-small\"></use>\n\t\t</svg>\n\t</button>\n\t<div class=\"game__timer\">NN</div>\n\t<div class=\"game__lives\">\n\t\t<img src=\"img/heart__empty.svg\" class=\"game__heart\" alt=\"Life\" width=\"31\" height=\"27\">\n\t\t<img src=\"img/heart__full.svg\" class=\"game__heart\" alt=\"Life\" width=\"31\" height=\"27\">\n\t\t<img src=\"img/heart__full.svg\" class=\"game__heart\" alt=\"Life\" width=\"31\" height=\"27\">\n\t</div>\n\t</header>\n\t<section class=\"game\">\n\t<p class=\"game__task\">Найдите рисунок среди изображений</p>\n\t<form class=\"game__content  game__content--triple\">\n\t\t<div class=\"game__option\">\n\t\t\t<img src=\"http://placehold.it/304x455\" alt=\"Option 1\" width=\"304\" height=\"455\">\n\t\t</div>\n\t\t<div class=\"game__option  game__option--selected\">\n\t\t\t<img src=\"http://placehold.it/304x455\" alt=\"Option 2\" width=\"304\" height=\"455\">\n\t\t</div>\n\t\t<div class=\"game__option\">\n\t\t\t<img src=\"http://placehold.it/304x455\" alt=\"Option 3\" width=\"304\" height=\"455\">\n\t\t</div>\n\t</form>\n\t<ul class=\"stats\">\n\t\t<li class=\"stats__result stats__result--wrong\"></li>\n\t\t<li class=\"stats__result stats__result--slow\"></li>\n\t\t<li class=\"stats__result stats__result--fast\"></li>\n\t\t<li class=\"stats__result stats__result--correct\"></li>\n\t\t<li class=\"stats__result stats__result--wrong\"></li>\n\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t\t<li class=\"stats__result stats__result--slow\"></li>\n\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t\t<li class=\"stats__result stats__result--fast\"></li>\n\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t</ul>\n\t</section></div>`);\n\nObject(_showScreen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(gameThreeScreen);\n\nconst gameThreeOptions = gameThreeScreen.querySelectorAll(`.game__option`);\n\ngameThreeOptions.forEach((gameThreeOption) => {\n\tgameThreeOption.addEventListener(`click`, () => {\n\t\tgameThreeScreen.classList.add(`hidden`);\n\t\t_stats_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].classList.remove(`hidden`);\n\t});\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameThreeScreen);\n\n//# sourceURL=webpack:///./js/game-3.js?");

/***/ }),

/***/ "./js/greeting.js":
/*!************************!*\
  !*** ./js/greeting.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./js/createElement.js\");\n/* harmony import */ var _showScreen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showScreen.js */ \"./js/showScreen.js\");\n/* harmony import */ var _rules_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules.js */ \"./js/rules.js\");\n\n\n\n\nconst greetingScreen = Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`<div><section class=\"greeting central--blur\">\n\t<img class=\"greeting__logo\" src=\"img/logo_ph-big.svg\" width=\"201\" height=\"89\" alt=\"Pixel Hunter\">\n\t<div class=\"greeting__asterisk asterisk\"><span class=\"visually-hidden\">Я просто красивая звёздочка</span>*\n\t</div>\n\t<div class=\"greeting__challenge\">\n\t\t<h3 class=\"greeting__challenge-title\">Лучшие художники-фотореалисты бросают тебе вызов!</h3>\n\t\t<p class=\"greeting__challenge-text\">Правила игры просты:</p>\n\t\t<ul class=\"greeting__challenge-list\">\n\t\t\t<li>Нужно отличить рисунок от фотографии и сделать выбор.</li>\n\t\t\t<li>Задача кажется тривиальной, но не думай, что все так просто.</li>\n\t\t\t<li>Фотореализм обманчив и коварен.</li>\n\t\t\t<li>Помни, главное — смотреть очень внимательно.</li>\n\t\t</ul>\n\t</div>\n\t<button class=\"greeting__continue\" type=\"button\">\n\t\t<span class=\"visually-hidden\">Продолжить</span>\n\t\t<svg class=\"icon\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" fill=\"#000000\">\n\t\t\t<use xlink:href=\"img/sprite.svg#arrow-right\"></use>\n\t\t</svg>\n\t</button>\n\t<button class=\"greeting__top top\" type=\"button\">\n\t\t<img src=\"img/icon-top.svg\" width=\"71\" height=\"79\" alt=\"Топ игроков\">\n\t</button>\n\t</section></div>`);\n\nObject(_showScreen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(greetingScreen);\n\nconst continueButton = document.querySelector(`.greeting__continue`);\n\ncontinueButton.addEventListener(`click`, () => {\n\tgreetingScreen.classList.add(`hidden`);\n\t_rules_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].classList.remove(`hidden`);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (greetingScreen);\n\n//# sourceURL=webpack:///./js/greeting.js?");

/***/ }),

/***/ "./js/intro.js":
/*!*********************!*\
  !*** ./js/intro.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _greeting_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greeting.js */ \"./js/greeting.js\");\n\n\nconst introScreen = document.querySelector(`#intro`);\nconst introAsterisk = document.querySelector(`.intro__asterisk`);\n\nintroAsterisk.addEventListener(`click`, () => {\n  introScreen.classList.add(`hidden`);\n  _greeting_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].classList.remove(`hidden`);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (introScreen);\n\n//# sourceURL=webpack:///./js/intro.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _showScreen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showScreen.js */ \"./js/showScreen.js\");\n/* harmony import */ var _intro_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.js */ \"./js/intro.js\");\n/* harmony import */ var _greeting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./greeting.js */ \"./js/greeting.js\");\n\n\n\n\nfunction main() {\n  const mainContent = document.querySelector(`#main`);\n\n  Object(_showScreen_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_intro_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n  function hideScreens() {\n    const screens = Array.from(mainContent.children);\n\n    screens.forEach((screen) => {\n      screen.classList.add(`hidden`);\n    });\n  }\n\n  hideScreens();\n\n  _intro_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].classList.remove(`hidden`);\n\n  const backButtons = document.querySelectorAll(`.back`);\n\n  backButtons.forEach((backButton) => {\n    backButton.addEventListener(`click`, function () {\n      hideScreens();\n      _greeting_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].classList.remove(`hidden`);\n    });\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/rules.js":
/*!*********************!*\
  !*** ./js/rules.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./js/createElement.js\");\n/* harmony import */ var _showScreen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showScreen.js */ \"./js/showScreen.js\");\n/* harmony import */ var _game_1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-1.js */ \"./js/game-1.js\");\n\n\n\n\nconst rulesScreen = Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`<div><header class=\"header\">\n\t<button class=\"back\">\n\t\t<span class=\"visually-hidden\">Вернуться к началу</span>\n\t\t<svg class=\"icon\" width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" fill=\"#000000\">\n\t\t\t<use xlink:href=\"img/sprite.svg#arrow-left\"></use>\n\t\t</svg>\n\t\t<svg class=\"icon\" width=\"101\" height=\"44\" viewBox=\"0 0 101 44\" fill=\"#000000\">\n\t\t\t<use xlink:href=\"img/sprite.svg#logo-small\"></use>\n\t\t</svg>\n\t</button>\n\t</header>\n\t<section class=\"rules\">\n\t<h2 class=\"rules__title\">Правила</h2>\n\t<ul class=\"rules__description\">\n\t\t<li>Угадай 10 раз для каждого изображения фото\n\t\t\t<img class=\"rules__icon\" src=\"img/icon-photo.png\" width=\"32\" height=\"31\" alt=\"Фото\"> или рисунок\n\t\t\t<img class=\"rules__icon\" src=\"img/icon-paint.png\" width=\"32\" height=\"31\" alt=\"Рисунок\"></li>\n\t\t<li>Фотографиями или рисунками могут быть оба изображения.</li>\n\t\t<li>На каждую попытку отводится 30 секунд.</li>\n\t\t<li>Ошибиться можно не более 3 раз.</li>\n\t</ul>\n\t<p class=\"rules__ready\">Готовы?</p>\n\t<form class=\"rules__form\">\n\t\t<input class=\"rules__input\" type=\"text\" placeholder=\"Ваше Имя\">\n\t\t<button class=\"rules__button  continue\" type=\"submit\" disabled>Go!</button>\n\t</form>\n\t</section></div>`);\n\nObject(_showScreen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rulesScreen);\n\nconst nameForm = document.querySelector(`.rules__input`);\nconst nameFormButton = document.querySelector(`.rules__button`);\n\nnameForm.addEventListener(`input`, () => {\n\tnameFormButton.disabled = nameForm.value ? false : true;\n});\n\nnameFormButton.addEventListener(`click`, (e) => {\n\te.preventDefault();\n\trulesScreen.classList.add(`hidden`);\n\t_game_1_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].classList.remove(`hidden`);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rulesScreen);\n\n//# sourceURL=webpack:///./js/rules.js?");

/***/ }),

/***/ "./js/showScreen.js":
/*!**************************!*\
  !*** ./js/showScreen.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n// document.addEventListener('keydown', changeScreen);\n\n// function changeScreen(e) {\n//   if (e.code === 'ArrowRight') {\n//     screenNum++;\n//     showScreen(screenNum);\n//   }\n//   if (e.code === 'ArrowLeft') {\n//     screenNum--;\n//     showScreen(screenNum);\n//   }\n\n// }\n\n\nfunction showScreen(screenElement) {\n  const mainContent = document.querySelector(`#main`);\n  mainContent.append(screenElement);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (showScreen);\n\n//# sourceURL=webpack:///./js/showScreen.js?");

/***/ }),

/***/ "./js/stats.js":
/*!*********************!*\
  !*** ./js/stats.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./js/createElement.js\");\n/* harmony import */ var _showScreen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showScreen.js */ \"./js/showScreen.js\");\n\n\n\nconst statsScreen = Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`<div><header class=\"header\">\n\t<button class=\"back\">\n\t\t<span class=\"visually-hidden\">Вернуться к началу</span>\n\t\t<svg class=\"icon\" width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" fill=\"#000000\">\n\t\t\t<use xlink:href=\"img/sprite.svg#arrow-left\"></use>\n\t\t</svg>\n\t\t<svg class=\"icon\" width=\"101\" height=\"44\" viewBox=\"0 0 101 44\" fill=\"#000000\">\n\t\t\t<use xlink:href=\"img/sprite.svg#logo-small\"></use>\n\t\t</svg>\n\t</button>\n\t</header>\n\t<section class=\"result\">\n\t<h2 class=\"result__title\">Победа!</h2>\n\t<table class=\"result__table\">\n\t\t<tr>\n\t\t\t<td class=\"result__number\">1.</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t\t<ul class=\"stats\">\n\t\t\t\t\t<li class=\"stats__result stats__result--wrong\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--slow\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--fast\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--correct\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--wrong\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--slow\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--fast\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t\t\t\t</ul>\n\t\t\t</td>\n\t\t\t<td class=\"result__points\">× 100</td>\n\t\t\t<td class=\"result__total\">900</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td class=\"result__extra\">Бонус за скорость:</td>\n\t\t\t<td class=\"result__extra\">1 <span class=\"stats__result stats__result--fast\"></span></td>\n\t\t\t<td class=\"result__points\">× 50</td>\n\t\t\t<td class=\"result__total\">50</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td class=\"result__extra\">Бонус за жизни:</td>\n\t\t\t<td class=\"result__extra\">2 <span class=\"stats__result stats__result--alive\"></span></td>\n\t\t\t<td class=\"result__points\">× 50</td>\n\t\t\t<td class=\"result__total\">100</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td class=\"result__extra\">Штраф за медлительность:</td>\n\t\t\t<td class=\"result__extra\">2 <span class=\"stats__result stats__result--slow\"></span></td>\n\t\t\t<td class=\"result__points\">× 50</td>\n\t\t\t<td class=\"result__total\">-100</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"5\" class=\"result__total  result__total--final\">950</td>\n\t\t</tr>\n\t</table>\n\t<table class=\"result__table\">\n\t\t<tr>\n\t\t\t<td class=\"result__number\">2.</td>\n\t\t\t<td>\n\t\t\t\t<ul class=\"stats\">\n\t\t\t\t\t<li class=\"stats__result stats__result--wrong\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--slow\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--fast\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--correct\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--wrong\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--slow\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--wrong\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--fast\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--wrong\"></li>\n\t\t\t\t</ul>\n\t\t\t</td>\n\t\t\t<td class=\"result__total\"></td>\n\t\t\t<td class=\"result__total  result__total--final\">fail</td>\n\t\t</tr>\n\t</table>\n\t<table class=\"result__table\">\n\t\t<tr>\n\t\t\t<td class=\"result__number\">3.</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t\t<ul class=\"stats\">\n\t\t\t\t\t<li class=\"stats__result stats__result--wrong\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--slow\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--fast\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--correct\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--wrong\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--slow\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--fast\"></li>\n\t\t\t\t\t<li class=\"stats__result stats__result--unknown\"></li>\n\t\t\t\t</ul>\n\t\t\t</td>\n\t\t\t<td class=\"result__points\">× 100</td>\n\t\t\t<td class=\"result__total\">900</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td class=\"result__extra\">Бонус за жизни:</td>\n\t\t\t<td class=\"result__extra\">2 <span class=\"stats__result stats__result--alive\"></span></td>\n\t\t\t<td class=\"result__points\">× 50</td>\n\t\t\t<td class=\"result__total\">100</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"5\" class=\"result__total  result__total--final\">950</td>\n\t\t</tr>\n\t</table>\n\t</section></div>`);\n\nObject(_showScreen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(statsScreen);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (statsScreen);\n\n\n//# sourceURL=webpack:///./js/stats.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./sass/style.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./sass/style.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../fonts/roboto.woff2 */ \"./fonts/roboto.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../fonts/roboto.woff */ \"./fonts/roboto.woff\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../fonts/robotomedium.woff2 */ \"./fonts/robotomedium.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../fonts/robotomedium.woff */ \"./fonts/robotomedium.woff\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../fonts/robotobold.woff2 */ \"./fonts/robotobold.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../fonts/robotobold.woff */ \"./fonts/robotobold.woff\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../img/egg_big.png */ \"./img/egg_big.png\");\nvar ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../img/egg_distort.png */ \"./img/egg_distort.png\");\nvar ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../img/photo_big.png */ \"./img/photo_big.png\");\nvar ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ../img/paint_big.png */ \"./img/paint_big.png\");\nvar ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ../img/result-unknown.svg */ \"./img/result-unknown.svg\");\nvar ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ../img/result-wrong.svg */ \"./img/result-wrong.svg\");\nvar ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(/*! ../img/result-correct.svg */ \"./img/result-correct.svg\");\nvar ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(/*! ../img/result-slow.svg */ \"./img/result-slow.svg\");\nvar ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(/*! ../img/result-fast.svg */ \"./img/result-fast.svg\");\nvar ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(/*! ../img/heart__full.svg */ \"./img/heart__full.svg\");\nvar ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(/*! ../img/icon-top.svg */ \"./img/icon-top.svg\");\nvar ___CSS_LOADER_URL_IMPORT_17___ = __webpack_require__(/*! ../img/icon-cross.svg */ \"./img/icon-cross.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);\nvar ___CSS_LOADER_URL_REPLACEMENT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_17___);\n// Module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n/* Document\\n   ========================================================================== */\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\nhtml {\\n  line-height: 1.15;\\n  /* 1 */\\n  -webkit-text-size-adjust: 100%;\\n  /* 2 */ }\\n\\n/* Sections\\n   ========================================================================== */\\n/**\\n * Remove the margin in all browsers.\\n */\\nbody {\\n  margin: 0; }\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\nmain {\\n  display: block; }\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0; }\\n\\n/* Grouping content\\n   ========================================================================== */\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\nhr {\\n  box-sizing: content-box;\\n  /* 1 */\\n  height: 0;\\n  /* 1 */\\n  overflow: visible;\\n  /* 2 */ }\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\npre {\\n  font-family: monospace, monospace;\\n  /* 1 */\\n  font-size: 1em;\\n  /* 2 */ }\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\na {\\n  background-color: transparent; }\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\nabbr[title] {\\n  border-bottom: none;\\n  /* 1 */\\n  text-decoration: underline;\\n  /* 2 */\\n  text-decoration: underline dotted;\\n  /* 2 */ }\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\nb,\\nstrong {\\n  font-weight: bolder; }\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace;\\n  /* 1 */\\n  font-size: 1em;\\n  /* 2 */ }\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\nsmall {\\n  font-size: 80%; }\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline; }\\n\\nsub {\\n  bottom: -0.25em; }\\n\\nsup {\\n  top: -0.5em; }\\n\\n/* Embedded content\\n   ========================================================================== */\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\nimg {\\n  border-style: none; }\\n\\n/* Forms\\n   ========================================================================== */\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit;\\n  /* 1 */\\n  font-size: 100%;\\n  /* 1 */\\n  line-height: 1.15;\\n  /* 1 */\\n  margin: 0;\\n  /* 2 */ }\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\nbutton,\\ninput {\\n  /* 1 */\\n  overflow: visible; }\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\nbutton,\\nselect {\\n  /* 1 */\\n  text-transform: none; }\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button; }\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0; }\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText; }\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em; }\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\nlegend {\\n  box-sizing: border-box;\\n  /* 1 */\\n  color: inherit;\\n  /* 2 */\\n  display: table;\\n  /* 1 */\\n  max-width: 100%;\\n  /* 1 */\\n  padding: 0;\\n  /* 3 */\\n  white-space: normal;\\n  /* 1 */ }\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\nprogress {\\n  vertical-align: baseline; }\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\ntextarea {\\n  overflow: auto; }\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */ }\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto; }\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield;\\n  /* 1 */\\n  outline-offset: -2px;\\n  /* 2 */ }\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none; }\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button;\\n  /* 1 */\\n  font: inherit;\\n  /* 2 */ }\\n\\n/* Interactive\\n   ========================================================================== */\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\ndetails {\\n  display: block; }\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\nsummary {\\n  display: list-item; }\\n\\n/* Misc\\n   ========================================================================== */\\n/**\\n * Add the correct display in IE 10+.\\n */\\ntemplate {\\n  display: none; }\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n[hidden] {\\n  display: none; }\\n\\n@font-face {\\n  font-family: \\\"Roboto\\\";\\n  font-weight: 400;\\n  font-style: normal;\\n  font-display: swap;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff\\\"); }\\n\\n@font-face {\\n  font-family: \\\"Roboto\\\";\\n  font-weight: 500;\\n  font-style: normal;\\n  font-display: swap;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"woff2\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format(\\\"woff\\\"); }\\n\\n@font-face {\\n  font-family: \\\"Roboto\\\";\\n  font-weight: 700;\\n  font-style: normal;\\n  font-display: swap;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format(\\\"woff2\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") format(\\\"woff\\\"); }\\n\\nhtml {\\n  min-height: 100%;\\n  margin: 0;\\n  padding: 0; }\\n\\nbody {\\n  min-height: 100%;\\n  font-family: \\\"Roboto\\\", \\\"Arial\\\", sans-serif;\\n  font-weight: 500;\\n  font-size: 22px;\\n  line-height: 34px;\\n  color: #00222d;\\n  background: #a8c8c4 linear-gradient(to bottom left, #ccdeeb, #84b39e) no-repeat; }\\n\\na {\\n  color: #00222d; }\\n\\n.back {\\n  border: 0;\\n  background-color: transparent;\\n  cursor: pointer; }\\n\\n.visually-hidden {\\n  position: absolute;\\n  width: 1px;\\n  height: 1px;\\n  margin: -1px;\\n  border: 0;\\n  padding: 0;\\n  white-space: nowrap;\\n  clip-path: inset(100%);\\n  clip: rect(0 0 0 0);\\n  overflow: hidden; }\\n\\n.hidden {\\n  display: none; }\\n\\n@keyframes bounce {\\n  0% {\\n    transform: translateY(-2000px); }\\n  70% {\\n    transform: translateY(30px); }\\n  90% {\\n    transform: translateY(-10px); }\\n  100% {\\n    transform: translateY(0); } }\\n\\n/*\\n * Стили для кнопки-звёздочки\\n */\\n.asterisk {\\n  padding: 0;\\n  color: #de1f1f;\\n  cursor: pointer;\\n  background: transparent;\\n  border: none; }\\n  .asterisk:hover, .asterisk:focus {\\n    color: #d74040; }\\n  .asterisk:active {\\n    color: #af3636; }\\n\\n/*\\n * Стили для основного блока\\n */\\n.central {\\n  margin: 0 auto;\\n  position: relative;\\n  max-width: 1000px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.central__content {\\n  display: flex;\\n  flex-direction: column;\\n  padding-top: 30px;\\n  min-height: 740px; }\\n\\n/*\\n * Стили для первого вступительного экрана\\n */\\n.intro {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 800px;\\n  height: 740px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") no-repeat center;\\n  background-size: contain; }\\n\\n.intro__asterisk {\\n  position: absolute;\\n  top: 290px;\\n  left: 395px;\\n  font-size: 172px;\\n  line-height: 128px; }\\n\\n.intro__motto {\\n  margin: 0;\\n  margin-top: auto;\\n  position: relative;\\n  font-size: 18px; }\\n\\n.intro__top {\\n  position: absolute;\\n  right: 0;\\n  top: 0; }\\n\\n/*\\n * Стили для приветственного экрана. Правила игры\\n */\\n.greeting {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  position: relative;\\n  width: 780px;\\n  height: 740px;\\n  transition: background-image 1s ease-in-out;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") no-repeat center;\\n  background-size: contain; }\\n\\n.greeting__asterisk {\\n  margin-top: 50px;\\n  margin-bottom: 30px;\\n  font-size: 80px;\\n  line-height: 60px; }\\n\\n.greeting__challenge {\\n  margin: 0 auto;\\n  text-align: center; }\\n\\n.greeting__challenge-title {\\n  font-family: \\\"Roboto\\\", \\\"Arial\\\", sans-serif;\\n  font-weight: 700;\\n  font-size: 30px;\\n  line-height: 36px;\\n  margin: 0 100px;\\n  margin-bottom: 50px; }\\n\\n.greeting__challenge-text {\\n  font-family: \\\"Roboto\\\", \\\"Arial\\\", sans-serif;\\n  font-weight: 500;\\n  font-size: 22px;\\n  line-height: 34px;\\n  margin: 0; }\\n\\n.greeting__challenge-list {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none; }\\n\\n.greeting__continue {\\n  padding: 0;\\n  position: absolute;\\n  right: -20px;\\n  top: 300px;\\n  width: 64px;\\n  height: 64px;\\n  cursor: pointer;\\n  background-color: transparent;\\n  border: none; }\\n  .greeting__continue:hover svg,\\n  .greeting__continue:focus svg {\\n    fill: #d74040; }\\n\\n.greeting__top {\\n  position: absolute;\\n  right: 0;\\n  top: 0; }\\n\\n/*\\n * Стили для экрана с правилами игры\\n */\\n.rules {\\n  text-align: center; }\\n\\n.rules__title {\\n  font-family: \\\"Roboto\\\", \\\"Arial\\\", sans-serif;\\n  font-weight: 700;\\n  font-size: 30px;\\n  line-height: 36px;\\n  margin: 30px 0; }\\n\\n.rules__description {\\n  font-family: \\\"Roboto\\\", \\\"Arial\\\", sans-serif;\\n  font-weight: 500;\\n  font-size: 22px;\\n  line-height: 34px;\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n  margin: 0;\\n  margin-bottom: 30px; }\\n\\n.rules__icon {\\n  vertical-align: middle; }\\n\\n.rules__ready {\\n  margin: 0;\\n  margin-bottom: 30px;\\n  font-weight: 700; }\\n\\n.rules__form {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.rules__input {\\n  margin-bottom: 50px;\\n  height: 50px;\\n  font-family: \\\"Roboto\\\", \\\"Arial\\\", sans-serif;\\n  font-size: 22px;\\n  line-height: 30px;\\n  font-weight: bold;\\n  text-align: center;\\n  border: 3px solid transparent;\\n  border-radius: 5px; }\\n  .rules__input:hover {\\n    border-color: #e2a0a1; }\\n  .rules__input:focus {\\n    border-color: #d74040; }\\n\\n.rules__button {\\n  width: 90px;\\n  height: 90px;\\n  font-family: \\\"Roboto\\\", \\\"Arial\\\", sans-serif;\\n  font-size: 30px;\\n  line-height: 60px;\\n  font-weight: bold;\\n  color: #ffffff;\\n  background-color: #d74040;\\n  border-width: 0;\\n  border-radius: 45px;\\n  cursor: pointer; }\\n  .rules__button:enabled:hover, .rules__button:enabled:focus {\\n    background-color: #ff6969; }\\n  .rules__button:enabled:active {\\n    background-color: #af3636; }\\n  .rules__button:disabled {\\n    background-color: #c6a5a5; }\\n\\n/*\\n * Стили для шапки игровых экранов.\\n * Кнопка возврата на первый шаг и табы для экранов с результатами\\n */\\n.header {\\n  height: 100px;\\n  display: flex;\\n  align-items: flex-start;\\n  justify-content: space-between; }\\n\\n.back {\\n  padding: 0; }\\n  .back:hover svg,\\n  .back:focus svg {\\n    fill: #d74040; }\\n  .back:active svg {\\n    fill: #af3636; }\\n\\n.header__tabs {\\n  font-size: 0; }\\n\\n.tab {\\n  margin: 0;\\n  padding: 0;\\n  width: 130px;\\n  height: 40px;\\n  font-size: 22px;\\n  background-color: rgba(0, 0, 0, 0.1);\\n  border: none; }\\n  .tab:hover, .tab:focus {\\n    color: #000000;\\n    background-color: rgba(0, 0, 0, 0.3); }\\n  .tab:active, .tab--active {\\n    color: white;\\n    background-color: #000000; }\\n\\n/*\\n * Стили для интерактивных svg-иконок\\n */\\n.icon:hover, .icon:focus {\\n  fill: #d74040; }\\n\\n.icon:active {\\n  fill: #af3636; }\\n\\n/*\\n * Стили для футера сайта\\n */\\n.footer {\\n  margin-top: 50px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.footer__made-in {\\n  font-family: \\\"Roboto\\\", \\\"Arial\\\", sans-serif;\\n  font-weight: 400;\\n  font-size: 12px;\\n  line-height: 12px;\\n  display: block;\\n  margin-top: 5px;\\n  margin-bottom: 15px; }\\n\\n.footer__link {\\n  font-family: \\\"Roboto\\\", \\\"Arial\\\", sans-serif;\\n  font-weight: 400;\\n  font-size: 12px;\\n  line-height: 12px; }\\n  .footer__link:hover, .footer__link:focus {\\n    color: #d74040; }\\n  .footer__link:active {\\n    color: #af3636; }\\n\\n.social-link {\\n  margin: 0 2px;\\n  vertical-align: top;\\n  text-decoration: none; }\\n  .social-link:hover .icon,\\n  .social-link:focus .icon {\\n    fill: #d74040; }\\n\\n/*\\n * Стили для игровых экранов\\n */\\n.game {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.game__timer {\\n  font-family: \\\"Roboto\\\", \\\"Arial\\\", sans-serif;\\n  font-weight: 700;\\n  font-size: 30px;\\n  line-height: 36px;\\n  font-size: 60px;\\n  line-height: 45px; }\\n\\n.game__task {\\n  margin: 20px 0;\\n  font-size: 22px;\\n  line-height: 35px; }\\n\\n.game__content {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: nowrap;\\n  justify-content: space-between;\\n  margin-bottom: 20px; }\\n\\n.game__option {\\n  position: relative;\\n  border: 10px solid transparent;\\n  width: 468px;\\n  height: 458px;\\n  font-size: 0;\\n  text-align: center;\\n  vertical-align: middle; }\\n\\n.game__answer {\\n  position: absolute;\\n  width: 78px;\\n  height: 78px;\\n  bottom: 30px;\\n  font-size: 0; }\\n  .game__answer span {\\n    display: block;\\n    width: 100%;\\n    height: 100%;\\n    border-radius: 70px;\\n    background: rgba(0, 0, 0, 0.5) no-repeat center; }\\n    .game__answer span:hover {\\n      background-color: #000000; }\\n  .game__answer--photo {\\n    left: 30px; }\\n    .game__answer--photo span {\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \"); }\\n  .game__answer--paint {\\n    right: 30px; }\\n    .game__answer--paint span {\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \"); }\\n  .game__answer input:focus + span {\\n    background-color: #000000; }\\n  .game__answer input:checked + span {\\n    background-color: #d74040; }\\n\\n.game__content--wide .game__option {\\n  width: 705px;\\n  height: 455px; }\\n\\n.game__content--wide .game__answer {\\n  top: 208px; }\\n\\n.game__content--wide .game__answer--photo {\\n  left: -100px; }\\n\\n.game__content--wide .game__answer--paint {\\n  right: -100px; }\\n\\n.game__content--triple .game__option {\\n  cursor: pointer;\\n  width: 304px;\\n  height: 455px; }\\n  .game__content--triple .game__option:hover {\\n    border-color: #d74040; }\\n  .game__content--triple .game__option:active {\\n    border-color: #af3636; }\\n\\n/*\\n * Стили для таблицы со статистикой по игре и игрокам.\\n * Таблица на экранах с результатами игры.\\n */\\n.stats {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n  display: flex;\\n  align-items: center; }\\n\\n.stats__result {\\n  width: 32px;\\n  height: 32px;\\n  margin: 5px; }\\n  .stats__result--unknown {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \") no-repeat center; }\\n  .stats__result--wrong {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \") no-repeat center; }\\n  .stats__result--correct {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \") no-repeat center; }\\n  .stats__result--slow {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \") no-repeat center; }\\n  .stats__result--fast {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \") no-repeat center; }\\n  .stats__result--alive {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \") no-repeat center; }\\n\\n/*\\n * Стили для экранов с результатами игры\\n */\\n.result {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.result__title {\\n  margin: 30px 0;\\n  font-size: 44px; }\\n  .result__title--single {\\n    padding-top: 150px;\\n    position: relative;\\n    font-size: 50px;\\n    line-height: 50px; }\\n    .result__title--single::before {\\n      position: absolute;\\n      content: \\\"\\\";\\n      width: 111px;\\n      height: 123px;\\n      top: 0;\\n      left: 50%;\\n      transform: translateX(-50%);\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_16___ + \");\\n      background-repeat: no-repeat;\\n      background-size: 111px 123px; }\\n\\n.result__text {\\n  font-family: \\\"Roboto\\\", \\\"Arial\\\", sans-serif;\\n  font-weight: 500;\\n  font-size: 22px;\\n  line-height: 34px;\\n  font-weight: 500; }\\n\\n.result__table {\\n  width: 670px;\\n  margin-bottom: 40px; }\\n  .result__table td {\\n    border: 10px solid transparent; }\\n  .result__table .stats {\\n    justify-content: flex-end; }\\n  .result__table--single {\\n    width: auto; }\\n\\n.result__number {\\n  font-family: \\\"Roboto\\\", \\\"Arial\\\", sans-serif;\\n  font-weight: 700;\\n  font-size: 30px;\\n  line-height: 36px;\\n  font-size: 22px; }\\n\\n.result__extra {\\n  min-width: 50px;\\n  text-align: right; }\\n\\n.result__total {\\n  min-width: 40px;\\n  text-align: right;\\n  text-transform: uppercase; }\\n  .result__total--final {\\n    font-family: \\\"Roboto\\\", \\\"Arial\\\", sans-serif;\\n    font-weight: 700;\\n    font-size: 30px;\\n    line-height: 36px; }\\n\\n/*\\n * Стили для модальных окон\\n */\\n.modal {\\n  position: absolute;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  left: 0;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  z-index: 1;\\n  background-color: rgba(0, 0, 0, 0.8); }\\n  .modal--hidden {\\n    display: none; }\\n\\n.modal__inner {\\n  position: relative;\\n  width: 450px;\\n  padding: 50px 20px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  color: #000000;\\n  background: #a8c8c4 linear-gradient(to bottom left, #ccdeeb, #84b39e) no-repeat;\\n  animation: bounce 0.6s; }\\n\\n.modal__title {\\n  margin: 0;\\n  margin-bottom: 30px;\\n  font-size: 32px; }\\n\\n.modal__text {\\n  margin: 0;\\n  margin-bottom: 30px;\\n  font-size: 18px; }\\n  .modal__text--error {\\n    margin-bottom: 0; }\\n\\n.modal__close {\\n  padding: 0;\\n  position: absolute;\\n  top: -40px;\\n  right: -40px;\\n  width: 30px;\\n  height: 30px;\\n  background-color: transparent;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_17___ + \");\\n  background-repeat: no-repeat;\\n  background-size: 30px 30px;\\n  border: none;\\n  cursor: pointer; }\\n  .modal__close:hover, .modal__close:focus {\\n    opacity: 0.8; }\\n  .modal__close:focus {\\n    opacity: 0.6; }\\n\\n.modal__button-wrapper {\\n  display: flex;\\n  justify-content: center; }\\n\\n.modal__btn {\\n  font-family: \\\"Roboto\\\", \\\"Arial\\\", sans-serif;\\n  font-weight: 500;\\n  font-size: 22px;\\n  line-height: 34px;\\n  padding: 0 20px;\\n  height: 50px;\\n  background-color: #ffffff;\\n  border-radius: 5px;\\n  border: 2px transparent;\\n  border-style: solid; }\\n  .modal__btn:hover, .modal__btn:focus {\\n    opacity: 0.8; }\\n  .modal__btn:active {\\n    opacity: 0.6; }\\n  .modal__btn:first-of-type {\\n    margin-right: 15px; }\\n\\n/*\\n * Стили для кнопки, по которой можно посмотреть топ-игоков.\\n * Иконка в виде кубка в правом верхнем углу экранов.\\n */\\n.top {\\n  width: 71px;\\n  height: 79px;\\n  background: transparent;\\n  border: none; }\\n  .top:hover, .top:focus {\\n    transform: scale(1.1); }\\n  .top:active {\\n    transform: scale(1.05); }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./sass/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--7-3");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./sass/style.scss":
/*!*************************!*\
  !*** ./sass/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js??ref--7-3!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./sass/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./sass/style.scss?");

/***/ })

/******/ });