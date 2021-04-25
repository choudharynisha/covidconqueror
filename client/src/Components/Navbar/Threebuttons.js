import React, {Component} from 'react';
import './Threebuttons.css'; 

class Threebuttons extends Component {
    render () {
        return (
            <div>
                <div className = "eachbutton">
                    <p>Previous</p>
                    <i class = "fas fa-hand-point-left"></i>
                </div>
                <div className = "eachbutton">
                    <p>Top</p>
                    <i class = "fas fa-hand-point-up"></i>        
                </div>
                <div className = "eachbutton">
                    <p>Next</p>
                    <i class = "fas fa-hand-point-right"></i>
                </div>
            </div>  
        );
    }
}

export default Threebuttons;