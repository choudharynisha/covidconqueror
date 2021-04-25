import '../../App.css';
import '../Navbar/Textbox.css'

function PopulationsAtRisk() {
    return (
        <div className = "App">
            <center> 
                <div className = "Textbox">
                    <h2 className = "heading">What are some populations at risk?</h2>
                    <br /><center><iframe width = "560" height = "315" src = "https://www.youtube.com/embed/fZp7BdXf25s?start=16" title = "YouTube video player" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
                    <br /><p className = "text">There are many factors that may put some populations at risk of getting sick from coronavirus more than others. This means that some groups are more likely to get very sick from coronavirus than others. Some factors may include age and personal medical history.<br /><br />Adults who are 65 years old or older are one of the populations at risk because when you get much older, your immune system gets weaker. When your immune system is weak, it is difficult for your body to fight diseases that come to attack it.<br /><br />People who have had cancer, diabetes, certain heart conditions, and other medical conditions are at risk of getting sick with coronavirus. Some treatments for medical conditions and illnesses weaken the immune system.</p><br />
                </div>
                <div className = "reflection">
                    <h2 >Answer on the questions below then click and hold on each card for correct answers.</h2>
                    <div class = "flip-card">
                        <div class = "flip-card-inner">
                            <div class = "flip-card-front"><p className = "paragraph">What makes someone at risk?</p></div>
                            <div class = "flip-card-back"><p className = "paragraph"> Their immune system is weaker, so their body has a harder time fighting against illnesses.</p> </div>
                        </div>
                    </div>
                    <div class = "flip-card">
                        <div class = "flip-card-inner">
                            <div class = "flip-card-front"><p className = "paragraph">What does it mean to be “at risk” for coronavirus?</p></div>
                            <div class = "flip-card-back"><p className = "paragraph">Someone who is “at risk” for coronavirus is more likely to get very sick from coronavirus if they end up getting sick from coronavirus.</p></div>
                        </div>
                    </div>
                    <div class = "flip-card">
                        <div class = "flip-card-inner">
                            <div class = "flip-card-front"><p className = "paragraph">What are a few groups of people who are at risk for coronavirus?</p></div>
                            <div class = "flip-card-back"><p className = "paragraph">Adults who are 65 years old or older and people with medical conditions</p></div>
                        </div>
                    </div>
                </div>
                    
                <a href = "/FaceMasks">
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
                <a href = "/AllRecoveries">
                    <div className = "eachbutton">
                        <p>Next</p>
                        <i class = "fas fa-hand-point-right"></i>
                    </div>
                </a>
            </center>
        </div>
    );
}

export default PopulationsAtRisk;