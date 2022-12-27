import * as THREE from "three";
import Cube from 'react-3d-cube';
import React from 'react'
import { useEffect, useRef } from "react";
import Nuance from "../images/Nuance-icon-2.png";
import iRobot from "../images/iRobot-icon.png";
import CYE from "../images/CYE-icon-2.png";
import FP from "../images/FP-icon-2.png";
import Neb from "../images/Neb-icon.png";
import Neb2 from "../images/Neb2-icon.png";
import Image from 'next/image'

const Cube3d = () => {
        return (
                <React.Fragment>
                <div>
                       <center>
                           <div
                           style={{
                               width: 200,
                               height: 200,
                               cursor: 'grab'
                            }}
                           >
                           <Cube size={200} index="back">
                <div>
                <Image width={200} height={200} src={Neb2}/>
                </div>
                
                <div>
                <Image width={200} height={200} src={FP}/>
                </div>
                <div>
                <Image width={200} height={200} src={Neb}/>
                </div>
                <div>
                <Image width={200} height={200} src={CYE}/>
                </div>
                <div>
                    <Image src={iRobot}/>
                </div>
                <div>
                    <Image src={Nuance}/>
                </div>

                           </Cube>
                           </div>
                       </center>
                     </div>
                </React.Fragment>
             
                
        )
}

export default Cube3d;
