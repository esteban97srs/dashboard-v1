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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ \"./components/Card.tsx\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_icons_material_RemoveRedEye__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/RemoveRedEye */ \"./node_modules/@mui/icons-material/RemoveRedEye.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Chip */ \"./node_modules/@mui/material/Chip/index.js\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Stack */ \"./node_modules/@mui/material/Stack/index.js\");\n/* harmony import */ var _mui_icons_material_InsertInvitation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/InsertInvitation */ \"./node_modules/@mui/icons-material/InsertInvitation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Layout(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), filterChip = ref[0], setFilterChip = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            console.log(filterChip),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"main\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex j-content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        direction: \"row\",\n                                        spacing: \"10px\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                label: \"HOY\",\n                                                onClick: function() {\n                                                    setFilterChip(\"today\");\n                                                    router.push(\"/clientToday\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 28,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                label: \"7D\",\n                                                onClick: function() {\n                                                    setFilterChip(\"7D\");\n                                                    router.push(\"/clientSevenDays\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 32,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                label: \"Este mes\",\n                                                onClick: function() {\n                                                    setFilterChip(\"Estemes\");\n                                                    router.push(\"/\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                label: \"6M\",\n                                                onClick: function() {\n                                                    setFilterChip(\"6M\");\n                                                    router.push(\"/\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                label: \"YTD/YTG\",\n                                                onClick: function() {\n                                                    setFilterChip(\"YTD_YTG\");\n                                                    router.push(\"/\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                label: \"1A\",\n                                                onClick: function() {\n                                                    setFilterChip(\"1A\");\n                                                    router.push(\"/\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                label: \"M\\xc1X\",\n                                                onClick: function() {\n                                                    setFilterChip(\"MAX\");\n                                                    router.push(\"/\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"d-flex j-content\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_InsertInvitation__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                        sx: {\n                                                            position: \"static\",\n                                                            margin: \"5px\",\n                                                            color: \"#644BBA\"\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                        lineNumber: 57,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                        label: \"Personalizado\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        className: \"f-size1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_RemoveRedEye__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                sx: {\n                                                    color: \"#644BBA\"\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 41\n                                            }, this),\n                                            \"Ver detalle\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    marginTop: -34\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex j-content\",\n                                style: {\n                                    marginTop: -34\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex gap-1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                variant: \"outlined\",\n                                                children: \"Clientes\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                variant: \"outlined\",\n                                                children: \"Transacciones\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex gap-1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                variant: \"outlined\",\n                                                children: \"Dinero\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                variant: \"outlined\",\n                                                children: \"Cashback\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    marginTop: -65\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                    children: children\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                        className: \"aside\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                variant: \"outlined\",\n                                children: \"Switch\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Integer\\\\Documents\\\\GitHub\\\\dashboard\\\\components\\\\layout\\\\Layout.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"uJPLcm3gYsqI0r3pmlCeIIqzDZ0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzBDQUNOLDhEQUFDYixLQUFHO2dDQUFDVyxLQUFLLEVBQUU7b0NBQUNDLFNBQVMsRUFBQyxDQUFDLEVBQUU7aUNBQUM7MENBQ3pCLDRFQUFDRSxNQUFJOzhDQUFFcEIsUUFBUTs7Ozs7d0NBQVE7Ozs7O29DQUNuQjs7Ozs7OzRCQUNGO2tDQUNOLDhEQUFDcUIsT0FBSzt3QkFBQ2QsU0FBUyxFQUFDLE9BQU87OzBDQUN0Qiw4REFBQ2YsNERBQU07Z0NBQUMyQixPQUFPLEVBQUMsVUFBVTswQ0FBQyxRQUFNOzs7OztvQ0FBUzswQ0FDMUMsOERBQUM1Qiw2Q0FBSTs7OztvQ0FBRzswQ0FDUiw4REFBQ0EsNkNBQUk7Ozs7b0NBQUc7MENBQ1IsOERBQUNBLDZDQUFJOzs7O29DQUFHOzs7Ozs7NEJBQ0Y7Ozs7OztvQkFDSjs7b0JBQ0wsQ0FDSDtBQUNKLENBQUM7R0EzRXVCUSxNQUFNOztRQUNiTCxrREFBUzs7O0FBREZLLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LnRzeD8zYTBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vTmF2YmFyJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgUmVtb3ZlUmVkRXllSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1JlbW92ZVJlZEV5ZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2hpcCc7XHJcbmltcG9ydCBTdGFjayBmcm9tICdAbXVpL21hdGVyaWFsL1N0YWNrJztcclxuaW1wb3J0IEluc2VydEludml0YXRpb25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSW5zZXJ0SW52aXRhdGlvbic7XHJcblxyXG50eXBlIERhc2hib2FyZExheW91dFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiBEYXNoYm9hcmRMYXlvdXRQcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtmaWx0ZXJDaGlwLCBzZXRGaWx0ZXJDaGlwXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtjb25zb2xlLmxvZyhmaWx0ZXJDaGlwKX1cclxuXHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggai1jb250ZW50Jz5cclxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9eycxMHB4J30+XHJcbiAgICAgICAgICAgICAgPENoaXAgbGFiZWw9XCJIT1lcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXJDaGlwKCd0b2RheScpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9jbGllbnRUb2RheScpO1xyXG4gICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICA8Q2hpcCBsYWJlbD1cIjdEXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyQ2hpcCgnN0QnKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvY2xpZW50U2V2ZW5EYXlzJyk7XHJcbiAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgIDxDaGlwIGxhYmVsPVwiRXN0ZSBtZXNcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXJDaGlwKCdFc3RlbWVzJyk7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICA8Q2hpcCBsYWJlbD1cIjZNXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyQ2hpcCgnNk0nKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgIDxDaGlwIGxhYmVsPVwiWVREL1lUR1wiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEZpbHRlckNoaXAoJ1lURF9ZVEcnKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgIDxDaGlwIGxhYmVsPVwiMUFcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXJDaGlwKCcxQScpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgPENoaXAgbGFiZWw9XCJNw4FYXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyQ2hpcCgnTUFYJyk7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGotY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICA8SW5zZXJ0SW52aXRhdGlvbkljb24gc3g9e3twb3NpdGlvbjonc3RhdGljJywgbWFyZ2luOiAnNXB4JywgY29sb3I6JyM2NDRCQkEnfX0gLz5cclxuICAgICAgICAgICAgICAgIDxDaGlwIGxhYmVsPVwiUGVyc29uYWxpemFkb1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdmLXNpemUxJz48UmVtb3ZlUmVkRXllSWNvbiBzeD17eyBjb2xvcjogJyM2NDRCQkEnIH19IC8+VmVyIGRldGFsbGU8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDotMzR9fT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqLWNvbnRlbnQnIHN0eWxlPXt7bWFyZ2luVG9wOi0zNH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGdhcC0xJz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgQ2xpZW50ZXNcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlRyYW5zYWNjaW9uZXM8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZ2FwLTEnPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCI+RGluZXJvPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIj5DYXNoYmFjazwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDotNjV9fT5cclxuICAgICAgICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9J2FzaWRlJz5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCI+U3dpdGNoPC9CdXR0b24+XHJcbiAgICAgICAgICA8Q2FyZCAvPlxyXG4gICAgICAgICAgPENhcmQgLz5cclxuICAgICAgICAgIDxDYXJkIC8+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIk5hdmJhciIsIkNhcmQiLCJCdXR0b24iLCJSZW1vdmVSZWRFeWVJY29uIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJDaGlwIiwiU3RhY2siLCJJbnNlcnRJbnZpdGF0aW9uSWNvbiIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwiZmlsdGVyQ2hpcCIsInNldEZpbHRlckNoaXAiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGlyZWN0aW9uIiwic3BhY2luZyIsImxhYmVsIiwib25DbGljayIsInB1c2giLCJzeCIsInBvc2l0aW9uIiwibWFyZ2luIiwiY29sb3IiLCJzdHlsZSIsIm1hcmdpblRvcCIsInZhcmlhbnQiLCJtYWluIiwiYXNpZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Layout.tsx\n"));

/***/ })

});