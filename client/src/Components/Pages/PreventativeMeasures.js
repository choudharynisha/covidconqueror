import '../../App.css';
import '../Navbar/Textbox.css'

function PreventativeMeasures() {
    return (
        <div className = "App">
            <center>
                <div className = "Textbox">
                    <h2 className = "heading">How Can We Prevent the Spread of COVID-19?</h2>
                    <br /><center><iframe width = "560" height = "315" src = "https://www.youtube.com/embed/TSkEwdzGbCA" title = "YouTube video player" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
                    <p className = "text">Anyone who is sick or feels sick, even if they don’t know if they have COVID-19, should stay home unless they feel like they need to see a doctor. This helps prevent the illness from spreading to other people.<br /><br />
                    If you are sick, keep away from other people and pets at home. You should also wear a face mask if you have to be around other people. Also, covering your coughs or sneezes with a tissue and washing your hands after is important. You should also try to not share items used by others like plates, food, cups, and bedding. Of course, keep your hands clean and your surroundings. This all may sound very confusing or overwhelming, but doing this gives you the power to stop germs and to protect the ones you love. You should do this until you feel better.<br /><br />
                    To protect your community, you should stay home and follow what was said above. This is called isolation or quarantine. It may sound scary and lonely, but it will keep the ones you love safe and help you fight COVID-19 from infecting others.</p><br/>
                </div>
                <div className = "reflection">
                    <h2>Answer on the questions below then click and hold on each card for correct answers.</h2>
                    <div class = "flip-card">
                            <div class = "flip-card-inner">
                                <div class = "flip-card-front"><p className = "paragraph">How can I help reduce the spread of COVID-19 in my neighborhood? </p></div>
                                <div class = "flip-card-back"><p className = "paragraph"> Stay home, stay clean, and stay positive</p> </div>
                            </div>
                        </div>
                    <div class = "flip-card">
                        <div class = "flip-card-inner">
                            <div class = "flip-card-front"><p className = "paragraph">What should I do when someone in my family is sick?</p></div>
                            <div class = "flip-card-back"><p className = "paragraph">When someone in your family is sick, try and help with chores in the house, always wear a face mask around them, and try to help them get food if there is some at home. If their symptoms get worse, call for help immediately by dialing 911.</p></div>
                        </div>
                    </div>
                    <div class = "flip-card">
                        <div class = "flip-card-inner">
                            <div class = "flip-card-front"><p className = "paragraph">Why is it important for people who are infected with the coronavirus to quarantine?</p></div>
                            <div class = "flip-card-back"><p className = "paragraph">It prevents the sick person from spreading the virus to other people.</p></div>
                        </div>
                    </div>
                </div>
                <a href = "/Globe">
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
                <a href = "/FaceMasks">
                    <div className = "eachbutton">
                        <p>Next</p>
                        <i class = "fas fa-hand-point-right"></i>
                    </div>
                </a>
            </center>
        </div>
    );
}

export default PreventativeMeasures;