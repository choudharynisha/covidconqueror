import React, { Component } from 'react';
import axios from "axios";
import Globe from 'react-globe.gl';

class COVIDConquerorGlobe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            globeData: []
        };
    }
    
    componentDidMount() {
        axios.get('/dataGlobe').then((response) => {
            console.log(response.data);
            this.setState({
                globeData: response.data,
            })
        }).catch((error) => {
            console.log(error)
        })
    }
    
    render() {
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


        const getTooltip = d => `
        <div style="text-align: center; color: black; background-color: white; border:2px solid grey; padding: 5px;">
            <div><b>${d.combined_name}</br>
            Has ${d.cases} confirmed COVID-19 cases ${getComparison(d.cases)} 
            </div>
        </div>
        `;
        
        return (
            <div>
                <Globe
                    globeImageUrl = "//unpkg.com/three-globe/example/img/earth-day.jpg"
                    bumpImageUrl = "//https://fvmstatic.s3.amazonaws.com/maps/m/WRLD-EPS-02-4002.png"
                    backgroundImageUrl = "//unpkg.com/three-globe/example/img/night-sky.png"
                    
                    pointsData = {this.state.globeData}
                    pointLabel = {getTooltip}
                    pointRadius = {0.30}
                    pointAltitude = {0.2}
                    pointResolution = {20}
                    
            
                     width = {1800}
                     height = {700}
            
                />
            </div>
        )
    }
} // COVIDConquerorGlobe

export default COVIDConquerorGlobe;
