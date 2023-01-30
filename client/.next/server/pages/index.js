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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Name.tsx":
/*!*****************************!*\
  !*** ./components/Name.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./constants.ts\");\n\n\n\n\n\nfunction UserData() {\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_constants__WEBPACK_IMPORTED_MODULE_4__.GET_USERS);\n    const [currentIndex, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n    const loadMore = ()=>{\n        setData(currentIndex + 20);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Container, {\n                gap: 2,\n                justify: \"flex-start\",\n                \"data-testid\": \"user-grid\",\n                id: \"user-grid\",\n                children: !loading && data.getAllUsers.slice(0, currentIndex).map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                        xs: 6,\n                        sm: 3,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                            isPressable: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Card.Body, {\n                                css: {\n                                    padding: 10\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                        b: true,\n                                        children: [\n                                            item.name,\n                                            \" \",\n                                            item.surname\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                        children: item.address\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                        children: item.email\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                        children: item.phone\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                style: {\n                    margin: \"auto\"\n                },\n                onClick: loadMore,\n                \"data-testid\": \"load-more\",\n                children: \"LOAD MORE\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserData);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ1M7QUFFbUI7QUFDcEI7QUFFekMsU0FBU08sV0FBVztJQUNsQixNQUFNLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsR0FBR1Qsd0RBQVFBLENBQUNLLGlEQUFTQTtJQUNuRCxNQUFNLENBQUNLLGNBQWNDLFFBQVEsR0FBR1osK0NBQVFBLENBQUM7SUFFekMsTUFBTWEsV0FBVyxJQUFNO1FBQ3JCRCxRQUFRRCxlQUFlO0lBQ3pCO0lBRUEscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ1YsNkRBQWM7Z0JBQ2JZLEtBQUs7Z0JBQ0xDLFNBQVE7Z0JBQ1JDLGVBQVk7Z0JBQ1pDLElBQUc7MEJBRUYsQ0FBQ1gsV0FDQUUsS0FBS1UsV0FBVyxDQUFDQyxLQUFLLENBQUMsR0FBR1YsY0FBY1csR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNqRCw4REFBQ3BCLG1EQUFJQTt3QkFBQ3FCLElBQUk7d0JBQUdDLElBQUk7a0NBQ2YsNEVBQUN2QixtREFBSUE7NEJBQUN3QixXQUFXO3NDQUNmLDRFQUFDeEIsd0RBQVM7Z0NBQUMwQixLQUFLO29DQUFFQyxTQUFTO2dDQUFHOztrREFDNUIsOERBQUN6QixtREFBSUE7d0NBQUMwQixDQUFDOzs0Q0FDSlIsS0FBS1MsSUFBSTs0Q0FBQzs0Q0FBRVQsS0FBS1UsT0FBTzs7Ozs7OztrREFFM0IsOERBQUM1QixtREFBSUE7a0RBQUVrQixLQUFLVyxPQUFPOzs7Ozs7a0RBQ25CLDhEQUFDN0IsbURBQUlBO2tEQUFFa0IsS0FBS1ksS0FBSzs7Ozs7O2tEQUNqQiw4REFBQzlCLG1EQUFJQTtrREFBRWtCLEtBQUthLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQVJFWjs7Ozs7Ozs7OzswQkFjL0IsOERBQUN0QixxREFBTUE7Z0JBQ0xtQyxPQUFPO29CQUFFQyxRQUFRO2dCQUFPO2dCQUN4QkMsU0FBUzFCO2dCQUNUSyxlQUFZOzBCQUNiOzs7Ozs7Ozs7Ozs7QUFLUDtBQUVBLGlFQUFlWCxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcG9sbG8vLi9jb21wb25lbnRzL05hbWUudHN4PzQ0OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgR3JpZCwgVGV4dCB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xyXG5pbXBvcnQgeyBHRVRfVVNFUlMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcblxyXG5mdW5jdGlvbiBVc2VyRGF0YSgpIHtcclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfVVNFUlMpO1xyXG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldERhdGFdID0gdXNlU3RhdGUoMjApO1xyXG5cclxuICBjb25zdCBsb2FkTW9yZSA9ICgpID0+IHtcclxuICAgIHNldERhdGEoY3VycmVudEluZGV4ICsgMjApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8R3JpZC5Db250YWluZXJcclxuICAgICAgICBnYXA9ezJ9XHJcbiAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgIGRhdGEtdGVzdGlkPVwidXNlci1ncmlkXCJcclxuICAgICAgICBpZD1cInVzZXItZ3JpZFwiXHJcbiAgICAgID5cclxuICAgICAgICB7IWxvYWRpbmcgJiZcclxuICAgICAgICAgIGRhdGEuZ2V0QWxsVXNlcnMuc2xpY2UoMCwgY3VycmVudEluZGV4KS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxHcmlkIHhzPXs2fSBzbT17M30ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPENhcmQgaXNQcmVzc2FibGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5IGNzcz17eyBwYWRkaW5nOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgYj5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfSB7aXRlbS5zdXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0PntpdGVtLmFkZHJlc3N9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dD57aXRlbS5lbWFpbH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0PntpdGVtLnBob25lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvR3JpZC5Db250YWluZXI+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiYXV0b1wiIH19XHJcbiAgICAgICAgb25DbGljaz17bG9hZE1vcmV9XHJcbiAgICAgICAgZGF0YS10ZXN0aWQ9XCJsb2FkLW1vcmVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgTE9BRCBNT1JFXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckRhdGE7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVF1ZXJ5IiwiQnV0dG9uIiwiQ2FyZCIsIkdyaWQiLCJUZXh0IiwiR0VUX1VTRVJTIiwiVXNlckRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY3VycmVudEluZGV4Iiwic2V0RGF0YSIsImxvYWRNb3JlIiwiZGl2IiwiQ29udGFpbmVyIiwiZ2FwIiwianVzdGlmeSIsImRhdGEtdGVzdGlkIiwiaWQiLCJnZXRBbGxVc2VycyIsInNsaWNlIiwibWFwIiwiaXRlbSIsImluZGV4IiwieHMiLCJzbSIsImlzUHJlc3NhYmxlIiwiQm9keSIsImNzcyIsInBhZGRpbmciLCJiIiwibmFtZSIsInN1cm5hbWUiLCJhZGRyZXNzIiwiZW1haWwiLCJwaG9uZSIsInN0eWxlIiwibWFyZ2luIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Name.tsx\n");

/***/ }),

