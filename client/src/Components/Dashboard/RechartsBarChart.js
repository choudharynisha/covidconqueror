import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Line, LineChart } from 'recharts';


class RechartsBarChart extends Component {

    cursorStyle = {
        fill: 'white'
    };
    
    render(){
        return (
            <div style={{ width: '100%', height: 500 }}>
               <ResponsiveContainer>
                    <BarChart
                        width={1800}
                        height={600}
                        data={this.props.getData}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <XAxis type="category" dataKey="label"/>  
                        <YAxis type="number"/>
                        <Tooltip cursor={false}/>
                        <Legend />
                        <Bar dataKey="value" stroke="#8884d8" fill="#8884d8" background={{ stroke: '#eee' }} isAnimationActive={true} barSize={20}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default RechartsBarChart;