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
import {motion} from 'framer-motion';
import myPic from '../images/img.png';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Typography, ThemeProvider } from '@mui/material';
import Image from 'next/image'


let theme = createTheme();
theme = responsiveFontSizes(theme);

function About({data}) {

    return (
            <React.Fragment>
            <div className="separator">
            <div className="line"></div>
            <h1 style={{color: 'mediumpurple'}}>About</h1>
            <div className="line"></div>
            </div>
            
            <Script style={{whiteSpace: 'pre-wrap'}} dangerouslySetInnerHTML={{ __html: `
               
                var aboutMe = document.getElementsByClassName("AboutMe")[0];
        aboutMe.innerHTML = "public class Rachael {<br>&emsp;int year = 3;<br>&emsp;String major = 'Computer Science';<br>&emsp;String[] speciality = ['web development', 'mobile development'];<br>&emsp;boolean lovesTaylorSwift = true;<br>}"

                   
                
                        `
            }}
            />
            
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5,duration:1.5}}>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={8} md={8}>
            <ul className="nav-pills">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="pill">about.java</a>
              </li>
            </ul>
            
            <div className="AboutMePadding">
            
            <ThemeProvider theme={theme}>
            <Typography variant="h4">
            <div className="AboutMe" contentEditable="true" suppressContentEditableWarning={true}>
            "Hi, I'm Rachael. Welcome to my site! I'm a third year CS Student at UMass Amherst. I love advancing my skills in mobile and web devlopment and write and listen to T-Swift in my free time!"
            </div>
            </Typography>
            </ThemeProvider>
            
            </div>
            
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
            <Image src={myPic}  width={data[0].width} className="zIndexmyPic"
            height={data[0].width}/>

            </Grid>
            
               
              </Grid>
            </Box>
            
            
            </motion.div>
            
            
            </React.Fragment>
    )
}

export default About;
