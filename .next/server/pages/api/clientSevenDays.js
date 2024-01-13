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
exports.id = "pages/api/clientSevenDays";
exports.ids = ["pages/api/clientSevenDays"];
exports.modules = {

/***/ "(api)/./pages/api/clientSevenDays.tsx":
/*!***************************************!*\
  !*** ./pages/api/clientSevenDays.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_clientSevenDays_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/clientSevenDays.json */ \"(api)/./pages/api/data/clientSevenDays.json\");\n\nasync function handler(req, res) {\n    try {\n        res.status(200).json(_data_clientSevenDays_json__WEBPACK_IMPORTED_MODULE_0__);\n    } catch (error) {\n        res.status(500).json({\n            error: \"error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2xpZW50U2V2ZW5EYXlzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUMwRDtBQUUzQyxlQUFlQyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxJQUFJO1FBQ0ZBLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNMLHVEQUFlLENBQUMsQ0FBQztJQUN4QyxFQUFFLE9BQU9NLEtBQUssRUFBRTtRQUNkSCxHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxPQUFPO1NBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vcGFnZXMvYXBpL2NsaWVudFNldmVuRGF5cy50c3g/NDYxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBjbGllbnRTZXZlbkRheXMgZnJvbSAnLi9kYXRhL2NsaWVudFNldmVuRGF5cy5qc29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIgKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNsaWVudFNldmVuRGF5cyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdlcnJvcicgfSk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbImNsaWVudFNldmVuRGF5cyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/clientSevenDays.tsx\n");

/***/ }),

/***/ "(api)/./pages/api/data/clientSevenDays.json":
/*!*********************************************!*\
  !*** ./pages/api/data/clientSevenDays.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"newClient":{"day":"Lunes","value":200},"bought":{"day":"Lunes","value":2000}},{"newClient":{"day":"Martes","value":200},"bought":{"day":"Martes","value":2000}},{"newClient":{"day":"Miercoles","value":200},"bought":{"day":"Miercoles","value":2000}},{"newClient":{"day":"Jueves","value":200},"bought":{"day":"Jueves","value":2000}},{"newClient":{"day":"Viernes","value":200},"bought":{"day":"Viernes","value":2000}},{"newClient":{"day":"Sabado","value":200},"bought":{"day":"Sabado","value":2000}},{"newClient":{"day":"Domingo","value":200},"bought":{"day":"Domingo","value":2000}}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/clientSevenDays.tsx"));
module.exports = __webpack_exports__;

})();