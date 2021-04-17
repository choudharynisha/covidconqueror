import React, { Component } from 'react';
import GlobalRecoveredChart from './GlobalRecoveredChart';
import GlobalCovidRecoveredPieChart from './GlobalCovidRecoveredPieChart';

import StackedChartGlobalRecovered from './StackedChartGlobalRecovered';

class RecoveredDashboard extends Component {

    render() {
        return (
            <div>
                {/* <GlobalRecoveredChart/> */}
                <StackedChartGlobalRecovered /> 
                <GlobalCovidRecoveredPieChart/>
            </div>
          )
    }
}

export default RecoveredDashboard;
