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
exports.id = "pages/blog";
exports.ids = ["pages/blog"];
exports.modules = {

/***/ "./lib/config.js":
/*!***********************!*\
  !*** ./lib/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\nconst config = {\n    dataset: \"production\" || 0,\n    projectId: \"vvys9c1a\",\n    apiVersion: \"2021-08-11\",\n    useCdn: \"development\" === \"production\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxNQUFNLEdBQUc7SUFDbEJDLE9BQU8sRUFBRUMsWUFBc0MsSUFBSSxDQUFZO0lBQy9ERyxTQUFTLEVBQUVILFVBQXlDO0lBQ3BESyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsTUFBTSxFQUFFTixhQUpDLEtBSXdCLFlBQVk7Q0FDaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9saWIvY29uZmlnLmpzPzA2YzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgICBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCB8fCBcInByb2R1Y3Rpb25cIixcbiAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lELFxuICAgIGFwaVZlcnNpb246IFwiMjAyMS0wOC0xMVwiLFxuICAgIHVzZUNkbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxufSJdLCJuYW1lcyI6WyJjb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJhcGlWZXJzaW9uIiwidXNlQ2RuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/config.js\n");

/***/ }),

/***/ "./lib/queries.js":
/*!************************!*\
  !*** ./lib/queries.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"blogPage\": () => (/* binding */ blogPage),\n/* harmony export */   \"homepage\": () => (/* binding */ homepage),\n/* harmony export */   \"singleBlog\": () => (/* binding */ singleBlog)\n/* harmony export */ });\nconst homepage = `\n    *[_type == \"page\" && title == \"Homepage\"]\n`;\nconst blogPage = `{\n    \"pageData\": *[_type == \"page\" && title == \"Blog Page\"],\n    \"allPosts\": *[_type == \"post\"] | order(_createdAt desc) {\n        title,\n        \n    }\n}`;\nconst singleBlog = `\n    *[_type == \"post\" && slug.current == $slug][0]\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcXVlcmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxRQUFRLEdBQUcsQ0FBQzs7QUFFekIsQ0FBQztBQUVNLE1BQU1DLFFBQVEsR0FBRyxDQUFDOzs7Ozs7Q0FNeEIsQ0FBQztBQUVLLE1BQU1DLFVBQVUsR0FBRyxDQUFDOztBQUUzQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vbGliL3F1ZXJpZXMuanM/NjBlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaG9tZXBhZ2UgPSBgXG4gICAgKltfdHlwZSA9PSBcInBhZ2VcIiAmJiB0aXRsZSA9PSBcIkhvbWVwYWdlXCJdXG5gXG5cbmV4cG9ydCBjb25zdCBibG9nUGFnZSA9IGB7XG4gICAgXCJwYWdlRGF0YVwiOiAqW190eXBlID09IFwicGFnZVwiICYmIHRpdGxlID09IFwiQmxvZyBQYWdlXCJdLFxuICAgIFwiYWxsUG9zdHNcIjogKltfdHlwZSA9PSBcInBvc3RcIl0gfCBvcmRlcihfY3JlYXRlZEF0IGRlc2MpIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIFxuICAgIH1cbn1gXG5cbmV4cG9ydCBjb25zdCBzaW5nbGVCbG9nID0gYFxuICAgICpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXVxuYCJdLCJuYW1lcyI6WyJob21lcGFnZSIsImJsb2dQYWdlIiwic2luZ2xlQmxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/queries.js\n");

/***/ }),

