import '../../App.css';
import Threebuttons from '../Navbar/Threebuttons'
import FooterPage from '../Navbar/Footer'
import '../Navbar/Textbox.css'

function Summary() {
    return (
        <div className = "App">
            <center> 
            <div className="Textbox">
              <h2 className = "heading">Summary of Missions</h2>
                <p>Text and Media Go here</p>              
              </div>
                <div className="reflection">
                    <h2 >Answer on the questions below then click and hold on each card for correct answers.</h2>
                    <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front"><p className = "paragraph">Question 1 </p></div>
                                <div class="flip-card-back"><p className = "paragraph"> Answer 1</p> </div>
                            </div>
                        </div>
                    <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front"><p className = "paragraph">Question 2  </p></div>
                                <div class="flip-card-back"><p className = "paragraph">Answer 2</p> </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front"><p className = "paragraph"> Question 3</p></div>
                                <div class="flip-card-back"><p className = "paragraph">Answer 3 </p></div>
                            </div>
                        </div>
                </div>
                <Threebuttons />
                <FooterPage />               
            </center>
        </div>
    );
}

export default Summary;