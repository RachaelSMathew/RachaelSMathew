"use strict";
exports.id = 242;
exports.ids = [242];
exports.modules = {

/***/ 242:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1598);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6197);
/* harmony import */ var _Cube__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7247);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_8__]);
framer_motion__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

//
//  MainComponent.h
//  
//
//  Created by Rachael Mathew on 12/25/21.
//
//single page: header and footer say consistant for all pages and middle part changes




//using curly brackets, within react-router-dom multiple modules you can pull from, no defualt, need to be specific








const Experiences = ()=>{
    let theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.createTheme)();
    theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.responsiveFontSizes)(theme);
    function onClickToggleCube() {
        if (showCube.checked) {
            cube.style.display = "inline";
            experiencesClass.style.display = "none";
        } else {
            cube.style.display = "none";
            experiencesClass.style.display = "flex";
        }
    }
    ;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                dangerouslySetInnerHTML: {
                    __html: `var text = ["Worked with Azure DevOps, using YAML pipelines, to create Xcode simulator builds, run snapshot tests. Created Veracode Archive and uploaded the scan, created a streamlined YAML pipeline with multiple sub-tasks using parallel jobs and templates for clean, high-efficiency code.", "Created a calendar, which could have events created and added on, as a part of the CYE iPad app. Sending iOS logs to AWS Cloudwatch using AWS Soto Swift Package Manager in Xcode", "Graded students work, tutored students one-on-one, Attended weekly CS 121 lab sessions to help students"];
            
                            var showCube = document.getElementsByClassName("radio__toggle")[0];
                            var toggle = document.getElementsByClassName("radio-list")[0];
                            var cube = document.getElementsByClassName("hideCubePhone")[0];
                            var counter = 0;
                            var experiencesClass = document.getElementsByClassName("changeTextExperiences")[0];
                            
                            setInterval(() => {
                                    experiencesClass.classList.add('hideExperiences');
                                setTimeout(function (event) {
                                    experiencesClass.innerHTML = text[counter];
                                    experiencesClass.classList.remove('hideExperiences');
                                    counter++;
                                    if (counter >= text.length) {
                                        counter = 0;
                                    }
                                }, 500);

                            }, 5000);
            setInterval(() => {
                if(window.innerWidth >= "600") {
                    cube.style.display = "inline"
                    experiencesClass.style.display = "flex"
                    toggle.style.display = "none"
         
                    
                }
                if(window.innerWidth < "600") {
                toggle.style.display = "flex"
     
                    if(showCube.checked) {
                        cube.style.display = "inline"
                        experiencesClass.style.display = "none"
                    } else {
                        cube.style.display = "none"
                        experiencesClass.style.display = "flex"
                    }
                }
            }, 500)
            `
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1.5,
                    duration: 1.5
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                        whileHover: {
                            scale: 1.1
                        },
                        transition: {
                            type: 'spring',
                            stiffness: 800
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "separator",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "line"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "ExperiencesTitleStyle",
                                    children: "Experiences"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "line"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        class: "radio-list",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            class: "radio",
                            htmlFor: "radio__toggle2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    class: "radio__toggle",
                                    id: "radio__toggle2",
                                    type: "checkbox",
                                    onClick: onClickToggleCube
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    class: "radio__span",
                                    children: "Show Cube"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                        sx: {
                            flexGrow: 1
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {
                            container: true,
                            spacing: {
                                xs: 2,
                                md: 3
                            },
                            columns: {
                                xs: 4,
                                sm: 8,
                                md: 12,
                                lg: 16
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    item: true,
                                    xs: 4,
                                    sm: 4,
                                    md: 6,
                                    lg: 8,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "hideCubePhone",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cube__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    item: true,
                                    xs: 4,
                                    sm: 4,
                                    md: 6,
                                    lg: 8,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider, {
                                        theme: theme,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {
                                            variant: "h4",
                                            align: "left",
                                            sx: {
                                                fontWeight: 'bold'
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "changeTextExperiences"
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experiences);

});

/***/ })

};
;