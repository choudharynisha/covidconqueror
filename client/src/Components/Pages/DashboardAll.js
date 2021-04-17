import '../../App.css';
import Threebuttons from '../Navbar/Threebuttons'
import Reflection from '../Navbar/Reflection'
import FooterPage from '../Navbar/Footer'
import CovidDashboard from '../Dashboard/All_Cases/CovidDashboard.js';
import AreaChartGlobal from '../Dashboard/All_Cases/AreaChartGlobal.js';

function DashboardAll() {
    return (
        <div className = "App">
            <center>
                
                <CovidDashboard />
                <br />
                <Reflection />
                <Threebuttons />
                <FooterPage />
            </center>
        </div>
    );
}

export default DashboardAll;


