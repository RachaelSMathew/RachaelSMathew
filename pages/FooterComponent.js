import React from "react";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Typography, ThemeProvider } from '@mui/material';
import {motion} from 'framer-motion';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Footer = () => (
  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:5.5,duration:1.5}}>
  <div className="footer">
    <div className="footer-main">
    <ul className="footer-links">
        <li className="mouse-out"><a href="https://www.instagram.com/rachaelsmathew/"><i className="fab fa-instagram"><span style={{ marginLeft: "10px" }}><ThemeProvider theme={theme}>
                      <Typography variant="h5" align="center"><div className="footerFont"> instagram </div> </Typography>
                    </ThemeProvider></span></i></a></li>
                      
        <li className="mouse-out"><a href="https://www.facebook.com/abby.sherman.14268/"><i className="fab fa-facebook"><span style={{ marginLeft: "10px" }}><ThemeProvider theme={theme}>
                      <Typography variant="h5" align="center"><div className="footerFont"> facebook </div> </Typography>
                    </ThemeProvider></span></i></a></li>
                      
        <li className="mouse-out"><a href="https://www.linkedin.com/in/rachael-mathew-227a18138/"><i className="fab fa-linkedin"><span style={{ marginLeft: "10px" }}><ThemeProvider theme={theme}>
                      <Typography variant="h5" align="center"><div className="footerFont"> linkedin </div> </Typography>
                    </ThemeProvider></span></i></a></li>
                      
        <li className="mouse-out"><a href="mailto:rmathew@umass.edu"><i className="fas fa-envelope"><span style={{ marginLeft: "10px" }}><ThemeProvider theme={theme}>
                        <Typography variant="h5" align="center"><div className="footerFont"> email </div> </Typography>
                      </ThemeProvider></span></i></a></li>
    </ul>
    </div>
  </div>
  </motion.div>
);

export default Footer;
