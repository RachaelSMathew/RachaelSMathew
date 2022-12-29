//
//  MainComponent.h
//  
//
//  Created by Rachael Mathew on 12/25/21.
//

//single page: header and footer say consistant for all pages and middle part changes
import React from 'react'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import { useState, useEffect } from "react";
//using curly brackets, within react-router-dom multiple modules you can pull from, no defualt, need to be specific
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {motion} from 'framer-motion'
import SkillsTextImage from '../images/SkillsTextImage.png';
import Java from '../images/icons-java.png';
import Swift from '../images/icons-swift.png';
import YAML from '../images/icons-yaml.png';
import CSS from '../images/icons-css.png';
import HTML5 from '../images/icons-html5.png';
import Azure from '../images/icons-azure.png';
import SQL from '../images/icons-sql.png';
import Mapbox from '../images/icons-mapbox.png';
import AWSS3 from '../images/aws-s3-icon.svg';
import AWSCognito from '../images/icons-aws-cognito.png';
import Jenkins from '../images/icons-jenkins.png';
import JavaScript from '../images/icons-javascript.png';
import Image from 'next/image'

const Skills = () => {
   
        return (
                <React.Fragment>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5,duration:1.5}}>
                <div className="separator"></div>
                <Box sx={{ flexGrow: 1 }} className="flexBehindFooter">
                <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 9, md: 12 }}>
                <Grid item xs={2} sm={3} md={2}>
                <motion.div whileHover={{scale:1.1}} transition={{type: 'spring', stiffness: 800}}>
                <Image src={SkillsTextImage}  width={100}
                height={100}/>
                </motion.div>
                </Grid>
                <Grid item xs={2} sm={3} md={2}>
                <motion.div whileHover={{scale:1.1}} transition={{type: 'spring', stiffness: 800}}>
                <Image src={Java}  width={100}
                height={100}/>
                </motion.div>
                </Grid>
                <Grid item xs={2} sm={3} md={2}>
                <motion.div whileHover={{scale:1.1}} transition={{type: 'spring', stiffness: 800}}>
                <Image src={JavaScript}  width={100}
                height={100}/>
                </motion.div>
                </Grid>
                <Grid item xs={2} sm={3} md={2}>
                <motion.div whileHover={{scale:1.1}} transition={{type: 'spring', stiffness: 800}}>
                <Image src={Swift}  width={100}
                height={100}/>
                </motion.div>
                </Grid>
                <Grid item xs={2} sm={3} md={2}>
                <motion.div whileHover={{scale:1.1}} transition={{type: 'spring', stiffness: 800}}>
                <Image src={CSS}  width={100}
                height={100}/>
                </motion.div>
                </Grid>
                <Grid item xs={2} sm={3} md={2}>
                <motion.div whileHover={{scale:1.1}} transition={{type: 'spring', stiffness: 800}}>
                <Image src={SQL}  width={100}
                height={100}/>
                </motion.div>
                </Grid>
                <Grid item xs={2} sm={3} md={2}>
                <motion.div whileHover={{scale:1.1}} transition={{type: 'spring', stiffness: 800}}>
                <Image src={HTML5}  width={100}
                height={100}/>
                </motion.div>
                </Grid>
                <Grid item xs={2} sm={3} md={2}>
                <motion.div whileHover={{scale:1.1}} transition={{type: 'spring', stiffness: 800}}>
                <Image src={AWSCognito}  width={100}
                height={100}/>
                </motion.div>
                </Grid>
                <Grid item xs={2} sm={3} md={2}>
                <motion.div whileHover={{scale:1.1}} transition={{type: 'spring', stiffness: 800}}>
                <Image src={AWSS3}  width={100}
                height={100}/>
                </motion.div>
                </Grid>
                <Grid item xs={2} sm={3} md={2}>
                <motion.div whileHover={{scale:1.1}} transition={{type: 'spring', stiffness: 800}}>
                <Image src={YAML}  width={100}
                height={100}/>
                </motion.div>
                </Grid>
                <Grid item xs={2} sm={3} md={2}>
                <motion.div whileHover={{scale:1.1}} transition={{type: 'spring', stiffness: 800}}>
                <Image src={Azure}  width={100}
                height={100}/>
                </motion.div>
                </Grid>
                <Grid item xs={2} sm={3} md={2}>
                <motion.div whileHover={{scale:1.1}} transition={{type: 'spring', stiffness: 800}}>
                <Image src={Jenkins}  width={100}
                height={100}/>
                </motion.div>
                </Grid>
                </Grid>
              </Box>
                </motion.div>
                </React.Fragment>
             
                
        )
}

export default Skills;




