require('dotenv').config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

// Set up default mongoose connection
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected',() => {
    console.log('Mongoose is connected!');
});

const defaultSchema = new mongoose.Schema({});
const global_and_us = mongoose.model('global_and_us', defaultSchema, 'global_and_us');
const global = mongoose.model('global', defaultSchema, 'global');
const countries_summary = mongoose.model('countries_summary', defaultSchema, 'countries_summary');
const metadata = mongoose.model('metadata', defaultSchema, 'metadata');
const us_only = mongoose.model('us_only', defaultSchema, 'us_only');

// app.get("/", function(req, res){
//     console.log("We are in the home page");
//     res.send("<h1> Hello World </h1");
  
// });

/****************************************** CovidDashboard GlobalChart component  *******************************/
// display global countries
app.get("/allCountries", function(req, res){ 
    console.log("We are getting countries data");
    metadata.find().select('countries -_id').lean().exec(function(err, results) {
        if (err) {
            console.log('error', err);
            res.send(err);
        } else if (!results) {
            res.send(null);
        } else {
            res.send(results[0]);
        }
    })
});

// covid data for global countries
app.post("/dataGlobalWithTimeRange", function(req, res){ 
    console.log("We are getting data");
    console.log(req.body);
    countries_summary.find({ country: req.body.selectedCountry, date: {
        $gte: new Date(req.body.startDate.slice(0,10)),
        $lte: new Date(req.body.endDate.slice(0,10))
    }
    }).lean().exec(function(err, results) {
        if (err) {
            console.log('error', err);
            res.send(err);
        } else if (!results) {
            res.send(null);
        } else {
            //res.send(results);
            var querydata = new Array();
            for (var i = 0; i < results.length; i++){
                querydata.push({
                    label: String(results[i].date).slice(3,10),
                    value: results[i].confirmed_daily
                });
            }
            res.send(querydata);
        }
    })
});

/****************************************** CovidDashboard USCovidChart component  *******************************/
//covid data for states
app.post("/dataUSCovidWithTimeRange", function(req, res){ 
    console.log("We are getting data");
    console.log(req.body);
    global_and_us.aggregate([
        {$match:
            {"country": "US",
             "state" : req.body.selectedArea,
             'date': { $gte: new Date(req.body.startDate.slice(0,10)),
               $lte: new Date(req.body.endDate.slice(0,10)) } } },
        {
            "$group": {
                "_id": "$date",
                "value": { "$sum": "$confirmed_daily" }
            }
        }
    ]).sort({'_id': 1}).exec(function(err, results) {
        if (err) {
            console.log('error', err);
            res.send(err);
        } else if(!results) {
            res.send(null);
        } else {
            //res.send(results);
            var querydata = new Array();
            
            for(var i = 0; i < results.length; i++){
                querydata.push({
                    label: String(results[i]._id).slice(3,10),
                    value: results[i].value
                });
            }
            
            res.send(querydata);
        }
    })
});

// display all US states
app.get("/dataUSStates", function(req, res){ 
    console.log("We are getting data");
    console.log(req.body);
    metadata.find({}).select('states_us -_id').lean().exec(function(err, results) {
        if (err) {
            console.log('error', err);
            res.send(err);
        } else if (!results) {
            res.send(null);
        } else {
            res.send(results[0]);
        }
    })
});

/****************************************** Recovered Dashboard GlobalRecoveredChart component  *******************************/
// recovered data for global
app.post("/dataGlobalRecovered", function(req, res){ 
    console.log("We are getting data");
    console.log(req.body);
    countries_summary.find({ country: req.body.selectedCountry, date: {
        $gte: new Date(req.body.startDate.slice(0,10)),
        $lte: new Date(req.body.endDate.slice(0,10))
    }
    }).lean().exec(function(err, results) {
        if (err) {
            console.log('error', err);
            res.send(err);
        } else if (!results) {
            res.send(null);
        } else {
            //res.send(results);
            var querydata = new Array();
            for (var i = 0; i < results.length; i++){
                querydata.push({
                    label: String(results[i].date).slice(3,10),
                    value: results[i].recovered_daily
                });
            }
            res.send(querydata);
        }
    })
});

/****************************************** Recovered Dashboard GlobalCovidAndRecoveredPieChart component  *******************************/
// data for total covid and recovered cases for global country
app.post("/dataGlobalCovidAndRecovered", function(req, res){ 
    console.log("We are getting data");
    console.log(req.body);
    countries_summary.find({ country: req.body.selectedCountry}).sort({"date": -1}).limit(1).lean().exec(function(err, results) {
        if (err) {
            console.log('error', err);
            res.send(err);
        } else if (!results) {
            res.send(null);
        } else {
            //res.send(results);
            var querydata = new Array();
            var popdata = new Array();
            var casedata = new Array();
            
            popdata.push({ 
                name: "Population",
                value: results[0].population
            });
            
            casedata.push({
                name: "COVID Cases",
                value: results[0].confirmed
            });
            
            casedata.push({
                name: "Recovered Cases",
                value: results[0].recovered
            });
            
            let notAffected = (results[0].population - (results[0].confirmed + results[0].recovered));
            casedata.push({
                name: "Not affected",
                value: notAffected
            });
            
            querydata.push(popdata);
            querydata.push(casedata);
            res.send(querydata);
        }
    })
});

