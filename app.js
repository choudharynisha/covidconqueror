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
app.get("/", function(req, res){
    console.log("We are in the home page");
    res.send("<h1> Hello World </h1");
  
});

app.get("/covidData", function(req, res){ 
    console.log("We are getting data");

    //Get the last entry for france
    globalAndUS.find({ country: "France" }).sort({'date': -1}).limit(1).lean().exec(function(err, results) {
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
  
app.listen(5000, function(){
    console.log("server started on 5000");
});   