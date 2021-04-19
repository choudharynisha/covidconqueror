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
                <FooterPage />
            </center>
        </div>
    );
}

export default AllCasesGlobe;