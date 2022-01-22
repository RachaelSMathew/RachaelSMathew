//
//  MainComponent.h
//  
//
//  Created by Rachael Mathew on 12/25/21.
//

//single page: header and footer say consistant for all pages and middle part changes
import React from 'react'
import Script from 'next/script'

import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import { useState, useEffect } from "react";
//using curly brackets, within react-router-dom multiple modules you can pull from, no defualt, need to be specific
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {motion} from 'framer-motion'
import Cube3d from './Cube'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Typography, ThemeProvider } from '@mui/material';

const Experiences = () => {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    
    function onClickToggleCube() {
        
        if(showCube.checked) {
            cube.style.display = "inline"
            experiencesClass.style.display = "none"
        } else {
            cube.style.display = "none"
            experiencesClass.style.display = "flex"
        }
     };
    
        return (
                
                <React.Fragment>
                <Script
                  dangerouslySetInnerHTML={{
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
            `,
        }}
      />
                
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5,duration:1.5}}>
               
                <motion.div whileHover={{scale:1.1}} transition={{type: 'spring', stiffness: 800}}>
                <div className="separator">
                <div className="line"></div>
                <h1 className="ExperiencesTitleStyle">Experiences</h1>
                <div className="line"></div>
                </div>
                
                </motion.div>
                
                <div class="radio-list">
                  <label class="radio" htmlFor="radio__toggle2">
                <input class="radio__toggle" id="radio__toggle2" type="checkbox" onClick={onClickToggleCube}/>
                    <span class="radio__span">
                      Show Cube
                    </span>
                  </label>
                  
                </div>
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16}}>
                <Grid item xs={4} sm={4} md={6} lg={8}>
                <div className="hideCubePhone"><Cube3d/></div>
                </Grid>
                <Grid item xs={4} sm={4} md={6} lg={8}>
                <ThemeProvider theme={theme}>
                <Typography variant="h4" align="left" sx={{ fontWeight: 'bold' }}><div className="changeTextExperiences"></div>
                </Typography>
                </ThemeProvider>
                </Grid>
                </Grid>
                </Box>
            
                </motion.div>
                </React.Fragment>
                
        );
}

export default Experiences;




