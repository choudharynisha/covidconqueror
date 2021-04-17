import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class RechartsAreaChart extends Component {

    render() {
        console.log("HERE");
        console.log(this.props.getQueryCountry);

        const renderArea = () => {
            // works fine
            var arr = this.props.getQueryCountry; 
            return arr.map((country) => {  
                let colors = this.props.getColors;
                let countryColor = colors.get(country);
                return <Area type="monotone" dataKey={country} stackId="1" strokeWidth={3} stroke= {countryColor} fill={countryColor}/>
            });
        };

        const getComparison = (value) => {
          // 10 - limo (90) fitting 10 people
          // 100 - school auditorium (100 - 900) fitting 100 people
          // 1000 - stadium (1000 - up) fitting 1000 people 

          if (value >= 10 && value <= 100) {
            return " cases is about " + Math.round(value/10) + " limos fitting 10 people";
          }
          else if(value > 100){
            return " cases is about " + Math.round(value/100) + " school auditoriums fitting 100 people";
          }
          /*else if(value > 100 && value <= 1000){
            return " cases is about " + Math.round(value/100) + " school auditoriums fitting 100 people";
          }
          else if(value > 1000){
            return " is about " + Math.round(value/1000) + " stadiums fitting 1000 people";
          }*/
          else{
            return " cases is about less than a limo";
          }
          return "";
        };

        const renderDataDiv = (payload) => {
          //var arr = ["uv", "pv", "amt"];
          var arr = this.props.getQueryCountry;
          if(payload.length === arr.length){
            return arr.map((country, index) => { 
              // {console.log(index)}
              // {console.log(country)}
              // console.log(payload);
              return (
                <p style={{ color: payload[index].color }}>
                  {`${payload[index].dataKey} : ${payload[index].value}`}{" "}
                  {getComparison(payload[index].value)} 
                </p>
              );
            });
          }
          return null;
        };

        const CustomTooltip = ({ active, payload, label }) => {
          if (active && payload && payload.length) {
            //console.log(payload);
            return (
              //<div className="custom-tooltip">
              <div className="custom-tooltip" style = {{backgroundColor: "white", border:"2px solid grey", padding: "5px"}}>
                <center>
                <p>Data</p>
                </center>
                {renderDataDiv(payload)}
              </div>
            );
          }
        
          return null;
        };


        return (
            <div style={{ width: '100%', height: 500 }}>
          <ResponsiveContainer>
            <AreaChart
              width={500}
              height={400}
              data={this.props.getData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              {/* <Tooltip /> */}
              {renderArea()}
              <Tooltip content={<CustomTooltip />} />
            </AreaChart>
          </ResponsiveContainer>
          </div>
        );
      }
}
export default RechartsAreaChart;
