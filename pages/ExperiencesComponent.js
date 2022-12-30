//
//  ExperiencesComponent.h
//  Created by Rachael Mathew on 12/25/21.
//
import React, { useRef, Suspense } from 'react'
import Script from 'next/script'
import { useState, useEffect } from "react";
//using curly brackets, within react-router-dom multiple modules you can pull from, no defualt, need to be specific
import Grid from '@mui/material/Grid';
import {motion} from 'framer-motion'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import CubeThreeFiber from './CubeThreeFiber';
import Image from 'next/image'
import PlutoCYE from '../images/PlutoCYE.png';
import JupiteriRobot from '../images/JupiteriRobot.png';
import UranusUCA from '../images/UranusUCA.png';
import NasaNuance from '../images/NasaNuance.png';
import Modal_CYE from './Modal_CYE';
import Modal_iRobot from './Modal_iRobot';
import Modal_Nuance from './Modal_Nuance';
import Modal_UCA from './Modal_UCA';
const Experiences = () => {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    const [openModalCYE, setOpenModalCYE] = useState(false);
    const [openModaliRobot, setOpenModaliRobot] = useState(false);
    const [openModalNuance, setOpenModalNuance] = useState(false);
    const [openModalUCA, setOpenModalUCA] = useState(false);
	
        return (
                
                <React.Fragment>
                
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5,duration:1.5}}>
                <div className="separator"></div>
	            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16}}>
	                <Grid className="containerExperiences" item xs={4} sm={4} md={3} lg={4}>
                        <Image class="imageExperiences" src={JupiteriRobot}  width={200} height={200} onClick={() => setOpenModaliRobot(true)} />
                            <Modal_iRobot open={openModaliRobot} onClose={() => setOpenModaliRobot(false)} />
                            <div class="textExperiences">iRobot</div>
                    </Grid>
                    <Grid className="containerExperiences" item xs={4} sm={4} md={3} lg={4}>
                        <Image className="imageExperiences" src={NasaNuance}  width={200} height={200} onClick={() => setOpenModalNuance(true)} />
                            <Modal_Nuance open={openModalNuance} onClose={() => setOpenModalNuance(false)} />
                            <div class="textExperiences">Nuance</div>
                    </Grid>
                    <Grid className="containerExperiences" item xs={4} sm={4} md={3} lg={4}>
                        <Image className="imageExperiences" src={PlutoCYE}  width={200} height={200} onClick={() => setOpenModalCYE(true)} />
                            <Modal_CYE open={openModalCYE} onClose={() => setOpenModalCYE(false)} />
                            <div class="textExperiences">CYE</div>
                    </Grid>
		            <Grid className="containerExperiences" item xs={4} sm={4} md={3} lg={4}>
                        <Image className="imageExperiences" src={UranusUCA}  width={200} height={200} onClick={() => setOpenModalUCA(true)} />
                            <Modal_UCA open={openModalUCA} onClose={() => setOpenModalUCA(false)} />
                            <div class="textExperiences">UCA</div>
                    </Grid>
                </Grid>
                </motion.div>
                </React.Fragment>
                
        );
};

export default Experiences;
