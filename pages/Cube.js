import * as THREE from "three";
import Cube from 'react-3d-cube';
import React from 'react'
import { useEffect, useRef } from "react";


const Cube3d = () => {
        return (
                <React.Fragment>
                <div>
                       <center>
                           <div
                           style={{
                               width: 350,
                               height: 350,
                               cursor: 'grab'
                            }}
                           >
                           <Cube size={350} index="back">
                <div className="imageCube" style={{ backgroundColor: 'blue', width: '100%',
            height: '100%'
}}>front</div>
                <div style={{ width: '100%',
            height: '100%'
}}></div>
                <div style={{backgroundColor: 'yellow', width: '100%',
            height: '100%'
}}>back</div>
                <div style={{ width: '100%',
            height: '100%'
}}></div>
                <div style={{backgroundColor: 'pink', width: '100%',
            height: '100%'
}}>top</div>
                <div style={{backgroundColor: 'teal', width: '100%',
            height: '100%'
}}>bottom</div>
                           </Cube>
                           </div>
                       </center>
                     </div>
                </React.Fragment>
             
                
        )
}

export default Cube3d;


