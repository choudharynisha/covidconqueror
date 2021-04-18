import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";

class RechartsPieChart extends Component {
    render(){
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
        const cx = 350;
        const cy = 270;

        const getComparison = (value) => {
          // 10 - limo (90) fitting 10 people
          // 100 - school auditorium (100 - 900) fitting 100 people
          // 1000 - stadium (1000 - up) fitting 1000 people 

          if (value >= 10 && value <= 100) {
            return " cases is about " + Math.round(value/10) + " soccer teams with 10 people";
          }
          /*else if(value > 100){
            return " cases is about " + Math.round(value/100) + " school auditoriums fitting 100 people";
          }*/
          else if(value > 100 && value <= 1000){
            return " cases is about " + Math.round(value/100) + " school auditoriums fitting 100 people";
          }
          else if(value > 1000){
            return " is about " + Math.round(value/1000) + " stadiums fitting 1000 people";
          }
          else{
            return " cases is about less than a soccer team";
          }
          return "";
        };

        const renderPara = (payload) => {
            return (
              <p style={{ color: payload[0].payload.fill }}>
                {`${payload[0].name} : ${payload[0].value}`}{" "}
                {getComparison(payload[0].value)}
              </p>
            );
          };

        const CustomTooltip = ({ active, payload, label }) => {
            console.log(payload[0]);
            if (active && payload && payload.length) {
              console.log(payload);
              return (
                <div
                  className="custom-tooltip"
                  style={{
                    backgroundColor: "white",
                    border: "2px solid grey",
                    padding: "5px"
                  }}
                >
                  <center>
                    <p>Data</p>
                  </center>
                  {renderPara(payload)}
                </div>
              );
            }
            return null;
          };

        return (
            <div style = {{ width: '100%', height: 500 }}>
                <ResponsiveContainer>
                    <center>
                        <PieChart width = {700} height = {600}>
                            <Pie
                                data = {this.props.data01} //props
                                dataKey = "value"
                                cx = {cx}
                                cy = {cy}
                                outerRadius = {200}
                                fill = "#8884d8"
                            />
                            
                            <Pie
                                data = {this.props.data02} //props
                                dataKey = "value"
                                cx = {cx}
                                cy = {cy}
                                innerRadius = {210}
                                outerRadius = {230}
                                fill = "#82ca9d"
                                paddingAngle = {1} 
                                minAngle = {10}
                                label>

                                {this.props.data02.map((entry, index) => (
                                    <Cell key = {`cell-${index}`} fill = {COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>

                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </center>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default RechartsPieChart;
