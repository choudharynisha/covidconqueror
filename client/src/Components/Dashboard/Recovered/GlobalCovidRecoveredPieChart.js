import React, { Component } from 'react';
import axios from "axios";
import RechartsPieChart from '../RechartsPieChart';

class GlobalCovidRecoveredPieChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            countryList: [],
            selectedCountry: "Egypt",
            isSubmitted: true, 
            data01:[],
            data02:[]
        };

        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCountryChange(event){
        this.setState({selectedCountry: event.target.value, isSubmitted: false});
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('/dataGlobalCovidAndRecovered', {
            selectedCountry: this.state.selectedCountry
        }).then((response) => { 
            console.log(response.data);
            this.setState({
                data01:response.data[0],
                data02:response.data[1],
                isSubmitted: true,
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    
    
    componentDidMount() {
        axios.get('/allCountries').then((response) => { 
            console.log(response.data);
            this.setState({
                countryList: response.data.countries,
            })
        })
        .catch((error) => {
            console.log(error)
        })

        axios.post('/dataGlobalCovidAndRecovered', {
            selectedCountry: this.state.selectedCountry
        }).then((response) => { 
            console.log(response.data);
            this.setState({
                data01:response.data[0],
                data02:response.data[1],
                isSubmitted: true,
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }


    render() {
        return (
            <div>
                <h1>Pie Chart for {this.state.selectedCountry}</h1>

                <form onSubmit = {this.handleSubmit}> 

                    <label>Choose a country: </label>
                    <select value={this.state.selectedCountry} onChange={this.handleCountryChange}>
                        {this.state.countryList.map((country) => <option key={country} value={country}>{country}</option>)}
                    </select>
                    
                    <input type ="submit" value = "Submit"></input>

                </form>
                <center>
                <RechartsPieChart data01={this.state.data01} data02={this.state.data02}></RechartsPieChart>
                </center>
            </div>
          )
    }
}

export default GlobalCovidRecoveredPieChart;