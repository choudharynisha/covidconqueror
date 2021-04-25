import '../../App.css';
import Roadmap from '../Navbar/Roadmap.js';

import React from 'react';
import '../Navbar/Roadmap.css'; 

function Landing() {
    return (
        <div className = "App">
            <center>                
                <Roadmap />
            </center>
        </div>
    );
}

export default Landing;