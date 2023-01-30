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

/***/ "./components/Name.js":
/*!****************************!*\
  !*** ./components/Name.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst GET_USERS = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`\r\nquery\r\n  Query {getAllUsers {\r\n    name\r\n    address\r\n    email\r\n    phone\r\n  }\r\n}\r\n`;\nfunction App() {\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(GET_USERS);\n    const [currentIndex, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(20);\n    !loading && console.log(\"data\", data.getAllUsers[0].name);\n    const loadMore = ()=>{\n        setData(currentIndex + 20);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Container, {\n                gap: 2,\n                justify: \"flex-start\",\n                children: !loading && data.getAllUsers.slice(0, currentIndex).map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                        xs: 6,\n                        sm: 3,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                            isPressable: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Card.Body, {\n                                css: {\n                                    p: 0\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                        b: true,\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                        b: true,\n                                        children: item.address\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                        b: true,\n                                        children: item.email\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                        b: true,\n                                        children: item.phone\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.js\",\n                            lineNumber: 36,\n                            columnNumber: 10\n                        }, this)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.js\",\n                lineNumber: 33,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                style: {\n                    margin: \"auto\"\n                },\n                onClick: loadMore,\n                children: \"LOAD MORE\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.js\",\n                lineNumber: 47,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\components\\\\Name.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\nconst query = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`\r\n  query name {\r\n    name\r\n  }\r\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0w7QUFDOEI7QUFFRztBQUVsRSxNQUFNVSxZQUFZUiwrQ0FBRyxDQUFDOzs7Ozs7Ozs7QUFTdEIsQ0FBQztBQUVDLFNBQVNTLE1BQU07SUFFYixNQUFNLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsR0FBR1gsd0RBQVFBLENBQUNPO0lBQzFDLE1BQU0sQ0FBQ0ssY0FBYUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN4QyxDQUFDVyxXQUFZSyxRQUFRQyxHQUFHLENBQUMsUUFBT0osS0FBS0ssV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtJQUc1RCxNQUFNQyxXQUFVLElBQUk7UUFFbEJMLFFBQVFELGVBQWU7SUFDekI7SUFHRSxxQkFDRSw4REFBQ087OzBCQUNILDhEQUFDZiw2REFBYztnQkFBQ2lCLEtBQUs7Z0JBQUdDLFNBQVE7MEJBQzVCLENBQUNiLFdBQVdFLEtBQUtLLFdBQVcsQ0FBQ08sS0FBSyxDQUFDLEdBQUVYLGNBQWNZLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDNUQsOERBQUN0QixtREFBSUE7d0JBQUN1QixJQUFJO3dCQUFHQyxJQUFJO2tDQUNoQiw0RUFBQ3pCLG1EQUFJQTs0QkFBQzBCLFdBQVc7c0NBQ2hCLDRFQUFDMUIsd0RBQVM7Z0NBQUM0QixLQUFLO29DQUFFQyxHQUFHO2dDQUFFOztrREFDdkIsOERBQUMxQixtREFBSUE7d0NBQUMyQixDQUFDO2tEQUFFUixLQUFLUixJQUFJOzs7Ozs7a0RBQ2xCLDhEQUFDWCxtREFBSUE7d0NBQUMyQixDQUFDO2tEQUFFUixLQUFLUyxPQUFPOzs7Ozs7a0RBQ3JCLDhEQUFDNUIsbURBQUlBO3dDQUFDMkIsQ0FBQztrREFBRVIsS0FBS1UsS0FBSzs7Ozs7O2tEQUNuQiw4REFBQzdCLG1EQUFJQTt3Q0FBQzJCLENBQUM7a0RBQUVSLEtBQUtXLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQU5JVjs7Ozs7Ozs7OzswQkFZL0IsOERBQUN4QixxREFBTUE7Z0JBQUNtQyxPQUFPO29CQUFDQyxRQUFPO2dCQUFNO2dCQUFHQyxTQUFTckI7MEJBQVU7Ozs7Ozs7Ozs7OztBQUdyRDtBQUdBLE1BQU1zQixRQUFRekMsK0NBQUcsQ0FBQzs7OztBQUlsQixDQUFDO0FBRUQsaUVBQWVTLEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwb2xsby8uL2NvbXBvbmVudHMvTmFtZS5qcz9lYWZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5LHVzZUFwb2xsb0NsaWVudCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgR3JpZCwgUm93LCBUZXh0IH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XHJcblxyXG5jb25zdCBHRVRfVVNFUlMgPSBncWxgXHJcbnF1ZXJ5XHJcbiAgUXVlcnkge2dldEFsbFVzZXJzIHtcclxuICAgIG5hbWVcclxuICAgIGFkZHJlc3NcclxuICAgIGVtYWlsXHJcbiAgICBwaG9uZVxyXG4gIH1cclxufVxyXG5gXHJcblxyXG4gIGZ1bmN0aW9uIEFwcCgpIHtcclxuXHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfVVNFUlMpXHJcbiAgICBjb25zdCBbY3VycmVudEluZGV4LHNldERhdGFdID0gdXNlU3RhdGUoMjApXHJcbiAgICAhbG9hZGluZyAgJiYgY29uc29sZS5sb2coXCJkYXRhXCIsZGF0YS5nZXRBbGxVc2Vyc1swXS5uYW1lKTtcclxuXHJcblxyXG5jb25zdCBsb2FkTW9yZSA9KCk9PntcclxuXHJcbiAgc2V0RGF0YShjdXJyZW50SW5kZXggKyAyMClcclxufVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgPEdyaWQuQ29udGFpbmVyIGdhcD17Mn0ganVzdGlmeT1cImZsZXgtc3RhcnRcIj5cclxuICAgIHsgIWxvYWRpbmcgJiYgZGF0YS5nZXRBbGxVc2Vycy5zbGljZSgwLGN1cnJlbnRJbmRleCkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxHcmlkIHhzPXs2fSBzbT17M30ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgIDxDYXJkIGlzUHJlc3NhYmxlPlxyXG4gICAgICAgICAgPENhcmQuQm9keSBjc3M9e3sgcDogMCB9fT5cclxuICAgICAgICAgIDxUZXh0IGI+e2l0ZW0ubmFtZX08L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBiPntpdGVtLmFkZHJlc3N9PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgYj57aXRlbS5lbWFpbH08L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBiPntpdGVtLnBob25lfTwvVGV4dD5cclxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgIDwvR3JpZD5cclxuICAgICAgKSl9XHJcbiAgPC9HcmlkLkNvbnRhaW5lcj5cclxuICA8QnV0dG9uIHN0eWxlPXt7bWFyZ2luOidhdXRvJ319IG9uQ2xpY2s9e2xvYWRNb3JlfT5MT0FEIE1PUkU8L0J1dHRvbj5cclxuICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuY29uc3QgcXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgbmFtZSB7XHJcbiAgICBuYW1lXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuIl0sIm5hbWVzIjpbImdyYXBocWwiLCJ1c2VTdGF0ZSIsImdxbCIsInVzZVF1ZXJ5IiwidXNlQXBvbGxvQ2xpZW50IiwiQnV0dG9uIiwiQ2FyZCIsIkdyaWQiLCJSb3ciLCJUZXh0IiwiR0VUX1VTRVJTIiwiQXBwIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImN1cnJlbnRJbmRleCIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0QWxsVXNlcnMiLCJuYW1lIiwibG9hZE1vcmUiLCJkaXYiLCJDb250YWluZXIiLCJnYXAiLCJqdXN0aWZ5Iiwic2xpY2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ4cyIsInNtIiwiaXNQcmVzc2FibGUiLCJCb2R5IiwiY3NzIiwicCIsImIiLCJhZGRyZXNzIiwiZW1haWwiLCJwaG9uZSIsInN0eWxlIiwibWFyZ2luIiwib25DbGljayIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Name.js\n");

/***/ }),

