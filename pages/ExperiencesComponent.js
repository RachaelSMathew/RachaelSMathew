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
import isUndefined from 'lodash/isUndefined';

const Experiences = () => {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

        return (
                
                <React.Fragment>

                
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5,duration:1.5}}>
                
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16}}>
                
                <Grid item xs={4} sm={2} md={2} lg={2}>
                <motion.div className = "hideExperiencesPhone" whileHover={{scale:1.1}} transition={{type: 'spring', stiffness: 800}}><h1>Experiences</h1></motion.div>
                </Grid>
                <Grid item xs={4} sm={6} md={4} lg={5}>
                <div className="hideCubePhone"><Cube3d/></div>
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={9}>
                
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