/***/ "./constants.ts":
/*!**********************!*\
  !*** ./constants.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_USERS\": () => (/* binding */ GET_USERS)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_USERS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\r\n  query Query {\r\n    getAllUsers {\r\n      name\r\n      surname\r\n      address\r\n      email\r\n      phone\r\n    }\r\n  }\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRTlCLE1BQU1DLFlBQVlELCtDQUFHLENBQUM7Ozs7Ozs7Ozs7QUFVN0IsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcG9sbG8vLi9jb25zdGFudHMudHM/ZGQ0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUlMgPSBncWxgXHJcbiAgcXVlcnkgUXVlcnkge1xyXG4gICAgZ2V0QWxsVXNlcnMge1xyXG4gICAgICBuYW1lXHJcbiAgICAgIHN1cm5hbWVcclxuICAgICAgYWRkcmVzc1xyXG4gICAgICBlbWFpbFxyXG4gICAgICBwaG9uZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIl0sIm5hbWVzIjpbImdxbCIsIkdFVF9VU0VSUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Name */ \"./components/Name.tsx\");\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cross-fetch */ \"cross-fetch\");\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({\n        uri: \"http://localhost:4000/graphql\",\n        fetch: (cross_fetch__WEBPACK_IMPORTED_MODULE_4___default())\n    }),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n});\nconst App = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Name__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\pages\\\\index.tsx\",\n            lineNumber: 19,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\pages\\\\index.tsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFDbkI7QUFFZjtBQUNMO0FBRWhDLE1BQU1NLFNBQVMsSUFBSU4sd0RBQVlBLENBQUM7SUFDOUJPLE1BQU0sSUFBSUwsb0RBQVFBLENBQUM7UUFDakJNLEtBQUs7UUFDTEgsS0FBS0Esc0RBQUFBO0lBQ1A7SUFDQUksT0FBTyxJQUFJUix5REFBYUE7QUFDMUI7QUFFQSxNQUFNUyxNQUFNLGtCQUVWLDhEQUFDUCwrREFBY0E7UUFBQ0csUUFBUUE7a0JBRXZCLDRFQUFDRix3REFBSUE7Ozs7Ozs7Ozs7QUFLUixpRUFBZU0sR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBvbGxvLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBIdHRwTGluayB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCBXaXRoQXBvbGxvIGZyb20gJy4uL2xpYi93aXRoLWFwb2xsbydcclxuaW1wb3J0IE5hbWUgZnJvbSAnLi4vY29tcG9uZW50cy9OYW1lJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnY3Jvc3MtZmV0Y2gnO1xyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgbGluazogbmV3IEh0dHBMaW5rKHtcclxuICAgIHVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsJyxcclxuICAgIGZldGNoXHJcbiAgfSksXHJcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXHJcbn0pO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4gKFxyXG5cclxuICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxyXG5cclxuICAgPE5hbWUgLz5cclxuXHJcbiAgPC9BcG9sbG9Qcm92aWRlcj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiSHR0cExpbmsiLCJBcG9sbG9Qcm92aWRlciIsIk5hbWUiLCJmZXRjaCIsImNsaWVudCIsImxpbmsiLCJ1cmkiLCJjYWNoZSIsIkFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@nextui-org/react":
/*!************************************!*\
  !*** external "@nextui-org/react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();