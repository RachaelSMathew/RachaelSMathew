import React from "react";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Typography, ThemeProvider } from '@mui/material';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Footer = () => (
  <div className="footer">
    <div className="footer-main">
    <ul className="footer-links">
        <li className="mouse-out"><i className="fab fa-instagram"><span style={{ marginLeft: "10px" }}><ThemeProvider theme={theme}>
                      <Typography variant="h5" align="center"><div className="footerFont"> instagram </div> </Typography>
                    </ThemeProvider></span></i></li>
        <li className="mouse-out"><i className="fab fa-facebook"><span style={{ marginLeft: "10px" }}><ThemeProvider theme={theme}>
                      <Typography variant="h5" align="center"><div className="footerFont"> facebook </div> </Typography>
                    </ThemeProvider></span></i></li>
        <li className="mouse-out"><i className="fab fa-linkedin"><span style={{ marginLeft: "10px" }}><ThemeProvider theme={theme}>
                      <Typography variant="h5" align="center"><div className="footerFont"> linkedin </div> </Typography>
                    </ThemeProvider></span></i></li>
        <li className="mouse-out"><i className="fas fa-envelope"><span style={{ marginLeft: "10px" }}><ThemeProvider theme={theme}>
                        <Typography variant="h5" align="center"><div className="footerFont"> email </div> </Typography>
                      </ThemeProvider></span></i></li>
    </ul>
    </div>
  </div>
);

export default Footer;