/****************************************** Globe component  *******************************/
// data for total covid cases for globe
app.get("/dataGlobe", function(req, res){ 
    console.log("We are getting data");
    const yesterday = new Date(new Date);
    yesterday.setDate(yesterday.getDate() - 1);
    var value = yesterday.toISOString().split('T')[0];
    global_and_us.find({date: new Date(value)}).lean().exec(function(err, results) {
        if (err) {
            console.log('error', err);
            res.send(err);
        } else if (!results) {
            res.send(null);
        } else {
            //res.send(results);
            var querydata = new Array();
            for (var i = 0; i < results.length; i++) {
                if(results[i].hasOwnProperty("loc")) {
                    querydata.push({
                        lng: results[i].loc.coordinates[0],
                        lat: results[i].loc.coordinates[1],
                        cases: results[i].confirmed,
                        combined_name: results[i].combined_name
                    });
                }
            }
            res.send(querydata);
        }
    })
});

/****************************************** StackedAreaChart *******************************/
app.get("/dataGlobalAreaChart", function(req, res){ 
    //{title: {$in: ['some title', 'some other title']}
    let countries = ["China", "France", "Egypt", "Germany"];
    countries_summary.find({ country: {$in: countries}, date: {
        $gte: new Date("2021-02-01"),
        $lte: new Date("2021-02-10")
    }}).select("date country population confirmed_daily -_id")
    .lean().exec(function(err, results) {
        if (err) {
            console.log('error', err);
            res.send(err);
        } else if (!results) {
            res.send(null);
        } else {
           var queryData = new Array();
           let currentDay = new Date("2021-02-01");
           let endDay = new Date("2021-02-10");
           let index = 0;
           while (currentDay < endDay) {
                var dataObject = {};
                dataObject.date = currentDay.toString().slice(3,10);
                for(var i = 0; i < results.length; i++){
                    for(var j = 0; j < countries.length; j++){
                        //console.log(results[i].population);
                        if (results[i].country === countries[j] && String(results[i].date) === String(currentDay)){
                            var area = countries[j]
                            var cases = countries[j]
                            //dataObject[area] = countries[j];
                            dataObject[cases] = results[i].confirmed_daily;
                        }
                    }
                }
                queryData.push(dataObject);
                currentDay.setDate(currentDay.getDate()+1);
                index++;
           }
            res.send(queryData);
            //res.send(results);
        }
    })
});

/****************************************** POST StackedAreaChart *******************************/
app.post("/dataGlobalAreaChart", function(req, res){ 
    let countries = req.body.selectedCountries;
    countries_summary.find({ country: {$in: countries}, date: {
        $gte: new Date(req.body.startDate.slice(0,10)),
        $lte: new Date(req.body.endDate.slice(0,10)),
    }}).select("date country population confirmed confirmed_daily -_id")
    .lean().exec(function(err, results) {
        if (err) {
            console.log('error', err);
            res.send(err);
        } else if (!results) {
            res.send(null);
        } else {
           var queryData = new Array();
           let currentDay = new Date(req.body.startDate); 
           let endDay = new Date(req.body.endDate); 
           let index = 0;
           while (currentDay < endDay) {
                var dataObject = {};
                dataObject.date = currentDay.toString().slice(3,10);
                for(var i = 0; i < results.length; i++){
                    for(var j = 0; j < countries.length; j++){
                        if (results[i].country === countries[j] && String(results[i].date) === String(currentDay)){
                            var countryCases = countries[j]
                            dataObject[countryCases] = results[i].confirmed_daily;
                            //dataObject[cases] = results[i].confirmed;
                        }
                    }
                }
                queryData.push(dataObject);
                currentDay.setDate(currentDay.getDate()+1);
                index++;
           }
            res.send(queryData);
            //res.send(results);
        }
    })
});

/****************************************** POST StackedChartGlobalRecovered *******************************/
//for covid cases in the stacked area and stacked bar chart
app.post("/dataGlobalStackedChartRecovered", function(req, res){ 
    let countries = req.body.selectedCountries;
    countries_summary.find({ country: {$in: countries}, date: {
        $gte: new Date(req.body.startDate.slice(0,10)),
        $lte: new Date(req.body.endDate.slice(0,10)),
    }}).select("date country population recovered_daily -_id")
    .lean().exec(function(err, results) {
        if (err) {
            console.log('error', err);
            res.send(err);
        } else if (!results) {
            res.send(null);
        } else {
           var queryData = new Array();
           let currentDay = new Date(req.body.startDate); 
           let endDay = new Date(req.body.endDate); 
           let index = 0;
           while (currentDay < endDay) {
                var dataObject = {};
                dataObject.date = currentDay.toString().slice(3,10);
                for(var i = 0; i < results.length; i++){
                    for(var j = 0; j < countries.length; j++){
                        if (results[i].country === countries[j] && String(results[i].date) === String(currentDay)){
                            var countryCases = countries[j]
                            dataObject[countryCases] = results[i].recovered_daily;
                            //dataObject[cases] = results[i].confirmed;
                        }
                    }
                }
                queryData.push(dataObject);
                currentDay.setDate(currentDay.getDate()+1);
                index++;
           }
            res.send(queryData);
            //res.send(results);
        }
    })
});

// Server static assets in production
if(process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("client/build"));
  
    // Serve all paths to point to the client folder's build folder index.html file
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }

app.listen(PORT, function() {
    console.log(`server started on ${PORT} filterCovid`);
});