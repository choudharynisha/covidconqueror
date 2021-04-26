import '../../App.css';
import '../Navbar/Textbox.css';

function Introduction() {
    return (
        <div className = "App">
            <center>  
            <div className = "Textbox">
            <br/>
             <br/>
              <h2 className = "heading">Understanding Viruses and COVID-19</h2>
              <p className = "text">Children all over the world have had to change how they interact with each other because of COVID-19. In this mission, you will learn more about COVID-19, how it spreads and some of the symptoms associated with COVID-19. To start off, let's watch the video below where Tim and Moby respond to a question from young children about COVID-19.<br /><br />
              <center><iframe width = "560" height = "315" src = "https://www.youtube.com/embed/GoXxmzKdick?start=24&end=101" title = "YouTube video player" frameborder = "0"></iframe></center><br /><br />
              Like the kids who sent the letter to Tim and Moby, you have probably seen some very scary news about COVID-19 since the begining of 2020. At some point you probably wondered why things have changed at school. Why do you have to attend classes from home sometimes? Why do you have to wear a face mask when you are with other people? And why are most adults wearing face masks outside?<br /><br />
              COVID-19 is a disease that is caused by a virus called coronavirus. The name COVID-19 stands for Coronavirus Disease of 2019.<br /><br />
              Viruses are tiny particles that can invade living cells. There are millions of types of viruses, with different behaviors, shapes, and structures. Coronaviruses are one group, named for their crown-shaped outline. To survive, a virus needs a living cell where it can make more copies itself. So it invades an organism's body and turns its cells into virus factories. When the viruses invade the body, the make the body weak and sometimes result in sickness or diseases.<br /><br />
              COVID-19 is thought to spread mainly through close contact from person to person, including between people who are physically near each other (within about 6 feet). Although rare, another way that some people have caught the virus by touching infected surfaces. When the coronavirus invades the body, it affects the body's natural performance and can result in respiratory diseases.<br /><br />
              People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19: Fever or chills, cough, shortness of breath or difficulty breathing, fatigue, muscle or body aches, headache, new loss of taste or smell, sore throat, congestion or runny nose, nausea or vomiting or diarrhea.<br /><br />
              If someone is showing any of these signs, seek emergency medical care immediately –</p>
                 <ul className = "ulist">
                     <li>Trouble breathing</li>
                     <li>Persistent pain or pressure in the chest</li>
                     <li>New confusion</li>
                     <li>Inability to wake or stay awake</li>
                     <li>Pale, gray, or blue-colored skin, lips, or nail beds, depending on skin tone</li>
                </ul>
              </div>
              <div className = "reflection">
              <h2>Answer on the questions below then click and hold on each card for correct answers.</h2>
              <div class = "flip-card">
                    <div class = "flip-card-inner">
                        <div class = "flip-card-front"><p className = "paragraph">What is COVID-19 and how is it transmitted from person to person? </p></div>
                        <div class = "flip-card-back"><p className = "paragraph">COVID-19 is a desease that is caused by the Coronaviruses. COVID-19 is transmitted from person to person through close contact or when someone touches an infected surface.</p> </div>
                    </div>
                </div>
              <div class = "flip-card">
                    <div class = "flip-card-inner">
                        <div class = "flip-card-front"><p className = "paragraph">How do viruses make a person sick? </p></div>
                        <div class = "flip-card-back"><p className = "paragraph">Viruses invade the body of a healthy person and makes more copies of itself; therefore, it is weakening the body and eventually making the person sick.</p></div>
                    </div>
                </div>
                <div class = "flip-card">
                    <div class = "flip-card-inner">
                        <div class = "flip-card-front"><p className = "paragraph"> Name 3 symptopms of COVID-19</p></div>
                        <div class = "flip-card-back"><p className = "paragraph">Fever or chills, cough, shortness of breath or difficulty breathing, fatigue, muscle or body aches, headache, new loss of taste or smell, sore throat, congestion or runny nose, nausea or vomiting or diarrhea.</p></div>
                    </div>
                </div>
            </div>
            <a href = "/">
                  <div className = "eachbutton">
                        <p>Return Home</p>
                        <i class = "fas fa-hand-point-left"></i>
                    </div>
                </a>
            
              <a href = "#">
              <div className = "eachbutton">
                    <p>Top</p>
                    <i class = "fas fa-hand-point-up"></i>
                    
              </div>
              </a>
              <a href = "/History">
                  <div className = "eachbutton">
                        <p>Next</p>
                        <i class = "fas fa-hand-point-right"></i>
                    </div>
                </a>
            </center>
        </div>
    );
}

export default Introduction;