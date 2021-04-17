import '../../App.css';
import Textbox from '../Navbar/Textbox'
import Threebuttons from '../Navbar/Threebuttons'
import Reflection from '../Navbar/Reflection'
import FooterPage from '../Navbar/Footer'

function Vulnerable() {
    return (
        <div className = "App">
            <center> 
                <Textbox />
                <Reflection />
                <br />
                <Threebuttons />
                <FooterPage />               
            </center>
        </div>
    );
}

export default Vulnerable;