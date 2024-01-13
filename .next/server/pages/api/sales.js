"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sales";
exports.ids = ["pages/api/sales"];
exports.modules = {

/***/ "(api)/./pages/api/sales.tsx":
/*!*****************************!*\
  !*** ./pages/api/sales.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_salesArray_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/salesArray.json */ \"(api)/./pages/api/data/salesArray.json\");\n\nasync function handler(req, res) {\n    try {\n        res.status(200).json(_data_salesArray_json__WEBPACK_IMPORTED_MODULE_0__);\n    } catch (error) {\n        res.status(500).json({\n            error: \"error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2FsZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQytDO0FBRWhDLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLElBQUk7UUFDRkEsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0wsa0RBQVMsQ0FBQyxDQUFDO0lBQ2xDLEVBQUUsT0FBT00sS0FBSyxFQUFFO1FBQ2RILEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLE9BQU87U0FBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9wYWdlcy9hcGkvc2FsZXMudHN4Pzk0M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgc2FsZXNEYXRhIGZyb20gJy4vZGF0YS9zYWxlc0FycmF5Lmpzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlciAoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICB0cnkge1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oc2FsZXNEYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ2Vycm9yJyB9KTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsic2FsZXNEYXRhIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/sales.tsx\n");

/***/ }),

/***/ "(api)/./pages/api/data/salesArray.json":
/*!****************************************!*\
  !*** ./pages/api/data/salesArray.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"newClient":{"hour":"00:00","value":20},"bought":{"hour":"00:00","value":10}},{"newClient":{"hour":"01:00","value":8},"bought":{"hour":"01:00","value":20}},{"newClient":{"hour":"02:00","value":80},"bought":{"hour":"02:00","value":80}},{"newClient":{"hour":"03:00","value":20},"bought":{"hour":"03:00","value":80}},{"newClient":{"hour":"04:00","value":10},"bought":{"hour":"04:00","value":10}},{"newClient":{"hour":"05:00","value":40},"bought":{"hour":"05:00","value":100}},{"newClient":{"hour":"06:00","value":60},"bought":{"hour":"06:00","value":20}},{"newClient":{"hour":"07:00","value":20},"bought":{"hour":"07:00","value":60}},{"newClient":{"hour":"08:00","value":40},"bought":{"hour":"08:00","value":80}},{"newClient":{"hour":"09:00","value":20},"bought":{"hour":"09:00","value":100}},{"newClient":{"hour":"10:00","value":20},"bought":{"hour":"10:00","value":80}},{"newClient":{"hour":"11:00","value":10},"bought":{"hour":"11:00","value":70}},{"newClient":{"hour":"12:00","value":20},"bought":{"hour":"12:00","value":20}},{"newClient":{"hour":"13:00","value":1},"bought":{"hour":"13:00","value":50}},{"newClient":{"hour":"14:00","value":8},"bought":{"hour":"14:00","value":70}},{"newClient":{"hour":"15:00","value":10},"bought":{"hour":"15:00","value":90}},{"newClient":{"hour":"16:00","value":30},"bought":{"hour":"16:00","value":70}},{"newClient":{"hour":"17:00","value":1},"bought":{"hour":"17:00","value":10}},{"newClient":{"hour":"18:00","value":20},"bought":{"hour":"18:00","value":40}},{"newClient":{"hour":"19:00","value":5},"bought":{"hour":"19:00","value":20}},{"newClient":{"hour":"20:00","value":10},"bought":{"hour":"20:00","value":60}},{"newClient":{"hour":"21:00","value":1},"bought":{"hour":"21:00","value":10}},{"newClient":{"hour":"22:00","value":20},"bought":{"hour":"22:00","value":40}},{"newClient":{"hour":"23:00","value":1},"bought":{"hour":"23:00","value":100}}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sales.tsx"));
module.exports = __webpack_exports__;

})();