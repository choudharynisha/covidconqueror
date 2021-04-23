import '../../App.css';
import Threebuttons from '../Navbar/Threebuttons'
import FooterPage from '../Navbar/Footer'
import '../Navbar/Textbox.css'
import '../Navbar/Threebuttons.css'; 


function Conqueror() {
    return (
        <div className = "App">
            <center> 
            <div className="Textbox">

              <h2 className = "heading">Be A fit Kid and Conquer COVID!</h2>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/FWw8xgDTFTQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className = "text">So far you have learned a lot about what Coronavirus is and how you can fight the spread of it and conquer the disease. Also as a Covid conqueror champion, you should remind yourself of a few things. </p>
              <p className = "text">First, stay positive and continue to do things you enjoy. For example, try having fun spending extra time with the people you live with if you can or have fun playing outside while sticking to preventative measures. </p> 
              <p className = "text">Second, be kind and helpful. All the changes due to the pandemic can make kids and adults feel stressed. You can help by doing little things that make a big difference. For example, help take care of a younger sibling if you have one, clean your belongings, or give the people you live and love a hug. Also, be kind to yourself and relax.</p> 
              <p className = "text">Third, take the time to notice your feelings. Missing things like school field trips or sports can make you feel sad, but just know that it won’t be forever. For now, you can feel better if you stay in touch with people you miss. Talk on the phone or visit by video. You can draw pictures that show how you feel. Or talk about it with someone you feel close to.</p> 
              <p className = "text">Lastly, be sure to be a fit kid. Remember to exercise and move your body around so that you can stay active and healthy. Also, eat healthy foods like fruits and vegetables so your body is strong when battling and preventing Covid-19.</p> 
              <p className = "text">As a Covid Conqueror Champion, you have a lot of responsibilities, but don’t forget to smile, help others, and have fun!</p>               
              </div>
              
              <div className="reflection">
                    <h2 >Answer on the questions below then click and hold on each card for correct answers.</h2>
                    <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front"><p className = "paragraph">What are some things you can do for fun?</p></div>
                                <div class="flip-card-back"><p className = "paragraph">You can dance, do puzzles, read, go outside while practicing social distancing, and many other things.</p> </div>
                            </div>
                        </div>
                    <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front"><p className = "paragraph">What are some ways you can help the people you live with?  </p></div>
                                <div class="flip-card-back"><p className = "paragraph">You can help wash the dishes, do the laundry, say something kind to them, and many other things</p> </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front"><p className = "paragraph"> Why is it important to stay positive during the pandemic?</p></div>
                                <div class="flip-card-back"><p className = "paragraph">It’s important to stay positive because it helps you and the people you love feel hopeful and optimistic about the future. </p></div>
                            </div>
                        </div>
                </div>

            <a href = "/AllRecoveries">
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
              <a href = "/Summary">
                  <div className= "eachbutton">
                        <p>Next</p>
                        <i class="fas fa-hand-point-right"></i>
                    </div>
                </a>
               
                            
            </center>
        </div>
    );
}

export default Conqueror;