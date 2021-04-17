import React, { Component } from 'react';
import GlobalChart from './GlobalChart';
import USCovidChart from './USCovidChart';

import AreaChartGlobal from './AreaChartGlobal';

class CovidDashboard extends Component {

    render() {
        return (
            <div> 
                <AreaChartGlobal/>
                {/* <GlobalChart/>
                <USCovidChart/> */}
            </div>
          )
    }
}
 
export default CovidDashboard;
