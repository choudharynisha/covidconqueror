import '../../App.css';
import Threebuttons from '../Navbar/Threebuttons'
import Reflection from '../Navbar/Reflection'
import FooterPage from '../Navbar/Footer'
import RecoveredDashboard from '../Dashboard/Recovered/RecoveredDashboard.js';

function DashboardRecovered() {
    return (
        <div className = "App">
            <center>
                <RecoveredDashboard />
                <br />
                <Reflection />
                <Threebuttons />
                <FooterPage />
            </center>
        </div>
    );
}

export default DashboardRecovered;