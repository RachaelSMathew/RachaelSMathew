"use strict";
exports.id = 948;
exports.ids = [948];
exports.modules = {

/***/ 5948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8510);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var _VoiceComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5073);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_VoiceComponent__WEBPACK_IMPORTED_MODULE_8__]);
_VoiceComponent__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];












let theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.createTheme)();
theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.responsiveFontSizes)(theme);
function setHidden() {
    console.log(document.body.style.overflow);
    if (document.body.style.overflow !== "hidden") {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "scroll";
    }
}
;
function Header({ allPostsData  }) {
    const [_document, set_document] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const { 0: folder , 1: setFolder  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    if (false) { var links, navLinks; }
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';
        var that = this;
        var delta = 300 - Math.random() * 100;
        if (this.isDeleting) {
            delta /= 2;
        }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function() {
            that.tick();
        }, delta);
    };
    if (false) {}
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_9___default()), {
                dangerouslySetInnerHTML: {
                    __html: `
        function myFunction(x) {
          if (x.matches) { // If media query matches
        document.getElementsByClassName("txt-rotate")[0].style.display = "none"

          } else {
        document.getElementsByClassName("txt-rotate")[0].style.display = "inline"

          }
        }

        var x = window.matchMedia("(max-width: 700px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state changes
        `
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "nav-links",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VoiceComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "topCornerIcons",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: folder ? "happy folderSize" : "sad folderSize",
                        onClick: ()=>{
                            setFolder((prevMode)=>!prevMode
                            );
                            navLinks.classList.toggle("open");
                            links.forEach((link)=>{
                                link.classList.toggle("fade");
                            });
                            setHidden();
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        href: "https://docs.google.com/document/d/1fFVGajYntOaqsGKChvqbJ0vcTptNGk5hlVAgxbm6_SE/edit?usp=sharing",
                        download: "Rachael's Resume",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "downloadIcon"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
                theme: theme,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                    variant: "h5",
                    align: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mainFont",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                children: [
                                    "Rachael Mathew is a ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        id: "text-rotate-id",
                                        className: "txt-rotate",
                                        "data-period": "2000",
                                        "data-rotate": "[ \"coder.\", \"writer.\", \"singer.\", \"chai enthusiast.\", \"person.\" ]"
                                    })
                                ]
                            })
                        }),
                        " "
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
                theme: theme,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                    variant: "h2",
                    className: "myDIV",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "some-id"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hide"
            })
        ]
    }));
};

});

/***/ }),

/***/ 8510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// pages/_app.js

function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    }));
};


/***/ })

};
;