/***/ "./lib/sanity.js":
/*!***********************!*\
  !*** ./lib/sanity.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./lib/config.js\");\n\n\nif (!_config__WEBPACK_IMPORTED_MODULE_1__.config.projectId) {\n    throw Error(\"The Project ID is not set. Check your environment variables.\");\n}\nconst client = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(_config__WEBPACK_IMPORTED_MODULE_1__.config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2FuaXR5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLcUI7QUFFYTtBQUVsQyxJQUFJLENBQUNJLHFEQUFnQixFQUFFO0lBQ25CLE1BQU1FLEtBQUssQ0FDVCw4REFBOEQsQ0FDL0QsQ0FBQztDQUNMO0FBRU0sTUFBTUMsTUFBTSxHQUFHUCx5REFBWSxDQUFDSSwyQ0FBTSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9saWIvc2FuaXR5LmpzP2Q4YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBjcmVhdGVDbGllbnQsXG4gICAgY3JlYXRlUG9ydGFibGVUZXh0Q29tcG9uZW50LFxuICAgIGNyZWF0ZUltYWdlVXJsQnVpbGRlcixcbiAgICBjcmVhdGVQcmV2aWV3U3Vic2NyaXB0aW9uSG9va1xufSBmcm9tIFwibmV4dC1zYW5pdHlcIjtcbiAgXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuaWYgKCFjb25maWcucHJvamVjdElkKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBcIlRoZSBQcm9qZWN0IElEIGlzIG5vdCBzZXQuIENoZWNrIHlvdXIgZW52aXJvbm1lbnQgdmFyaWFibGVzLlwiXG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudChjb25maWcpOyJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJjcmVhdGVQb3J0YWJsZVRleHRDb21wb25lbnQiLCJjcmVhdGVJbWFnZVVybEJ1aWxkZXIiLCJjcmVhdGVQcmV2aWV3U3Vic2NyaXB0aW9uSG9vayIsImNvbmZpZyIsInByb2plY3RJZCIsIkVycm9yIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/sanity.js\n");

/***/ }),

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Blog),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/queries */ \"./lib/queries.js\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/sanity */ \"./lib/sanity.js\");\n\n\n\nfunction Blog({ data  }) {\n    const pageData = data.pageData[0];\n    const blogs = data.allPosts;\n    console.log(blogs);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            pageData.title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: blogs.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: item.title\n                    }, index, false, {\n                        fileName: \"/Users/briannelson/Documents/GitHub/client-example/pages/blog/index.js\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/briannelson/Documents/GitHub/client-example/pages/blog/index.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/briannelson/Documents/GitHub/client-example/pages/blog/index.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n};\nasync function getStaticProps() {\n    const data = await _lib_sanity__WEBPACK_IMPORTED_MODULE_2__.client.fetch(_lib_queries__WEBPACK_IMPORTED_MODULE_1__.blogPage);\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTRDO0FBQ0g7QUFFMUIsU0FBU0UsSUFBSSxDQUFDLEVBQUVDLElBQUksR0FBRSxFQUFFO0lBQ25DLE1BQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLE1BQU1DLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxRQUFRO0lBQzNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDO0lBQ2xCLHFCQUNJLDhEQUFDSSxNQUFJOztZQUNBTCxRQUFRLENBQUNNLEtBQUs7MEJBQ2YsOERBQUNDLFNBQU87MEJBQ0hOLEtBQUssQ0FBQ08sR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRUMsS0FBSyxpQkFDbkIsOERBQUNDLEtBQUc7a0NBQWNGLElBQUksQ0FBQ0gsS0FBSzt1QkFBbEJJLEtBQUs7Ozs7NEJBQW9CLENBQ3JDOzs7OztvQkFDSTs7Ozs7O1lBQ1AsQ0FDVjtDQUNKO0FBRU0sZUFBZUUsY0FBYyxHQUFHO0lBQ25DLE1BQU1iLElBQUksR0FBRyxNQUFNRixxREFBWSxDQUFDRCxrREFBUSxDQUFDO0lBRXpDLE9BQU87UUFDSGtCLEtBQUssRUFBRTtZQUNIZixJQUFJO1NBQ1A7S0FDSjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vcGFnZXMvYmxvZy9pbmRleC5qcz8xMWE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJsb2dQYWdlIH0gZnJvbSBcIi4uLy4uL2xpYi9xdWVyaWVzXCJcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuLi8uLi9saWIvc2FuaXR5XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZyh7IGRhdGEgfSkge1xuICAgIGNvbnN0IHBhZ2VEYXRhID0gZGF0YS5wYWdlRGF0YVswXTtcbiAgICBjb25zdCBibG9ncyA9IGRhdGEuYWxsUG9zdHM7XG4gICAgY29uc29sZS5sb2coYmxvZ3MpXG4gICAgcmV0dXJuKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIHtwYWdlRGF0YS50aXRsZX1cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIHtibG9ncy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+e2l0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvbWFpbj5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY2xpZW50LmZldGNoKGJsb2dQYWdlKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiYmxvZ1BhZ2UiLCJjbGllbnQiLCJCbG9nIiwiZGF0YSIsInBhZ2VEYXRhIiwiYmxvZ3MiLCJhbGxQb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwidGl0bGUiLCJzZWN0aW9uIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGl2IiwiZ2V0U3RhdGljUHJvcHMiLCJmZXRjaCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/index.js\n");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-sanity");

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
var __webpack_exports__ = (__webpack_exec__("./pages/blog/index.js"));
module.exports = __webpack_exports__;

})();