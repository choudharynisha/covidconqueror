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
        const getTooltip = d => `
            <div style="text-align: center">
                <div><b>${d.combined_name}</b>, ${d.cases}</div>
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
                />
            </div>
        )
    }
} // COVIDConquerorGlobe

export default COVIDConquerorGlobe;