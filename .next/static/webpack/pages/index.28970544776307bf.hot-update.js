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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//\n//  Header.h\n//  \n//\n//  Created by Rachael Mathew on 12/25/21.\n//\n\n\n\n\n\n\nfunction Voice() {\n    //add the listener to the btn\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"container\",\n        __source: {\n            fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                dangerouslySetInnerHTML: {\n                    __html: \"\\n        const btnTalk = document.querySelector('.talk');\\n        const contentTalk = document.querySelector('.contentTalk');\\n        \\n        const SpeechRecognitionTalk = window.SpeechRecognitionTalk || window.webkitSpeechRecognition;\\n        const recognitionTalk = new SpeechRecognitionTalk();\\n        recognitionTalk.onstart = function () {\\n            console.log(\\\"voice is activiated\\\");\\n        };\\n        recognitionTalk.onresult = function(event) {\\n            const current = event.resultIndex;\\n            const transcript = event.results[current][0].transcript;\\n            content.innerHTML = transcript;\\n            console.log(transcript);\\n        };\\n                \"\n                },\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                className: \"talk\",\n                onClick: function() {\n                    return recognitionTalk.start();\n                },\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: \"Talk\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                className: \"contentTalk\",\n                __source: {\n                    fileName: \"/Users/rachaelmathew/n8n-test/pages/VoiceComponent.js\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_c = Voice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voice);\nvar _c;\n$RefreshReg$(_c, \"Voice\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Wb2ljZUNvbXBvbmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsRUFBRTtBQUNGLEVBQVk7QUFDWixFQUFJO0FBQ0osRUFBRTtBQUNGLEVBQTBDO0FBQzFDLEVBQUU7QUFHbUM7QUFDOEI7QUFDaEM7QUFDSTtBQUNGO0FBQ0w7U0FDdkJPLEtBQUssR0FBRyxDQUFDO0lBRWQsRUFBNkI7SUFFN0IsTUFBTSx1RUFDR0MsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7aUZBQ3pCSCxvREFBTTtnQkFDTEksdUJBQXVCLEVBQUUsQ0FBQztvQkFDeEJDLE1BQU0sRUFBRyxDQWVUO2dCQUNBLENBQUM7Ozs7Ozs7O2lGQUVKQyxDQUFNO2dCQUFDSCxTQUFTLEVBQUMsQ0FBTTtnQkFBQ0ksT0FBTyxFQUFFLFFBQVE7b0JBQUZDLE1BQU0sQ0FBTkEsZUFBZSxDQUFDQyxLQUFLOzs7Ozs7OzswQkFBSSxDQUFJOztpRkFDcEVDLENBQUU7Z0JBQUNQLFNBQVMsRUFBQyxDQUFhOzs7Ozs7Ozs7O0FBR3ZDLENBQUM7S0E5QlFGLEtBQUs7QUFnQ2QsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Wb2ljZUNvbXBvbmVudC5qcz9mMWM2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vXG4vLyAgSGVhZGVyLmhcbi8vICBcbi8vXG4vLyAgQ3JlYXRlZCBieSBSYWNoYWVsIE1hdGhldyBvbiAxMi8yNS8yMS5cbi8vXG5cblxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgZXhwZXJpbWVudGFsU3R5bGVkIGFzIHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnXG5mdW5jdGlvbiBWb2ljZSgpIHtcbiAgICBcbiAgICAvL2FkZCB0aGUgbGlzdGVuZXIgdG8gdGhlIGJ0blxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8U2NyaXB0XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgIGNvbnN0IGJ0blRhbGsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFsaycpO1xuICAgICAgICBjb25zdCBjb250ZW50VGFsayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50VGFsaycpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgU3BlZWNoUmVjb2duaXRpb25UYWxrID0gd2luZG93LlNwZWVjaFJlY29nbml0aW9uVGFsayB8fCB3aW5kb3cud2Via2l0U3BlZWNoUmVjb2duaXRpb247XG4gICAgICAgIGNvbnN0IHJlY29nbml0aW9uVGFsayA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvblRhbGsoKTtcbiAgICAgICAgcmVjb2duaXRpb25UYWxrLm9uc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZvaWNlIGlzIGFjdGl2aWF0ZWRcIik7XG4gICAgICAgIH07XG4gICAgICAgIHJlY29nbml0aW9uVGFsay5vbnJlc3VsdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gZXZlbnQucmVzdWx0SW5kZXg7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2NyaXB0ID0gZXZlbnQucmVzdWx0c1tjdXJyZW50XVswXS50cmFuc2NyaXB0O1xuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSB0cmFuc2NyaXB0O1xuICAgICAgICAgICAgY29uc29sZS5sb2codHJhbnNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWxrXCIgb25DbGljaz17KCkgPT4gcmVjb2duaXRpb25UYWxrLnN0YXJ0KCl9PlRhbGs8L2J1dHRvbj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjb250ZW50VGFsa1wiPjwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZvaWNlO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJleHBlcmltZW50YWxTdHlsZWQiLCJzdHlsZWQiLCJCb3giLCJQYXBlciIsIkdyaWQiLCJTY3JpcHQiLCJWb2ljZSIsImRpdiIsImNsYXNzTmFtZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiYnV0dG9uIiwib25DbGljayIsInJlY29nbml0aW9uVGFsayIsInN0YXJ0IiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/VoiceComponent.js\n");

/***/ })

});