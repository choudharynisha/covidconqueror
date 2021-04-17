import React, { Component } from 'react';
import axios from "axios";
import RechartsBarChart from '../RechartsBarChart';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class GlobalChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            countryList: [],
            selectedCountry: "Egypt",
            isSubmitted: true, 
            data:[],
            startDate: new Date("2021-02-01"), 
            endDate: new Date("2021-02-12")
        };

        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
    }

    handleCountryChange(event){
        this.setState({selectedCountry: event.target.value, isSubmitted: false});
    }

    handleStartChange(date){
        console.log(date.toISOString().slice(0,10));
        this.setState({
            startDate: date  
        });
    }

    handleEndChange(date){
        console.log(date.toISOString().slice(0,10));
        this.setState({
            endDate: date
        });
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('/dataGlobalWithTimeRange', {
            selectedCountry: this.state.selectedCountry,
            startDate: this.state.startDate, 
            endDate: this.state.endDate
        }).then((response) => { 
            console.log(response.data);
            this.setState({
                data:response.data,
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

        axios.post('/dataGlobalWithTimeRange', {
            selectedCountry: this.state.selectedCountry,
            startDate: this.state.startDate, 
            endDate: this.state.endDate
        }).then((response) => { 
            console.log(response.data);
            this.setState({
                data:response.data,
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
                <h1>Confirmed Covid Cases for {this.state.selectedCountry}</h1>

                <form onSubmit = {this.handleSubmit}> 

                    <label>Choose a country: </label>
                    <select value={this.state.selectedCountry} onChange={this.handleCountryChange}>
                        {this.state.countryList.map((country) => <option key={country} value={country}>{country}</option>)}
                    </select>
                    
                    <label>Choose a start date: </label>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleStartChange}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        dateFormat="MM/dd/yyyy"
                    />
                    
                    <label>Choose a end date: </label>
                    <DatePicker
                        selected={this.state.endDate}
                        onChange={this.handleEndChange}
                        selectsEnd
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        minDate={this.state.startDate}
                        dateFormat="MM/dd/yyyy"
                    />
                    
                    <input type ="submit" value = "Submit"></input>

                </form>

                <RechartsBarChart getData={this.state.data}></RechartsBarChart> 
            </div>
          )
    }
}

export default GlobalChart;