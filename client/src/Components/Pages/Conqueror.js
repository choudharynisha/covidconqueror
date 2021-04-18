import '../../App.css';
import Threebuttons from '../Navbar/Threebuttons'
import FooterPage from '../Navbar/Footer'
import '../Navbar/Textbox.css'


function Conqueror() {
    return (
        <div className = "App">
            <center> 
            <div className="Textbox">
              <h2 className = "heading">Be A fit Kid and Conquer COVID!</h2>
                <p>Text and Media Go here</p>              
              </div>
              
              
       
                <Threebuttons />
               
                <FooterPage /> 
                            
            </center>
        </div>
    );
}

export default Conqueror;