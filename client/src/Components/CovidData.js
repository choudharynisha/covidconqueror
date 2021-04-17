import React, { Component } from "react";
import axios from "axios";

export default class CovidData extends Component{
    constructor() {
        super();
        this.state = {
            confirmedCases: "Not yet gotten"
        };
    }

    componentDidMount = () => {
        axios.get("/covidData").then(response => {
            console.log(response.data);
            this.setState({
                confirmedCases: response.data[0].confirmed
            });
        });
    };

    render() {
        return (
            <div>
                <button>Get covid data</button>
                <p>The confirmed cases are: {this.state.confirmedCases}</p>
            </div>
            
        );
    }
}