import '../../App.css';
import Threebuttons from '../Navbar/Threebuttons'
import FooterPage from '../Navbar/Footer'
import '../Navbar/Textbox.css'

function PreventativeMeasures() {
    return (
        <div className = "App">
            <center>
            <div className="Textbox">
              <h2 className = "heading">How Can We Prevent the Spread of COVID-19?</h2>
                <p className = "text">Anyone who is sick or feels sick, even if they don’t know if they have Covid-19, should stay home unless they feel like they need to see a doctor. This helps prevent the illness from spreading to other people. </p> 
                <p className = "text">If you are sick, keep away from other people and pets at home. You should also wear a face mask if you have to be around other people. Also, covering your coughs or sneezes with a tissue and washing your hands after is important. You should also try to not share items used by others like plates, food, cups, and bedding. Of course, keep your hands clean and your surroundings. This all may sound very confusing or overwhelming, but doing this gives you the power to stop germs and to protect the ones you love. You should do this until you feel better.</p>  
                <p className = "text">To protect your community, you should stay home and follow what was said above. This is called isolation or quarantine. It may sound scary and lonely, but it will keep the ones you love safe and help you fight Covid-19 from infecting others. </p>                
              </div>
                <div className="reflection">
                    <h2 >Answer on the questions below then click and hold on each card for correct answers.</h2>
                    <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front"><p className = "paragraph">How can I help reduce the spread of covid-19 in my neighborhood? </p></div>
                                <div class="flip-card-back"><p className = "paragraph"> Stay home, stay clean, and stay positive</p> </div>
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

export default PreventativeMeasures;