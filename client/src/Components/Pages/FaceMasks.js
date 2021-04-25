import '../../App.css';
import Threebuttons from '../Navbar/Threebuttons'
import FooterPage from '../Navbar/Footer'
import '../Navbar/Textbox.css'

function FaceMasks() {
    return (
        <div className = "App">
            <center> 
            <div className="Textbox">
              <h2 className = "heading">Why are People Wearing Facemasks?</h2>
                <p className = "text">When going outside, you’ve probably seen so many people covering their mouths and nose with a mask. You’re probably thinking what is going on?</p>              
                <p className = "text">These masks are made of soft layered materials that cover the nose and mouth. There are also stretchy bands that go beyond the head or ears. They keep the mask in place. The most important thing about a mask is that it stops the spread of coronavirus but still lets someone breath air in and out. People are wearing these face masks to stop the coronavirus from spreading around and to protect others.</p>

                <p className = "text">Anyone can wear a mask when they need to be near other people. Many people who work at stores and restaurants will wear them. A mask is an extra way to stop coronavirus. Some people might wear a homemade cloth mask. </p>

                <p className = "text">At first, you might feel a little surprised and confused with everyone around you wearing masks. That’s okay and normal. It’s just because you are not used to seeing everyone around you in masks, but you’re used to seeing someone’s whole face. But you’ll get used to their new look. </p>
                <p className = "text">Even with a face mask, you’ll probably notice that you can still see the kindness on their face. You can't see their mouth, but you can see the smile in their eyes. Their mask is their way of saying, “My superpower is stopping coronavirus!” When you feel comfortable, go ahead and smile back at them. </p><br />
                <center><iframe width = "560" height = "315" src = "https://www.youtube.com/embed/vGB-hxst7fo" title = "YouTube video player" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width = "560" height = "315" src = "https://www.youtube.com/embed/lt68rFG9Wq4" title = "YouTube video player" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
                <div className = "reflection">
                    <h2 >Answer on the questions below then click and hold on each card for correct answers.</h2>
                    <div class = "flip-card">
                            <div class = "flip-card-inner">
                                <div class = "flip-card-front"><p className = "paragraph">Why are people wearing facemasks?</p></div>
                                <div class = "flip-card-back"><p className = "paragraph"> To stop the spread of COVID-19</p> </div>
                            </div>
                        </div>
                    <div class = "flip-card">
                            <div class = "flip-card-inner">
                                <div class = "flip-card-front"><p className = "paragraph">What are the benefits of wearing facemask?</p></div>
                                <div class = "flip-card-back"><p className = "paragraph">It stops the spread of coronavirus and protects everyone around me.</p></div>
                            </div>
                        </div>
                        <div class = "flip-card">
                            <div class = "flip-card-inner">
                                <div class = "flip-card-front"><p className = "paragraph">Do I have to also wear a facemask?</p></div>
                                <div class = "flip-card-back"><p className = "paragraph">Yes because I want to have the power to help stop COVID-19.</p></div>
                            </div>
                        </div>
                </div>
                <br />
                <a href = "/PreventativeMeasures">
            <div className = "eachbutton">
                    <p>Previous</p>
                    <i class ="fas fa-hand-point-left"></i>
                    
              </div>
              </a>
              <a href = "#">
              <div className = "eachbutton">
                    <p>Top</p>
                    <i class ="fas fa-hand-point-up"></i>
                    
              </div>
              </a>
              <a href = "/Vulnerable">
                  <div className = "eachbutton">
                        <p>Next</p>
                        <i class = "fas fa-hand-point-right"></i>
                    </div>
                </a>
            </center>
        </div>
    );
}

export default FaceMasks;