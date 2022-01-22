"use strict";
exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 1169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/recordingButton.dffb60a5.gif","height":820,"width":1053});

/***/ }),

/***/ 5073:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1598);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var _images_recordingButton_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1169);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_7__]);
framer_motion__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

//
//  Header.h
//  
//
//  Created by Rachael Mathew on 12/25/21.
//









function Voice() {
    //add the listener to the btn
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_6___default()), {
                dangerouslySetInnerHTML: {
                    __html: `
                    var textVoice = ["Press to ask Rachael a Question", "How tall is Rachael", "How is Rachael", "Who is Rachael"];
                        var counterVoice = 0;
                        var voiceText = document.getElementsByClassName("changeVoiceText")[0];
                        setInterval(() => {
                                voiceText.innerHTML = textVoice[counterVoice];
                                counterVoice++;
                                if (counterVoice >= textVoice.length) {
                                  counterVoice = 0;
                                }

                    }, 3000);
        
                    var blinkingRecord = document.getElementsByClassName('blinkingRecord')[0];
                    blinkingRecord.style.display = "none";
                    var buttonTalk = document.getElementsByClassName('talk')[0];
                    var contentTalk = document.getElementsByClassName('contentTalk')[0];
                    var answerTalk = document.getElementsByClassName('answerTalk')[0];
                    var SpeechRecognitionTalk = window.SpeechRecognitionTalk || window.webkitSpeechRecognition;
                    var recognitionTalk = new SpeechRecognitionTalk();
        recognitionTalk.onstart = function () {
        blinkingRecord.style.display = "inline-block";
        buttonTalk.style.display = "none";
                    console.log("voice is activiated");
                    contentTalk.innerHTML = "";
                    answerTalk.innerHTML = "";
                    buttonTalk.style.background = "grey";
                    document.body.style.pointerEvents = "none";
                    
                };
                recognitionTalk.onresult = function(event) {
                    blinkingRecord.style.display = "none";
                    document.body.style.pointerEvents = "auto";
                    buttonTalk.style.display = "inline-block";
                    buttonTalk.style.background = "white";
                    const current = event.resultIndex;
                    const transcript = event.results[current][0].transcript;
                    contentTalk.innerHTML = transcript;
                    console.log(transcript);
                    if(transcript.includes("how old is Rachel")) {
                        setTimeout(function(){
                            answerTalk.style.color = "black";
                            answerTalk.innerHTML = "She is 21 years old, but doesn't drink :)";
                        },1000);
                    }
        if(transcript.includes("who is Rachel")) {
            setTimeout(function(){
                answerTalk.style.color = "black";
                answerTalk.innerHTML = "An ambitious girl who's trying her best at life and happiness";
            },1000);
        }
        
        if(transcript.includes("how tall is Rachel")) {
        setTimeout(function(){
            answerTalk.style.color = "black";
            answerTalk.innerHTML = "She's 7'12";

        },1000);
        }
        if(transcript.includes("how is Rachel")) {
            setTimeout(function(){
                answerTalk.style.color = "black";
                answerTalk.innerHTML = "Amazing now that you're here!";
            },1000);
        }
        else {
            setTimeout(function(){
                answerTalk.style.color = "black";
                answerTalk.innerHTML = "Oops we don't have an answer for that yet!";
            },1000);
        }
                };

                `
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.button, {
                className: "talk",
                onClick: ()=>recognitionTalk.start()
                ,
                whileHover: {
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(75,0,130)"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "changeVoiceText",
                    children: "Press to ask Rachael a Question"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "blinkingRecord",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    src: _images_recordingButton_gif__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                    width: 100,
                    height: 75
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "contentTalk"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "answerTalk"
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Voice);

});

/***/ })

};
;