/***/ "./lib/with-apollo.js":
/*!****************************!*\
  !*** ./lib/with-apollo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-apollo */ \"next-apollo\");\n/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-http */ \"apollo-link-http\");\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst apolloConfig = {\n    link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_1__.HttpLink({\n        uri: \"https://faker-graphql.now.sh/graphql\"\n    })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_apollo__WEBPACK_IMPORTED_MODULE_0__.withData)(apolloConfig));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvd2l0aC1hcG9sbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0M7QUFDSztBQUUzQyxNQUFNRSxlQUFlO0lBQ25CQyxNQUFNLElBQUlGLHNEQUFRQSxDQUFDO1FBQ2pCRyxLQUFLO0lBQ1A7QUFDRjtBQUVBLGlFQUFlSixxREFBUUEsQ0FBQ0UsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBvbGxvLy4vbGliL3dpdGgtYXBvbGxvLmpzP2IxNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aERhdGEgfSBmcm9tICduZXh0LWFwb2xsbydcclxuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJ1xyXG5cclxuY29uc3QgYXBvbGxvQ29uZmlnID0ge1xyXG4gIGxpbms6IG5ldyBIdHRwTGluayh7XHJcbiAgICB1cmk6ICdodHRwczovL2Zha2VyLWdyYXBocWwubm93LnNoL2dyYXBocWwnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoYXBvbGxvQ29uZmlnKVxyXG4iXSwibmFtZXMiOlsid2l0aERhdGEiLCJIdHRwTGluayIsImFwb2xsb0NvbmZpZyIsImxpbmsiLCJ1cmkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/with-apollo.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_with_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/with-apollo */ \"./lib/with-apollo.js\");\n/* harmony import */ var _components_Name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Name */ \"./components/Name.js\");\n\n\n\n\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({\n        uri: \"http://localhost:4000/graphql\",\n        headers: {}\n    }),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n});\nconst Page = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Name__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\pages\\\\index.js\",\n            lineNumber: 17,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\u52524\\\\Desktop\\\\Appolo\\\\next-apollo-demo\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_with_apollo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Page));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVFO0FBQ25CO0FBQ1Q7QUFDTjtBQUVyQyxNQUFNTSxTQUFTLElBQUlOLHdEQUFZQSxDQUFDO0lBQzlCTyxNQUFNLElBQUlMLG9EQUFRQSxDQUFDO1FBQ2pCTSxLQUFLO1FBQ0xDLFNBQVMsQ0FDVDtJQUNGO0lBQ0FDLE9BQU8sSUFBSVQseURBQWFBO0FBQzFCO0FBRUEsTUFBTVUsT0FBTyxrQkFDWCw4REFBQ1IsK0RBQWNBO1FBQUNHLFFBQVFBO2tCQUN2Qiw0RUFBQ0Qsd0RBQUlBOzs7Ozs7Ozs7O0FBS1IsaUVBQWVELDREQUFVQSxDQUFDTyxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcG9sbG8vLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgSHR0cExpbmsgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgV2l0aEFwb2xsbyBmcm9tICcuLi9saWIvd2l0aC1hcG9sbG8nXHJcbmltcG9ydCBOYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvTmFtZSdcclxuXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gIGxpbms6IG5ldyBIdHRwTGluayh7XHJcbiAgICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICB9LFxyXG4gIH0pLFxyXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG59KTtcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiAoXHJcbiAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cclxuICAgPE5hbWUgLz5cclxuXHJcbiAgPC9BcG9sbG9Qcm92aWRlcj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2l0aEFwb2xsbyhQYWdlKVxyXG4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsIkh0dHBMaW5rIiwiQXBvbGxvUHJvdmlkZXIiLCJXaXRoQXBvbGxvIiwiTmFtZSIsImNsaWVudCIsImxpbmsiLCJ1cmkiLCJoZWFkZXJzIiwiY2FjaGUiLCJQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "next-apollo":
/*!******************************!*\
  !*** external "next-apollo" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-apollo");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-apollo");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();