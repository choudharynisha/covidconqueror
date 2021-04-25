import '../../App.css';
import COVIDConquerorGlobe from '../Globes/COVIDConquerorGlobe.js';
import '../../App.css';
import Threebuttons from '../Navbar/Threebuttons'
import FooterPage from '../Navbar/Footer'
import '../Navbar/Textbox.css'

function AllCasesGlobe() {
    return (
        <div className = "App">
            <center>
            <h1 className = "heading">Global COVID Cases</h1>
                <div className = "Textbox">
                <p className = "text">For this mission, your goal is to look at how confirmed COVID cases change over time for some time period by day, so that you can get to know the behavior of your enemy and beat it. To do this we will look at two different charts which are ways to represent data or information using symbols or images. </p>
                <p className = "text">First, let’s talk about what a stacked area chart is, which is the image below with a squiggly curve that is filled in below. A stacked area graph can be used to show how one or more things can change over time and can present more than one group of data at a time. The title offers a short explanation of what is in the graph. The Y-Axis runs vertically up and down and has numbers for the amount of stuff being measured. The X-Axis runs horizontally and can have numbers representing different time periods or names of things being compared. Second, a stacked bar chart is very similar to a stacked area chart. If you click the “Change to Stacked Bar Chart” button, you will see what a stacked bar chart will look like. Instead of seeing one filled-in area stacked on top of each other, you will see filled-in columns that can show one or more sets of data at a time just like the stacked area chart. </p>
                <p className = "text">For the charts in this mission below, the title is Global COVID Cases which tells us that this chart has to do with COVID cases around the world. The Y-Axis tells us the number of COVID cases. The X-Axis tells us the days for the time period we are looking at.</p>
                <p className = "text">To use this chart, you can choose one or more countries, select a date on the start date calendar, select a date on the end date calendar. Then you can click the submit button to show the data you want to show. You can also use the button “Change to Stacked Bar Chart” to view the data in a stacked bar chart. Once you see a stacked bar chart, you can click on the button “Change to Stacked Area Chart” to view the data in a stacked area chart. Also, if you scroll over to one of the parts on the curve or column, you will see a popup that will tell you the exact value for the COVID cases for that day and a helpful comparison to help you understand the number you are seeing.</p>
            </div>
                <COVIDConquerorGlobe />
                <br />
                <a href = "/AllCases">
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
              <a href = "/PreventativeMeasures">
                  <div className = "eachbutton">
                        <p>Next</p>
                        <i class = "fas fa-hand-point-right"></i>
                    </div>
                </a>
            </center>
        </div>
    );
}

export default AllCasesGlobe;