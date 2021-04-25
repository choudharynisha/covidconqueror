import '../../App.css';
import '../Navbar/Textbox.css'

function Summary() {
    return (
        <div className = "App">
            <center> 
                <div className = "Textbox">
                    <h2 className = "heading">Summary of Missions</h2>
                    <center><iframe width = "560" height = "315" src = "https://www.youtube.com/embed/r4i4avKYOrw" title = "YouTube video player" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <iframe width = "560" height = "315" src = "https://www.youtube.com/embed/6lJQ123_4e8" title = "YouTube video player" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
                    <p className = "text">Here’s what we’ve learned about coronavirus –<br />Viruses are tiny particles that can invade living cells, and coronaviruses are named for their crown-shaped outline. It needs a living cell to survive so that the particles can make more copies of itself. COVID-19 is unique because it is thought to spread mainly from person to person when the two people are very close, and the first reported case was in Wuhan, China in December 2019. Since then, COVID-19 has spread all over the world. Older adults (65 years old or older) and people who have a medical condition are more likely to get sick from COVID-19. Their immune system is not as strong, so their body has a tougher time fighting COVID-19 particles.<br /><br />
                    
                    To prevent the spread of COVID-19, anyone who is sick or feels sick should stay home, even if they aren’t sure if they have COVID-19 or not, unless they are going to see the doctor, and they should stay away from pets and others at home. Everyone should wash their hands for at least 20 seconds with soap and water and wear their face masks, even if they aren’t sick. To see friends, you can ask your parents if you can talk to them over the phone or through the computer. Don’t forget to stay positive and maintain a social distance from others (at least 6 feet) if you go outside. If you have any questions, don’t be afraid to ask an adult!<br /><br /></p>
                    <br />
                </div>
                <a href = "/Conqueror">
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
                <a href = "/">
                    <div className = "eachbutton">
                        <p>Return Home</p>
                        <i class = "fas fa-hand-point-right"></i>
                    </div>
                </a>
            </center>
        </div>
    );
}

export default Summary;