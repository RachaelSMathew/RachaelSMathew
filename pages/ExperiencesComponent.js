//
//  ExperiencesComponent.h
//  
//
//  Created by Rachael Mathew on 12/25/21.
//

import React from 'react'
import Script from 'next/script'
import Tabs from './Tabs'
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
    
    
        return (
                
                <React.Fragment>
                <Script
                  dangerouslySetInnerHTML={{
                    __html: `var text = ["Created automated Jenkins pipelines using EC2 instances and executed tasks in a Docker container using an ECR image", "Worked with Azure DevOps, using YAML pipelines, to create Xcode simulator builds, run snapshot tests. Created Veracode Archive and uploaded the scan, created a streamlined YAML pipeline with multiple sub-tasks using parallel jobs and templates for clean, high-efficiency code.", "Created a calendar, which could have events created and added on, as a part of the CYE iPad app. Sending iOS logs to AWS Cloudwatch using AWS Soto Swift Package Manager in Xcode", "Graded students work, tutored students one-on-one, Attended weekly CS 121 lab sessions to help students"];
                            var companyName = ["iRobot", "Nuance", "Center for Youth Engagement", "Undergraduate Course Assistant"];
                            var counter = 0;
                            var experiencesClass = document.getElementsByClassName("changeTextExperiences")[0];
			    var companiesClass = document.getElementsByClassName("changeTextCompany")[0];
                            
                            setInterval(() => {
                                    experiencesClass.classList.add('hideExperiences');
                                    companiesClass.classList.add('hideExperiences');
                                setTimeout(function (event) {
                                    experiencesClass.innerHTML = text[counter];
                                    experiencesClass.classList.remove('hideExperiences');
				                    
                                    companiesClass.innerHTML = companyName[counter];
                                    companiesClass.classList.remove('hideExperiences');
                                    
                                    counter++;
                                    if (counter >= text.length) {
                                        counter = 0;
                                    }
                                }, 500);

                            }, 5000);
            `,
        }}
      />
                
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5,duration:1.5}}>
                <div className="separator"></div>
	        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16}}>
            	<Grid item xs={4} sm={4} md={7} lg={12}><Tabs/></Grid>
                <Grid item xs={4} sm={4} md={5} lg={4}><Cube3d/></Grid>
                </Grid>
                </motion.div>
                </React.Fragment>
                
        );
}

export default Experiences;
