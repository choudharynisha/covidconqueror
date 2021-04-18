import React, {Component} from 'react';
import './Threebuttons.css'; 

class Threebuttons extends Component{
    render () {
        return (
            <div>
                <div class="Eachbutton">
                    <p>Previous Mission</p>
                    <i class="fas fa-hand-point-left"></i>
                </div>
                <div class="Eachbutton"> 
                    <p>Return to top</p>
                    <i class="fas fa-hand-point-up"></i>
                </div>
                <div class="Eachbutton">
                    <p>Next Mission</p>
                    <i class="fas fa-hand-point-right"></i>
                </div>
            </div>
              
            )
    }
}

export default Threebuttons