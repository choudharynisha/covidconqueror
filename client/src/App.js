import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import DashboardAll from './Components/Pages/DashboardAll';
import DashboardRecovered from './Components/Pages/DashboardRecovered';
import AllCasesGlobe from './Components/Pages/AllCasesGlobe.js';
import Landing from './Components/Pages/Landing.js';
import Vulnerable from './Components/Pages/Vulnerable.js';
import Summary from './Components/Pages/Summary.js';
import PreventativeMeasures from './Components/Pages/PreventativeMeasures.js';
import Introduction from './Components/Pages/Introduction.js';
import History from './Components/Pages/History.js';
import FaceMasks from './Components/Pages/FaceMasks.js';
import Conqueror from './Components/Pages/Conqueror.js';



function App() {
    return (
        <Router>
            <div className = "App" >
                <center>
                    <Navbar />
                    <br/>
                    <Switch >
                        <Route exact path = "/AllRecoveries">
                            <DashboardRecovered />
                        </Route>
                        <Route exact path = "/AllCases">
                            <DashboardAll />
                        </Route>
                        <Route exact path = "/">
                            <Landing />
                        </Route>
                        
                        <Route exact path = "/Globe">
                            <AllCasesGlobe />
                        </Route>
                        <Route exact path = "/Vulnerable">
                            <Vulnerable />
                        </Route>
                        <Route exact path = "/Summary">
                            <Summary />
                        </Route>
                        <Route exact path = "/PreventativeMeasures">
                            <PreventativeMeasures />
                        </Route>
                        <Route exact path = "/Introduction">
                            <Introduction />
                        </Route>
                        <Route exact path = "/History">
                            <History />
                        </Route>
                        <Route exact path = "/FaceMasks">
                            <FaceMasks />
                        </Route>
                        <Route exact path = "/Conqueror">
                            <Conqueror />
                        </Route>
                    </Switch>
                    
                </center>
            </div>
        </Router>
    );
}

export default App;