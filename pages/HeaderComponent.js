import React, {
    Fragment
} from "react";
import {
    useState
} from "react";
import {
    useEffect,
    useRef
} from "react";
import './_app.js';
import {
    Link
} from 'react-router-dom'
import {
    createTheme,
    responsiveFontSizes
} from '@mui/material/styles';
import {
    Typography,
    ThemeProvider
} from '@mui/material';
import {
    useRouter
} from 'next/router'
import Links from 'next/link'
import Voice from './VoiceComponent'
import Script from 'next/script'
import {
    motion
} from 'framer-motion';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function setHidden() {
    console.log(document.body.style.overflow);
    if (document.body.style.overflow !== "hidden") {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "scroll";
    }
};

export default function Header({
    allPostsData
}) {

    const [_document, set_document] = React.useState(null)



    const [folder, setFolder] = useState(false);
    if (typeof window !== "undefined") {
        var navLinks = document.querySelector('.nav-links');
        var links = document.querySelectorAll(".nav-links li");

        document.addEventListener("DOMContentLoaded", function() {
            navLinks = document.querySelector('.nav-links');
            links = document.querySelectorAll(".nav-links li");

        });
    }

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
    if (typeof window !== "undefined") {
        window.onload = function() {
            var elements = document.getElementsByClassName('txt-rotate');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-rotate');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtRotate(elements[i], JSON.parse(toRotate), period);
                }
            }
        };
    }

    return ( <
        React.Fragment >
        <
        motion.div initial = {
            {
                opacity: 0
            }
        }
        animate = {
            {
                opacity: 1
            }
        }
        transition = {
            {
                delay: 1.5,
                duration: 1.5
            }
        } >
        <
        Script dangerouslySetInnerHTML = {
            {
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
        `,
            }
        }
        /> <
        nav >
        <
        ul className = "nav-links" >
        <
        li > < Voice / > < /li> <
        /ul> <
        /nav>

        <
        div className = "topCornerIcons" >
        <
        a download = "Rachael's Resume"
        href = "/Rachael_Mathew_Resume_2022.pdf" >
        <
        img className = "downloadIcon" / >
        <
        /a> <
        /div>

        <
        ThemeProvider theme = {
            theme
        } >
        <
        Typography variant = "h5"
        align = "center" > < div className = "mainFont" > < h1 > Rachael Mathew is a < span id = "text-rotate-id"
        className = "txt-rotate"
        data - period = "2000"
        data - rotate = '[ "coder.", "writer.", "singer.", "chai enthusiast.", "person." ]' > < /span> <
        /h1></div > < /Typography> <
        /ThemeProvider>


        <
        ThemeProvider theme = {
            theme
        } >
        <
        Typography variant = "h2"
        className = "myDIV" > < div id = "some-id" > < /div></Typography >
        <
        /ThemeProvider>

        <
        div className = "hide" > < /div> <
        /motion.div> <
        /React.Fragment>


    )
}
