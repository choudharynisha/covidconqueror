import '../../App.css';
import Threebuttons from '../Navbar/Threebuttons'
import FooterPage from '../Navbar/Footer'
import '../Navbar/Textbox.css'

function History() {
    return (
        <div className = "App">
            <center>  
            <div className="Textbox">
              <h2 className = "heading">The History of COVID-19</h2>
                <p className= "text">The 2019 coronavirus was first reported in Wuhan, China. The number of illeness related to virus started to rise in the Wuhan region in December 2019, but soon after there was an outbreak as the numbers grew too fast. A disease outbreak is when many people in a given region are infected with a particular disease. </p>
                <p className="text">The virus quickly spread to other parts of the world and more and more people got sick, first in China and then around the world. Today, the virus has been reported in all countries in the world except 13 countries. While some regions have had more outbreaks than others, COVID-19 remains an international health problem affecting people from all over the world. To reduce the spread of the virus, entire cities have been quarantined, or closed off, to slow the disease's spread.</p><br />
              <center><iframe width = "560" height="315" src="https://www.youtube.com/embed/GoXxmzKdick?start=102&end=122" title="YouTube video player" frameborder="0"></iframe></center>
              </div>
              <br/>
             <br/>
             <br/>
            <br/>
             <br/>
                <div className="reflection">
                    <h2 >Answer on the questions below then click and hold on each card for correct answers.</h2>
                    <div class = "flip-card">
                            <div class = "flip-card-inner">
                                <div class = "flip-card-front"><p className = "paragraph"> What is a disease outbreak?</p></div>
                                <div class = "flip-card-back"><p className = "paragraph"> A disease outbreak is when many people in a given region are infected with a particular disease.</p> </div>
                            </div>
                        </div>
                    <div class = "flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front"><p className = "paragraph"> In which year was the first case of COVID-19 reported? </p></div>
                                <div class="flip-card-back"><p className = "paragraph">2019</p> </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front"><p className = "paragraph"> How many countries have not been affected by the new coronavirus?</p></div>
                                <div class="flip-card-back"><p className = "paragraph">13</p></div>
                            </div>
                        </div>
                </div>
                <a href = "/Introduction">
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
              <a href = "/AllCases">
                  <div className= "eachbutton">
                        <p>Next</p>
                        <i class="fas fa-hand-point-right"></i>
                    </div>
                </a>
            </center>
        </div>
    );
}

export default History;