"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./src/store/car.slice.ts":
/*!********************************!*\
  !*** ./src/store/car.slice.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carSlice\": function() { return /* binding */ carSlice; },\n/* harmony export */   \"changeCar\": function() { return /* binding */ changeCar; },\n/* harmony export */   \"startLoading\": function() { return /* binding */ startLoading; },\n/* harmony export */   \"stopLoading\": function() { return /* binding */ stopLoading; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-client)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar initialState = {\n    car: {\n        brand: \"audi\",\n        model: \"r8\",\n        color: \"red\",\n        slogan: \"Being Ahead through Technology.\",\n        time0__100: 3.7,\n        engine: \"5.2L V10\",\n        gearbox: \"7 speed\"\n    },\n    theme: {\n        primaryColor: \"#982d35\",\n        secondaryColor: \"#876f6f\"\n    },\n    isLoading: true\n};\nvar carSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"car\",\n    initialState: initialState,\n    reducers: {\n        changeCar: function(state, action) {\n            state.car = action.payload.car;\n            state.theme = action.payload.theme;\n        },\n        startLoading: function(state) {\n            state.isLoading = true;\n        },\n        stopLoading: function(state) {\n            state.isLoading = false;\n        }\n    }\n});\nvar _carSlice_actions = carSlice.actions;\nvar changeCar = _carSlice_actions.changeCar, startLoading = _carSlice_actions.startLoading, stopLoading = _carSlice_actions.stopLoading;\n/* harmony default export */ __webpack_exports__[\"default\"] = (carSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3N0b3JlL2Nhci5zbGljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4RDtBQU85RCxJQUFNQyxlQUEwQjtJQUM5QkMsS0FBSztRQUNIQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxTQUFTO0lBQ1g7SUFDQUMsT0FBTztRQUNMQyxjQUFjO1FBQ2RDLGdCQUFnQjtJQUNsQjtJQUNBQyxXQUFXO0FBQ2I7QUFFTyxJQUFNQyxXQUFXZCw2REFBV0EsQ0FBQztJQUNsQ2UsTUFBTTtJQUNOZCxjQUFBQTtJQUNBZSxVQUFVO1FBQ1JDLFdBQVcsU0FBQ0MsT0FBT0M7WUFDakJELE1BQU1oQixNQUFNaUIsT0FBT0MsUUFBUWxCO1lBQzNCZ0IsTUFBTVIsUUFBUVMsT0FBT0MsUUFBUVY7UUFDL0I7UUFDQVcsY0FBYyxTQUFDSDtZQUNiQSxNQUFNTCxZQUFZO1FBQ3BCO1FBQ0FTLGFBQWEsU0FBQ0o7WUFDWkEsTUFBTUwsWUFBWTtRQUNwQjtJQUNGO0FBQ0YsR0FBRztJQUVxREMsb0JBQUFBLFNBQVNTO0FBQTFELElBQVFOLFlBQXlDSCxrQkFBekNHLFdBQVdJLGVBQThCUCxrQkFBOUJPLGNBQWNDLGNBQWdCUixrQkFBaEJRLFlBQWlDO0FBQ3pFLCtEQUFlUixTQUFTVSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9jYXIuc2xpY2UudHM/MmM3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBJQ2FyIH0gZnJvbSBcIi4uL3R5cGVzL2Nhci50eXBlc1wiO1xuXG5pbnRlcmZhY2UgSUNhclNsaWNlIGV4dGVuZHMgSUNhciB7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJQ2FyU2xpY2UgPSB7XG4gIGNhcjoge1xuICAgIGJyYW5kOiBcImF1ZGlcIixcbiAgICBtb2RlbDogXCJyOFwiLFxuICAgIGNvbG9yOiBcInJlZFwiLFxuICAgIHNsb2dhbjogXCJCZWluZyBBaGVhZCB0aHJvdWdoIFRlY2hub2xvZ3kuXCIsXG4gICAgdGltZTBfXzEwMDogMy43LFxuICAgIGVuZ2luZTogXCI1LjJMIFYxMFwiLFxuICAgIGdlYXJib3g6IFwiNyBzcGVlZFwiLFxuICB9LFxuICB0aGVtZToge1xuICAgIHByaW1hcnlDb2xvcjogXCIjOTgyZDM1XCIsXG4gICAgc2Vjb25kYXJ5Q29sb3I6IFwiIzg3NmY2ZlwiLFxuICB9LFxuICBpc0xvYWRpbmc6IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3QgY2FyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiY2FyXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBjaGFuZ2VDYXI6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPElDYXI+KSA9PiB7XG4gICAgICBzdGF0ZS5jYXIgPSBhY3Rpb24ucGF5bG9hZC5jYXI7XG4gICAgICBzdGF0ZS50aGVtZSA9IGFjdGlvbi5wYXlsb2FkLnRoZW1lO1xuICAgIH0sXG4gICAgc3RhcnRMb2FkaW5nOiAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgfSxcbiAgICBzdG9wTG9hZGluZzogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IGNoYW5nZUNhciwgc3RhcnRMb2FkaW5nLCBzdG9wTG9hZGluZyB9ID0gY2FyU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBkZWZhdWx0IGNhclNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJjYXIiLCJicmFuZCIsIm1vZGVsIiwiY29sb3IiLCJzbG9nYW4iLCJ0aW1lMF9fMTAwIiwiZW5naW5lIiwiZ2VhcmJveCIsInRoZW1lIiwicHJpbWFyeUNvbG9yIiwic2Vjb25kYXJ5Q29sb3IiLCJpc0xvYWRpbmciLCJjYXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImNoYW5nZUNhciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInN0YXJ0TG9hZGluZyIsInN0b3BMb2FkaW5nIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/store/car.slice.ts\n"));

/***/ })

});