//
//  Header.h
//  
//
//  Created by Rachael Mathew on 12/25/21.
//


import {Link} from 'react-router-dom'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Script from 'next/script'
import {motion} from 'framer-motion'
function Voice() {
    
    //add the listener to the btn
    
    return (
            <div className="container">
            <Script
              dangerouslySetInnerHTML={{
                __html: `
                    var contentTalk = document.getElementsByClassName('contentTalk')[0];
                    var answerTalk = document.getElementsByClassName('answerTalk')[0];
                    var SpeechRecognitionTalk = window.SpeechRecognitionTalk || window.webkitSpeechRecognition;
        var recognitionTalk = new SpeechRecognitionTalk();
        recognitionTalk.onstart = function () {
                    console.log("voice is activiated");
                    contentTalk.innerHTML = "";
                    answerTalk.innerHTML = "";
                };
                recognitionTalk.onresult = function(event) {
                    const current = event.resultIndex;
                    const transcript = event.results[current][0].transcript;
                    contentTalk.innerHTML = transcript;
                    console.log(transcript);
                    if(transcript.includes("how old is Rachel")) {
                        setTimeout(function(){
                            answerTalk.style.color = "black";
                            answerTalk.innerHTML = "She is 21 years old, but doesn't drink :)";
                        },5000);
                    }
        if(transcript.includes("how tall is Rachel")) {
        setTimeout(function(){
            answerTalk.style.color = "black";
            answerTalk.innerHTML = "She's 7'12 don't ask again.";

        },5000);
        }
        if(transcript.includes("how is Rachel")) {
            setTimeout(function(){
                answerTalk.style.color = "black";
                answerTalk.innerHTML = "Terrible now that you're here.";
            },5000);
        }
                };

                `,
    }}
  />
            
            <motion.button className="talk" onClick={() => recognitionTalk.start()} whileHover={{scale:1.1,boxShadow: "0px 0px 8px rgb(75,0,130)",}}><h1>Press Me to Ask a Question About Rachael</h1></motion.button>
            <div className="contentTalk"></div>
            <div className="answerTalk"></div>
            </div>
    )
}

export default Voice;
