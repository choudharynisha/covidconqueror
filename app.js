const express = require("express");
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongoose = require("mongoose");

const uri = "mongodb+srv://readonly:readonly@covid-19.hip2i.mongodb.net/covid19";

//Set up default mongoose connection
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

app.get("/", function(req, res){
    console.log("We are in the home page");
    res.send("<h1> Hello World </h1");
  
});

/****************************************** CovidDashboard GlobalChart component  *******************************/
//display global countries
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


//covid data for global countries
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
        } else if (!results) {
            res.send(null);
        } else {
            //res.send(results);
            var querydata = new Array();
            for (var i = 0; i < results.length; i++){
                querydata.push({
                    label: String(results[i]._id).slice(3,10),
                    value: results[i].value
                });
            }
            res.send(querydata);
        }
    })
});

//display all US states
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
//recovered data for global
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
//data for total covid and recovered cases for global country
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
                name: "Covid Cases",
                value: results[0].confirmed
            });
            casedata.push({
                name: "Recovered Cases",
                value: results[0].recovered
            });
            let healthyValue = 2*(results[0].confirmed + results[0].recovered);
            casedata.push({
                name: "Healthy",
                value: healthyValue
            });
            
            querydata.push(popdata);
            querydata.push(casedata);
            res.send(querydata);
        }
    })
});


/****************************************** Globe component  *******************************/
//data for total covid cases for globe
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
            for (var i = 0; i < results.length; i++){
                if(results[i].hasOwnProperty("loc")){
                    querydata.push({
                        lat: results[i].loc.coordinates[0],
                        lng: results[i].loc.coordinates[1],
                        cases: results[i].confirmed,
                        combined_name: results[i].combined_name
                    });
                }
            }
            res.send(querydata);
        }
    })
});


app.listen(5000, function(){
    console.log("server started on 5000 filterCovid");
});   
