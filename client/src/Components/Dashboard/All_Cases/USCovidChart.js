import React, { Component } from 'react';
import axios from "axios";
import RechartsBarChart from '../RechartsBarChart';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class USCovidChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            stateList: [],
            selectedArea: "Alabama",
            isSubmitted: true, 
            data:[],
            startDate: new Date("2021-02-01"), 
            endDate: new Date("2021-02-12") 
        };

        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
    }

    handleStateChange(event){
        this.setState({selectedArea: event.target.value, isSubmitted: false});
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
        axios.post('/dataUSCovidWithTimeRange', {
            selectedArea: this.state.selectedArea,
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
        axios.get('/dataUSStates').then((response) => { 
            console.log(response.data);
            this.setState({
                stateList: response.data.states_us,
            })
        })
        .catch((error) => {
            console.log(error)
        })

        axios.post('/dataUSCovidWithTimeRange', {
            selectedArea: this.state.selectedArea,
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
                <h1>Confirmed Covid Cases for {this.state.selectedArea}</h1>

                <form onSubmit = {this.handleSubmit}> 

                    <label>Choose a state: </label>
                    <select value={this.state.selectedArea} onChange={this.handleStateChange}>
                        {this.state.stateList.map((state) => <option key={state} value={state}>{state}</option>)}
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

export default USCovidChart;