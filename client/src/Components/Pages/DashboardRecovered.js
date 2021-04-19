import '../../App.css';
import Threebuttons from '../Navbar/Threebuttons'
import FooterPage from '../Navbar/Footer'
import RecoveredDashboard from '../Dashboard/Recovered/RecoveredDashboard.js';
import '../Navbar/Textbox.css'

function DashboardRecovered() {
    return (
        <div className = "App">
            <center>
                <RecoveredDashboard />
                <br />
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
                <a href = "/Vulnerable">
            <div className= "eachbutton">
                    <p>Previous</p>
                    <i class="fas fa-hand-point-left"></i>
                    
              </div>
              </a>
              <a href = "/#">
              <div className= "eachbutton">
                    <p>Top</p>
                    <i class="fas fa-hand-point-up"></i>
                    
              </div>
              </a>
              <a href = "/Conqueror">
                  <div className= "eachbutton">
                        <p>Next</p>
                        <i class="fas fa-hand-point-right"></i>
                    </div>
                </a>
                <FooterPage />
            </center>
        </div>
    );
}

export default DashboardRecovered;