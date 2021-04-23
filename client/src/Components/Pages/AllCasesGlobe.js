import '../../App.css';
import COVIDConquerorGlobe from '../Globes/COVIDConquerorGlobe.js';
import '../../App.css';
import Threebuttons from '../Navbar/Threebuttons'
import FooterPage from '../Navbar/Footer'
import '../Navbar/Textbox.css'

function AllCasesGlobe() {
    return (
        <div className = "App">
            <center>
           
                <COVIDConquerorGlobe />
                <br />
                <a href = "/AllCases">
            <div className= "eachbutton">
                    <p>Previous</p>
                    <i class="fas fa-hand-point-left"></i>
                    
              </div>
              </a>
              <a href = "#">
              <div className= "eachbutton">
                    <p>Top</p>
                    <i class="fas fa-hand-point-up"></i>
                    
              </div>
              </a>
              <a href = "/PreventativeMeasures">
                  <div className= "eachbutton">
                        <p>Next</p>
                        <i class="fas fa-hand-point-right"></i>
                    </div>
                </a>
            </center>
        </div>
    );
}

export default AllCasesGlobe;