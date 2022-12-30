//
//  Header.h
//  
//
//  Created by Rachael Mathew on 12/25/21.
//

import React from 'react'
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import Script from 'next/script'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import myPic from '../images/imgGif.gif';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Typography, ThemeProvider } from '@mui/material';
import Image from 'next/image'
import CubeThreeFiber from './CubeThreeFiber'
import {motion} from 'framer-motion';
let theme = createTheme();
theme = responsiveFontSizes(theme);

function About() {

    return (
            <React.Fragment>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5,duration:1.5}}>
            <div className="separator"></div>
            <Script style={{whiteSpace: 'pre-wrap'}} dangerouslySetInnerHTML={{ __html: `
                var aboutMe = document.getElementsByClassName("AboutMe")[0];
                aboutMe.innerHTML = "<span style='color: violet; font-family: Inconsolata,serif;'>public class</span> Rachael {<br>&emsp;<span style='color: violet; font-family: Inconsolata,serif;'>private int</span> year = 4;<br>&emsp;String major = 'Computer Science';<br>&emsp;String[] specialty = ['web development', 'mobile development'];<br>&emsp;<span style='color: violet; font-family: Inconsolata,serif;'>private boolean</span> madeWithReact&Love = true;<br>}"        `
            }}
            />
            

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16}}>
                <Grid item xs={4} sm={8} md={8} lg={11}>
            <ul className="nav-pills">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="pill">about.java</a>
              </li>
            </ul>
            
            <div className="AboutMePadding">
            
            <ThemeProvider theme={theme}>
            <Typography variant="h4">
            <div className="AboutMe" contentEditable="true" suppressContentEditableWarning={true}>
            </div>
            </Typography>
            </ThemeProvider>
            
            </div>
            
            </Grid>
            <Grid item xs={4} sm={3} md={4} lg={5} display={{ xs: "none", sm: "none", md: "block", lg: "block" }}>
                <CubeThreeFiber />
            </Grid>
            </Grid>
            </Box>
            
            
            </motion.div>
            
            </React.Fragment>
    )
}

export default About;
