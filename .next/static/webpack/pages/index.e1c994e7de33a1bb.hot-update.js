"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/VoiceComponent.js":
/*!*********************************!*\
  !*** ./pages/VoiceComponent.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//\n//  Header.h\n//  \n//\n//  Created by Rachael Mathew on 12/25/21.\n//\n\n\n\n\n\nfunction Voice() {\n    //add the listener to the btn\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"container\",\n        __source: {\n            fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Script, {\n                dangerouslySetInnerHTML: {\n                    __html: \"\\n        const btn = document.querySelector('.talk');\\n        const content = document.querySelector('.content');\\n        \\n        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;\\n        const recognition = new SpeechRecognition();\\n        recognition.onstart = function () {\\n            console.log(\\\"voice is activiated\\\");\\n        };\\n        recognition.onresult = function(event) {\\n            const current = event.resultIndex;\\n            const transcript = event.results[current][0].transcript;\\n            content.innerHTML = transcript;\\n            console.log(transcript);\\n        };\\n                \"\n                },\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                class: \"talk\",\n                onClick: function() {\n                    return recognition.start();\n                },\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: \"Talk\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                class: \"content\",\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_c = Voice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voice);\nvar _c;\n$RefreshReg$(_c, \"Voice\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Wb2ljZUNvbXBvbmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLEVBQUU7QUFDRixFQUFZO0FBQ1osRUFBSTtBQUNKLEVBQUU7QUFDRixFQUEwQztBQUMxQyxFQUFFO0FBR21DO0FBQzhCO0FBQ2hDO0FBQ0k7QUFDRjtTQUU1Qk0sS0FBSyxHQUFHLENBQUM7SUFFZCxFQUE2QjtJQUU3QixNQUFNLHVFQUNHQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFXOzs7Ozs7OztpRkFDekJDLE1BQU07Z0JBQ0xDLHVCQUF1QixFQUFFLENBQUM7b0JBQ3hCQyxNQUFNLEVBQUcsQ0FlVDtnQkFDQSxDQUFDOzs7Ozs7OztpRkFFSkMsQ0FBTTtnQkFBQ0MsS0FBSyxFQUFDLENBQU07Z0JBQUNDLE9BQU8sRUFBRSxRQUFRO29CQUFGQyxNQUFNLENBQU5BLFdBQVcsQ0FBQ0MsS0FBSzs7Ozs7Ozs7MEJBQUksQ0FBSTs7aUZBQzVEQyxDQUFFO2dCQUFDSixLQUFLLEVBQUMsQ0FBUzs7Ozs7Ozs7OztBQUcvQixDQUFDO0tBOUJRUCxLQUFLO0FBZ0NkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVm9pY2VDb21wb25lbnQuanM/ZjFjNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy8gIEhlYWRlci5oXG4vLyAgXG4vL1xuLy8gIENyZWF0ZWQgYnkgUmFjaGFlbCBNYXRoZXcgb24gMTIvMjUvMjEuXG4vL1xuXG5cbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IGV4cGVyaW1lbnRhbFN0eWxlZCBhcyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XG5cbmZ1bmN0aW9uIFZvaWNlKCkge1xuICAgIFxuICAgIC8vYWRkIHRoZSBsaXN0ZW5lciB0byB0aGUgYnRuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxTY3JpcHRcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhbGsnKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBTcGVlY2hSZWNvZ25pdGlvbiA9IHdpbmRvdy5TcGVlY2hSZWNvZ25pdGlvbiB8fCB3aW5kb3cud2Via2l0U3BlZWNoUmVjb2duaXRpb247XG4gICAgICAgIGNvbnN0IHJlY29nbml0aW9uID0gbmV3IFNwZWVjaFJlY29nbml0aW9uKCk7XG4gICAgICAgIHJlY29nbml0aW9uLm9uc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZvaWNlIGlzIGFjdGl2aWF0ZWRcIik7XG4gICAgICAgIH07XG4gICAgICAgIHJlY29nbml0aW9uLm9ucmVzdWx0ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBldmVudC5yZXN1bHRJbmRleDtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zY3JpcHQgPSBldmVudC5yZXN1bHRzW2N1cnJlbnRdWzBdLnRyYW5zY3JpcHQ7XG4gICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IHRyYW5zY3JpcHQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0cmFuc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFsa1wiIG9uQ2xpY2s9eygpID0+IHJlY29nbml0aW9uLnN0YXJ0KCl9PlRhbGs8L2J1dHRvbj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvbnRlbnRcIj48L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWb2ljZTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiZXhwZXJpbWVudGFsU3R5bGVkIiwic3R5bGVkIiwiQm94IiwiUGFwZXIiLCJHcmlkIiwiVm9pY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJTY3JpcHQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImJ1dHRvbiIsImNsYXNzIiwib25DbGljayIsInJlY29nbml0aW9uIiwic3RhcnQiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/VoiceComponent.js\n");

/***/ })

});