import React, {Component} from 'react';
import './Roadmap.css'; 

class Roadmap extends Component{
    render () {
        return (
            <div>
                <ol> 
                
                <list ><a href = "/Introduction">
                    <h1>Introduction</h1>
                    <p>What is a Disease</p>
                    <p>What is a virsu</p>
                    <p>What is COVID-19</p>
                    <p>What are the symptoms of COVID-19</p>
                    </a>
                </list>
                

                
                <list>
                    <a href = "/History">
                    <h1>History of COVID</h1>
                    <p>When was the first case of COVID-19 reported</p>
                    <p>Spread of COVDI-19 around the world</p>
                    <p>Vaccines to bring hope!</p>
                    </a>
                </list>
               

                
                <list>
                    <a href = "/AllCases">
                    <h1>Dashboard: Confirmed Cases</h1>
                    <p>View number of confirmed cases of COVID-19 for each country</p>
                    </a>
                </list>
                


               
                <list>
                    <a href = "/Globe">
                    <h1>Dashboard: Globe</h1>
                    <p>View COVID-19 cases for each country on the globe</p>
                    <p>Can you find a country on the globe and report its total COVID-19 cases?</p>
                    </a>
                </list>
                

                
                <list>
                    <a href = "/PreventativeMeasures">
                    <h1>Preventative Measures</h1>
                    <p>How can I help reduce the spread of COVID-19 in my neighborhood</p>
                    </a>
                </list>
                

                
                <list>
                    <a href = "/FaceMasks">
                    <h1>Face Masks?</h1>
                    <p> Why are people wearing face masks?</p>
                    <p>What are the benefits of wearing face masks</p>
                    <p>Do I also have to wear a face mask? Why?</p>
                    </a>
                </list>
                
                
                <list>
                    <a href = "/Vulnerable">
                   <h1>At Risk Populations</h1>
                   <p>Who are most affected with COVID-19 if they get the virus?</p>
                   <p>How can we protect vulnerable people in our community?</p>
                   </a>
                </list>
               


                
                <list>
                    <a href = "/AllRecoveries">
                    <h1>Dashboard: Recovered</h1>
                    <p>See recovered cases from all countries</p>
                    <p>Compare recoveries between countries</p>
                    </a>
                </list>
                
                
                <list>
                    <a href = "/Conqueror">
                    <h1>COVID conqueror</h1>
                    <p>Be a Fit Kid to Save the World: Find out how you can be a COVID Conquer Chamion and help reduce the spread of COVID-19</p>
                    </a>
                </list>
                
                
                <list>
                    <a href = "/Summary">
                    <h1>Summary</h1>
                    <p>See a summary of the COVID Conquer missions and main lessons from each</p>
                    <p>Action  Items</p>
                    </a>
                </list>
                
               
                
                </ol>
              
            </div>
        )
    }
}

export default Roadmap