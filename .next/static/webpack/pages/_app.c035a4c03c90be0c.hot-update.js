"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/layout/Layout.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ \"./components/Card.tsx\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_icons_material_RemoveRedEye__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/RemoveRedEye */ \"./node_modules/@mui/icons-material/RemoveRedEye.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Chip */ \"./node_modules/@mui/material/Chip/index.js\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Stack */ \"./node_modules/@mui/material/Stack/index.js\");\n/* harmony import */ var _mui_icons_material_InsertInvitation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/InsertInvitation */ \"./node_modules/@mui/icons-material/InsertInvitation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Layout(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), filter = ref[0], setFilter = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            console.log(filter),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex j-content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        direction: \"row\",\n                                        spacing: \"10px\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                label: \"HOY\",\n                                                onClick: function() {\n                                                    var filter_tmp = filter;\n                                                    setFilter(filter_tmp + \"/\" + \"today\");\n                                                    router.push(\"/\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 27,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                label: \"7D\",\n                                                onClick: function() {\n                                                    return router.push(\"/clientSevenDays\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 32,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                label: \"Este mes\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                label: \"6M\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                label: \"YTD/YTG\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                label: \"1A\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                label: \"M\\xc1X\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"d-flex j-content\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_InsertInvitation__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                        sx: {\n                                                            position: \"static\",\n                                                            margin: \"5px\",\n                                                            color: \"#644BBA\"\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                        lineNumber: 39,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                        label: \"Personalizado\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                        lineNumber: 40,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        className: \"f-size1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_RemoveRedEye__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                sx: {\n                                                    color: \"#644BBA\"\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 41\n                                            }, this),\n                                            \"Ver detalle\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    marginTop: -34\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabGroup, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex j-content\",\n                                style: {\n                                    marginTop: -34\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex gap-1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                variant: \"outlined\",\n                                                onClick: function() {\n                                                    var filter_tmp = filter;\n                                                    setFilter(filter_tmp + \"/\" + \"today\");\n                                                    router.push(\"/\");\n                                                },\n                                                children: \"Clientes\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                variant: \"outlined\",\n                                                children: \"Transacciones\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex gap-1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                variant: \"outlined\",\n                                                children: \"Dinero\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                variant: \"outlined\",\n                                                children: \"Cashback\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    marginTop: -65\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                    children: children\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                        className: \"aside\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                variant: \"outlined\",\n                                children: \"Switch\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"uJPLcm3gYsqI0r3pmlCeIIqzDZ0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0dBOUR1QlEsTUFBTTs7UUFDYkwsa0RBQVM7OztBQURGSyxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC50c3g/M2EwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL05hdmJhcic7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IFJlbW92ZVJlZEV5ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZW1vdmVSZWRFeWUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2hpcCBmcm9tICdAbXVpL21hdGVyaWFsL0NoaXAnO1xyXG5pbXBvcnQgU3RhY2sgZnJvbSAnQG11aS9tYXRlcmlhbC9TdGFjayc7XHJcbmltcG9ydCBJbnNlcnRJbnZpdGF0aW9uSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0luc2VydEludml0YXRpb24nO1xyXG5cclxudHlwZSBEYXNoYm9hcmRMYXlvdXRQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogRGFzaGJvYXJkTGF5b3V0UHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2NvbnNvbGUubG9nKGZpbHRlcil9XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggai1jb250ZW50Jz5cclxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9eycxMHB4J30+XHJcbiAgICAgICAgICAgICAgPENoaXAgbGFiZWw9XCJIT1lcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJfdG1wID0gZmlsdGVyO1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKGZpbHRlcl90bXAgKyAnLycgKyAndG9kYXknKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgIDxDaGlwIGxhYmVsPVwiN0RcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2NsaWVudFNldmVuRGF5cycpfSAvPlxyXG4gICAgICAgICAgICAgIDxDaGlwIGxhYmVsPVwiRXN0ZSBtZXNcIiAvPlxyXG4gICAgICAgICAgICAgIDxDaGlwIGxhYmVsPVwiNk1cIiAvPlxyXG4gICAgICAgICAgICAgIDxDaGlwIGxhYmVsPVwiWVREL1lUR1wiIC8+XHJcbiAgICAgICAgICAgICAgPENoaXAgbGFiZWw9XCIxQVwiIC8+XHJcbiAgICAgICAgICAgICAgPENoaXAgbGFiZWw9XCJNw4FYXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGotY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICA8SW5zZXJ0SW52aXRhdGlvbkljb24gc3g9e3twb3NpdGlvbjonc3RhdGljJywgbWFyZ2luOiAnNXB4JywgY29sb3I6JyM2NDRCQkEnfX0gLz5cclxuICAgICAgICAgICAgICAgIDxDaGlwIGxhYmVsPVwiUGVyc29uYWxpemFkb1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdmLXNpemUxJz48UmVtb3ZlUmVkRXllSWNvbiBzeD17eyBjb2xvcjogJyM2NDRCQkEnIH19IC8+VmVyIGRldGFsbGU8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDotMzR9fT5cclxuICAgICAgICAgICAgPFRhYkdyb3VwIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggai1jb250ZW50JyBzdHlsZT17e21hcmdpblRvcDotMzR9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBnYXAtMSc+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJfdG1wID0gZmlsdGVyO1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKGZpbHRlcl90bXAgKyAnLycgKyAndG9kYXknKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICBDbGllbnRlc1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCI+VHJhbnNhY2Npb25lczwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBnYXAtMSc+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIj5EaW5lcm88L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPkNhc2hiYWNrPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOi02NX19PlxyXG4gICAgICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT0nYXNpZGUnPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIj5Td2l0Y2g8L0J1dHRvbj5cclxuICAgICAgICAgIDxDYXJkIC8+XHJcbiAgICAgICAgICA8Q2FyZCAvPlxyXG4gICAgICAgICAgPENhcmQgLz5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiTmF2YmFyIiwiQ2FyZCIsIkJ1dHRvbiIsIlJlbW92ZVJlZEV5ZUljb24iLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIkNoaXAiLCJTdGFjayIsIkluc2VydEludml0YXRpb25JY29uIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGlyZWN0aW9uIiwic3BhY2luZyIsImxhYmVsIiwib25DbGljayIsImZpbHRlcl90bXAiLCJwdXNoIiwic3giLCJwb3NpdGlvbiIsIm1hcmdpbiIsImNvbG9yIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJUYWJHcm91cCIsInZhcmlhbnQiLCJtYWluIiwiYXNpZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Layout.tsx\n"));

/***/ })

});