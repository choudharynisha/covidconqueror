import '../../App.css';
import RecoveredDashboard from '../Dashboard/Recovered/RecoveredDashboard.js';
import '../Navbar/Textbox.css';

function DashboardRecovered() {
    return (
        <div className = "App">
            <center>
            <div className = "Textbox">
              <h1 className = "heading">Global COVID Recovered Cases</h1>
                <p className = "text">For this mission, your goal is to look at how recovered COVID cases change over time for some time period by day, so that you can get to know the behavior of your enemy and beat it. The two types of charts in this mission are the same stacked area and stacked bar chart that you saw in the Dashboard: Confirmed Cases mission.</p>
                <p className = "text">For the charts in this mission below, the title is Global COVID Recovered Cases which tells us that this chart has to do with recovered COVID cases around the world. The Y-Axis tells us the number of COVID cases. The X-Axis tells us the days for the time period we are looking at. The way to use these charts are the same as what you did in the Dashboard: Confirmed Cases mission.</p> 
                <p className = "text">Below you will also see a type of pie chart called a two level pie chart. A pie chart is a type of chart that is in the shape of a circle. It shows the relationship of different parts of the data or what portions make up the whole data. A two level pie chart can show how multiple sets of data relate to each other. In the pie chart below, what’s in purple shows the total population for a country. Yellow shows the amount of people not affected by COVID-19 . Blue shows the amount of people who have COVID-19. Green shows the amount of people who have recovered from COVID-19. This allows you to compare how much of the population is not affected, has COVID-19, or has recovered from it. To use this, select to country you would like to see data for and press submit</p>
              </div>
                <RecoveredDashboard />
                <br />
                <div className = "reflection">
                    <h2>Answer on the questions below then click and hold on each card for correct answers.</h2>
                    <div class = "flip-card">
                            <div class = "flip-card-inner">
                                <div class = "flip-card-front"><p className = "paragraph">How is a pie chart helpful in showing COVID-19’s impact on a country?</p></div>
                                <div class = "flip-card-back"><p className = "paragraph">It allows us to compare how much of the population of a country is not affected, infected, or recovered from COVID-19.</p></div>
                            </div>
                        </div>
                    <div class = "flip-card">
                            <div class = "flip-card-inner">
                                <div class = "flip-card-front"><p className = "paragraph">Do you see a pattern in how infected and recovered compares to not affected people and population from the pie chart?</p></div>
                                <div class = "flip-card-back"><p className = "paragraph">In general, the infected and recovered amount is a small portion compared to the unaffected people and population, but you should still try your best to still be safe so the infected amount is 0 or close to 0.</p></div>
                            </div>
                        </div>
                        <div class = "flip-card">
                            <div class = "flip-card-inner">
                                <div class = "flip-card-front"><p className = "paragraph">How many people recovered from COVID-19 in Andora on February 3rd, 2021 (02/03/2021)?</p></div>
                                <div class = "flip-card-back"><p className = "paragraph">82</p></div>
                            </div>
                        </div>
                </div>
                <a href = "/Vulnerable">
            <div className = "eachbutton">
                    <p>Previous</p>
                    <i class = "fas fa-hand-point-left"></i>
              </div>
              </a>
              <a href = "/#">
              <div className = "eachbutton">
                    <p>Top</p>
                    <i class = "fas fa-hand-point-up"></i>
                    
              </div>
              </a>
              <a href = "/Conqueror">
                  <div className = "eachbutton">
                        <p>Next</p>
                        <i class = "fas fa-hand-point-right"></i>
                    </div>
                </a>
            </center>
        </div>
    );
}

export default DashboardRecovered;