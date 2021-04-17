import React, { Component } from 'react';
import axios from "axios";
import RechartsAreaChart from '../RechartsAreaChart';
import RechartsBarChart from '../RechartsBarChart';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Multiselect } from 'multiselect-react-dropdown';

import RechartsStackedBar from '../RechartsStackedBar';

class AreaChartGlobal extends Component { 
    constructor(props){
        super(props);
        this.state = {
            options:[],
            selectedCountries: ["Andorra"], 
            startDate: new Date("2021-02-01"), 
            endDate: new Date("2021-02-12"),
            data:[],
            queryCountry: ["Andorra"], //we need this so when the area comp renders again it will have the current selected values
            selectedValues:["Andorra"],
            colors: new Map(),
            style : {
                chips: {
                  background: "red"
                },
                searchBox: {
                  border: "none",
                  "border-bottom": "1px solid blue",
                  "border-radius": "0px"
                },
                multiselectContainer: {
                  color: "red"
                }
            },
            active: true,
            toggle: "Change to Bar Chart"
            
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);

    }

    handleClick() {
        this.setState({
            active: !this.state.active
        },()=>this.handleToggleChange());
    }

    handleToggleChange(){
        if(this.state.active){
            this.setState({
                toggle: "Change to Stacked Bar Chart"
            });
        }
        else{
            this.setState({
                toggle: "Change to Stacked Area Chart"
            });
        }
    }

    hexGenerator() {
        let countries = this.state.options
        let colorMap = new Map()
        for(var i = 0; i < countries.length; i++){
            colorMap.set(countries[i], '#'+Math.floor(Math.random()*16777215).toString(16));
        }
        return colorMap;
    }

    componentDidMount() {
        axios.get('/allCountries').then((response) => { 
            console.log(response.data);
            this.setState({
                options: response.data.countries,
            })
        })
        .catch((error) => {
            console.log(error)
        })
        // axios.get('/dataGlobalAreaChart').then((response) => { 
        //     console.log(response.data);
        //     this.setState({
        //         data: response.data,
        //         colors: this.hexGenerator()
        //     })
        // })
        // .catch((error) => {
        //     console.log(error)
        // }) 

        axios.post('/dataGlobalAreaChart', {
            selectedCountries: this.state.selectedValues, 
            startDate: this.state.startDate,
            endDate: this.state.endDate, 
            
        }).then((response) => { 
            console.log(response.data);
            this.setState({
                data: response.data, 
                colors: this.hexGenerator(), 
                queryCountry: this.state.selectedCountries
            })
            console.log(this.state.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    onSelect(selectedList, selectedItem) {
        this.setState({
            selectedCountries: selectedList
        });
        console.log(selectedList)
        console.log(this.state.colors)
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
        axios.post('/dataGlobalAreaChart', {
            selectedCountries: this.state.selectedCountries,
            startDate: this.state.startDate,
            endDate: this.state.endDate, 
            
        }).then((response) => { 
            console.log(response.data);
            this.setState({ 
                data: response.data, 
                queryCountry: this.state.selectedCountries
            })
            console.log(this.state.data);
        })
        .catch((error) => {
            console.log(error)
        })
        
    }

    
    render() {
        
        return (
            <div >
                <center>
                <h1>Global Covid Cases</h1>
                <div style = {{height: 100}}>
                    Some text explaining the mission/how dashboard works and types of charts used
                </div>
                <form onSubmit = {this.handleSubmit}> 
                <div style = {{width: 600}}>
                <label>Choose one or more Countries: </label>
                <Multiselect
                    //style={this.state.style}
                    options={this.state.options} // Options to display in the dropdown
                    selectedValues={this.state.selectedValues}
                    isObject={false}
                    onSelect={this.onSelect}
                    onRemove={this.onRemove}
                />
                </div>

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
                <button type="button" onClick={this.handleClick}>
                    {this.state.toggle}
                </button>

                {/* <RechartsAreaChart getData={this.state.data} getQueryCountry={this.state.queryCountry} getColors = {this.state.colors}></RechartsAreaChart> */}
                {/* {this.state.active && <RechartsStackedBar />} */}
                
                {this.state.active
                    ? <RechartsAreaChart getData={this.state.data} getQueryCountry={this.state.queryCountry} getColors = {this.state.colors}></RechartsAreaChart>
                    : <RechartsStackedBar getData={this.state.data} getQueryCountry={this.state.queryCountry} getColors = {this.state.colors}/>
                }
                </center>
            </div>
        );
    }
}
export default AreaChartGlobal;
