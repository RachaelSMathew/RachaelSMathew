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
import Image from 'next/image'
import blinkingRec from '../images/recordingButton.gif';

function Voice() {
    
    //add the listener to the btn
    
    return (
            <div className="container">
            <Script
              dangerouslySetInnerHTML={{
                __html: `
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
                    
                };
                recognitionTalk.onresult = function(event) {
                    blinkingRecord.style.display = "none";
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
                answerTalk.innerHTML = "An idiot, who's trying her best to code and survive";
            },1000);
        }
        
        if(transcript.includes("how tall is Rachel")) {
        setTimeout(function(){
            answerTalk.style.color = "black";
            answerTalk.innerHTML = "She's 7'12 don't ask again.";

        },1000);
        }
        if(transcript.includes("how is Rachel")) {
            setTimeout(function(){
                answerTalk.style.color = "black";
                answerTalk.innerHTML = "Terrible now that you're here.";
            },1000);
        }
                };

                `,
    }}
  />

            <motion.button className="talk" onClick={() => recognitionTalk.start()} whileHover={{scale:1.1,boxShadow: "0px 0px 8px rgb(75,0,130)",}}><h1>Press Me to Ask a Question About Rachael</h1></motion.button>
            <div className="blinkingRecord">
            <Image src={blinkingRec}  width={100}
            height={75}/>
          
            </div>
            <div className="contentTalk"></div>
            <div className="answerTalk"></div>
            
            </div>
    )
}

export default Voice;
