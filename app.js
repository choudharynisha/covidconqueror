const express = require("express");
const app = express();

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
const globalAndUS = mongoose.model('globalAndUS', defaultSchema, 'global_and_us');
const global = mongoose.model('global', defaultSchema, 'global');

app.get("/", function(req, res){
    console.log("We are in the home page");
    res.send("<h1> Hello World </h1");
  
});

app.get("/covidData", function(req, res){ 
    console.log("We are getting data");
    const data = [  
        {label: "Jan. '13'", value: 53},
        {label: "Feb. '13'", value: 165},
        {label: "Mar. '13'", value: 269}, 
        {label: "Apr. '13'", value: 344},
        {label: "May  '13'", value: 376},
        {label: "Jun. '13'", value: 410},
        {label: "Jul. '13'", value: 421},   
        {label: "Aug. '13'", value: 405},
        {label: "Sep. '13'", value: 376},
        {label: "Oct. '13'", value: 359},
        {label: "Nov. '13'", value: 392},
        {label: "Dec. '13'", value: 433},
        {label: "Jan. '14'", value: 455},
        {label: "Feb. '14'", value: 478}
    ];
    /*globalAndUS.find({ country: "France" }).sort({'date': -1}).limit(15).lean().exec(function(err, results) {
        if (err) {
            console.log('error', err);
            res.send(err);
        } else if (!results) {
            res.send(null);
        } else {
            //console.log('results', results);
            //res.send(data);
            res.result;
        }
    })*/

    global.find({ country: "US" }).sort({'date': -1}).limit(10).lean().exec(function(err, results) {
        if (err) {
            console.log('error', err);
            res.send(err);
        } else if (!results) {
            res.send(null);
        } else {
            //console.log('results', results);
            var querydata = new Array();
            for (var i = 0; i < results.length; i++){
                querydata.push({
                    label: String(results[i].date).slice(3,10),
                    value: results[i].confirmed_daily
                });
            }
            res.send(querydata);
            //res.send(data);
        }
    })
  
});

app.get("/usDataForLastTenDays", function(req, res){ 
    console.log("We are getting data");

    //Get the last entry for france
    global.find({ country: "US" }).sort({'date': -1}).limit(10).lean().exec(function(err, results) {
        if (err) {
            console.log('error', err);
            res.send(err);
        } else if (!results) {
            res.send(null);
        } else {
            //console.log('results', results);
            res.send(results);
        }
    })
  
});

app.get("/franceData", function(req, res){ 
    console.log("We are getting data");
    global.find({ combined_name: "France" }).sort({'date': -1}).limit(10).lean().exec(function(err, results) {
        if (err) {
            console.log('error', err);
            res.send(err);
        } else if (!results) {
            res.send(null);
        } else {
            //console.log('results', results);
            //res.send(results);
            var querydata = new Array();
            for (var i = 0; i < results.length; i++){
                querydata.push({
                    label: String(results[i].date).slice(3,10),
                    confirmed: results[i].confirmed_daily,
                    rcovered: results[i].recovered_daily
                });
            }
            res.send(querydata);
        }
    })
    
  
});
  
app.listen(5000, function(){
    console.log("server started on 5000");
});   
