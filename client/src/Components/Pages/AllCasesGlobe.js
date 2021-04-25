import '../../App.css';
import COVIDConquerorGlobe from '../Globes/COVIDConquerorGlobe.js';
import '../../App.css';
import '../Navbar/Textbox.css';

function AllCasesGlobe() {
    return (
        <div className = "App">
            <center>
            <h1 className = "heading">Global COVID Cases</h1>
                <div className = "Textbox">
                <p className = "text">In this mission you will be able to see the total number of positive COVID-19 cases reported overtime for each country.<br /><br />
                Hover over each tower to see the country name and the total positive cases reported since the beginning of the pandemic. You can also rotate the globe by clicking and dragging it in the sky / globe area below. Scroll up to zoom in and scroll down to zoom out of the sky / globe area.</p>
            </div>
                <COVIDConquerorGlobe />
                <br />
                <a href = "/AllCases">
            <div className = "eachbutton">
                    <p>Previous</p>
                    <i class = "fas fa-hand-point-left"></i>
                    
              </div>
              </a>
              <a href = "#">
              <div className = "eachbutton">
                    <p>Top</p>
                    <i class = "fas fa-hand-point-up"></i>
                    
              </div>
              </a>
              <a href = "/PreventativeMeasures">
                  <div className = "eachbutton">
                        <p>Next</p>
                        <i class = "fas fa-hand-point-right"></i>
                    </div>
                </a>
            </center>
        </div>
    );
}

export default AllCasesGlobe;